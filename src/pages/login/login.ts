import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { loginclass } from './loginclass';
import { user_class } from './user_class';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { LoginproProvider } from '../../providers/loginpro/loginpro';
import { MainPage } from "../pages";
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { email_class } from '../../shared/email_class';
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
  constructor(public load: LoadingController, public alert: AlertController, public storage: Storage, public data: LoginproProvider, public navCtrl: NavController,
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
  eid: string = "jaishilbhavsar@yahoo.in";
  pass: string = "jaishil";
  onClick() {
    this.data.doLogin(this.eid, this.pass, "user").subscribe(
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
          /*this.storage.get('uid').then((val) => {
            console.log(val);
          });*/
          this.navCtrl.push(MainPage);

        }
      },

      (err) => alert("invalid"),
    );
  }
  forid: string = '';
  u: user_class[] = [];
  validate() {
    let l1 = this.load.create({
      content: "Loading ..."
    });
    l1.present();
    this.data.getUser(this.forid)
      .subscribe(
        (dt: any) => {
          if (dt != "") {
            this.u = dt;
            this.eid = this.u[0].user_id;
            var message = "Hello " + this.forid + ". You have requested to reset the password. your password is '" + this.u[0].user_pass + "'. Password is one of the confidential thing, Don't share it with anyone.";
            this.data.sendMail(new email_class(message, this.forid, "Resetting the password of Lets_Meet."))
              .subscribe(
                (data1: any) => {
                  console.log("mail sent");
                  alert("The Password has been sent to " + this.forid);
                },
                function (e) {
                  alert(e);
                },
                function () {
                  l1.dismiss();
                }
              );
          }
          else {
            alert("enter valid mail");
          }
        }
        ,
        function (e) {
          alert(e);
        },
        function () {
          l1.dismiss();
        }
      );
  }
  showPrompt() {
    let prompt = this.alert.create({
      title: 'Forgot Password',
      message: "Enter Your Email Id To Get Your Password",
      inputs: [
        {
          name: 'name',
          placeholder: 'Email_id'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            this.forid = data.name;
            this.validate();
          }
        }
      ]
    });
    prompt.present();
  }
}

