import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

import { EventDbProvider } from "../../providers/event-db/event-db";
import { EventCommunityDbProvider } from "../../providers/event-community-db/event-community-db";
import { Events_Class } from "../../shared/event_class";
import { Event_Community_Class } from "../../shared/event_community_class";
import { RSVP_Class } from "../../shared/rsvp_class";
import { RsvpDbProvider } from "../../providers/rsvp-db/rsvp-db";
import { Storage } from "@ionic/storage";
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { ViewCommunityPage } from '../view-community/view-community';
import { Event_RSVP_User_class } from "../../shared/event_rsvp_user_class";
import { FeedbackDbProvider } from "../../providers/feedback-db/feedback-db";
import { Feedback_Event_User_Class } from "../../shared/feedback_event_user_class";
import { user_class } from '../login/user_class';
import { LoginproProvider } from '../../providers/loginpro/loginpro';
import { Feedback_Class } from "../../shared/feedback_class";


/**
 * Generated class for the ViewPastEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'view-past-event'
})
@Component({
  selector: 'page-view-past-event',
  templateUrl: 'view-past-event.html',
})
export class ViewPastEventPage {

  viewEvent: string = "event_detail";
  arr: Events_Class[];
  event_community: Event_Community_Class[];
  e_id: number;
  event_name: string = "";
  event_des: string = "";
  event_s_time: DateTime = null;
  event_e_time: DateTime = null;
  event_date: DateTime = null;
  event_loc: string = "";
  created_by: string = "";
  event_pic: string = "";
  user_id: string = "";
  e_pic: string = "";

  comm_id: number;
  comm_name: string = "";
  comm_pic: string = "";

  rsvp_id: number[] = [];
  arrRsvp: RSVP_Class;

  join_button: boolean;
  going_button: boolean;

  event_rsvp_user: Event_RSVP_User_class[] = [];
  cnt_rsvp: number;

  feedback_event_user: Feedback_Event_User_Class[] = [];

  arrUser: user_class[] = [];
  user_pic: string;
  user_name: string;

  flag1: boolean = true;

  feed_des: string = "";

  constructor(public storage: Storage,
    public load: LoadingController,
    public tos: ToastController,
    private socialSharing: SocialSharing,
    public alerCtrl: AlertController,
    public _dataEvent: EventDbProvider,
    public _dataRSVP: RsvpDbProvider,
    public _dataEventComm: EventCommunityDbProvider,
    public _dataFeedback: FeedbackDbProvider,
    public _dataUser: LoginproProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewEventPage');
    this.e_id = this.navParams.get('e_id');
    this._dataEvent.getEventById(this.e_id).subscribe(
      (d: Events_Class[]) => {
        this.arr = d;
        this.event_name = this.arr[0].event_name;
        this.event_des = this.arr[0].event_des;
        this.event_pic = this.arr[0].event_pic;
        this.event_s_time = this.arr[0].event_s_time;
        this.event_e_time = this.arr[0].event_e_time;
        this.event_date = this.arr[0].event_date;
        this.event_loc = this.arr[0].event_loc;
        this.created_by = this.arr[0].fk_user_id;
      },
      function (e) {
        alert(e);
      },
      function () {

      }
    );

    this._dataEventComm.getCommunityByEventId(this.e_id).subscribe(
      (data: Event_Community_Class[]) => {
        this.event_community = data;
        this.comm_id = this.event_community[0].comm_id;
        this.comm_name = this.event_community[0].comm_name;
        this.comm_pic = this.event_community[0].comm_pic;
      },
      function (e) {
        alert(e)
      },
      function () {

      }
    )

    this.storage.get('uid').then((val) => {
      this.user_id = val;
      this._dataRSVP.checkRSVPOfEvent(this.user_id, this.e_id).subscribe(
        (data) => {
          if (data == "") {
            //alert("baki");
            this.join_button = true;
            this.going_button = false;
          }
          else {
            this.join_button = false;
            this.going_button = true;
          }
        },
        function (e) {
          alert(e);
        },
        function () {
        }
      );
    });

    this._dataRSVP.countRSVP(this.e_id).subscribe(
      (data: Event_RSVP_User_class[]) => {
        //this.cnt_rsvp = data[0].count;
        this.event_rsvp_user = data;
        this.cnt_rsvp = this.event_rsvp_user.length;
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );

    //alert(this.e_id);
    this._dataFeedback.getFeedbacksByEvent(this.e_id).subscribe(
      (data: Feedback_Event_User_Class[]) => {
        this.feedback_event_user = data;
        //console.log(this.feedback_event_user);
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
  changeFlag() {
    if (this.flag1 == true) {
      this.flag1 = false;
    }
    else {
      this.flag1 = true;
    }
  }
  onRSVP() {
    console.log(this.user_id);
    console.log(this.e_id);
    this.storage.get('uid').then((val) => {
      this.user_id = val;
      let l1 = this.load.create({
        content: 'Joining ...'
      });
      l1.present();
      let t1 = this.tos.create({
        duration: 3000,
        message: "Joined ..."
      })
      this._dataRSVP.addRSVP(new RSVP_Class(null, this.user_id, this.e_id)).subscribe(
        (data: RSVP_Class) => {
          t1.present();
          this.join_button = false;
          this.going_button = true;
          //his.arrRsvp = data;
          //this.rsvp_id = this.arrRsvp.RSVP_id;
          //alert(this.rsvp_id);
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

  onClickRSVP() {
    this.storage.get('uid').then((val) => {
      this.user_id = val;
      let l1 = this.load.create({
        content: 'Joining ...'
      });
      l1.present();
      this._dataRSVP.checkRSVPOfEvent(this.user_id, this.e_id).subscribe(
        (data: any) => {
          if (data == "") {
            this.onRSVP();
          }
          else {
            let t1 = this.tos.create({
              duration: 3000,
              message: "You're Going ..."
            });
            t1.present();
            this.arrRsvp = data;
            // this.rsvp_id = this.arrRsvp.RSVP_id;
            //alert(this.rsvp_id);
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
  }

  onRemoveRSVP() {

    this.storage.get('uid').then((val) => {
      this.user_id = val;
      let l1 = this.load.create({
        content: 'Removing ...'
      });
      l1.present();
      let t1 = this.tos.create({
        duration: 3000,
        message: "Removed ..."
      });
      this._dataRSVP.checkRSVPOfEvent(this.user_id, this.e_id).subscribe(
        (data: any) => {
          if (data == "") {
            alert("nathi");
          }
          else {
            this.arrRsvp = data;
            //console.log(data);
            //console.log(this.arrRsvp[0].RSVP_id);
            this._dataRSVP.deleteRSVP(this.arrRsvp[0].RSVP_id).subscribe(
              (data: RSVP_Class) => {
                //alert("thyu");
                this.join_button = true;
                this.going_button = false;
              },
              function (err) {
                alert(err);
              },
              function () {

              }
            );
          }
        },
        function (e) {
          alert(e);
        },
        function () {
          l1.dismiss();
          t1.present();
        }
      );
    });
  }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Not going?',
      message: "Are you sure you don't want to attend this event?",
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
            this.onRemoveRSVP();
          }
        }
      ]
    });
    confirm.present()
  }

  onView() {
    this.navCtrl.push(ViewCommunityPage, { c_id: this.comm_id });
  }

  newFeedback() {
    if (this.feed_des.length > 0) {
      let l1 = this.load.create({
        content: 'Adding Feedback ...'
      });
      l1.present();
      this.storage.get('uid').then((val) => {
        this.user_id = val;
        this._dataFeedback.addFeedback(new Feedback_Class(null, this.feed_des, this.e_id, this.user_id, null)).subscribe(
          (d: Feedback_Class) => {
            this.flag1 = true;
            this.feed_des = "";
            this.ionViewDidLoad();
          },
          function (err) {
            alert(err);
          },
          function () {
            l1.dismiss();
          }
        );
      });
    }
    else {
      this.flag1 = true;
    }
  }

  deleteFeedback(id) {
    let t1 = this.tos.create({
      duration: 3000,
      message: "Deleted ..."
    });
    this._dataFeedback.deleteFeedback(id).subscribe(
      (d: any) => {
        this.ionViewDidLoad();
        t1.present();
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }

  onSharing() {
    this.e_pic = "https://letsmeetbackend.herokuapp.com/public/images/events/" + this.event_pic;
    this.socialSharing.share(this.event_des, this.event_name).
      catch((err) => alert(err));
  }

}
