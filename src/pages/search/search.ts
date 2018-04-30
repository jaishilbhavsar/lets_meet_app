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
import { Category_class } from "../../shared/category_class";
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
  cat_comm: Category_class[] = [];
  cat_comm1: Category_class[] = [];

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
        // alert(data[0].comm_fk_cat_id);

        this.comm_arr1 = data;
        //this.arr1 = data;

      },
      function (err) {
        alert(err);
      },
      function () {

        //l1.dismiss();
      }

    );

    this._cat_comm.getAllCommunityByCategory(this.txtsearch).subscribe(
      (data1: any) => {
        this.cat_comm = data1;
      },
      function (e) {
        alert(e);
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

      this.arr1 = this.arr.filter((x) => x.user_name.indexOf(this.txtsearch));
      //   this.arr1 = this.arr.filter((x) => x..startsWith(this.txtsearch));
      this.cat_comm1 = this.cat_comm.filter((x) => x.comm_name.indexOf(this.txtsearch));
    }
    else {
      this.arr1 = null;
      this.cat_comm1 = null;
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
