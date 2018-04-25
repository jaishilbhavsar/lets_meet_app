import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostDbProvider } from "../../providers/post-db/post-db";
import { Post_Class } from "../../shared/post_class";
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { CommentDbProvider } from "../../providers/comment-db/comment-db";
import { Comment_Class } from "../../shared/comment_class";
import { Comment_User_Post } from "../../shared/comment_user_post";
import { Storage } from "@ionic/storage";
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { LoginproProvider } from "../../providers/loginpro/loginpro";
import { user_class } from "../login/user_class";
import { LikeDbProvider } from "../../providers/like-db/like-db";
import { Like_Class } from "../../shared/like_class";
import { Like_Post_User_Class } from "../../shared/like_post_user_class";
import { ViewuserPage } from '../viewuser/viewuser';

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
  year: number = new Date().getFullYear();
  month: number = new Date().getMonth();
  day: number = new Date().getDate();
  today: Date = new Date(this.year, this.month, this.day);
  comment_date: any = new Date();
  u_id: string = "";

  arrUser: user_class[] = [];
  user_name: string;
  user_pic: string;

  arrLikePostUser: Like_Post_User_Class[] = [];
  like_cnt: number;

  arrLike: Like_Class[] = [];
  like: boolean;
  dislike: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public _dataPost: PostDbProvider,
    public _dataComment: CommentDbProvider,
    public _dataUser: LoginproProvider,
    public _dataLike: LikeDbProvider,
    public tos: ToastController,
    public storage: Storage,
    public load: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPostPage');
    this.post_id = this.navParams.get('post_id');

    this.storage.get('uid').then((val) => {
      this.user_id = val;
      this._dataUser.getUser(this.user_id).subscribe(
        (data: user_class[]) => {
          this.arrUser = data;
          this.user_name = this.arrUser[0].user_name;
          this.user_pic = this.arrUser[0].user_pic;
          this.u_id = this.arrUser[0].user_id;
        }
      );
    });

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

    this._dataComment.getAllCommentsByPostId(this.post_id).subscribe(
      (data: Comment_User_Post[]) => {
        this.arrCommUserPost = data;
        this.comment_count = this.arrCommUserPost.length;
      },
      function (err) {
        alert(err);
      },
      function () {
      }
    );

    this.storage.get('uid').then((val) => {
      this.user_id = val;
      this._dataLike.getLikeIdByPostAndUser(this.post_id, this.user_id).subscribe(
        (data: any) => {
          if (data == "") {
            this.like = true;
            this.dislike = false;
          }
          else {
            this.like = false;
            this.dislike = true;
            this.arrLike = data;
            console.log(this.arrLike);
          }
        }
      );
    });

    this._dataLike.getlikesByPosts(this.post_id).subscribe(
      (data: Like_Post_User_Class[]) => {
        this.arrLikePostUser = data;
        this.like_cnt = this.arrLikePostUser.length;
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }

  /*doRefresh(refresher) {
    console.log('Started', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      this.ionViewDidLoad();
      refresher.complete();
    }, 4000);
  }*/

  newComment() {
    this.storage.get('uid').then((val) => {
      this.user_id = val;
      console.log(this.comment_date);
      this._dataComment.addComment(new Comment_Class(null, null, this.new_comment, this.post_id, this.user_id)).subscribe(
        (data: Comment_Class) => {
          console.log(data);
          this.ionViewDidLoad();
          this.new_comment = "";
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

  onDeleteComment(id) {
    this._dataComment.deleteComment(id).subscribe(
      (data) => {
        this.ionViewDidLoad();
      },
      function (e) {
        alert(e);
      },
      function () {
        alert("deleted");
      }
    );
  }

  onClickLike() {
    this.storage.get('uid').then((val) => {
      this.user_id = val;
      let l1 = this.load.create({
        content: 'liking ...'
      });
      l1.present();
      this._dataLike.getLikeIdByPostAndUser(this.post_id, this.user_id).subscribe(
        (data: any) => {
          if (data == "") {
            this.addLike();
          }
          else {
            this.arrLike = data;
          }
        },
        function (e) {
          alert(e);
        },
        function () {
          l1.dismiss();
        }
      );
    });
  }

  addLike() {
    let t1 = this.tos.create({
      duration: 3000,
      message: "Liked ..."
    });
    this.storage.get('uid').then(
      (val) => {
        this.user_id = val;
        this._dataLike.addLikes(new Like_Class(null, this.post_id, this.user_id)).subscribe(
          (data: Like_Class[]) => {
            t1.present();
            this.like = false;
            this.dislike = true;
            this.like_cnt = this.like_cnt + 1;
          },
          function (err) {
            alert(err);
          },
          function () {

          }
        );
      }
    );
  }

  onLikeRemove() {
    console.log(this.arrLike);
    this.storage.get('uid').then(
      (val) => {
        this.user_id = val;
        this._dataLike.getLikeIdByPostAndUser(this.post_id, this.user_id).subscribe(
          (data: any) => {
            if (data == "") {
              alert("nathi");
            }
            else {
              this.arrLike = data;
              console.log(this.arrLike);
              this._dataLike.deleteLike(this.arrLike[0].like_id).subscribe(
                (data: Like_Class) => {
                  //alert("thyu");
                  this.like = true;
                  this.dislike = false;
                  this.like_cnt = this.like_cnt - 1;
                },
                function (err) {
                  alert(err);
                },
                function () {

                }
              );
            }
          },
          function (e) {
            alert(e);
          },
          function () {
            alert("disliked");
          }
        );
      });
  }

  showuser(id) {
    this.storage.set('viewid', id);
    this.navCtrl.push(ViewuserPage);
  }
}

