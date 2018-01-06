import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostDbProvider } from "../../providers/post-db/post-db";
import { Post_Class } from "../../shared/post_class";
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { CommentDbProvider } from "../../providers/comment-db/comment-db";
import { Comment_Class } from "../../shared/comment_class";
import { Comment_User_Post } from "../../shared/comment_user_post";

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

  comments_button: boolean = false;
  post_id: number;
  arrPost: Post_Class[] = [];
  arrCommUserPost: Comment_User_Post[] = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public _dataPost: PostDbProvider,
    public _dataComment: CommentDbProvider,
    public load: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPostPage');
    this.post_id = this.navParams.get('post_id');

    let l1 = this.load.create({
      content: 'Loading...'
    });
    l1.present();

    this._dataPost.getPostById(this.post_id).subscribe(
      (data: Post_Class[]) => {
        this.arrPost = data;
      },
      function (e) {
        alert(e);
      },
      function () {
        l1.dismiss();
      }
    );

    //l1.present();
    this._dataComment.getAllCommentsByPostId(this.post_id).subscribe(
      (data: Comment_User_Post[]) => {
        this.arrCommUserPost = data;
        console.log(this.arrCommUserPost);
      },
      function (err) {
        alert(err);
      },
      function () {
      //  l1.dismiss();
      }
    );
  }

}
