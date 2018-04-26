import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { FileChooser } from '@ionic-native/file-chooser';
//import { RadioButton } from 'ionic-angular/components/radio/radio-button';
import { LoginproProvider } from '../../providers/loginpro/loginpro';
import { Camera } from '@ionic-native/camera';
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private signupErrorString: string;

  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  form: FormGroup;
  selectedFile: File = null;

  constructor(public data: LoginproProvider,
    formBuilder: FormBuilder,
    private fileChooser: FileChooser,
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
      image: ['', Validators.required]
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  eid: string = "zeel9@gmail.com";
  uname: string = "Zeel";
  pass: string = "123456";
  gender: string = "Female";
  mobile: string = "8460816553";
  myDate: any;
  image: any;

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'image': 'data:image/jpg;base64,' + data });
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
      this.form.patchValue({ 'image': imageData });
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
    return 'url(' + this.form.controls['image'].value + ')'
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {

      this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
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
    /*  fd.append("token", "");
     fd.append("verify", ""); */
    alert(this.eid);
    console.log(fd);
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
    /* this.data.addUser(this.eid, this.uname, this.pass, this.image, this.gender, this.mobile, this.myDate).subscribe(
      (resp) => { alert("Success") },
      (err) => alert("Signup Later")
    ); */
  }
  onfile() {
    this.fileChooser.open().then(uri => console.log(uri))
      .catch(e => console.log(e));;
  }
  onbirth() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }
}
