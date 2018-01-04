import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { EventDbProvider } from "../../providers/event-db/event-db";
import { EventCommunityDbProvider } from "../../providers/event-community-db/event-community-db";
import { Events_Class } from "../../shared/event_class";
import { Event_Community_Class } from "../../shared/event_community_class";
import { RSVP_Class } from "../../shared/rsvp_class";
import { RsvpDbProvider } from "../../providers/rsvp-db/rsvp-db";
import { Storage } from "@ionic/storage";
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { ViewCommunityPage } from '../view-community/view-community';

/**
 * Generated class for the ViewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-event',
  templateUrl: 'view-event.html',
})
export class ViewEventPage {

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

  comm_id: number;
  comm_name: string = "";
  comm_pic: string = "";

  rsvp_id: number[] = [];
  arrRsvp: RSVP_Class;
  cnt_rsvp: number;

  join_button: boolean;
  going_button: boolean;
  constructor(public storage: Storage,
    public load: LoadingController,
    public tos: ToastController,
    public alerCtrl: AlertController,
    public _dataEvent: EventDbProvider,
    public _dataRSVP: RsvpDbProvider,
    public _dataEventComm: EventCommunityDbProvider,
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
            alert("baki");
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
      (data) => {
        this.cnt_rsvp = data[0].count;
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
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
}

