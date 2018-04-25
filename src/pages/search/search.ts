import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

// import { Item } from '../../models/item';
// import { Items } from '../../providers/providers';

import { user_class } from "../login/user_class";
import { LoginproProvider } from "../../providers/loginpro/loginpro";
import { Community_Class } from "../settings/community_class";
import { ComminityDbTsProvider } from "../../providers/community-db/community-db";

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


  topComm: Community_Class[] = [];

  constructor(public navCtrl: NavController, public load: LoadingController, public _data1: ComminityDbTsProvider, public _data: LoginproProvider, public navParams: NavParams) {

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

      this.arr1 = this.arr.filter((x) => x.user_name.toLocaleLowerCase().indexOf(this.txtsearch.toLocaleLowerCase()) > -1);
      //   this.arr1 = this.arr.filter((x) => x..startsWith(this.txtsearch))
    }
    else {
      this.arr1 = null;
    }


  }
}
