import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController,ViewController } from 'ionic-angular';

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

  pet: string = "kittens";
  isAndroid: boolean = false;
  constructor(platform: Platform, public modalCtrl:ModalController ,public navCtrl: NavController, public navParams: NavParams) {
    this.isAndroid = platform.is('android');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  openModal(){

    let modal=this.modalCtrl.create(ModalContentPage);
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
export class ModalContentPage{
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
