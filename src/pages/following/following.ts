import { ViewuserPage } from './../viewuser/viewuser';
import { follow_user_class } from './../../shared/follow_user_class';
import { LoginproProvider } from './../../providers/loginpro/loginpro';
import { follower_class } from './../../shared/follower_class';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
//import { viewuserPage } from "../viewuser/viewuser";
/**
 * Generated class for the FollowingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-following',
  templateUrl: 'following.html',
})
export class FollowingPage {

  constructor(public data:LoginproProvider,public storage:Storage,public load:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }
  //f1:follower_class[]=[];
  follow:follower_class[]=[];
  uid:string='';
  arr:follow_user_class[]=[]
  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad FollowingPage');
    this.storage.get('uid').then((val)=>{
      this.uid=val;
      this.uid=this.navParams.get('uid');
            let l1 = this.load.create({
        content: "Loading ..."
      });
      l1.present();
      this.data.getFollowingwhom(this.uid).subscribe(
        (data:any)=>{this.arr=data;},
        function (e) {
          alert(e);
        },
        function () {
          l1.dismiss();
        }  
    )
    });
  }
  showuser(id)
  {
    this.storage.set('viewid', id);
    this.navCtrl.push(ViewuserPage);
  }
}
