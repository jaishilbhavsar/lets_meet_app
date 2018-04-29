import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Event_Community_Class } from '../../shared/event_community_class';
import { Events_User_Class } from '../../shared/event_user_class';
import { EventDbProvider } from '../../providers/event-db/event-db';
import { Storage } from "@ionic/storage";

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

  constructor(public _dataEvent: EventDbProvider,
    public navCtrl: NavController,
    formBuilder: FormBuilder,
    public navParams: NavParams,
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
  viewEvent: string = "event_detail";
  arr: Events_User_Class[];
  event_community: Event_Community_Class[];
  e_id: number;

  user_id: string = "";
  e_pic: string = "";
  u_id: string = "";
  e_date: any;
  e_Str: string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditeventPage');
    this.e_id = this.navParams.get('e_id');
    this._dataEvent.getEventById(this.e_id).subscribe(
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
        this.created_by = this.arr[0].user_name;
        this.u_id = this.arr[0].user_id;
        this.e_date = this.event_date;
        this.e_Str = new String(this.e_date).toString();
      }
    );
  }
}