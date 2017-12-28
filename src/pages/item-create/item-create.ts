import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { Storage } from "@ionic/storage";

import { EventDbProvider } from "../../providers/event-db/event-db";
import { Events_Class } from "../../shared/event_class";

@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  event_id: number = null;
  event_name: string = "";
  event_des: string = "";
  event_s_time: DateTime;
  event_e_time: DateTime;
  event_date: DateTime;
  event_loc: string = "";
  created_by: string = "";
  event_pic: string = "";

  constructor(public storage: Storage,
    public _data: EventDbProvider,
    public load: LoadingController,
    public tos: ToastController,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    formBuilder: FormBuilder,
    public camera: Camera) {
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

  ionViewDidLoad() {

  }

  onAdd() {

    this.storage.get('uid').then((val) => {
      this.created_by = val;
      let l1 = this.load.create({
        content: 'Creating ...'
      });
      l1.present();
      let t1=this.tos.create({
        duration:3000,
        message:"Added ..."
      })
      this._data.addEvent(new Events_Class(this.event_id, this.event_name, this.event_des, this.event_pic, this.event_s_time, this.event_e_time, this.event_date, this.event_loc, this.created_by, 1, 'true')).subscribe(
        (data:any)=>{
          this.navCtrl.pop();
          t1.present();
        },
        function(e){
          alert(e);
        },
        function(){
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
}
