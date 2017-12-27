import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ComminityDbTsProvider } from "../../providers/community-db/community-db";
import { Community_Class } from "../settings/community_class";
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { IonicStorageModule,Storage } from "@ionic/storage";

/**
 * Generated class for the CreateCommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-community',
  templateUrl: 'create-community.html',
})
export class CreateCommunityPage {

  dt: DateTime;
  comm_id: number = null;
  comm_name: string = '';
  comm_des: string = '';
  comm_pic: string = '';
  //comm_date=this.dt.getDefaultValueDateString();
  comm_date: any = new Date();
  created_by: string = '';
  comm_rating: number = 3;


  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateStoryPage');
  }

  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public st: Storage, public navCtrl: NavController, public _data: ComminityDbTsProvider, public navParams: NavParams, public tos: ToastController, public load: LoadingController, public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera) {
    this.form = formBuilder.group({
      profilePic: [''],
      name: ['', Validators.required],
      about: ['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
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
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
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
    this.viewCtrl.dismiss(this.form.value);
  }



  onCreate() {

    this.st.get('uname').then((val) => {
      this.created_by = val;
    });
    alert(this.created_by);

    let t1 = this.tos.create({
      message: "Added",
      duration: 3000
    });

    let l1 = this.load.create({
      content: "Loading..."
    });
    l1.present();

    this._data.addCommuniy(new Community_Class(this.comm_id, this.comm_name, this.comm_des, this.comm_pic, this.comm_date, this.comm_rating, this.created_by)).subscribe(
      (data: any) => {
        t1.present();
      },
      function (err) {
        alert(err);
      },
      function () {
        l1.dismiss();
      }
    );

  }

}