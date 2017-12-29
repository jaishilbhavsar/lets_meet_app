import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Community_Class } from "../settings/community_class";
import { ComminityDbTsProvider } from "../../providers/community-db/community-db";

/**
 * Generated class for the ViewCommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-community',
  templateUrl: 'view-community.html',
})
export class ViewCommunityPage {

  arr: Community_Class[] = [];
  comm_id: number;

  constructor(public _data: ComminityDbTsProvider, public load: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewCommunityPage');
    this.comm_id = this.navParams.get('c_id');

    let l1 = this.load.create({
      content: "Loading..."
    });
    l1.present();

    this._data.getCommunityById(this.comm_id).subscribe(

      (data: any) => {
        this.arr = data;
      },
      function (err) {
        alert(err);
      },
      function () {
        l1.dismiss();
      }

    );
  }

}
