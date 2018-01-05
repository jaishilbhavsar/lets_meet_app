import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Community_Class } from "../settings/community_class";
import { ComminityDbTsProvider } from "../../providers/community-db/community-db";
import { Community_Post_User_Class } from "../../shared/community_post_user_class";
import { ViewPostPage } from '../view-post/view-post';
import { Comm_member_class } from "../../shared/comm_member_class";
import { CommunityMemberDbProvider } from "../../providers/community-member-db/community-member-db";
import { Community_comm_member } from "../../shared/community_comm_member_class";
import { CommunityCommMemberProvider } from "../../providers/community-comm-member/community-comm-member";
import { Storage } from '@ionic/storage';
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

  join_Comm: boolean;
  remove_Comm: boolean;

  user_id: string = "";
  arr: Community_comm_member[] = [];
  comm_mem: Community_comm_member[] = [];
  comm_id: number;
  member:Comm_member_class[]=[];
  comm_post_user: Community_Post_User_Class[] = [];
  

  constructor(public commu_member: CommunityMemberDbProvider, public storage: Storage,
    public toast: ToastController, public _comm_mem_data: CommunityCommMemberProvider, public _data: ComminityDbTsProvider, public load: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewCommunityPage');
    this.comm_id = this.navParams.get('c_id');
    alert(this.comm_id);
    let l1 = this.load.create({
      content: "Loading..."
    });
    l1.present();

    this._comm_mem_data.getAllMembersByCommunityId(this.comm_id).subscribe(
      (data: any) => {
        this.comm_mem = data;
        console.log(this.comm_mem);
      },
      function (err) {
        alert(err);
      },
      function () {
        l1.dismiss();
      }

    );

    /*this._data.getCommunityById(this.comm_id).subscribe(

      (data: any) => {
        this.arr = data;
      },
      function (err) {
        alert(err);
      },
      function () {
        l1.dismiss();
      }

    );*/

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
    )
  }

  onPostClick(item: Community_Post_User_Class) {
    this.navCtrl.push(ViewPostPage, { post_id: item.post_id });
  }

  onJoin(comm_id) {

    alert(comm_id);
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
      this.commu_member.addCommunityMember(new Comm_member_class(null, this.user_id, comm_id)).subscribe(
        (data: any) => {
          t1.present();
         //this.join_Comm=true;
         //this.remove_Comm=false;
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

  onRemove(join_id){

    alert(join_id);
    let l1 = this.load.create({
      content: "Loading..."
    });
    l1.present();

    this.commu_member.deleteMember(join_id).subscribe(
      (data: any) => {
        alert("deleted");
       
      },
      function (err) {
        alert(err);
      },
      function () {
        l1.dismiss();
      }

    );
3

  }

}
