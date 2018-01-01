import { EditprofilePage } from './../editprofile/editprofile';
import { LoginproProvider } from './../../providers/loginpro/loginpro';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, Platform, ModalController, ViewController } from 'ionic-angular';
import { user_class } from '../login/user_class';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

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

  ed: any = "";
  u: user_class[] = [];
  eid: string = "";
  uid: string = "";
  pet: string = "kittens";
  isAndroid: boolean = false;
  constructor(public data: LoginproProvider, public load: LoadingController, public storage: Storage, platform: Platform, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.isAndroid = platform.is('android');
  }
 
  ionViewDidLoad() {

    this.storage.get('uid').then((val)=>{
      this.uid=val;
      let l1 = this.load.create({
        content: "Loading ..."
      });
      l1.present();
      this.data.getUser(this.uid).subscribe(
        (dt: user_class[]) => {
        this.u = dt;
        this.eid = this.u[0].user_name;
        
        },
        function (e) { 
          alert(e);
        },
        function () {
          l1.dismiss();
        }
      );
    })
    
    //this.data.set_url();
    
    
  }

  openModal() {

    let modal = this.modalCtrl.create(EditprofilePage);
    modal.present();
  }

}

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
      <ion-item>
        <ion-avatar item-start>
          <img src="{{character.image}}">
        </ion-avatar>
        <h2>{{character.name}}</h2>
        <p>{{character.quote}}</p>
      </ion-item>
      
  </ion-list>
</ion-content>
`
})
export class ModalContentPage {
  character;
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg'
      }
    ];
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
