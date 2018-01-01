import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
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
  constructor(public storage: Storage,
    public load: LoadingController,
    public tos: ToastController,
    public _dataEvent: EventDbProvider,
    public _dataRSVP: RsvpDbProvider,
    public _dataEventComm: EventCommunityDbProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
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
  }
  onRSVP() {
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
        (data: any) => {
          t1.present();
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

  onView(){
    this.navCtrl.push(ViewCommunityPage,{c_id:this.comm_id});
}
}

