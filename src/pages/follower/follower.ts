import { LoginproProvider } from './../../providers/loginpro/loginpro';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { follower_class } from '../../shared/follower_class';

/**
 * Generated class for the FollowerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-follower',
  templateUrl: 'follower.html',
})
export class FollowerPage {

  constructor(public storage: Storage, public load: LoadingController, public data: LoginproProvider, public navCtrl: NavController, public navParams: NavParams) {
  }
  follow: follower_class[] = [];
  uid: string = '';
  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowerPage');
    this.storage.get('uid').then((val) => {
      this.uid = val;
      let l1 = this.load.create({
        content: "Loading ..."
      });
      l1.present();
      this.data.getFollowing(this.uid).subscribe(
        (fl: any) => {
          if (fl != "") {
            this.follow = fl;
          }
        },
        function (e) {
          alert(e);
        },
        function () {
          l1.dismiss();
        }
      );
    }
    );
  }
}