import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { PostDbProvider } from "../../providers/post-db/post-db";
import { Post_Class } from "../../shared/post_class";

/**
 * Generated class for the CreatePostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-post',
  templateUrl: 'create-post.html',
})
export class CreatePostPage {

  comm_id = this.navParams.get('c_id');
  user_id: string;

  arrPost: Post_Class[] = [];
  post_title: string;
  post_des: string;

  isReadyToSave: boolean;
  form: FormGroup;
  constructor(public _dataPost: PostDbProvider,
    public storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      profilePic: [''],
      post_title: ['', Validators.required],
      post_des: ['', Validators.required]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePostPage');
  }
  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.storage.get('uid').then((val) => {
      this.user_id = val;
      console.log(this.user_id);
      this._dataPost.addPost(new Post_Class(null, this.post_title, this.post_des, 'dp', null, this.user_id, this.comm_id)).subscribe(
        (data: Post_Class) => {
          alert("added");
          console.log(data);
          this.viewCtrl.dismiss();
        },
        function (err) {
          alert(err);
        },
        function () {

        }
      )
    }
    );
    //this.viewCtrl.dismiss(this.form.value);
  }
}
