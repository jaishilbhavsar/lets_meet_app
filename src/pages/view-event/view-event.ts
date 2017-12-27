import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventDbProvider } from "../../providers/event-db/event-db";
import { Events_Class } from "../../shared/event_class";
import { Storage } from "@ionic/storage";

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
  e_id: number;
  event_loc: string = "";
  constructor(public storage: Storage,
    public _data: EventDbProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewEventPage');
    //this.e_id = this.navParams.get('e_id');
    this.storage.get('evn_id').then((val) => {
      this.e_id = val;
      console.log(this.e_id);
      this._data.getEventById(this.e_id).subscribe(
        (d: Events_Class[]) => {
          this.arr = d;
          this.event_loc = this.arr[0].event_loc;
        },
        function (e) {
          alert(e);
        },
        function () {

        }
      );
    });

  }
}

