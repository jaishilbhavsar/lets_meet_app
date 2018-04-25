webpackJsonp([7],{

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]
        ]
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loginpro_loginpro__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { RadioButton } from 'ionic-angular/components/radio/radio-button';

var SignupPage = (function () {
    function SignupPage(data, fileChooser, datePicker, navCtrl, user, toastCtrl, translateService) {
        var _this = this;
        this.data = data;
        this.fileChooser = fileChooser;
        this.datePicker = datePicker;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            name: 'Test Human',
            email: 'test@example.com',
            password: 'test'
        };
        this.eid = "";
        this.uname = "";
        this.pass = "";
        this.gender = "";
        this.mobile = "";
        this.image = "abcde";
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        // Attempt to login in through our User service
        this.user.signup(this.account).subscribe(function (resp) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages__["b" /* MainPage */]);
        }, function (err) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages__["b" /* MainPage */]);
            // Unable to sign up
            var toast = _this.toastCtrl.create({
                message: _this.signupErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    SignupPage.prototype.onClick = function () {
        this.data.addUser(this.eid, this.uname, this.pass, this.image, this.gender, this.mobile, this.myDate).subscribe(function (resp) { alert("Success"); }, function (err) { return alert("Signup Later"); });
    };
    SignupPage.prototype.onfile = function () {
        this.fileChooser.open().then(function (uri) { return console.log(uri); })
            .catch(function (e) { return console.log(e); });
        ;
    };
    SignupPage.prototype.onbirth = function () {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) { return console.log('Got date: ', date); }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\signup\signup.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>{{ \'SIGNUP_TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating color="red">Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="eid"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>UserName</ion-label>\n\n      <ion-input type="text" [(ngModel)]="uname"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="passowrd" [(ngModel)]="pass"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n\n\n    </ion-item>\n\n\n\n    <ion-list radio-group [(ngModel)]="gender">\n\n      <ion-item>\n\n        <ion-label>Male</ion-label>\n\n        <ion-radio value="Male"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Female</ion-label>\n\n        <ion-radio value="Female"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Mobile No</ion-label>\n\n      <ion-input type="text" [(ngModel)]="mobile"></ion-input>\n\n    </ion-item>\n\n    <ion-item></ion-item>\n\n    <!--<ion-item>\n\n        <ion-label fixed>{{ \'NAME\' | translate }}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.name" name="name"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label fixed>{{ \'EMAIL\' | translate }}</ion-label>\n\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n      </ion-item>\n\n    -->\n\n    <!--\n\n      Want to add a Username? Here you go:\n\n\n\n      <ion-item>\n\n        <ion-label floating>Username</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n\n      </ion-item>\n\n      -->\n\n    <!--\n\n      <ion-item>\n\n        <button ion-button color="primary" (click)="onfile()"block>{{ \'Image\' | translate }}</button>  \n\n      </ion-item>-->\n\n\n\n\n\n    <ion-item>\n\n      <ion-label>Date</ion-label>\n\n      <ion-datetime displayFormat="DD/MMMM/YYYY" pickerFormat="DD MMMM YYYY" [(ngModel)]="myDate"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <div padding>\n\n      <button ion-button color="meetup" (click)="onClick()" block>{{ \'SIGNUP_BUTTON\' | translate }}</button>\n\n    </div>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\signup\signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_loginpro_loginpro__["a" /* LoginproProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* User */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=7.js.map