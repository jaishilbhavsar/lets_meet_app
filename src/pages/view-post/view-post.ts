import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostDbProvider } from "../../providers/post-db/post-db";
import { Post_Class } from "../../shared/post_class";
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { CommentDbProvider } from "../../providers/comment-db/comment-db";
import { Comment_Class } from "../../shared/comment_class";
import { Comment_User_Post } from "../../shared/comment_user_post";
import { Storage } from "@ionic/storage";
import { DateTime } from 'ionic-angular/components/datetime/datetime';

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
  comment_count: number;
  user_id: string;
  new_comment: string;
  //year: number = new Date().getFullYear();
  //month: number = new Date().getMonth();
  //day: number = new Date().getDate();
  //today: Date = new Date(this.year, this.month, this.day);
  comment_date = new Date();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public _dataPost: PostDbProvider,
    public _dataComment: CommentDbProvider,
    public storage: Storage,
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
        this.comment_count = this.arrCommUserPost.length;
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

  newComment() {
    this.storage.get('uid').then((val) => {
      this.user_id = val;
<<<<<<< HEAD
      console.log(this.comment_date);
=======
       console.log(this.comment_date);
>>>>>>> c120a4acdc2871122979875cd9e837d1c8ad2984
      this._dataComment.addComment(new Comment_Class(null, this.comment_date, this.new_comment, this.post_id, this.user_id)).subscribe(
        (data: Comment_Class) => {
          console.log(data);
          this.new_comment="";
        },
        function (e) {
          alert(e);
        },
        function () {
          alert("added");
        }
      );
    });
  }
}

