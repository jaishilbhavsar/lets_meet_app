webpackJsonp([1],{

<<<<<<< HEAD
/***/ 372:
=======
/***/ 375:
>>>>>>> a01ee7b6a2e886d322d94a66fdb50f74d59167e2
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WelcomePageModule = (function () {
    function WelcomePageModule() {
    }
    return WelcomePageModule;
}());
WelcomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]
        ]
    })
], WelcomePageModule);

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
var WelcomePage = (function () {
    function WelcomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WelcomePage.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
<<<<<<< HEAD
        selector: 'page-welcome',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\welcome\welcome.html"*/'<ion-content scroll="false">\n\n  <div class="splash-bg"></div>\n\n  <div class="splash-info">\n\n    <div class="splash-logo"></div>\n\n    <div class="splash-intro">\n\n      The starting point for your better experience !\n\n    </div>\n\n  </div>\n\n  <div padding hide-tabs>\n\n    <button ion-button block (click)="signup()" color="meetup" class="login">{{ \'SIGNUP\' | translate }}</button>\n\n    <button ion-button block (click)="login()" color="meetup" class="login">{{ \'LOGIN\' | translate }}</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\welcome\welcome.html"*/
=======
<<<<<<< HEAD
        selector: 'page-welcome',template:/*ion-inline-start:"C:\jaishil\Lets meet\lets_meet\lets_meet_app\src\pages\welcome\welcome.html"*/'<ion-content scroll="false">\n\n  <div class="splash-bg"></div>\n\n  <div class="splash-info">\n\n    <div class="splash-logo"></div>\n\n    <div class="splash-intro">\n\n      The starting point for your better experience !\n\n    </div>\n\n  </div>\n\n  <div padding hide-tabs>\n\n    <button ion-button block (click)="signup()" color="meetup" class="login">{{ \'SIGNUP\' | translate }}</button>\n\n    <button ion-button block (click)="login()" color="meetup" class="login">{{ \'LOGIN\' | translate }}</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\jaishil\Lets meet\lets_meet\lets_meet_app\src\pages\welcome\welcome.html"*/
=======
        selector: 'page-welcome',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\welcome\welcome.html"*/'<ion-content scroll="false">\n\n  <div class="splash-bg"></div>\n\n  <div class="splash-info">\n\n    <div class="splash-logo"></div>\n\n    <div class="splash-intro">\n\n      The starting point for your better experience !\n\n    </div>\n\n  </div>\n\n  <div padding hide-tabs>\n\n    <button ion-button block (click)="signup()" color="meetup" class="login">{{ \'SIGNUP\' | translate }}</button>\n\n    <button ion-button block (click)="login()" color="meetup" class="login">{{ \'LOGIN\' | translate }}</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\welcome\welcome.html"*/
>>>>>>> d560afb8b86e99ca4ae927c08b78c8ce1904ba02
>>>>>>> a01ee7b6a2e886d322d94a66fdb50f74d59167e2
=======
        selector: 'page-welcome',template:/*ion-inline-start:"C:\jaishil\Lets meet\lets_meet\lets_meet_app\src\pages\welcome\welcome.html"*/'<ion-content scroll="false">\n\n  <div class="splash-bg"></div>\n\n  <div class="splash-info">\n\n    <div class="splash-logo"></div>\n\n    <div class="splash-intro">\n\n      The starting point for your better experience !\n\n    </div>\n\n  </div>\n\n  <div padding hide-tabs>\n\n    <button ion-button block (click)="signup()" color="meetup" class="login">{{ \'SIGNUP\' | translate }}</button>\n\n    <button ion-button block (click)="login()" color="meetup" class="login">{{ \'LOGIN\' | translate }}</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\jaishil\Lets meet\lets_meet\lets_meet_app\src\pages\welcome\welcome.html"*/
>>>>>>> b45c685dc8ed946c63b93d601de0d6b6a161a42e
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=1.js.map