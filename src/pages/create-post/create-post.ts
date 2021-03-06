import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { PostDbProvider } from "../../providers/post-db/post-db";
import { Post_Class } from "../../shared/post_class";
import { Camera } from '@ionic-native/camera';

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

  @ViewChild('fileInput') fileInput;
  selectedFile: File = null;

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
    public tos: ToastController,
    public camera: Camera,
    public formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      profilePic: ['', Validators.required],
      post_title: ['', Validators.required],
      post_des: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(1500), Validators.required])]
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePostPage');
  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
    if (this.selectedFile.type != 'image/png' && this.selectedFile.type != 'image/jpeg') {
      this.selectedFile = null;
      this.isReadyToSave = this.form.invalid;
      const toast = this.tos.create({
        message: 'Only Image formats are accepted!',
        showCloseButton: true,
        closeButtonText: 'Ok'
      });
      toast.present();
    }
    else {
      let reader = new FileReader();
      reader.onload = (readerEvent) => {

        let imageData = (readerEvent.target as any).result;
        this.form.patchValue({ 'profilePic': imageData });
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

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
      const fd = new FormData();
      fd.append("post_id", null);
      fd.append("post_title", this.post_title);
      fd.append("post_des", this.post_des);
      fd.append("image", this.selectedFile, this.selectedFile.name);
      fd.append("post_date", null);
      fd.append("post_fk_user_id", this.user_id);
      fd.append("fk_comm_id", this.comm_id);
      this._dataPost.addPost(fd).subscribe(
        (data: Post_Class) => {
          this.viewCtrl.dismiss();
          let t1 = this.tos.create({
            duration: 3000,
            message: "Added ..."
          });
        },
        function (err) {
          alert(err);
        },
        function () {

        }
      )
    });
  }
}
