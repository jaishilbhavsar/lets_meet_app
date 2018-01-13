import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Community_Class } from "./community_class";
import { ComminityDbTsProvider } from "../../providers/community-db/community-db";
import { ViewCommunityPage } from "../view-community/view-community";
import { Comm_member_class } from "../../shared/comm_member_class";
import { Community_comm_member } from "../../shared/community_comm_member_class";
import { CommunityCommMemberProvider } from "../../providers/community-comm-member/community-comm-member";


import { Settings } from '../../providers/providers';

import { CreateCommunityPage } from "../create-community/create-community";
import { CommunityMemberDbProvider } from '../../providers/community-member-db/community-member-db';
import { Storage } from '@ionic/storage';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  arr: Community_Class[] = [];
  arr1: Community_Class[] = [];
  user_id: string = "";
  txtsearch: string = '';
  flag: boolean = false;
  // Our local settings object
  options: any;


  addCommunity() {
    this.navCtrl.push(CreateCommunityPage);
  }

  settingsReady = false;

  form: FormGroup;

  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  subSettings: any = SettingsPage;

  constructor(public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService,
    public _data: ComminityDbTsProvider,
    public load: LoadingController,
    public toast: ToastController,
    public comm_member: CommunityMemberDbProvider,
    public storage: Storage,
    public community_comm_member: CommunityCommMemberProvider) {
  }

  _buildForm() {
    let group: any = {
      option1: [this.options.option1],
      option2: [this.options.option2],
      option3: [this.options.option3]
    };

    switch (this.page) {
      case 'main':
        break;
      case 'profile':
        group = {
          option4: [this.options.option4]
        };
        break;
    }
    this.form = this.formBuilder.group(group);

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.settings.merge(this.form.value);
    });
  }

  ionViewDidLoad() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});

    let l1 = this.load.create({
      content: "Loading..."
    });
    l1.present();

    this._data.getAllCommunities().subscribe(

      (data: any) => {
        this.arr = data;
        this.arr1 = data;

      },
      function (err) {
        alert(err);
      },
      function () {

        l1.dismiss();
      }

    );


  }

  ionViewWillEnter() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});

    this.page = this.navParams.get('page') || this.page;
    this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;

    this.translate.get(this.pageTitleKey).subscribe((res) => {
      this.pageTitle = res;
    })

    this.settings.load().then(() => {
      this.settingsReady = true;
      this.options = this.settings.allSettings;

      this._buildForm();
    });
  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }

  onSearch() {

    if (this.txtsearch != '') {
      this.arr = this.arr.filter((x) => x.comm_name.startsWith(this.txtsearch))
    }
    else {
      this.arr = this.arr1;
    }


  }

  onSearchIcon() {
    if (this.flag == true) {
      this.flag = false;
    }
    else {
      this.flag = true;
    }
  }

  onView(comm_id) {
    this.navCtrl.push(ViewCommunityPage, { c_id: comm_id });
  }
}
