import { Component } from '@angular/core';
import { LoadingController, ToastController, IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

import { Events } from "../../shared/event_class";
import { EventDbProvider } from "../../providers/event-db/event-db";

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];

  arr: Event[] = [];
  arr1: Event[] = [];

  constructor(public tos: ToastController,
    public _data: EventDbProvider,
    public load: LoadingController,
    public navCtrl: NavController,
    public items: Items,
    public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    let l1 = this.load.create({
      content:'Loading Events'
    });
    l1.present();
    this._data.getAllEvents().subscribe(
      (d:any)=>{
        this.arr=d;
      },
      function(e){
        alert(e);
      },
      function(){
        l1.dismiss();
      }
    )
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  /*addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }*/

  /**
   * Delete an item from the list of items.
   */
  /*deleteItem(item) {
    this.items.delete(item);
  }*/

  /**
   * Navigate to the detail page for this item.
   */
  /* openItem(item: Item) {
     this.navCtrl.push('ItemDetailPage', {
       item: item
     });
   }*/
}
