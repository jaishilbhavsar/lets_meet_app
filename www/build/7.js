webpackJsonp([7],{

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    return SettingsPageModule;
}());
SettingsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]
        ]
    })
], SettingsPageModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_community_db_community_db__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_community_view_community__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_community_comm_member_community_comm_member__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_providers__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_community_create_community__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_community_member_db_community_member_db__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { Comm_member_class } from "../../shared/comm_member_class";
//import { Community_comm_member } from "../../shared/community_comm_member_class";





/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
var SettingsPage = SettingsPage_1 = (function () {
    function SettingsPage(navCtrl, settings, formBuilder, navParams, translate, _data, load, toast, comm_member, storage, community_comm_member) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.translate = translate;
        this._data = _data;
        this.load = load;
        this.toast = toast;
        this.comm_member = comm_member;
        this.storage = storage;
        this.community_comm_member = community_comm_member;
        this.arr = [];
        this.arr1 = [];
        this.user_id = "";
        this.txtsearch = '';
        this.flag = false;
        this.settingsReady = false;
        this.profileSettings = {
            page: 'profile',
            pageTitleKey: 'SETTINGS_PAGE_PROFILE'
        };
<<<<<<< HEAD
        this.page = 'main';
        this.pageTitleKey = 'SETTINGS_TITLE';
        this.subSettings = SettingsPage_1;
=======
        this.selectedFile = null;
        this.eid = "";
        this.uname = "";
        this.pass = "";
        this.gender = "";
        this.mobile = "";
        this.form = formBuilder.group({
            eid: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            uname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')])],
            pass: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            mobile: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            myDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            image: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
>>>>>>> e240063853c26afd484110599946d2bd37be6bcb
    }
    SettingsPage.prototype.addCommunity = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__create_community_create_community__["a" /* CreateCommunityPage */]);
    };
    SettingsPage.prototype._buildForm = function () {
        var _this = this;
        var group = {
            option1: [this.options.option1],
            option2: [this.options.option2],
            option3: [this.options.option3]
        };
<<<<<<< HEAD
        switch (this.page) {
            case 'main':
                break;
            case 'profile':
                group = {
                    option4: [this.options.option4]
                };
                break;
=======
        reader.readAsDataURL(event.target.files[0]);
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        //alert(this.selectedFile.type);
        if (this.selectedFile.type != 'image/png' && this.selectedFile.type != 'image/jpeg') {
            this.selectedFile = null;
            this.isReadyToSave = this.form.invalid;
            var toast = this.toastCtrl.create({
                message: 'Only Image formats are accepted!',
                showCloseButton: true,
                closeButtonText: 'Ok'
            });
            toast.present();
>>>>>>> e240063853c26afd484110599946d2bd37be6bcb
        }
        this.form = this.formBuilder.group(group);
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.settings.merge(_this.form.value);
        });
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
        var l1 = this.load.create({
            content: "Loading..."
        });
        l1.present();
        this._data.getAllCommunities().subscribe(function (data) {
            _this.arr = data;
            _this.arr1 = data;
        }, function (err) {
            alert(err);
        }, function () {
            l1.dismiss();
        });
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
        this.page = this.navParams.get('page') || this.page;
        this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;
        this.translate.get(this.pageTitleKey).subscribe(function (res) {
            _this.pageTitle = res;
        });
        this.settings.load().then(function () {
            _this.settingsReady = true;
            _this.options = _this.settings.allSettings;
            _this._buildForm();
        });
    };
    SettingsPage.prototype.ngOnChanges = function () {
        console.log('Ng All Changes');
    };
    SettingsPage.prototype.onSearch = function () {
        var _this = this;
        if (this.txtsearch != '') {
            this.arr = this.arr.filter(function (x) { return x.comm_name.startsWith(_this.txtsearch); });
        }
        else {
            this.arr = this.arr1;
        }
<<<<<<< HEAD
=======
        var fd = new FormData();
        fd.append("user_id", this.eid);
        fd.append("user_name", this.uname);
        fd.append("user_pass", this.pass);
        fd.append("image", this.selectedFile, this.selectedFile.name);
        fd.append("gender", this.gender);
        fd.append("user_mob_no", this.mobile);
        fd.append("user_bdate", this.myDate);
        /*  fd.append("token", "");
         fd.append("verify", ""); */
        alert(this.eid);
        console.log(fd);
        this.data.addUser(fd).subscribe(function (data) {
            alert("done");
            console.log(data);
        }, function (err) {
            alert(err);
        }, function () {
        });
        /* this.data.addUser(this.eid, this.uname, this.pass, this.image, this.gender, this.mobile, this.myDate).subscribe(
          (resp) => { alert("Success") },
          (err) => alert("Signup Later")
        ); */
>>>>>>> e240063853c26afd484110599946d2bd37be6bcb
    };
    SettingsPage.prototype.onSearchIcon = function () {
        if (this.flag == true) {
            this.flag = false;
        }
        else {
            this.flag = true;
        }
    };
    SettingsPage.prototype.onView = function (comm_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__view_community_view_community__["a" /* ViewCommunityPage */], { c_id: comm_id });
    };
    return SettingsPage;
}());
SettingsPage = SettingsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-settings',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\settings\settings.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>Communities</ion-title>\n\n    <ion-buttons start>\n\n      <button (click)="onSearchIcon()" ion-button icon-only>\n\n        <ion-icon name=\'search\'></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addCommunity()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-searchbar *ngIf="flag" [(ngModel)]="txtsearch" (keyup)="onSearch()" placeholder="Search by community"></ion-searchbar>\n\n  <ion-card *ngFor="let item of arr ">\n\n    <!--  <img src="assets/img/cjpg.jpg"/>-->\n\n    \n\n    <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{item.comm_pic}}" (click)="onView(item.comm_id)" height="120" width="100" />\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-card-content >\n\n          <ion-card-title (click)="onView(item.comm_id)">\n\n            <b>{{item.comm_name}}</b>\n\n          \n\n        </ion-card-title>\n\n           <b> Created by : </b> <h4>{{item.user_name}}</h4>\n\n          \n\n        </ion-card-content>\n\n      </ion-col>\n\n   <!-- <ion-col col-4>\n\n        \n\n        <button ion-button (click)="onJoin(item.comm_id)" color="danger" small align="center">Join Now</button>\n\n\n\n      </ion-col>-->\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <!--  <ion-card>\n\n        \n\n            <img src="assets/img/cjpg.jpg" />\n\n        \n\n            <ion-card-content>\n\n              <ion-card-title>\n\n                Community 1\n\n              </ion-card-title>\n\n              \n\n            </ion-card-content>\n\n        \n\n            <ion-item>\n\n              <ion-icon name=\'people\' item-start style="color: #d03e84"></ion-icon>\n\n              Group Members\n\n              <ion-badge item-end>9</ion-badge>\n\n            </ion-item>\n\n\n\n            <button ion-button block >Join Now</button>\n\n        \n\n          </ion-card>-->\n\n  <!--<ion-item>\n\n              <ion-icon name=\'logo-twitter\' item-start style="color: #55acee"></ion-icon>\n\n              Followers\n\n              <ion-badge item-end>260k</ion-badge>\n\n            </ion-item>-->\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\settings\settings.html"*/
=======
        selector: 'page-signup',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\signup\signup.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>{{ \'SIGNUP_TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form *ngIf="form" [formGroup]="form" >\n\n\n\n    <ion-list>\n\n      <ion-item>\n\n        <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n        <div class="profile-image-wrapper" (click)="getPicture()">\n\n          <div class="profile-image-placeholder" *ngIf="!this.form.controls.image.value">\n\n            <ion-icon name="add"></ion-icon>\n\n            <div>\n\n              {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n\n            </div>\n\n          </div>\n\n          <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.image.value"></div>\n\n        </div>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label floating color="red">Email</ion-label>\n\n        <ion-input type="email" formControlName="eid" [(ngModel)]="eid"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>UserName</ion-label>\n\n        <ion-input type="text" formControlName="uname" [(ngModel)]="uname"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="passowrd" formControlName="pass" [(ngModel)]="pass"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-list radio-group formControlName="gender" [(ngModel)]="gender">\n\n        <ion-item>\n\n          <ion-label>Male</ion-label>\n\n          <ion-radio value="Male"></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Female</ion-label>\n\n          <ion-radio value="Female"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Mobile No</ion-label>\n\n        <ion-input type="text" formControlName="mobile" [(ngModel)]="mobile"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Date</ion-label>\n\n        <ion-datetime displayFormat="DD/MMMM/YYYY" pickerFormat="DD MMMM YYYY" formControlName="myDate" [(ngModel)]="myDate"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <div padding>\n\n        <button ion-button color="meetup" (click)="onClick()" [disabled]="!isReadyToSave" block>{{ \'SIGNUP_BUTTON\' | translate }}</button>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n\n\n<!--<ion-item>\n\n        <ion-label fixed>{{ \'NAME\' | translate }}</ion-label>\n\n         <ion-input type="text" [(ngModel)]="account.name" name="name"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label fixed>{{ \'EMAIL\' | translate }}</ion-label>\n\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n      </ion-item>\n\n    -->\n\n<!--\n\n      Want to add a Username? Here you go:\n\n\n\n      <ion-item>\n\n        <ion-label floating>Username</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n\n      </ion-item>\n\n      -->\n\n<!--\n\n      <ion-item>\n\n        <button ion-button color="primary" (click)="onfile()"block>{{ \'Image\' | translate }}</button>  \n\n      </ion-item>-->\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\signup\signup.html"*/
>>>>>>> e240063853c26afd484110599946d2bd37be6bcb
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_providers__["c" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_community_db_community_db__["a" /* ComminityDbTsProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_9__providers_community_member_db_community_member_db__["a" /* CommunityMemberDbProvider */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__providers_community_comm_member_community_comm_member__["a" /* CommunityCommMemberProvider */]])
], SettingsPage);

var SettingsPage_1;
//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=7.js.map