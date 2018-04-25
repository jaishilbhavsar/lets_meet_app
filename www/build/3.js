webpackJsonp([3],{

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__(383);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__users__["a" /* UsersPage */]),
        ],
    })
], UsersPageModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__follower_follower__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editprofile_editprofile__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loginpro_loginpro__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_loading_loading_controller__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__following_following__ = __webpack_require__(125);
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
    function UsersPage(data, load, storage, platform, modalCtrl, navCtrl, navParams) {
        this.data = data;
        this.load = load;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.followers = [];
        this.followings = [];
        this.ed = "";
        this.u = [];
        this.eid = "";
        this.uid = "";
        this.img = "";
        this.pet = "kittens";
        this.isAndroid = false;
        this.id = "";
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
        //this.data.set_url();
    };
    UsersPage.prototype.onFollower = function () {
        //this.storage.get('uid').then((val)=>{this.id;
        //alert(this.uid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__follower_follower__["a" /* FollowerPage */], { uid: this.uid });
        // });
    };
    UsersPage.prototype.onFollowing = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__following_following__["a" /* FollowingPage */], { uid: this.uid });
    };
    UsersPage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__editprofile_editprofile__["a" /* EditprofilePage */]);
        modal.present();
    };
    return UsersPage;
}());
UsersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-users',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\users\users.html"*/'<!--\n\n  Generated template for the UsersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>Welcome, {{eid}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="https://letsmeetbackend.herokuapp.com/images/users/{{img}}" height="100" width="100">\n\n      </ion-avatar>\n\n      <h1>{{eid}}</h1>\n\n      <button ion-button round (click)="openModal()">Edit Profile</button>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-item (click)="onFollower()">\n\n    <ion-icon name="logo-twitter" item-start></ion-icon>\n\n    Followers\n\n    <ion-badge item-end>{{followercount}}</ion-badge>\n\n  </ion-item>\n\n  <ion-item (click)="onFollowing()">\n\n    <ion-icon name="logo-twitter" item-start></ion-icon>\n\n    Following\n\n    <ion-badge item-end>{{followingcount}}</ion-badge>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-icon name="people" item-start></ion-icon>\n\n    Communities\n\n    <ion-badge item-end>550k</ion-badge>\n\n  </ion-item>\n\n\n\n  <div padding>\n\n    <ion-segment [(ngModel)]="pet">\n\n      <ion-segment-button value="kittens">\n\n        Events\n\n      </ion-segment-button>\n\n      <ion-segment-button value="puppies">\n\n        Communities\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="pet">\n\n    <ion-list *ngSwitchCase="\'puppies\'">\n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/img/co_4.jpg">\n\n          </ion-thumbnail>\n\n          <h2>Event 1</h2>\n\n\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/img/co_4.jpg">\n\n          </ion-thumbnail>\n\n          <h2>Event 2</h2>\n\n\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/img/co_4.jpg">\n\n          </ion-thumbnail>\n\n          <h2>Event 3</h2>\n\n\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/img/co_4.jpg">\n\n          </ion-thumbnail>\n\n          <h2>Event 4</h2>\n\n\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/img/co_4.jpg">\n\n          </ion-thumbnail>\n\n          <h2>Event 5</h2>\n\n\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/img/co_4.jpg">\n\n          </ion-thumbnail>\n\n          <h2>Event 6</h2>\n\n\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/img/co_4.jpg">\n\n          </ion-thumbnail>\n\n          <h2>Event 7</h2>\n\n\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      ...\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'kittens\'">\n\n      <ion-list>\n\n        <h2>Attending</h2>\n\n        <ion-item-sliding>\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <img src="assets/img/event2.jpg">\n\n            </ion-avatar>\n\n            <h2>Slimer</h2>\n\n          </ion-item>\n\n          <ion-item-options side="left">\n\n            <button ion-button color="primary">\n\n              <ion-icon name="text"></ion-icon>\n\n              Text\n\n            </button>\n\n            <button ion-button color="secondary">\n\n              <ion-icon name="call"></ion-icon>\n\n              Call\n\n            </button>\n\n          </ion-item-options>\n\n          <ion-item-options side="right">\n\n            <button ion-button color="primary">\n\n              <ion-icon name="mail"></ion-icon>\n\n              Email\n\n            </button>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <h2>Attended</h2>\n\n        <ion-item-sliding>\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <img src="assets/img/event2.jpg">\n\n            </ion-avatar>\n\n            <h2>Slimer</h2>\n\n          </ion-item>\n\n          <ion-item-options side="left">\n\n            <button ion-button color="primary">\n\n              <ion-icon name="text"></ion-icon>\n\n              Text\n\n            </button>\n\n            <button ion-button color="secondary">\n\n              <ion-icon name="call"></ion-icon>\n\n              Call\n\n            </button>\n\n          </ion-item-options>\n\n          <ion-item-options side="right">\n\n            <button ion-button color="primary">\n\n              <ion-icon name="mail"></ion-icon>\n\n              Email\n\n            </button>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n      </ion-list>\n\n    </ion-list>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\users\users.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_loginpro_loginpro__["a" /* LoginproProvider */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */]])
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
//# sourceMappingURL=3.js.map