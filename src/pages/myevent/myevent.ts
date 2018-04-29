import { EditeventPage } from './../editevent/editevent';
import { EventDbProvider } from './../../providers/event-db/event-db';
import { ViewEventPage } from './../view-event/view-event';
import { Events_Class } from './../../shared/event_class';
import { LoginproProvider } from './../../providers/loginpro/loginpro';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

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

  constructor(public edata:EventDbProvider,public storage:Storage,public data:LoginproProvider,public load:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }
uid:string;
arr:Events_Class[]=[];
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyeventPage');
    console.log('ionViewDidLoad MycommunityPage');
    this.storage.get('uid').then((val=>{
      this.uid=val;

      let l1 = this.load.create({
        content: "Loading ..."
      });
      l1.present();
      this.data.getmyevent(this.uid).subscribe(
        (dt:any[])=>{
          this.arr=dt;
        },
        function(e)
        {
          alert(e)
        },
        function()
        {
          l1.dismiss();
        }
      );
    }));
  }
onEdit(id)
{
  this.navCtrl.push(EditeventPage,{e_id:id});
}
showevent(id)
{
  this.navCtrl.push(ViewEventPage,{e_id:id});
}
onDelete(id)
{
  this.edata.deleteEvent(this.arr[0]);
  this.ionViewDidLoad();
}
}
