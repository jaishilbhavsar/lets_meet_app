import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ComminityDbTsProvider } from "../../providers/community-db/community-db";
//import { Community_Class } from "../settings/community_class";
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { Storage } from "@ionic/storage";

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

  @ViewChild('fileInput') fileInput;

  selectedFile: File = null;

  dt: DateTime;
  comm_id: any = null;
  comm_name: string = '';
  comm_des: string = '';
  comm_pic: string = '';
  //comm_date: any = new Date();
  comm_date: any = null;
  created_by: any = '';
  comm_rating: any = null;
  comm_fk_cat_id: string = '3';
  rate: any = 0;

  ionViewDidLoad() {
    this.st.get('uid').then((val) => {
      this.created_by = val;

    });

    this.st.get("rating").then((val) => {

      this.rate = val;
    });
    console.log('ionViewDidLoad CreateStoryPage');
  }



  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public st: Storage,
    public navCtrl: NavController,
    public _data: ComminityDbTsProvider,
    public navParams: NavParams,
    public tos: ToastController,
    public load: LoadingController,
    public viewCtrl: ViewController,
    formBuilder: FormBuilder,
    public camera: Camera) {
    this.form = formBuilder.group({
      profilePic: ['', Validators.required],
      comm_name: ['', Validators.required],
      comm_des: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(280), Validators.required])]
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
    this.fileInput.nativeElement.click();
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

  onCreate() {
    if (!this.form.valid) { return; }
    this.st.get('uid').then((val) => {
      this.created_by = val;

      let t1 = this.tos.create({
        message: "Created",
        duration: 3000
      });

      let l1 = this.load.create({
        content: "Loading..."
      });
      l1.present();

      const fd = new FormData();
      alert(this.created_by);
      fd.append("comm_id", this.comm_id);
      fd.append("comm_name", this.comm_name);
      fd.append("comm_des", this.comm_des);
      fd.append("image", this.selectedFile, this.selectedFile.name);
      fd.append("comm_date", this.comm_date);
      fd.append("comm_rating", this.comm_rating);
      fd.append("created_by", this.created_by);
      fd.append("comm_fk_cat_id", this.comm_fk_cat_id);

      this._data.addCommunity(fd).subscribe(
        (data: any) => {
          console.log(data);
          t1.present();
          this.navCtrl.pop();
        },
        function (err) {
          alert(err);
        },
        function () {
          l1.dismiss();
        }
      );
    });
  }

}