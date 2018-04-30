import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { DatePicker } from '@ionic-native/date-picker';
import { MainPage } from '../pages';

import { LoginproProvider } from '../../providers/loginpro/loginpro';
import { User } from '../../providers/providers';
import { user_class, Update_User_Class } from '../login/user_class';


/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {

  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  form: FormGroup;
  selectedFile: File = null;
  today: string;

  constructor(public data: LoginproProvider,
    public _dataUser: User,
    formBuilder: FormBuilder,
    private datePicker: DatePicker,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public load: LoadingController,
    public storage: Storage,
    public tos: ToastController,
    public camera: Camera,
    public translateService: TranslateService) {
    this.form = formBuilder.group({
      eid: ['', Validators.required],
      uname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      gender: ['', Validators.required],
      mobile: ['', Validators.required],
      myDate: ['', Validators.required],
      profilePic: ['']
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
    this.today = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString();
  }

  eid: string;
  uname: string;
  pass: string;
  gender: string;
  mobile: string;
  myDate: any;
  user_pic: any;
  token: string = "user";
  u: user_class[] = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
    this.storage.get('uid').then((val) => {
      this.eid = val;
      let l1 = this.load.create({
        content: "Loading ..."
      });
      l1.present();
      this.data.getUser(this.eid).subscribe(
        (dt: user_class[]) => {
          this.u = dt;
          //this.id = this.u[0].user_id;
          this.uname = this.u[0].user_name;
          this.user_pic = this.u[0].user_pic;
          this.myDate = this.u[0].user_bdate;
          this.gender = this.u[0].gender;
          this.mobile = this.u[0].user_mob_no;
          console.log(this.mobile);
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
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
    //alert(this.selectedFile.type);
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
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

  cancel() {
    this.viewCtrl.dismiss();
  }
  done() {
    if (!this.form.valid) { return; }
    console.log(this.eid);
    if (this.selectedFile === null) {
      this._dataUser.editUserOnly(new Update_User_Class(this.eid, this.uname, this.gender, this.mobile, this.myDate, this.token)).subscribe(
        (dt: any) => {
          if (dt.affectedRows == 1) {
            let mes = this.tos.create({
              message: 'Updated...',
              duration: 4000,
              position: 'top'
            });
            mes.present();
            this.viewCtrl.dismiss();
          }
          else {
            let mes = this.tos.create({
              message: 'Failed...',
              duration: 4000,
              position: 'top'
            });
            mes.present();
          }
        }
      );
    } else {
      const fd = new FormData();
      fd.append("user_id", this.eid);
      fd.append("user_name", this.uname);
      fd.append("image", this.selectedFile, this.selectedFile.name);
      fd.append("gender", this.gender);
      fd.append("user_mob_no", this.mobile);
      fd.append("user_bdate", this.myDate);
      fd.append("token", "user");
      alert(this.eid);
      console.log(fd);
      console.log(this.token);
      this._dataUser.editUser(fd).subscribe(
        (data: any) => {
          let mes1 = this.tos.create({
            message: 'Updated...',
            duration: 4000,
            position: 'top'
          });
          this.viewCtrl.dismiss();
          mes1.present();
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
