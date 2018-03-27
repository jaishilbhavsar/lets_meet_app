import { UsersPage } from './../users/users';
import { LoginproProvider } from './../../providers/loginpro/loginpro';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { user_class } from '../login/user_class';
import { dateValueRange } from 'ionic-angular/util/datetime-util';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {

  constructor(public tos: ToastController, public load: LoadingController, public data: LoginproProvider, public viewCtrl: ViewController, public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  }
  checkstate: string = '';
  id: string = '';
  gender: string = '';
  uname: string = '';
  mydate: Date;
  image: string = '';
  mobile: string = '';

  eid: string = '';
  u: user_class[] = [];
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
    this.storage.get('uid').then((val) => {
    this.eid = val;
      let l1 = this.load.create({
        content: "Loading ..."
      });
      l1.present();
      this.data.getUser(this.eid).subscribe(
        (dt: user_class[]) => {
          this.u = dt;
          this.id = this.u[0].user_id;
          this.uname = this.u[0].user_name;
          this.image = this.u[0].user_pic;
          this.mydate = this.u[0].user_bdate;
          this.gender = this.u[0].gender;
          this.mobile = this.u[0].user_mob_no;
          console.log(this.mobile);
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
  dismiss() {
    this.viewCtrl.dismiss();
  }
  onClick() {
    console.log(this.id);
    this.data.updateUser(this.id, this.uname, this.image, this.gender, this.mobile, this.mydate).subscribe(
      (dt: any) => {
        if (dt.affectedRows == 1) {
          let mes = this.tos.create({
            message: 'Updated...',
            duration: 4000,
            position: 'top'
          });
          mes.present();
          this.navCtrl.pop();
          //this.navCtrl.push(UsersPage);
        }
        else {
          let mes = this.tos.create({
            message: 'Failed...',
            duration: 4000,
            position: 'top'
          });
          mes.present();
        }
      }
    );
  }
}
