import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, DateTime, AlertController } from 'ionic-angular';
import { CommunityMemberDbProvider } from '../../providers/community-member-db/community-member-db';
import { CommunityCommMemberProvider } from '../../providers/community-comm-member/community-comm-member';
import { ComminityDbTsProvider } from '../../providers/community-db/community-db';
import { Storage } from '@ionic/storage';
import { Community_Class } from '../settings/community_class';
import { Community_Post_User_Class } from '../../shared/community_post_user_class';
import { ViewPostPage } from "../../pages/view-post/view-post";
import { Comm_member_class } from '../../shared/comm_member_class';
import { Community_comm_member } from "../../shared/community_comm_member_class";

/**
 * Generated class for the ViewCommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-community',
  templateUrl: 'view-community.html',
})
export class ViewCommunityPage {

  join_button: boolean = true;
  leave_button: boolean = false;

  Community: string = "posts";
  arr: Community_Class[] = [];
  public comm_name: string;
  public comm_des: string;
  public comm_pic: string;
  public comm_date: DateTime;
  public comm_rating: number;
  public created_by: string;
  public comm_id: number;

  comm_post_user: Community_Post_User_Class[] = [];

  arrMember: Comm_member_class[] = [];
  comm_mem: Comm_member_class[] = [];
  comm_member_count: number = null;
  cnt_member: number;
  user_id: string = "";
  members: any[] = [];

  comm_comm_member: Community_comm_member[] = [];
  mem_length:number;

  constructor(public commu_member: CommunityMemberDbProvider,
    public storage: Storage,
    public toast: ToastController,
    public alerCtrl: AlertController,
    public _comm_mem_data: CommunityCommMemberProvider,
    public _data: ComminityDbTsProvider,
    public load: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewCommunityPage');

    this.comm_id = this.navParams.get('c_id');
    let l1 = this.load.create({
      content: "Loading..."
    });
    l1.present();
    this._data.getCommunityById(this.comm_id).subscribe(

      (data: any) => {
        this.arr = data;
        this.comm_name = this.arr[0].comm_name;
        this.comm_des = this.arr[0].comm_des;
        this.comm_pic = this.arr[0].comm_pic;
        this.comm_date = this.arr[0].comm_date;
        this.comm_rating = this.arr[0].comm_rating;
        this.created_by = this.arr[0].created_by;
      },
      function (err) {
        alert(err);
      },
      function () {
        l1.dismiss();
      }
    );

    let l2 = this.load.create({
      content: "Loading..."
    });
    l2.present();
    this._data.getPostByCommunityId(this.comm_id).subscribe(
      (data: Community_Post_User_Class[]) => {
        this.comm_post_user = data;
      },
      function (e) {
        alert(e);
      },
      function () {
        l2.dismiss();
      }
    );

    this._comm_mem_data.getAllMembersByCommunityId(this.comm_id).subscribe(
      (data: Comm_member_class[]) => {
        this.comm_mem = data;
        this.comm_member_count = this.comm_mem.length;
      }
    );


    this._comm_mem_data.getAllMembers(this.comm_id).subscribe(
      (data: any) => {
        this.comm_comm_member = data;
        //this.mem_length=this.comm_comm_member.length;
        
      },
      function (e) {
        alert(e);
      },
      function () {

      }
    );

    this.storage.get('uid').then((val) => {
      this.user_id = val;
      this._data.checkCommMember(this.user_id, this.comm_id).subscribe(
        (data: any) => {
          if (data == "") {
            this.join_button = true;
            this.leave_button = false;
          }
          else {
            this.join_button = false;
            this.leave_button = true;
            this.arrMember = data;
            console.log(this.arrMember);
          }
        }
      );
    });


    this.commu_member.memberCount(this.comm_id).subscribe(

      (data) => {
        this.cnt_member = data[0].count;
      },
      function (err) {
        alert(err);
      },
      function () {

      }

    );
  }



  onJoin() {

    this.storage.get('uid').then((val) => {
      this.user_id = val;
      //alert(this.user_id);
      let l1 = this.load.create({
        content: 'Joining ...'
      });
      l1.present();
      let t1 = this.toast.create({
        duration: 3000,
        message: "Joined ..."
      })
      this.commu_member.addCommunityMember(new Comm_member_class(null, this.user_id, this.comm_id)).subscribe(
        (data: any) => {
          t1.present();
          this.join_button = false;
          this.leave_button = true;
        },
        function (e) {
          alert(e);
        },
        function () {
          l1.dismiss();
        }
      );
    });

  }

  /*onClickJoin() {
    this.storage.get('uid').then((val) => {
      this.user_id = val;
      let l1 = this.load.create({
        content: 'Joining ...'
      });
      l1.present();
      this._data.checkCommMember(this.user_id, this.comm_id).subscribe(
        (data: any) => {
          if (data == "") {
            this.onJoin();
          }
          else {
            let t1 = this.toast.create({
              duration: 3000,
              message: "You're already a Member ..."
            });
            t1.present();
            this.arrMember = data;
            console.log(this.arrMember);
          }
        },
        function (e) {
          alert(e);
        },
        function () {
          l1.dismiss();
        }
      );
    });
  }*/

  onRemove() {

    let l1 = this.load.create({
      content: "Loading..."
    });
    l1.present();
    console.log(this.arrMember[0].join_id);
    this.commu_member.deleteMember(this.arrMember[0].join_id).subscribe(
      (data: any) => {
        //alert("deleted");
        this.join_button = true;
        this.leave_button = false;
      },
      function (err) {
        alert(err);
      },
      function () {
        l1.dismiss();
      }

    );

  }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Leave Community?',
      message: "Are you sure you don't want to be a part of this Community?",
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.onRemove();
          }
        }
      ]
    });
    confirm.present()
  }


  onPostClick(item: Community_Post_User_Class) {
    this.navCtrl.push(ViewPostPage, { post_id: item.post_id });
  }



}
