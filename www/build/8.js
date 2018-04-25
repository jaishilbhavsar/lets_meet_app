webpackJsonp([8],{

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(381);
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

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_community_db_community_db__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_community_view_community__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_community_comm_member_community_comm_member__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_providers__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_community_create_community__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_community_member_db_community_member_db__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(14);
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
        this.page = 'main';
        this.pageTitleKey = 'SETTINGS_TITLE';
        this.subSettings = SettingsPage_1;
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
        selector: 'page-settings',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\settings\settings.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>Communities</ion-title>\n\n    <ion-buttons start>\n\n      <button (click)="onSearchIcon()" ion-button icon-only>\n\n        <ion-icon name=\'search\'></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addCommunity()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-searchbar *ngIf="flag" [(ngModel)]="txtsearch" (keyup)="onSearch()" placeholder="Search by community"></ion-searchbar>\n\n  <ion-card *ngFor="let item of arr ">\n\n    <!--  <img src="assets/img/cjpg.jpg"/>-->\n\n    \n\n    <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{item.comm_pic}}" (click)="onView(item.comm_id)" height="120" width="100" />\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-card-content >\n\n          <ion-card-title (click)="onView(item.comm_id)">\n\n            <b>{{item.comm_name}}</b>\n\n          \n\n        </ion-card-title>\n\n           <b> Created by : </b> <h4>{{item.user_name}}</h4>\n\n          \n\n        </ion-card-content>\n\n      </ion-col>\n\n   <!-- <ion-col col-4>\n\n        \n\n        <button ion-button (click)="onJoin(item.comm_id)" color="danger" small align="center">Join Now</button>\n\n\n\n      </ion-col>-->\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <!--  <ion-card>\n\n        \n\n            <img src="assets/img/cjpg.jpg" />\n\n        \n\n            <ion-card-content>\n\n              <ion-card-title>\n\n                Community 1\n\n              </ion-card-title>\n\n              \n\n            </ion-card-content>\n\n        \n\n            <ion-item>\n\n              <ion-icon name=\'people\' item-start style="color: #d03e84"></ion-icon>\n\n              Group Members\n\n              <ion-badge item-end>9</ion-badge>\n\n            </ion-item>\n\n\n\n            <button ion-button block >Join Now</button>\n\n        \n\n          </ion-card>-->\n\n  <!--<ion-item>\n\n              <ion-icon name=\'logo-twitter\' item-start style="color: #55acee"></ion-icon>\n\n              Followers\n\n              <ion-badge item-end>260k</ion-badge>\n\n            </ion-item>-->\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\settings\settings.html"*/
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
//# sourceMappingURL=8.js.map