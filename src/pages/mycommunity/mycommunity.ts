import { EditcommunityPage } from './../editcommunity/editcommunity';
import { ViewCommunityPage } from './../view-community/view-community';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { LoginproProvider } from './../../providers/loginpro/loginpro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Community_Class } from '../settings/community_class';
import { Storage } from '@ionic/storage';
import { ComminityDbTsProvider } from "./../../providers/community-db/community-db";
/**
 * Generated class for the MycommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mycommunity',
  templateUrl: 'mycommunity.html',
})
export class MycommunityPage {

  constructor(public cprovider: ComminityDbTsProvider,
    public load: LoadingController,
    public storage: Storage,
    public modalCtrl: ModalController,
    public data: LoginproProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }
  uid: string;
  arr: Community_Class[] = [];
  ionViewDidLoad() {
    console.log('ionViewDidLoad MycommunityPage');
    this.storage.get('uid').then((val => {
      this.uid = val;

      let l1 = this.load.create({
        content: "Loading ..."
      });
      l1.present();
      this.data.getmycommunity(this.uid).subscribe(
        (dt: any[]) => {
          this.arr = dt;
        },
        function (e) {
          alert(e)
        },
        function () {
          l1.dismiss();
        }
      );
    }));
  }
  showcommunity(id) {
    this.navCtrl.push(ViewCommunityPage, { c_id: id });
  }
  onEdit(id) {
    let addModal = this.modalCtrl.create(EditcommunityPage, { c_id: id });
    addModal.onDidDismiss(item => {
      this.ionViewDidLoad();
    })
    addModal.present();
    //this.navCtrl.push(EditcommunityPage, { c_id: id });
  }
  onDelete(id) {
    this.cprovider.deleteCommunity(this.arr[0]);
    this.ionViewDidLoad();
  }
}
