webpackJsonp([3],{

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
<<<<<<< HEAD
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__(388);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(387);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(388);
>>>>>>> beb4ec7163958b0ebf0f49223c131a007f1cb8d7
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(127);
>>>>>>> 4d5e63fc115855788cfae0ccd3d53628855515d2
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorialPageModule = (function () {
    function TutorialPageModule() {
    }
    return TutorialPageModule;
}());
TutorialPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]
        ]
    })
], TutorialPageModule);

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__follower_follower__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editprofile_editprofile__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loginpro_loginpro__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_db_event_db__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_loading_loading_controller__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__following_following__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__change_password_change_password__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_community_member_db_community_member_db__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__view_event_view_event__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__view_past_event_view_past_event__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__view_community_view_community__ = __webpack_require__(123);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(127);
>>>>>>> 4d5e63fc115855788cfae0ccd3d53628855515d2
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



<<<<<<< HEAD












/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsersPage = (function () {
    function UsersPage(alert, menu, data, _dataEvent, _DataCommu, load, storage, platform, modalCtrl, navCtrl, viewCtrl, appCtrl, navParams) {
        this.alert = alert;
        this.menu = menu;
        this.data = data;
        this._dataEvent = _dataEvent;
        this._DataCommu = _DataCommu;
        this.load = load;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.navParams = navParams;
        this.followers = [];
        this.followings = [];
        this.ed = "";
        this.u = [];
        this.eid = "";
        this.uid = "";
        this.img = "";
        this.usr = "upc";
        this.segme = "events";
        this.isAndroid = false;
        this.arrUpc = [];
        this.arrPast = [];
        this.arrCommu = [];
        this.id = "";
        this.newpassword = "";
        this.oldpassword = "";
        this.isAndroid = platform.is('android');
    }
    UsersPage.prototype.ionViewDidLoad = function () {
=======
var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, translate, platform) {
>>>>>>> 4d5e63fc115855788cfae0ccd3d53628855515d2
        var _this = this;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.platform = platform;
        this.showSkip = true;
        this.dir = 'ltr';
        this.dir = platform.dir();
        translate.get(["TUTORIAL_SLIDE1_TITLE",
            "TUTORIAL_SLIDE1_DESCRIPTION",
            "TUTORIAL_SLIDE2_TITLE",
            "TUTORIAL_SLIDE2_DESCRIPTION",
            "TUTORIAL_SLIDE3_TITLE",
            "TUTORIAL_SLIDE3_DESCRIPTION",
        ]).subscribe(function (values) {
            console.log('Loaded values', values);
            _this.slides = [
                {
                    title: 'Discover Events Happening in Your City',
                    description: '',
                    // image: 'assets/img/08248dc6-34f4-4d59-8383-f0f494c6b46f.png',
                    image: '../assets/img/39796049-798f-4881-ad98-a5d7717e9729.png',
                },
                {
                    title: values.TUTORIAL_SLIDE2_TITLE,
                    description: "Join Let's Meet and make your life Happening ",
                    image: 'assets/img/ica-slidebox-img-2.png',
                },
                {
                    title: values.TUTORIAL_SLIDE3_TITLE,
                    description: values.TUTORIAL_SLIDE3_DESCRIPTION,
                    image: 'assets/img/ica-slidebox-img-3.png',
                }
            ];
        });
    }
    TutorialPage.prototype.startApp = function () {
        this.navCtrl.setRoot('WelcomePage', {}, {
            animate: true,
            direction: 'forward'
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
<<<<<<< HEAD
    UsersPage.prototype.onCLickUpcEvent = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__view_event_view_event__["a" /* ViewEventPage */], { e_id: id });
    };
    UsersPage.prototype.onCLickPastEvent = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__view_past_event_view_past_event__["a" /* ViewPastEventPage */], { e_id: id });
    };
    UsersPage.prototype.onCLickCommu = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__view_community_view_community__["a" /* ViewCommunityPage */], { c_id: id });
=======
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
>>>>>>> 4d5e63fc115855788cfae0ccd3d53628855515d2
    };
    return TutorialPage;
}());
TutorialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tutorial',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\tutorial\tutorial.html"*/'<ion-header no-shadow>\n\n  <ion-navbar color="signcolor">\n\n    <ion-buttons end *ngIf="showSkip">\n\n      <button ion-button (click)="startApp()" color="white">{{ \'TUTORIAL_SKIP_BUTTON\' | translate}}</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n  <ion-slides pager="true" dir="{{dir}}" (ionSlideWillChange)="onSlideChangeStart($event)">\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image" />\n\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      <p [innerHTML]="slide.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image" />\n\n      <h2 class="slide-title">{{ \'TUTORIAL_SLIDE4_TITLE\' | translate }}</h2>\n\n      <button ion-button icon-end large clear (click)="startApp()">\n\n        {{ \'TUTORIAL_CONTINUE_BUTTON\' | translate }}\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\tutorial\tutorial.html"*/
    }),
<<<<<<< HEAD
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* MenuController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_loginpro_loginpro__["a" /* LoginproProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_loginpro_loginpro__["a" /* LoginproProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_event_db_event_db__["a" /* EventDbProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_event_db_event_db__["a" /* EventDbProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_11__providers_community_member_db_community_member_db__["a" /* CommunityMemberDbProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__providers_community_member_db_community_member_db__["a" /* CommunityMemberDbProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* Platform */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* ModalController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["p" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["p" /* ViewController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* App */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* NavParams */]) === "function" && _o || Object])
], UsersPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
// @Component({
//   template: `
// <ion-header>
//   <ion-toolbar>
//     <ion-title>
//       Description
//     </ion-title>
//     <ion-buttons start>
//       <button ion-button (click)="dismiss()">
//         <span ion-text color="primary" showWhen="ios">Cancel</span>
//         <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
//       </button>
//     </ion-buttons>
//   </ion-toolbar>
// </ion-header>
// <ion-content>
//   <ion-list>
//       <ion-item>
//         <ion-avatar item-start>
//           <img src="{{character.image}}">
//         </ion-avatar>
//         <h2>{{character.name}}</h2>
//         <p>{{character.quote}}</p>
//       </ion-item>
//   </ion-list>
// </ion-content>
// `
// })
// export class ModalContentPage {
//   character;
//   constructor(
//     public platform: Platform,
//     public params: NavParams,
//     public viewCtrl: ViewController
//   ) {
//     var characters = [
//       {
//         name: 'Gollum',
//         quote: 'Sneaky little hobbitses!',
//         image: 'assets/img/avatar-gollum.jpg'
//       }
//     ];
//   }
//   dismiss() {
//     this.viewCtrl.dismiss();
//   }
// }
//# sourceMappingURL=users.js.map
=======
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], TutorialPage);

//# sourceMappingURL=tutorial.js.map
>>>>>>> 4d5e63fc115855788cfae0ccd3d53628855515d2

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPastEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_db_event_db__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_event_community_db_event_community_db__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_rsvp_class__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rsvp_db_rsvp_db__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_community_view_community__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_feedback_db_feedback_db__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_loginpro_loginpro__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_feedback_class__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the ViewPastEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewPastEventPage = (function () {
    function ViewPastEventPage(storage, load, tos, socialSharing, alerCtrl, _dataEvent, _dataRSVP, _dataEventComm, _dataFeedback, _dataUser, navCtrl, navParams, viewCtrl) {
        this.storage = storage;
        this.load = load;
        this.tos = tos;
        this.socialSharing = socialSharing;
        this.alerCtrl = alerCtrl;
        this._dataEvent = _dataEvent;
        this._dataRSVP = _dataRSVP;
        this._dataEventComm = _dataEventComm;
        this._dataFeedback = _dataFeedback;
        this._dataUser = _dataUser;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.viewEvent = "event_detail";
        this.event_name = "";
        this.event_des = "";
        this.event_s_time = null;
        this.event_e_time = null;
        this.event_date = null;
        this.event_loc = "";
        this.created_by = "";
        this.event_pic = "";
        this.user_id = "";
        this.e_pic = "";
        this.comm_name = "";
        this.comm_pic = "";
        this.rsvp_id = [];
        this.event_rsvp_user = [];
        this.feedback_event_user = [];
        this.arrUser = [];
        this.flag1 = true;
        this.feed_des = "";
    }
    ViewPastEventPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ViewEventPage');
        this.e_id = this.navParams.get('e_id');
        this._dataEvent.getEventById(this.e_id).subscribe(function (d) {
            _this.arr = d;
            _this.event_name = _this.arr[0].event_name;
            _this.event_des = _this.arr[0].event_des;
            _this.event_pic = _this.arr[0].event_pic;
            _this.event_s_time = _this.arr[0].event_s_time;
            _this.event_e_time = _this.arr[0].event_e_time;
            _this.event_date = _this.arr[0].event_date;
            _this.event_loc = _this.arr[0].event_loc;
            _this.created_by = _this.arr[0].fk_user_id;
        }, function (e) {
            alert(e);
        }, function () {
        });
        this._dataEventComm.getCommunityByEventId(this.e_id).subscribe(function (data) {
            _this.event_community = data;
            _this.comm_id = _this.event_community[0].comm_id;
            _this.comm_name = _this.event_community[0].comm_name;
            _this.comm_pic = _this.event_community[0].comm_pic;
        }, function (e) {
            alert(e);
        }, function () {
        });
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            _this._dataRSVP.checkRSVPOfEvent(_this.user_id, _this.e_id).subscribe(function (data) {
                if (data == "") {
                    //alert("baki");
                    _this.join_button = true;
                    _this.going_button = false;
                }
                else {
                    _this.join_button = false;
                    _this.going_button = true;
                }
            }, function (e) {
                alert(e);
            }, function () {
            });
        });
        this._dataRSVP.countRSVP(this.e_id).subscribe(function (data) {
            //this.cnt_rsvp = data[0].count;
            _this.event_rsvp_user = data;
            _this.cnt_rsvp = _this.event_rsvp_user.length;
        }, function (err) {
            alert(err);
        }, function () {
        });
        //alert(this.e_id);
        this._dataFeedback.getFeedbacksByEvent(this.e_id).subscribe(function (data) {
            _this.feedback_event_user = data;
            //console.log(this.feedback_event_user);
        }, function (err) {
            alert(err);
        }, function () {
        });
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            _this._dataUser.getUser(_this.user_id).subscribe(function (data) {
                _this.arrUser = data;
                _this.user_pic = _this.arrUser[0].user_pic;
                _this.user_name = _this.arrUser[0].user_name;
            }, function (err) {
                alert(err);
            }, function () {
            });
        });
    };
    ViewPastEventPage.prototype.changeFlag = function () {
        if (this.flag1 == true) {
            this.flag1 = false;
        }
        else {
            this.flag1 = true;
        }
    };
    ViewPastEventPage.prototype.onRSVP = function () {
        var _this = this;
        console.log(this.user_id);
        console.log(this.e_id);
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            var l1 = _this.load.create({
                content: 'Joining ...'
            });
            l1.present();
            var t1 = _this.tos.create({
                duration: 3000,
                message: "Joined ..."
            });
            _this._dataRSVP.addRSVP(new __WEBPACK_IMPORTED_MODULE_5__shared_rsvp_class__["a" /* RSVP_Class */](null, _this.user_id, _this.e_id)).subscribe(function (data) {
                t1.present();
                _this.join_button = false;
                _this.going_button = true;
                //his.arrRsvp = data;
                //this.rsvp_id = this.arrRsvp.RSVP_id;
                //alert(this.rsvp_id);
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        });
    };
    ViewPastEventPage.prototype.onClickRSVP = function () {
        var _this = this;
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            var l1 = _this.load.create({
                content: 'Joining ...'
            });
            l1.present();
            _this._dataRSVP.checkRSVPOfEvent(_this.user_id, _this.e_id).subscribe(function (data) {
                if (data == "") {
                    _this.onRSVP();
                }
                else {
                    var t1 = _this.tos.create({
                        duration: 3000,
                        message: "You're Going ..."
                    });
                    t1.present();
                    _this.arrRsvp = data;
                    // this.rsvp_id = this.arrRsvp.RSVP_id;
                    //alert(this.rsvp_id);
                }
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        });
    };
    ViewPastEventPage.prototype.onRemoveRSVP = function () {
        var _this = this;
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            var l1 = _this.load.create({
                content: 'Removing ...'
            });
            l1.present();
            var t1 = _this.tos.create({
                duration: 3000,
                message: "Removed ..."
            });
            _this._dataRSVP.checkRSVPOfEvent(_this.user_id, _this.e_id).subscribe(function (data) {
                if (data == "") {
                    alert("nathi");
                }
                else {
                    _this.arrRsvp = data;
                    //console.log(data);
                    //console.log(this.arrRsvp[0].RSVP_id);
                    _this._dataRSVP.deleteRSVP(_this.arrRsvp[0].RSVP_id).subscribe(function (data) {
                        //alert("thyu");
                        _this.join_button = true;
                        _this.going_button = false;
                    }, function (err) {
                        alert(err);
                    }, function () {
                    });
                }
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
                t1.present();
            });
        });
    };
    ViewPastEventPage.prototype.doConfirm = function () {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'Not going?',
            message: "Are you sure you don't want to attend this event?",
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        _this.onRemoveRSVP();
                    }
                }
            ]
        });
        confirm.present();
    };
    ViewPastEventPage.prototype.onView = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__view_community_view_community__["a" /* ViewCommunityPage */], { c_id: this.comm_id });
    };
    ViewPastEventPage.prototype.newFeedback = function () {
        var _this = this;
        if (this.feed_des.length > 0) {
            var l1_1 = this.load.create({
                content: 'Adding Feedback ...'
            });
            l1_1.present();
            this.storage.get('uid').then(function (val) {
                _this.user_id = val;
                _this._dataFeedback.addFeedback(new __WEBPACK_IMPORTED_MODULE_11__shared_feedback_class__["a" /* Feedback_Class */](null, _this.feed_des, _this.e_id, _this.user_id, null)).subscribe(function (d) {
                    _this.flag1 = true;
                    _this.feed_des = "";
                    _this.ionViewDidLoad();
                }, function (err) {
                    alert(err);
                }, function () {
                    l1_1.dismiss();
                });
            });
        }
        else {
            this.flag1 = true;
        }
    };
    ViewPastEventPage.prototype.deleteFeedback = function (id) {
        var _this = this;
        var t1 = this.tos.create({
            duration: 3000,
            message: "Deleted ..."
        });
        this._dataFeedback.deleteFeedback(id).subscribe(function (d) {
            _this.ionViewDidLoad();
            t1.present();
        }, function (err) {
            alert(err);
        }, function () {
        });
    };
    ViewPastEventPage.prototype.onSharing = function () {
        this.e_pic = "https://letsmeetbackend.herokuapp.com/public/images/events/" + this.event_pic;
        this.socialSharing.share(this.event_des, this.event_name).
            catch(function (err) { return alert(err); });
    };
    return ViewPastEventPage;
}());
ViewPastEventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-view-past-event',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\view-past-event\view-past-event.html"*/'<!--\n  Generated template for the ViewPastEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-navbar>\n      <ion-title></ion-title>\n    </ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onSharing()">\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item (click)="onView()">\n    <ion-avatar item-start>\n      <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{comm_pic}}">\n    </ion-avatar>\n    <h2>{{comm_name}}</h2>\n    <!--<p>November 5, 1955</p>-->\n  </ion-item>\n\n  <img src="https://letsmeetbackend.herokuapp.com/images/events/{{event_pic}}" />\n  <h1>{{event_name}}</h1>\n  <ion-item *ngIf="join_button">\n    <h2>Are you going?</h2>\n    <ion-buttons end>\n      <button small ion-button icon-only (click)="onClickRSVP()" color="success">\n        <ion-icon name="checkmark-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-item>\n\n  <ion-item *ngIf="going_button">\n    <h2>You\'re going!</h2>\n    <ion-buttons end>\n      <button ion-button small icon-only (click)="doConfirm()" color="danger">\n        <ion-icon name="close-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-item>\n\n  <div padding>\n    <ion-segment [(ngModel)]="viewEvent">\n      <ion-segment-button value="event_detail">\n        Details\n      </ion-segment-button>\n      <ion-segment-button value="feedback">\n        Feedback\n      </ion-segment-button>\n      <ion-segment-button value="going_cnt">\n        {{cnt_rsvp}} are going\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="viewEvent">\n    <ion-list *ngSwitchCase="\'event_detail\'">\n      <ion-item>\n        <h3>\n          <ion-icon name="calendar"></ion-icon> {{event_date | date:\'dd-MM-yy\' }}</h3>\n      </ion-item>\n\n      <ion-item>\n        <h4>\n          <ion-icon name="time"></ion-icon> {{event_s_time}} - {{event_e_time}}</h4>\n      </ion-item>\n\n      <ion-item>\n        <h3 class="text-wrap">\n          <ion-icon name="navigate"></ion-icon> {{event_loc}}</h3>\n      </ion-item>\n\n      <ion-item>\n        <h3>\n          <ion-icon name="person"> Hosted by</ion-icon> {{created_by}}\n        </h3>\n      </ion-item>\n\n      <p>{{event_des}}</p>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'feedback\'">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="https://letsmeetbackend.herokuapp.com/images/users/{{user_pic}}">\n        </ion-avatar>\n        <h2>{{user_name}}</h2>\n        <p (click)="changeFlag()" *ngIf="flag1;else textAreaBox">Add a new Fedback</p>\n        <ng-template #textAreaBox>\n          <textarea placeholder="Add a new Fedback" [(ngModel)]="feed_des" name="" id="" cols="14" rows="3"></textarea>\n          <button ion-button icon-only (click)="newFeedback()">\n            <ion-icon name="happy"></ion-icon>\n          </button>\n        </ng-template>\n      </ion-item>\n      <ion-card>\n        <ion-item *ngFor="let item of feedback_event_user">\n          <ion-avatar item-start>\n            <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n          </ion-avatar>\n          <h2>{{item.user_name}}</h2>\n          <p>{{item.feed_date | date:\'mediumDate\'}}</p>\n          <ion-card-content>\n            <p class="text-wrap">{{item.feed_des}}</p>\n          </ion-card-content>\n          <button *ngIf="item.user_id==user_id" (click)="deleteFeedback(item.feed_id)" ion-button icon-only item-end clear>\n            <ion-icon name="trash"></ion-icon>\n          </button>\n          <!--<button *ngIf="item.user_id==user_id" (click)="updateFeedback(item.feed_id)" ion-button icon-only item-end clear>\n            <ion-icon name="create"></ion-icon>\n          </button>-->\n        </ion-item>\n      </ion-card>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'going_cnt\'">\n      <ion-item *ngFor="let item of event_rsvp_user">\n        <ion-avatar item-left>\n          <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n        </ion-avatar>\n        <h2>{{item.user_name}}</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\view-past-event\view-past-event.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_event_db_event_db__["a" /* EventDbProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_rsvp_db_rsvp_db__["a" /* RsvpDbProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_event_community_db_event_community_db__["a" /* EventCommunityDbProvider */],
        __WEBPACK_IMPORTED_MODULE_9__providers_feedback_db_feedback_db__["a" /* FeedbackDbProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_loginpro_loginpro__["a" /* LoginproProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], ViewPastEventPage);

//# sourceMappingURL=view-past-event.js.map

/***/ })

});
//# sourceMappingURL=3.js.map