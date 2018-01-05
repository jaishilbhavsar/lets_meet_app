import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

import { user_class } from "../login/user_class";
import { LoginproProvider } from "../../providers/loginpro/loginpro";

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  //items:any=[];
  user:string="allusers";
  txtsearch: string = '';
  arr: user_class[] = [];
  arr1: user_class[] = [];

  constructor(public navCtrl: NavController, public _data: LoginproProvider, public navParams: NavParams, public items: Items) { 
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

      this.arr1 = this.arr.filter((x) =>x.user_name.toLocaleLowerCase().indexOf(this.txtsearch.toLocaleLowerCase()) > -1);
   //   this.arr1 = this.arr.filter((x) => x..startsWith(this.txtsearch))
    }
    else{
      this.arr1=null;
    }
  

  }
}
