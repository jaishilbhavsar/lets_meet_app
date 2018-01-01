import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

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

  txtsearch: string = '';
  arr: Community_Class[] = [];
  arr1: Community_Class[] = [];

  constructor(public navCtrl: NavController, public _data: ComminityDbTsProvider, public navParams: NavParams, public items: Items) { }

  ionViewDidLoad() {

    this._data.getAllCommunities().subscribe(

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
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }


  onSearch() {

    if (this.txtsearch != '') {
      this.arr1 = this.arr.filter((x) => x.comm_name.startsWith(this.txtsearch))
    }
    else{
      this.arr1=null;
    }
  

  }
}
