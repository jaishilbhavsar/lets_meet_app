import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { FirstRunPage, MainPage } from '../pages/pages';
import { Settings } from '../providers/providers';
import { UsersPage } from "../pages/users/users";
import { StoriesPage } from "../pages/stories/stories";

import { StoryDetailPage } from "../pages/story-detail/story-detail";
import { CreateStoryPage } from "../pages/create-story/create-story";
import { CreateCommunityPage } from "../pages/create-community/create-community";
import { ViewEventPage } from "../pages/view-event/view-event";
import { ViewCommunityPage } from "../pages/view-community/view-community";
import { ViewPostPage } from "../pages/view-post/view-post";
import { CreatePostPage } from "../pages/create-post/create-post";
import { EditPostPage } from "../pages/edit-post/edit-post";
import { ViewPastEventPage } from "../pages/view-past-event/view-past-event";
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { FollowerPage } from '../pages/follower/follower';
import { FollowingPage } from '../pages/following/following';
import { ViewuserPage } from '../pages/viewuser/viewuser';


@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;
  public alertShown: boolean = false;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Tutorial', component: 'TutorialPage' },
    { title: 'Welcome', component: 'WelcomePage' },
    { title: 'Tabs', component: 'TabsPage' },
    // { title: 'Cards', component: 'CardsPage' },
    { title: 'Content', component: 'ContentPage' },
    { title: 'Login', component: 'LoginPage' },
    { title: 'Signup', component: 'SignupPage' },
    { title: 'Master Detail', component: 'ListMasterPage' },
    { title: 'Menu', component: 'MenuPage' },
    { title: 'Settings', component: 'SettingsPage' },
    { title: 'Search', component: 'SearchPage' },
    { title: 'Stories', component: 'StoriesPage' },
    { title: 'Users', component: 'UsersPage' },
    { title: 'StoriesDetail', component: 'StoryDetailPage' },
    { title: 'AddStory', component: 'CreateStoryPage' },
    { title: 'AddCommunity', component: 'CreateCommunityPage' },
    { title: 'ViewEvent', component: 'ViewEventPage' },
    { title: 'ViewCommunity', component: 'ViewCommunityPage' },
    { title: 'ViewPost', component: 'ViewPostPage' },
    { title: 'CreatePost', component: 'CreatePostPage' },
    { title: 'EditPost', component: 'EditPostPage' },
    { title: 'PastEvent', component: 'ViewPastEventPage' },
    { title: 'EditProfile', component: 'EditprofilePage' },
    { title: 'Follower', community: 'FollowerPage' },
    { title: 'Following', component: 'FollowingPage' },
    { title: 'ViewUser', component: 'ViewuserPage' }
  ]

  constructor(private translate: TranslateService,
    private platform: Platform,
    settings: Settings,
    private config: Config,
    private storage: Storage,
    private statusBar: StatusBar,
    public alertCtrl: AlertController,
    private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.show();
      if (this.storage.get('uid') != null) {
        this.rootPage = MainPage;
      }
      this.platform.resume;
      platform.registerBackButtonAction(() => {
        if (this.alertShown == false) {
          this.presentConfirm();
        }
      })
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Exit',
      message: 'Do you want Exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.alertShown = false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.platform.exitApp();
          }
        }
      ]
    });
    alert.present().then(() => {
      this.alertShown = true;
    });
  }
}
