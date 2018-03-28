import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { Storage } from "@ionic/storage";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as moment from 'moment';

import { EventDbProvider } from "../../providers/event-db/event-db";
import { Events_Class } from "../../shared/event_class";
import { Community_Class } from "../settings/community_class";
import { ComminityDbTsProvider } from "../../providers/community-db/community-db";

//import { DateValidator } from "./event_date";

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

  today: string;

  arr: Community_Class[] = [];
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
  event_verify: any = "true";

  selectedFile: File = null;

  constructor(public http: HttpClient
    , public storage: Storage,
    public _data: EventDbProvider,
    public _data1: ComminityDbTsProvider,
    public load: LoadingController,
    public tos: ToastController,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    formBuilder: FormBuilder,
    public camera: Camera) {
    this.form = formBuilder.group({
      profilePic: [''],
      event_name: ['', Validators.required],
      event_des: ['', Validators.compose([Validators.minLength(15), Validators.required])],
      event_s_time: ['', Validators.required],
      event_e_time: ['', Validators.required],
      event_date: ['', Validators.required],
      event_loc: ['', Validators.compose([Validators.minLength(10), Validators.required])],
      community_id: ['', Validators.required]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

    // this.today = moment().startOf('day').format('DD/MMMM/YYYY');
    this.today = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString();
  }

  ionViewDidLoad() {

    this._data1.getAllCommunities().subscribe(
      (data: Community_Class[]) => {
        this.arr = data;
      },
      function (e) {
        alert(e);
      },
      function () {

      }
    )

  }

  /* onAdd() {
 
     this.storage.get('uid').then((val) => {
       this.created_by = val;
       let l1 = this.load.create({
         content: 'Creating ...'
       });
       l1.present();
       let t1 = this.tos.create({
         duration: 3000,
         message: "Added ..."
       })
       this._data.addEvent(new Events_Class(this.event_id, this.event_name, this.event_des, this.event_pic, this.event_s_time, this.event_e_time, this.event_date, this.event_loc, this.created_by, this.community_id, 'true')).subscribe(
         (data: any) => {
           this.navCtrl.pop();
           t1.present();
         },
         function (e) {
           alert(e);
         },
         function () {
           l1.dismiss();
         }
       );
     });
   }*/

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
    this.storage.get('uid').then((val) => {
      this.created_by = val;
      let l1 = this.load.create({
        content: 'Creating ...'
      });
      l1.present();
      let t1 = this.tos.create({
        duration: 3000,
        message: "Added ..."
      })
      /*this._data.addEvent(new Events_Class(this.event_id, this.event_name, this.event_des, this.event_pic, this.event_s_time, this.event_e_time, this.event_date, this.event_loc, this.created_by, this.community_id, 'true')).subscribe(
        (data: any) => {
          this.viewCtrl.dismiss();
          t1.present();
        },
        function (e) {
          alert(e);
        },
        function () {
          l1.dismiss();
        }
      );*/
      const fd = new FormData();
      fd.append("event_id", this.event_id);
      fd.append("event_name", this.event_name);
      fd.append("event_des", this.event_des);
      fd.append("image", this.selectedFile, this.selectedFile.name);
      fd.append("event_s_time", this.event_s_time);
      fd.append("event_e_time", this.event_e_time);
      fd.append("event_date", this.event_date);
      fd.append("event_loc", this.event_loc);
      fd.append("fk_user_id", this.created_by);
      fd.append("fk_comm_id", this.community_id);
      fd.append("event_verify", "true");

      /*this.http.post("http://localhost:3000/event/", fd).subscribe(
        (data: any) => {
          console.log(data);
          console.log(this.selectedFile);
          console.log(this.selectedFile.name);
          this.viewCtrl.dismiss();
          t1.present();
        },
        function (e) {
          alert(e);
        },
        function () {
          l1.dismiss();
        }
      )*/
      this._data.addEvent(fd).subscribe(
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
    });
    // this.viewCtrl.dismiss(this.form.value);
  }
}
