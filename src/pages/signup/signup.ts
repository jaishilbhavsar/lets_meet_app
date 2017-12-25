import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { FileChooser } from '@ionic-native/file-chooser';
import { RadioButton } from 'ionic-angular/components/radio/radio-button';
import { LoginproProvider } from '../../providers/loginpro/loginpro';
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

  constructor(public data:LoginproProvider,private fileChooser: FileChooser,private datePicker: DatePicker,public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  eid:string="";
  uname:string="";
  pass:string="";
  g:string;
  gender:string="";
  mobile:string="";
  myDate:Date;
  image:string="abcde";
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
  onClick()
  {
    this.data.addUser(this.eid,this.uname,this.pass,this.image,this.gender,this.mobile,this.myDate).subscribe(
      (resp)=>{alert("Success")},
      (err)=>alert("Signup Later")
    );
  }
  onfile()
  {
    this.fileChooser.open().then(uri => console.log(uri))
    .catch(e => console.log(e));;
  }
  onbirth()
  {
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
