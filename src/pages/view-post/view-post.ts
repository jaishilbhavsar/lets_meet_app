import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostDbProvider } from "../../providers/post-db/post-db";
import { Post_Class } from "../../shared/post_class";
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the ViewPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-post',
  templateUrl: 'view-post.html',
})
export class ViewPostPage {

  post_id: number;
  arr: Post_Class[] = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public _data: PostDbProvider,
    public load: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPostPage');
    this.post_id = this.navParams.get('post_id');

    let l1 = this.load.create({
      content: 'Loading...'
    });
    l1.present();

    this._data.getPostById(this.post_id).subscribe(
      (data: Post_Class[]) => {
        this.arr = data;
      },
      function (e) {
        alert(e);
      },
      function () {
        l1.dismiss();
      }
    )
  }

}
