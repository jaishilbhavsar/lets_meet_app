import { MyApp } from './../../app/app.component';
import { WelcomePage } from './../welcome/welcome';
import { FollowerPage } from './../follower/follower';
import { EditprofilePage } from './../editprofile/editprofile';
import { LoginproProvider } from './../../providers/loginpro/loginpro';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';
=======
import { IonicPage, NavController, NavParams, Platform, ModalController, ViewController, MenuController, AlertController } from 'ionic-angular';
>>>>>>> 88847bb535c8ccb6f3eb0273bbf5c47b9e6faab4
import { user_class } from '../login/user_class';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { follower_class } from '../../shared/follower_class';
import { FollowingPage } from '../following/following';
import { FirstRunPage, MainPage } from '../pages';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  followingcount: number;
  followercount: number;
  followers: follower_class[] = [];
  followings: follower_class[] = [];
  ed: any = "";
  u: user_class[] = [];
  eid: string = "";
  uid: string = "";
  img: string = "";
  pet: string = "kittens";
  isAndroid: boolean = false;
  constructor(public alert: AlertController, public menu: MenuController, public data: LoginproProvider, public load: LoadingController, public storage: Storage, platform: Platform, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {

    this.storage.get('uid').then((val) => {
      this.uid = val;
      let l1 = this.load.create({
        content: "Loading ..."
      });
      l1.present();
      this.data.getUser(this.uid).subscribe(
        (dt: user_class[]) => {
          this.u = dt;
          this.eid = this.u[0].user_name;
          this.img = this.u[0].user_pic;
        },
        function (e) {
          alert(e);
        },
        function () {
          l1.dismiss();
        }
      );
      this.data.getFollowers(this.uid).subscribe(
        (ft: any) => {
          if (ft !== "") {
            this.followers = ft;
            this.followercount = this.followers.length;
          }
        },
      );
      this.data.getFollowing(this.uid).subscribe(
        (fl: any) => {
          if (fl != "") {
            this.followings = fl;
            this.followingcount = this.followings.length;
          }
        }
      );
    })

    //this.data.set_url();


  }
  id: string = "";
  onFollower() {
    //this.storage.get('uid').then((val)=>{this.id;
    //alert(this.uid);
    this.navCtrl.push(FollowerPage, { uid: this.uid });
    // });
  }
  onFollowing() {
    this.navCtrl.push(FollowingPage, { uid: this.uid });
  }
  openModal() {

    let modal = this.modalCtrl.create(EditprofilePage);
    modal.present();
  }
  onLogout() {
    this.storage.clear();
    this.navCtrl.popToRoot();
    //this.navCtrl.parent.parent.setRoot(FirstRunPage);
  }
  newpassword: string = "";
  oldpassword: string = "";

  changepass(newpass) {
    this.storage.get('uid').then((val) => {
      this.uid = val;
      alert(this.uid);
      alert(newpass);
      this.data.change(this.uid, newpass).subscribe(
        (dt: any) => {
          let prompt = this.alert.create({
            title: 'Password Changed',
            message: "Your Password has been successfully changed",
            buttons: [
              {
                text: 'Ok',
                handler: data => {
                  console.log('Cancel clicked');
                }

              }]
          });
          prompt.present();
        },
        function (e) {
          alert(e);
        },
        function () {

        }
      )
    });
  }
  validate(oldpass) {

    let l1 = this.load.create({
      content: "Loading ..."
    });
    l1.present();
    this.storage.get('uid').then((val) => {
      this.uid = val;
      this.data.doLogin(this.uid, oldpass)
        .subscribe(
          (dt: any) => {
            if (dt != "") {
              let prompt = this.alert.create({
                title: 'Change Password',
                message: "Enter New Password",
                inputs: [
                  {
                    name: 'name',
                    placeholder: 'Enter New Password'
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
                      this.newpassword = data.name;
                      alert(this.newpassword);
                      this.changepass(this.newpassword);
                    }
                  },
                ]
              });
              prompt.present();
            }
            else {
              alert("Incorrect Old Password");
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

    });

  }
  onChangePassword() {
    let prompt = this.alert.create({
      title: 'Change Password',
      message: "Enter Your Old Password",
      inputs: [
        {
          name: 'name',
          placeholder: 'Enter Old Password'
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
            this.oldpassword = data.name;
            this.validate(this.oldpassword);
          }
        },
      ]
    });
    prompt.present();
  }

}

// @Component({
//   template: `
// <ion-header>
//   <ion-toolbar>
//     <ion-title>
//       Description
//     </ion-title>
//     <ion-buttons start>
//       <button ion-button (click)="dismiss()">
//         <span ion-text color="primary" showWhen="ios">Cancel</span>
//         <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
//       </button>
//     </ion-buttons>
//   </ion-toolbar>
// </ion-header>

// <ion-content>
//   <ion-list>
//       <ion-item>
//         <ion-avatar item-start>
//           <img src="{{character.image}}">
//         </ion-avatar>
//         <h2>{{character.name}}</h2>
//         <p>{{character.quote}}</p>
//       </ion-item>

//   </ion-list>
// </ion-content>
// `
// })
// export class ModalContentPage {
//   character;
//   constructor(
//     public platform: Platform,
//     public params: NavParams,
//     public viewCtrl: ViewController
//   ) {
//     var characters = [
//       {
//         name: 'Gollum',
//         quote: 'Sneaky little hobbitses!',
//         image: 'assets/img/avatar-gollum.jpg'
//       }
//     ];
//   }
//   dismiss() {
//     this.viewCtrl.dismiss();
//   }

// }
