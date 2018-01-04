import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Community_Class } from "../settings/community_class";
import { ComminityDbTsProvider } from "../../providers/community-db/community-db";
import { Community_Post_User_Class } from "../../shared/community_post_user_class";
import { ViewPostPage } from '../view-post/view-post';

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

  Community: string = "posts";
  arr: Community_Class[] = [];
  comm_id: number;
  comm_post_user: Community_Post_User_Class[] = [];
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

    let l2 = this.load.create({
      content: "Loading..."
    });
    l2.present();
    this._data.getPostByCommunityId(this.comm_id).subscribe(
      (data: Community_Post_User_Class[]) => {
        this.comm_post_user = data;
      },
      function (e) {
        alert(e);
      },
      function () {
        l2.dismiss();
      }
    )
  }

  onPostClick(item: Community_Post_User_Class) {
    this.navCtrl.push(ViewPostPage, { post_id: item.post_id });
  }

}
