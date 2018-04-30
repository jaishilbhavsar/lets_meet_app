import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, DateTime, AlertController, ModalController } from 'ionic-angular';
import { CommunityMemberDbProvider } from '../../providers/community-member-db/community-member-db';
import { CommunityCommMemberProvider } from '../../providers/community-comm-member/community-comm-member';
import { ComminityDbTsProvider } from '../../providers/community-db/community-db';
import { Storage } from '@ionic/storage';
//import { Community_Class } from '../settings/community_class';
import { Community_Post_User_Class } from '../../shared/community_post_user_class';
import { ViewPostPage } from "../../pages/view-post/view-post";
import { Comm_member_class } from '../../shared/comm_member_class';
import { Community_comm_member } from "../../shared/community_comm_member_class";
import { LoginproProvider } from "../../providers/loginpro/loginpro";
import { user_class } from "../login/user_class";
import { CreatePostPage } from "../create-post/create-post";
//import { Ionic2RatingModule } from 'ionic2-rating';
import { PostDbProvider } from "../../providers/post-db/post-db";
import { Post_Class } from '../../shared/post_class';
import { EditPostPage } from "../../pages/edit-post/edit-post";
import { Community_User_Class } from "../../shared/community_user_class";
//import { Community_User_Class } from "../../shared/community_user_class";
import { Rate_Class } from "../../shared/rating_tbl_class";
import { RatingDbProvider } from "../../providers/rating-db/rating-db";
import { Event_Community_Class } from "../../shared/event_community_class";
import { EventCommunityDbProvider } from "../../providers/event-community-db/event-community-db";
import { ViewPastEventPage } from "../view-past-event/view-past-event";
import { ViewEventPage } from "../view-event/view-event";
import { ViewuserPage } from "../viewuser/viewuser";
import { Community_Class, update_rate_only } from '../settings/community_class';
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
  arr: Community_User_Class[] = [];
  public comm_name: string;
  public comm_des: string;
  public comm_pic: string;
  public comm_date: DateTime;
  public comm_rating: number;
  public created_by: string;
  public comm_id: number;

  check_event:string="upComing";
  comm_post_user: Community_Post_User_Class[] = [];

  arrMember: Comm_member_class[] = [];
  comm_mem: Comm_member_class[] = [];
  comm_member_count: number = null;
  cnt_member: number;
  user_id: string = "";
  members: any[] = [];

  comm_comm_member: Community_comm_member[] = [];
  mem_length: number;

  arrUser: user_class[] = [];
  user_pic: string;
  user_name: string;
  comm_past_event: Event_Community_Class[] = [];
  comm_upcoming_event: Event_Community_Class[] = [];

  public rate: number;
  public review: number;
  public avg: number;

  public s1: number = 0;
  public s2: number = 0;
  public s3: number = 0;
  public s4: number = 0;
  public s5: number = 0;
  public sum: number = 0;

  public w: number = 0;
  public w2: number = 0;
  public w3: number = 0;
  public w4: number = 0;
  public w5: number = 0;



  constructor(public dataPost: PostDbProvider,
    public commu_member: CommunityMemberDbProvider,
    public storage: Storage,
    public toast: ToastController,
    public load: LoadingController,
    public alerCtrl: AlertController,
    public modalCtrl: ModalController,
    public modalCtrl1: ModalController,
    public _comm_mem_data: CommunityCommMemberProvider,
    public _data: ComminityDbTsProvider,
    public _dataUser: LoginproProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public _rate: RatingDbProvider,
    public _commEvent: EventCommunityDbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewCommunityPage');

    this.comm_id = this.navParams.get('c_id');
    this.storage.get('uid').then((val) => {
      this.user_id = val;

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
         // alert(this.comm_rating);
          if (this.user_id == this.arr[0].created_by) {
            this.comm_rating = this.arr[0].comm_rating;
          }
          this.created_by = this.arr[0].user_name;
        },
        function (err) {
          alert(err);
        },
        function () {
          l1.dismiss();
        }
      );


      this._rate.getRateCount(1, this.comm_id).subscribe(

        (data: any) => {

          this.s1 = data[0]['COUNT(rate_value)'];
          this.sum += this.s1;
        },
        function (err) {
          alert(err);
        },
        function () {

        }

      );

      this._rate.getAvgRating(this.comm_id).subscribe(
        (data: any) => {
          this.avg = data[0]['AVG(rate_value)'];
        },
        function (err) {
          alert(err);
        },
        function () {

        }
      );


      this._rate.getCountRating(this.comm_id).subscribe(
        (data: any) => {
          this.rate = data[0]['COUNT(rate_value)'];
        },
        function (err) {
          alert(err);
        },
        function () {

        }
      );



      this._rate.getRateCount(2, this.comm_id).subscribe(

        (data: any) => {

          this.s2 = data[0]['COUNT(rate_value)'];
          this.sum += this.s2;
        },
        function (err) {
          alert(err);
        },
        function () {

        }

      );

      this._rate.getRateCount(3, this.comm_id).subscribe(

        (data: any) => {

          this.s3 = data[0]['COUNT(rate_value)'];
          this.sum += this.s3;
        },
        function (err) {
          alert(err);
        },
        function () {

        }

      );

      this._rate.getRateCount(4, this.comm_id).subscribe(

        (data: any) => {

          this.s4 = data[0]['COUNT(rate_value)'];
          this.sum += this.s4;
        },
        function (err) {
          alert(err);
        },
        function () {

        }

      );

      this._rate.getRateCount(5, this.comm_id).subscribe(

        (data: any) => {

          this.s5 = data[0]['COUNT(rate_value)'];
          this.sum += this.s5;
          this.w = (this.s1 / this.sum);
          this.w2 = (this.s2 / this.sum);
          this.w3 = (this.s3 / this.sum);
          this.w4 = (this.s4 / this.sum);
          this.w5 = (this.s5 / this.sum);
        },
        function (err) {
          alert(err);
        },
        function () {

        }

      );

      this._commEvent.getCommunityByPastEvent(this.comm_id).subscribe(
        (data: any) => {
          this.comm_past_event = data;
        },
        function (e) {
          alert(e);
        },
        function () {

        }

      );

      this._commEvent.getCommunityByUpcomingEvent(this.comm_id).subscribe(

        (data: any) => {
          this.comm_upcoming_event = data;
        },
        function (e) {
          alert(e);
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

    this.storage.get('uid').then(
      (val) => {
        this.user_id = val;
        this._dataUser.getUser(this.user_id).subscribe(
          (data: user_class[]) => {
            this.arrUser = data;
            this.user_pic = this.arrUser[0].user_pic;
            this.user_name = this.arrUser[0].user_name;
          },
          function (err) {
            alert(err);
          },
          function () {

          }
        );
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
          this.ionViewDidLoad();

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
        this.ionViewDidLoad();
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

  onAddPost() {
    let addModal = this.modalCtrl.create(CreatePostPage, { c_id: this.comm_id });
    addModal.onDidDismiss(item => {
      this.ionViewDidLoad();
    })
    addModal.present();
  }

  deletePost(item: Post_Class) {
    let confirm1 = this.alerCtrl.create({
      title: 'Delete Post?',
      message: 'Are you sure you want to delete this Post?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('No Clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes Clicked');
            this.removePost(item);
          }
        }
      ]
    });
    confirm1.present();
  }

  removePost(item: Post_Class) {
    this.dataPost.deletePost(item).subscribe(
      (data) => {
        const toast = this.toast.create({
          message: 'Your post has been successfully deleted.',
          showCloseButton: true,
          closeButtonText: 'Ok'
        });
        this.ionViewDidLoad();
        toast.present();
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    )
  }

  editPost(id) {
    let addModal1 = this.modalCtrl.create(EditPostPage, { p_id: id });
    addModal1.onDidDismiss(item => {
      this.ionViewDidLoad();
    })
    addModal1.present();
  }


  onModelChange(rt) {

    let t1 = this.toast.create({
      duration: 3000,
      message: "Done..."
    })
    this.comm_rating = rt;
    //alert(this.comm_rating);
    //alert(this.comm_id);
    //alert(this.user_id);
    this._rate.addRating(new Rate_Class(null, this.comm_rating, this.comm_id, this.user_id)).subscribe(

      (data: any) => {
        t1.present();
      },
      function (e) {
        alert(e);
      }

    );

    let t2=this.toast.create({
      duration:3000,
      message:"successfully rated..."
    });
    if(this.comm_id==this.arr[0].comm_id && this.user_id==this.arr[0].created_by)
    {
      this._data.editRatingOnly(new update_rate_only(this.comm_id,this.comm_rating)).subscribe(
        (data2:any)=>{
          t2.present();
        }
      );
    }
  }

  /* showuser(id) {
    this.storage.set('viewid', id);
    this.navCtrl.push(ViewuserPage);
  } */

  onPastEvent(event_id) {
    this.navCtrl.push(ViewPastEventPage, { e_id: event_id });
  }

  onUpcomingEvent(event_id) {
    this.navCtrl.push(ViewEventPage, { e_id: event_id });
  }

  /*addNewMember() {
    let modalMember = this.modalCtrl1.create(AddMemberPage, { c_id: this.comm_id });
    modalMember.onDidDismiss(item => {
      this.ionViewDidLoad();
    })
    modalMember.present();
}*/
}
