import { Storage } from '@ionic/storage';

import { loginclass } from './loginclass';
import { user_class } from './user_class';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { Demo1Page } from '../../pages/demo1/demo1';
import { LoginproProvider } from '../../providers/loginpro/loginpro';
import { MainPage } from "../pages";
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  /*account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };*/

  // Our translated text strings
  private loginErrorString: string;
  u1: user_class[] = [];
  loginsession: loginclass;
  constructor(public storage: Storage, public data: LoginproProvider, public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  /*dologin() {
    this.data.doLogin(this.eid,this.pass).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }*/
  dt: user_class;
  eid: string = "";
  pass: string = "";
  onClick() {
    this.data.doLogin(this.eid, this.pass).subscribe(
      (dt) => {
        if (dt == "") {
          let toast = this.toastCtrl.create({
            message: "Invalid UserName Or Password , Try Again",
            duration: 4000,
            position: 'top'
          });
          toast.present();
        }
        else {
          this.storage.set('uid', this.eid);
          this.storage.get('uid').then((val) => {
            console.log(val)
          });
          this.navCtrl.push(MainPage);

        }
      },

      (err) => alert("invalid"),
    );
  }
}