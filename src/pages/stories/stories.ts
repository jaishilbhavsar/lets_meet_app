import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoryDetailPage } from "../story-detail/story-detail";
import { CreateStoryPage } from "../create-story/create-story";
import { StoryDbProvider } from "../../providers/story-db/story-db";
import { Story_class } from "../../shared/stoty_class";
import { Storage } from '@ionic/storage';

/**
 * Generated class for the StoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stories',
  templateUrl: 'stories.html',
})
export class StoriesPage {

  arr: Story_class[] = [];
  arr1: Story_class[] = [];
  user_id: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public _data: StoryDbProvider,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoriesPage');
    this.storage.get('uid').then((val) => {
      this.user_id = val;
        this._data.getStoriesById(this.user_id).subscribe(
          (data: any) => {
            this.arr = data;
          },
          function (err) {
            alert(err);
          },
          function () {
            
          }
        );
    });
  
    this._data.getAllStories().subscribe(
      (data: any) => {
        this.arr1 = data;
      },
      function (err) {
        alert(err);
      },
      function () {
       
      }
    );
  }

  viewStory() {
    this.navCtrl.push(StoryDetailPage);
  }

  addStory() {
    this.navCtrl.push(CreateStoryPage);
  }

}
