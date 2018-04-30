webpackJsonp([2],{

<<<<<<< HEAD
/***/ 366:
=======
/***/ 380:
>>>>>>> 90b10f97ac7fa42128c906973a3de57f5019a6c0
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loginpro_loginpro__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_loading_loading_controller__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_email_class__ = __webpack_require__(394);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myevent_myevent__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mycommunity_mycommunity__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__follower_follower__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loginpro_loginpro__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_event_db_event_db__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_loading_loading_controller__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__following_following__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__change_password_change_password__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_community_member_db_community_member_db__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__view_event_view_event__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__view_past_event_view_past_event__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__view_community_view_community__ = __webpack_require__(56);
>>>>>>> 90b10f97ac7fa42128c906973a3de57f5019a6c0
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = (function () {
    function LoginPage(load, alert, storage, data, navCtrl, user, toastCtrl, translateService) {
        var _this = this;
        this.load = load;
        this.alert = alert;
        this.storage = storage;
        this.data = data;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.u1 = [];
        this.eid = "jaishilbhavsar@yahoo.in";
        this.pass = "jaishil";
        this.forid = '';
        this.u = [];
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    LoginPage.prototype.onClick = function () {
        var _this = this;
        //this.storage.set('uid', "jaishilbhavsar@yahoo.in");
        /*this.storage.get('uid').then((val) => {
          console.log(val);
        });*/
        //    this.navCtrl.push(MainPage);
        this.data.doLogin(this.eid, this.pass, "user").subscribe(function (dt) {
            if (dt == "") {
                var toast = _this.toastCtrl.create({
                    message: "Invalid UserName Or Password , Try Again",
                    duration: 4000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                _this.storage.set('uid', _this.eid);
                /*this.storage.get('uid').then((val) => {
                  console.log(val);
                });*/
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages__["b" /* MainPage */]);
            }
        }, function (err) { return alert("invalid"); });
    };
    LoginPage.prototype.validate = function () {
        var _this = this;
        var l1 = this.load.create({
            content: "Loading ..."
        });
        l1.present();
        this.data.getUser(this.forid)
            .subscribe(function (dt) {
            if (dt != "") {
                _this.u = dt;
                _this.eid = _this.u[0].user_id;
                var message = "Hello " + _this.forid + ". You have requested to reset the password. your password is '" + _this.u[0].user_pass + "'. Password is one of the confidential thing, Don't share it with anyone.";
                _this.data.sendMail(new __WEBPACK_IMPORTED_MODULE_8__shared_email_class__["a" /* email_class */](message, _this.forid, "Resetting the password of Lets_Meet."))
                    .subscribe(function (data1) {
                    console.log("mail sent");
                    alert("The Password has been sent to " + _this.forid);
                }, function (e) {
                    alert(e);
                }, function () {
                    l1.dismiss();
                });
            }
            else {
                alert("enter valid mail");
            }
        }, function (e) {
            alert(e);
        }, function () {
            l1.dismiss();
        });
    };
    LoginPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alert.create({
            title: 'Forgot Password',
            message: "Enter Your Email Id To Get Your Password",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Email_id'
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
                        _this.forid = data.name;
                        _this.validate();
                    }
                }
            ]
        });
        prompt.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\login\login.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>{{ \'EMAIL\' | translate }}</ion-label>\n\n      <ion-input type="email" [(ngModel)]="eid" name="email" ></ion-input>\n\n    </ion-item>\n\n\n\n    <!--\n\n      Want to use a Username instead of an Email? Here you go:\n\n\n\n      <ion-item>\n\n        <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n\n      </ion-item>\n\n      -->\n\n\n\n    <ion-item>\n\n      <ion-label floating>{{ \'PASSWORD\' | translate }}</ion-label>\n\n      <ion-input type="password" [(ngModel)]="pass" name="password" ></ion-input>\n\n    </ion-item>\n\n    <ion-item >\n\n      <a (click)="showPrompt()" class="forgetAlign">Forgot Password</a>\n\n    </ion-item>\n\n   \n\n    <div padding>\n\n      <button ion-button color="meetup" (click)="onClick()" block>{{ \'LOGIN_BUTTON\' | translate }}</button>\n\n    </div>\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_loginpro_loginpro__["a" /* LoginproProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* User */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return email_class; });
var email_class = (function () {
    function email_class(message, name, subject) {
        this.message = message;
        this.name = name;
        this.subject = subject;
    }
    return email_class;
}());

//# sourceMappingURL=email_class.js.map

/***/ })

});
//# sourceMappingURL=2.js.map