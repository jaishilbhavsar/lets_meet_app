import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { Event_Community_Class } from '../../shared/event_community_class';
import { Events_User_Class } from '../../shared/event_user_class';
import { EventDbProvider } from '../../providers/event-db/event-db';
import { Storage } from "@ionic/storage";
import { ComminityDbTsProvider } from '../../providers/community-db/community-db';
import { Camera } from '@ionic-native/camera';
import { Community_Class } from '../settings/community_class';
import { Events_Class, Event_update_class } from '../../shared/event_class';

/**
 * Generated class for the EditeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editevent',
  templateUrl: 'editevent.html',
})
export class EditeventPage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  today: string;

  arr: Events_Class[] = [];
  arrCommu: Community_Class[] = [];
  event_id: any = null;
  event_name: string = "";
  event_des: string = "";
  event_s_time: any;
  event_e_time: any;
  event_date: any;
  event_loc: string = "";
  created_by: string = "";
  event_pic: string = "";
  community_id: any;
  event_verify: any = "false";

  selectedFile: File = null;

  constructor(public storage: Storage,
    public _data: EventDbProvider,
    public _data1: ComminityDbTsProvider,
    public load: LoadingController,
    public tos: ToastController,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    formBuilder: FormBuilder,
    public camera: Camera
  ) {
    this.form = formBuilder.group({
      profilePic: ['', Validators.required],
      event_name: ['', Validators.required],
      event_des: ['', Validators.compose([Validators.minLength(15), Validators.required])],
      event_s_time: ['', Validators.required],
      event_e_time: ['', Validators.required],
      event_date: ['', Validators.required],
      event_loc: ['', Validators.compose([Validators.minLength(10), Validators.required])],
      community_id: ['', Validators.required]
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

    this.today = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString();
  }
  e_id: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditeventPage');
    this.e_id = this.navParams.get('e_id');
    this._data.getEventById(this.e_id).subscribe(
      (d: Events_User_Class[]) => {
        this.arr = d;
        console.log(this.arr);
        this.event_name = this.arr[0].event_name;
        this.event_des = this.arr[0].event_des;
        this.event_pic = this.arr[0].event_pic;
        this.event_s_time = this.arr[0].event_s_time;
        this.event_e_time = this.arr[0].event_e_time;
        this.event_date = this.arr[0].event_date;
        this.event_loc = this.arr[0].event_loc;
        this.created_by = this.arr[0].fk_user_id;
        this.community_id = this.arr[0].fk_comm_id;
      }
    );

    this._data1.getAllCommunities().subscribe(
      (data: Community_Class[]) => {
        this.arrCommu = data;
      },
      function (e) {
        alert(e);
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
    this.storage.get('uid').then(
      (val) => {
        this.created_by = val;
        let l1 = this.load.create({
          content: 'Updating ...'
        });
        l1.present();
        let t1 = this.tos.create({
          duration: 3000,
          message: "Updated ..."
        });

        if (this.selectedFile === null) {
          this._data.updateEventOnly(new Event_update_class(this.e_id, this.event_name, this.event_des, this.event_s_time, this.event_e_time, this.event_date, this.event_loc, this.community_id)).subscribe(
            (data: any) => {
              console.log(data);
              this.viewCtrl.dismiss();
              t1.present();
            },
            function (e) {
              alert(e);
            },
            function () {
              l1.dismiss();
            }
          );
        } else {
          const fd = new FormData();
          fd.append("event_id", this.e_id);
          fd.append("event_name", this.event_name);
          fd.append("event_des", this.event_des);
          fd.append("image", this.selectedFile, this.selectedFile.name);
          fd.append("event_s_time", this.event_s_time);
          fd.append("event_e_time", this.event_e_time);
          fd.append("event_date", this.event_date);
          fd.append("event_loc", this.event_loc);
          fd.append("fk_user_id", this.created_by);
          fd.append("fk_comm_id", this.community_id);
          fd.append("event_verify", "false");

          this._data.editEvent(fd).subscribe(
            (data: any) => {
              console.log(data);
              this.viewCtrl.dismiss();
              t1.present();
            },
            function (e) {
              alert(e);
            },
            function () {
              l1.dismiss();
            }
          )
        }
      }
    );
  }
}