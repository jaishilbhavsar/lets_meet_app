import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { Camera } from '@ionic-native/camera';
import { DatePicker } from '@ionic-native/date-picker';
import { FileChooser } from '@ionic-native/file-chooser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';

import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/providers';
import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import { MyApp } from './app.component';

import { UsersPage } from "../pages/users/users";
import { StoriesPage } from "../pages/stories/stories";
import { StoryDetailPage } from "../pages/story-detail/story-detail";
import { CreateStoryPage } from "../pages/create-story/create-story";
import { CreateCommunityPage } from "../pages/create-community/create-community";
import { ViewEventPage } from "../pages/view-event/view-event";
import { ViewCommunityPage } from "../pages/view-community/view-community";
import { LoginproProvider } from '../providers/loginpro/loginpro';
import { ComminityDbTsProvider } from "../providers/community-db/community-db";
import { EventDbProvider } from '../providers/event-db/event-db';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { EventCommunityDbProvider } from '../providers/event-community-db/event-community-db';
import { RsvpDbProvider } from '../providers/rsvp-db/rsvp-db';
import { PostDbProvider } from '../providers/post-db/post-db';
import { ViewPostPage } from "../pages/view-post/view-post";
import { CreatePostPage } from "../pages/create-post/create-post";
import { CommunityMemberDbProvider } from '../providers/community-member-db/community-member-db';
import { FollowerPage } from '../pages/follower/follower';
import { FollowingPage } from '../pages/following/following';
import { CommunityCommMemberProvider } from '../providers/community-comm-member/community-comm-member';
import { CommentDbProvider } from '../providers/comment-db/comment-db';
import { LikeDbProvider } from '../providers/like-db/like-db';
import { FeedbackDbProvider } from '../providers/feedback-db/feedback-db';
import { StoryDbProvider } from '../providers/story-db/story-db';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    StoryDetailPage,
    CreateStoryPage,
    CreateCommunityPage,
    ViewEventPage,
    ViewCommunityPage,
    EditprofilePage,
    ViewPostPage,
    CreatePostPage,
    FollowerPage,
    FollowingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StoryDetailPage,
    CreateStoryPage,
    CreateCommunityPage,
    ViewEventPage,
    ViewCommunityPage,
    EditprofilePage,
    ViewPostPage,
    CreatePostPage,
    FollowerPage,
    FollowingPage
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    FileChooser,
    SplashScreen,
    StatusBar,
    DatePicker,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginproProvider,
    ComminityDbTsProvider,
    EventDbProvider,
    EventCommunityDbProvider,
    RsvpDbProvider,
    PostDbProvider,
    CommunityMemberDbProvider,
    CommunityCommMemberProvider,
    CommentDbProvider,
    LikeDbProvider,
    FeedbackDbProvider,
    StoryDbProvider
  ]
})
export class AppModule { }