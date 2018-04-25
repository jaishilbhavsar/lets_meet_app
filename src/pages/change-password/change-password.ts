import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginproProvider } from "../../providers/loginpro/loginpro";
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  newPass: string = "";
  conNewPass: string = "";
  uid: string = "";

  form: FormGroup;

  isReadyToSave: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public _dataUser: LoginproProvider,
    formBuilder: FormBuilder,
    public storage: Storage) {
    this.form = formBuilder.group({

      newPass: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(12), Validators.required])],
      conNewPass: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(12), Validators.required])]
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

  changePass() {
    if (!this.form.valid) { return; }
    this.storage.get('uid').then((val) => {
      this.uid = val;
      alert(this.uid);
      this._dataUser.change(this.uid, this.conNewPass).subscribe(
        (data: any) => {
          this.navCtrl.pop();
        },
        function (e) {
          alert(e);
        },
        function () {

        }
      );
    });
  }
}
