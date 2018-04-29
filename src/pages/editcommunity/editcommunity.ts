import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ComminityDbTsProvider } from "../../providers/community-db/community-db";

import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { Storage } from "@ionic/storage";
import { Community_Class, Update_Community_Class } from '../settings/community_class';
import { Category_Class } from '../../shared/category_class';
import { CategoryDbProvider } from '../../providers/category-db/category-db';

/**
 * Generated class for the EditcommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editcommunity',
  templateUrl: 'editcommunity.html',
})
export class EditcommunityPage {

  @ViewChild('fileInput') fileInput;

  selectedFile: File = null;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  dt: DateTime;
  comm_id: any = null;
  comm_name: string = '';
  comm_des: string = '';
  comm_pic: string = '';
  comm_date: any = null;
  created_by: string = '';
  comm_rating: any = null;
  comm_fk_cat_id: any;
  rate: any = 0;

  arr: Community_Class[] = [];
  arrCat: Category_Class[] = [];

  constructor(public st: Storage,
    public navCtrl: NavController,
    public _data: ComminityDbTsProvider,
    public _dataCategory: CategoryDbProvider,
    public navParams: NavParams,
    public tos: ToastController,
    public load: LoadingController,
    public viewCtrl: ViewController,
    formBuilder: FormBuilder,
    public camera: Camera) {
    this.form = formBuilder.group({
      profilePic: [''],
      comm_name: ['', Validators.required],
      comm_des: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(280), Validators.required])],
      comm_fk_cat_id: ['', Validators.required]
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditcommunityPage');
    this.comm_id = this.navParams.get('c_id');
    this._data.getCommunityById(this.comm_id).subscribe(
      (dt: any[]) => {
        this.arr = dt;
        console.log(this.arr);
        this.comm_name = this.arr[0].comm_name;
        this.comm_des = this.arr[0].comm_des;
        this.comm_date = this.arr[0].comm_date;
        this.comm_pic = this.arr[0].comm_pic;
        this.comm_fk_cat_id = this.arr[0].comm_fk_cat_id;
      }
    );

    this._dataCategory.getAllCategories().subscribe(
      (data: Category_Class[]) => {
        this.arrCat = data;
        console.log(this.arrCat);
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
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

  cancel() {
    this.viewCtrl.dismiss();
  }

  done() {
    if (!this.form.valid) { return; }
    if (this.selectedFile === null) {
      this._data.editCommunityOnly(new Update_Community_Class(this.comm_id, this.comm_name, this.comm_des, this.comm_fk_cat_id)).subscribe(
        (data: any) => {
          console.log(data);
          this.viewCtrl.dismiss();
        },
        function (err) {
          alert(err);
        },
        function () {

        }
      );

    } else {
      const fd = new FormData();
      alert(this.created_by);
      fd.append('comm_id', this.comm_id);
      fd.append('comm_name', this.comm_name);
      fd.append('comm_des', this.comm_des);
      fd.append('image', this.selectedFile, this.selectedFile.name);
      fd.append('comm_fk_cat_id', this.comm_fk_cat_id);

      this._data.editCommunity(fd).subscribe(
        (data: any) => {
          this.viewCtrl.dismiss();
        },
        function (err) {
          alert(err);
        },
        function () {
        }
      );
    }
  }
}
