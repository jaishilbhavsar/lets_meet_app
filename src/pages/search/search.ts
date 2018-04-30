import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

import { user_class } from "../login/user_class";
import { LoginproProvider } from "../../providers/loginpro/loginpro";
import { Community_Class } from "../settings/community_class";
import { ComminityDbTsProvider } from "../../providers/community-db/community-db";
import { ViewCommunityPage } from "../view-community/view-community";
import { ViewuserPage } from "../viewuser/viewuser";
import { Storage } from '@ionic/storage/dist/storage';
import { Category_Class } from "../../shared/category_class";
import { CategoryDbProvider } from "../../providers/category-db/category-db";

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  //items:any=[];
  user: string = "allusers";
  txtsearch: string = '';
  arr: user_class[] = [];
  arr1: user_class[] = [];
  comm_arr: Community_Class[] = [];
  comm_arr1: Community_Class[] = [];
  search: string = "user";


  topComm: Community_Class[] = [];

  constructor(public navCtrl: NavController, public storage: Storage, public load: LoadingController, public _data1: ComminityDbTsProvider, public _data: LoginproProvider, public navParams: NavParams, public items: Items, public _cat_comm: CategoryDbProvider) {
    this.currentItems = this.items.query();
  }

  ionViewDidLoad() {

    this._data.getAllUser().subscribe(

      (data: any) => {
        this.arr = data;
      },
      function (e) {
        alert(e);
      }
    );

    this._data1.getAllCommunities().subscribe(

      (data: any) => {
        this.comm_arr1 = data;
        // this.arr = data;

      },
      function (err) {
        alert(err);
      },
      function () {

        //l1.dismiss();
      }

    );


    let l2 = this.load.create({
      content: "Loading..."
    });
    l2.present();

    this._data1.gettopcommunity().subscribe(

      (data: any) => {
        this.topComm = data;
      },
      function (e) {
        alert(e);

      },
      function () {
        l2.dismiss();
      }

    );
  }
  /**
   * Perform a service for the proper items.
   */
  /*getUsers(us) {
    this.arr=this.arr1;
    let val = us.target.value;
    if (val && val.trim() != '') {
      this.arr1 = this.arr.filter((x) =>
        x.user_name.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1);
    }
   
  }*/

  /**
   * Navigate to the detail page for this item.
   */
  /* openItem(item: Item) {
     this.navCtrl.push('ItemDetailPage', {
       item: item
     });
   }*/


  onSearch() {

    if (this.txtsearch != '') {

      this.arr1 = this.arr.filter((x) => x.user_name.toLowerCase().indexOf(this.txtsearch.toLowerCase()) > -1);
      // this.arr1 = this.arr.filter((x) => x.comm_name.startsWith(this.txtsearch));
      this.comm_arr = this.comm_arr1.filter((x) => x.comm_name.toLowerCase().indexOf(this.txtsearch.toLowerCase()) > -1);
    }
    else {
      this.arr1 = null;
      this.comm_arr = null;
    }
  }
  onClick(comm_id) {
    this.navCtrl.push(ViewCommunityPage, { c_id: comm_id });
  }

  onUser(user_id) {
    this.storage.set('viewid', user_id);
    this.navCtrl.push(ViewuserPage);
  }
}
