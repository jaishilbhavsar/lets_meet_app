webpackJsonp([2],{

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UsersPageModule = (function () {
    function UsersPageModule() {
    }
    return UsersPageModule;
}());
UsersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__users__["a" /* UsersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__users__["a" /* UsersPage */]),
        ],
    })
], UsersPageModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myevent_myevent__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mycommunity_mycommunity__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__follower_follower__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loginpro_loginpro__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_event_db_event_db__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_loading_loading_controller__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__following_following__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__change_password_change_password__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_community_member_db_community_member_db__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__view_event_view_event__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__view_past_event_view_past_event__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__view_community_view_community__ = __webpack_require__(56);
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
        this.arrmyevent = [];
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
        this.arrmycommu = [];
        this.communitycount = 0;
        this.eventcount = 0;
        this.id = "";
        this.newpassword = "";
        this.oldpassword = "";
        this.isAndroid = platform.is('android');
    }
    UsersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('uid').then(function (val) {
            _this.uid = val;
            var l1 = _this.load.create({
                content: "Loading ..."
            });
            l1.present();
            _this.data.getUser(_this.uid).subscribe(function (dt) {
                _this.u = dt;
                _this.eid = _this.u[0].user_name;
                _this.img = _this.u[0].user_pic;
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
            _this.data.getmycommunity(_this.uid).subscribe(function (dt) {
                _this.arrmycommu = dt;
                _this.communitycount = _this.arrmycommu.length;
            });
            _this.data.getmyevent(_this.uid).subscribe(function (dt) {
                _this.arrmyevent = dt;
                _this.eventcount = _this.arrmyevent.length;
            });
            _this.data.getFollowers(_this.uid).subscribe(function (ft) {
                if (ft !== "") {
                    _this.followers = ft;
                    _this.followercount = _this.followers.length;
                }
            });
            _this.data.getFollowing(_this.uid).subscribe(function (fl) {
                if (fl != "") {
                    _this.followings = fl;
                    _this.followingcount = _this.followings.length;
                }
            });
        });
        this.storage.get('uid').then(function (val) {
            _this.uid = val;
            _this._dataEvent.getUpcEventRegUser(_this.uid).subscribe(function (data) {
                _this.arrUpc = data;
            }, function (err) {
                alert(err);
            }, function () {
            });
        });
        this.storage.get('uid').then(function (val) {
            _this.uid = val;
            _this._dataEvent.getPastEventReg(_this.uid).subscribe(function (data) {
                _this.arrPast = data;
            }, function (err) {
                alert(err);
            }, function () {
            });
        });
        this.storage.get('uid').then(function (val) {
            _this.uid = val;
            _this._DataCommu.getcommunitiesofuser(_this.uid).subscribe(function (data) {
                _this.arrCommu = data;
            }, function (err) {
                alert(err);
            }, function () {
            });
        });
        //this.data.set_url();
    };
    UsersPage.prototype.onFollower = function () {
        //this.storage.get('uid').then((val)=>{this.id;
        //alert(this.uid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__follower_follower__["a" /* FollowerPage */], { uid: this.uid });
        // });
    };
    UsersPage.prototype.onFollowing = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__following_following__["a" /* FollowingPage */], { uid: this.uid });
    };
    UsersPage.prototype.openModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__["a" /* EditprofilePage */]);
        modal.onDidDismiss(function (item) {
            _this.ionViewDidLoad();
        });
        modal.present();
    };
    UsersPage.prototype.onLogout = function () {
        this.storage.clear();
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_11__pages__["a" /* FirstRunPage */]);
    };
    UsersPage.prototype.changepass = function (newpass) {
        var _this = this;
        this.storage.get('uid').then(function (val) {
            _this.uid = val;
            console.log(_this.uid);
            console.log(newpass);
            _this.data.change(_this.uid, newpass).subscribe(function (dt) {
                var prompt2 = _this.alert.create({
                    title: 'Password Changed',
                    message: "Your Password has been successfully changed",
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function (data) {
                                console.log('Cancel clicked');
                            }
                        }
                    ]
                });
                prompt2.present();
            }, function (e) {
                console.log(e);
            }, function () {
            });
        });
    };
    UsersPage.prototype.validate = function (oldpass) {
        var _this = this;
        var l1 = this.load.create({
            content: "Loading ..."
        });
        l1.present();
        this.storage.get('uid').then(function (val) {
            _this.uid = val;
            _this.data.doLogin(_this.uid, oldpass, "user")
                .subscribe(function (dt) {
                if (dt != "") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__change_password_change_password__["a" /* ChangePasswordPage */]);
                }
                else {
                    alert("Incorrect Old Password");
                }
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        });
    };
    UsersPage.prototype.onChangePassword = function () {
        var _this = this;
        var prompt = this.alert.create({
            title: 'Change Password',
            message: "Enter Your Old Password",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Enter Old Password'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        _this.oldpassword = data.name;
                        _this.validate(_this.oldpassword);
                    }
                },
            ]
        });
        prompt.present();
    };
    UsersPage.prototype.onCLickUpcEvent = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__view_event_view_event__["a" /* ViewEventPage */], { e_id: id });
    };
    UsersPage.prototype.onCLickPastEvent = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__view_past_event_view_past_event__["a" /* ViewPastEventPage */], { e_id: id });
    };
    UsersPage.prototype.onCLickCommu = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__view_community_view_community__["a" /* ViewCommunityPage */], { c_id: id });
    };
    UsersPage.prototype.onMycommunity = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__mycommunity_mycommunity__["a" /* MycommunityPage */]);
    };
    UsersPage.prototype.onMyevent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__myevent_myevent__["a" /* MyeventPage */]);
    };
    return UsersPage;
}());
UsersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({
        selector: 'page-users',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\users\users.html"*/'<!--\n\n  Generated template for the UsersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>Welcome, {{eid}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="https://letsmeetbackend.herokuapp.com/images/users/{{img}}" height="100" width="100">\n\n      </ion-avatar>\n\n      <h1>{{eid}}</h1>\n\n      <button ion-button round (click)="openModal()">Edit Profile</button>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-item (click)="onFollower()">\n\n    <ion-icon name="logo-twitter" item-start></ion-icon>\n\n    Followers\n\n    <ion-badge item-end>{{followercount}}</ion-badge>\n\n  </ion-item>\n\n  <ion-item (click)="onFollowing()">\n\n    <ion-icon name="logo-twitter" item-start></ion-icon>\n\n    Following\n\n    <ion-badge item-end>{{followingcount}}</ion-badge>\n\n  </ion-item>\n\n  <ion-item (click)="onMycommunity()">\n\n    <ion-icon name="people" item-start></ion-icon>\n\n    My Communities\n\n    <ion-badge item-end>{{communitycount}}</ion-badge>\n\n  </ion-item>\n\n  <ion-item (click)="onMyevent()">\n\n    <ion-icon name="megaphone" item-start></ion-icon>\n\n    My Events\n\n    <ion-badge item-end>{{eventcount}}</ion-badge>\n\n  </ion-item>\n\n\n\n\n\n  <div padding >\n\n    <ion-segment [(ngModel)]="segme">\n\n      <ion-segment-button value="events">\n\n        Events\n\n      </ion-segment-button>\n\n      <ion-segment-button value="commu">\n\n        Communities\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="segme">\n\n    <ion-list *ngSwitchCase="\'events\'">\n\n      <ion-list-header>\n\n        Attending\n\n      </ion-list-header>\n\n      <ion-list-header></ion-list-header>\n\n      <ion-item *ngFor="let item of arrUpc" (click)="onCLickUpcEvent(item.event_id)">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}">\n\n        </ion-thumbnail>\n\n        <h2>{{item.event_name}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-list-header>\n\n        Attended\n\n      </ion-list-header>\n\n      <ion-item *ngFor="let item of arrPast" (click)="onCLickPastEvent(item.event_id)">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}">\n\n        </ion-thumbnail>\n\n        <h2>{{item.event_name}}</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'commu\'">\n\n      <ion-item *ngFor="let item of arrCommu" (click)="onCLickCommu(item.event_id)">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{item.comm_pic}}">\n\n        </ion-thumbnail>\n\n        <h2>{{item.comm_name}}</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n  </div>\n\n\n\n  <ion-list>\n\n    <ion-item (click)="onChangePassword()">\n\n      <h2>\n\n        <ion-icon name="key" md="md-key">&nbsp;&nbsp;</ion-icon> Change Password</h2>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="onLogout()">\n\n      <h2>\n\n        <ion-icon name="power" md="md-key">&nbsp;&nbsp;</ion-icon> Log Out</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\users\users.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_loginpro_loginpro__["a" /* LoginproProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_event_db_event_db__["a" /* EventDbProvider */],
        __WEBPACK_IMPORTED_MODULE_13__providers_community_member_db_community_member_db__["a" /* CommunityMemberDbProvider */],
        __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["m" /* NavParams */]])
], UsersPage);

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

/***/ })

});
//# sourceMappingURL=2.js.map