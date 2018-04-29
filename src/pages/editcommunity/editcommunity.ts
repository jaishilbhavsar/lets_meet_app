import { DateTime } from 'ionic-angular';
import { Community_Class } from './../settings/community_class';
import { ComminityDbTsProvider } from './../../providers/community-db/community-db';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the EditcommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editcommunity',
  templateUrl: 'editcommunity.html',
})
export class EditcommunityPage {

  constructor(public cprovider: ComminityDbTsProvider, public load: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }
  comm_id: string;
  arr: Community_Class[] = [];
  comm_name: string;
  comm_des: string;
  comm_date: DateTime;
  comm_rating: number;
  created_by: string;
  category_id: number;
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditcommunityPage');
    this.comm_id = this.navParams.get('c_id');
    this.cprovider.getCommunityById(this.comm_id).subscribe(
      (dt: any[]) => {
        this.arr = dt;
        this.comm_name = this.arr[0].comm_name;
        this.comm_des = this.arr[0].comm_des;
        this.comm_date = this.arr[0].comm_date;
        this.category_id = this.arr[0].comm_fk_cat_id;
        alert(this.comm_name);
        alert(this.comm_des);
        //Image Vadu Nathi Khabar k shu karvanu che etle joi leje e




      }
    );
  }

}
