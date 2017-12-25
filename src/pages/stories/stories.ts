import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoryDetailPage } from "../story-detail/story-detail";
import { CreateStoryPage } from "../create-story/create-story";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoriesPage');
  }

  viewStory(){
    this.navCtrl.push(StoryDetailPage);
  }

  addStory(){
    this.navCtrl.push(CreateStoryPage);
  }

}
