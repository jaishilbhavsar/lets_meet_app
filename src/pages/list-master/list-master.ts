import { Component } from '@angular/core';
import { LoadingController, ToastController, IonicPage, ModalController, NavController } from 'ionic-angular';
import { Storage } from "@ionic/storage";

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

import { Events_Class } from "../../shared/event_class";
import { EventDbProvider } from "../../providers/event-db/event-db";
import { ViewEventPage } from "../view-event/view-event";
import { EventCommunityDbProvider } from "../../providers/event-community-db/event-community-db";
import { Event_Comm_Rsvp } from "../../shared/event_community_rsvp_class";
import { RSVP_Class } from '../../shared/rsvp_class';
import { RsvpDbProvider } from '../../providers/rsvp-db/rsvp-db';
import { Event_Community_Class } from "../../shared/event_community_class";

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  event: string = "upcEvents";
  currentItems: Item[];
  u_id: string = "";
  arr: Event_Community_Class[] = [];
  arr1: Event_Community_Class[] = [];
  arrRsvp: RSVP_Class;
  //arr1: Events[] = [];
  //join_button: boolean[] = [true];
  //going_button: boolean[] = [false];
  user_id: string = "";
  flag: boolean = false;
  txtsearch: string = '';

  reg: Event_Comm_Rsvp[] = [];

  constructor(public storage: Storage,
    public tos: ToastController,
    public _data: EventDbProvider,
    public _data1: EventCommunityDbProvider,
    public _dataRSVP: RsvpDbProvider,
    public load: LoadingController,
    public navCtrl: NavController,
    public items: Items,
    public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    let l1 = this.load.create({
      content: 'Loading Events'
    });
    l1.present();
    this.storage.get('uid').then((val) => {
      this.u_id = val;
      //this._data1.getAllEventsAndCommunities().subscribe(
      this._data.getNotRegisteredEventsofUser(this.u_id).subscribe(
        (d: Event_Community_Class[]) => {
          this.arr = d;
          this.arr1 = d;
          console.log(this.arr);
          console.log(this.arr[0].event_pic);
        },
        function (e) {
          alert(e);
        },
        function () {
          l1.dismiss();
        }
      );
    });
    let l2 = this.load.create({
      content: 'Registered Events'
    });
    l2.present();
    this.storage.get('uid').then((val) => {
      this.u_id = val;
      this._data.getRegisteredEventsofUser(this.u_id).subscribe(
        (data: Event_Comm_Rsvp[]) => {
          this.reg = data;
          console.log(this.reg);
        },
        function (err) {
          alert(err);
        },
        function () {
          l2.dismiss();
        }
      );
    });
  }

  ionViewDidEnter() {
    this.ionViewDidLoad();
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      this.ionViewDidLoad();
    })
    addModal.present();
    //this.navCtrl.push(CreateEventPage);
  }

  onClick(event_id: Events_Class) {
    this.navCtrl.push(ViewEventPage, { e_id: event_id });
    //this.navCtrl.push(ViewEventPage);
    // this.navCtrl.push('view-past-event', { e_id: event_id });
    // this.storage.set('evn_id', event_id);
  }

  onRSVP(event_id) {
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
      this._dataRSVP.addRSVP(new RSVP_Class(null, this.user_id, event_id)).subscribe(
        (data: any) => {
          this.ionViewDidLoad();

          //this.join_button = false;
          //this.going_button = true;
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

  onSearchIcon() {
    if (this.flag == true) {
      this.flag = false;
    }
    else {
      this.flag = true;
    }
  }

  getItems(ev) {
    this.arr = this.arr1;
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.arr = this.arr.filter((x) =>
        x.event_name.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1);
    }
  }

  onClickRSVP(evn_id) {
    this.storage.get('uid').then((val) => {
      this.user_id = val;
      let l1 = this.load.create({
        content: 'Joining ...'
      });
      l1.present();
      this._dataRSVP.checkRSVPOfEvent(this.u_id, evn_id).subscribe(
        (data) => {
          if (data == "") {
            this.onRSVP(evn_id);
            //console.log("hello");
            //console.log(data);
          }
          else {
            let t1 = this.tos.create({
              duration: 3000,
              message: "You're already Going ...",
              position: 'top'
            });
            t1.present();
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


  // doInfinite(infiniteScroll) {
  //   console.log('Begin async operation');

  //   setTimeout(() => {
  //     for (let i = 0; i < 30; i++) {
  //       this.items.push(this.items.length);
  //     }

  //     console.log('Async operation has ended');
  //     infiniteScroll.complete();
  //   }, 500);
  // }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}

  /**
   * Delete an item from the list of items.
   */
  /*deleteItem(item) {
    this.items.delete(item);
  }*/

  /**
   * Navigate to the detail page for this item.
   */
  /* openItem(item: Item) {
     this.navCtrl.push('ItemDetailPage', {
       item: item
     });
   }*/

   /*
   onRemoveRSVP(event_id) {
    this.storage.get('uid').then((val) => {
      this.user_id = val;
      let l1 = this.load.create({
        content: 'Removing ...'
      });
      l1.present();
      let t1 = this.tos.create({
        duration: 3000,
        message: "Removed ..."
      })
      this._dataRSVP.deleteRSVP(new RSVP_Class(null, this.user_id, event_id)).subscribe(
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

   */

