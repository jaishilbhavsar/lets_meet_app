import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { LoginproProvider } from '../../providers/loginpro/loginpro';
import { Camera } from '@ionic-native/camera';
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  form: FormGroup;
  selectedFile: File = null;
  today: string;

  constructor(public data: LoginproProvider,
    formBuilder: FormBuilder,
    private datePicker: DatePicker,
    public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public camera: Camera,
    public translateService: TranslateService) {
    this.form = formBuilder.group({
      eid: ['', Validators.required],
      uname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      pass: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(10), Validators.required])],
      gender: ['', Validators.required],
      mobile: ['', Validators.required],
      myDate: ['', Validators.required],
      profilePic: ['', Validators.required]
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
  image: any;
  token: string = "user";

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
      const toast = this.toastCtrl.create({
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

  onClick() {
    if (!this.form.valid) { return; }
    const fd = new FormData();
    fd.append("user_id", this.eid);
    fd.append("user_name", this.uname);
    fd.append("user_pass", this.pass);
    fd.append("image", this.selectedFile, this.selectedFile.name);
    fd.append("gender", this.gender);
    fd.append("user_mob_no", this.mobile);
    fd.append("user_bdate", this.myDate);
    fd.append("token", "user");
    alert(this.eid);
    console.log(fd);
    console.log(this.token);
    this.data.addUser(fd).subscribe(
      (data: any) => {
        alert("done");
        console.log(data);
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }
}
