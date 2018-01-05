import { user_class } from './../login/user_class';
import { LoginproProvider } from './../../providers/loginpro/loginpro';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { follower_class } from '../../shared/follower_class';
import { Console } from '@angular/core/src/console';

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
  i: number = 0;
  follow: follower_class[] = [];
  uid: string = '';
  user: user_class[] = [];
  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowerPage');
    this.storage.get('uid').then((val) => {
      this.uid = val;
      let l1 = this.load.create({
        content: "Loading ..."
      });
      l1.present();
      this.data.getFollowing(this.uid).subscribe(
        (fl: follower_class[]) => {
          if (fl != null) {
            this.follow = fl;
            console.log(this.follow);
            console.log(this.follow.length);
            this.i = 0;

            while (this.i <= this.follow.length) {
              this.data.getUser(this.follow[this.i].fk_user_id).subscribe(
                (dt: any) => { this.user[this.i] = dt },
                function (e) { },
              );
              this.i = this.i + 1;
            }
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