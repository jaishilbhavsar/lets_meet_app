import { ViewPastEventPage } from './../view-past-event/view-past-event';
import { EditeventPage } from './../editevent/editevent';
import { EventDbProvider } from './../../providers/event-db/event-db';
import { ViewEventPage } from './../view-event/view-event';
import { Events_Class } from './../../shared/event_class';
import { LoginproProvider } from './../../providers/loginpro/loginpro';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';

/**
 * Generated class for the MyeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myevent',
  templateUrl: 'myevent.html',
})
export class MyeventPage {

  constructor(public edata: EventDbProvider,
    public storage: Storage,
    public data: LoginproProvider,
    public load: LoadingController,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams) {
  }
  uid: string;
  arrPast: Events_Class[] = [];
  arrUp: Events_Class[] = [];
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyeventPage');
    console.log('ionViewDidLoad MycommunityPage');
    this.storage.get('uid').then((val => {
      this.uid = val;

      let l1 = this.load.create({
        content: "Loading ..."
      });
      l1.present();
      this.data.getmyUpcomingEvents(this.uid).subscribe(
        (dt: any[]) => {
          this.arrUp = dt;
        },
        function (e) {
          alert(e)
        },
        function () {
          l1.dismiss();
        }
      );
    }));

    this.storage.get('uid').then((val => {
      this.uid = val;

      let l1 = this.load.create({
        content: "Loading ..."
      });
      l1.present();
      this.data.getmyPastEvents(this.uid).subscribe(
        (dt: any[]) => {
          this.arrPast = dt;
        },
        function (e) {
          alert(e)
        },
        function () {
          l1.dismiss();
        }
      );

    }));
  }
  onEdit(id) {
    //this.navCtrl.push(EditeventPage, { e_id: id });
    let modal = this.modalCtrl.create(EditeventPage, { e_id: id });
    modal.onDidDismiss(item => {
      this.ionViewDidLoad();
    });
    modal.present();
  }
  showUpevent(id) {
    this.navCtrl.push(ViewEventPage, { e_id: id });
  }

  onDeleteUpcoming(item) {
    this.edata.deleteEvent(item).subscribe(
      (data: any) => {
        this.ionViewDidLoad();
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );

  }

  showPastevent(id) {
    this.navCtrl.push(ViewPastEventPage, { e_id: id });
  }
  onDeletePast(item) {
    this.edata.deleteEvent(item).subscribe(
      (data: any) => {
        this.ionViewDidLoad();
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }
}
