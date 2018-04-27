webpackJsonp([9],{

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(383);
=======
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu__ = __webpack_require__(381);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(381);
>>>>>>> e240063853c26afd484110599946d2bd37be6bcb
>>>>>>> 4d5e63fc115855788cfae0ccd3d53628855515d2
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    return MenuPageModule;
}());
MenuPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__menu__["a" /* MenuPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__menu__["a" /* MenuPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__menu__["a" /* MenuPage */]
        ]
    })
], MenuPageModule);

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
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


var MenuPage = (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = 'ContentPage';
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Sign in', component: 'LoginPage' },
            { title: 'Signup', component: 'SignupPage' }
        ];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('Hello MenuPage Page');
    };
    MenuPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MenuPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MenuPage.prototype, "nav", void 0);
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-menu',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\menu\menu.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\menu\menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
], MenuPage);

//# sourceMappingURL=menu.js.map
=======
        selector: 'page-search',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\search\search.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>Search</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-searchbar [(ngModel)]="txtsearch" (keyup)="onSearch()" placeholder="Search by User"></ion-searchbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="search">\n\n      <ion-segment-button value="community">\n\n        Comminity\n\n      </ion-segment-button>\n\n      <ion-segment-button value="user">\n\n        User\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n  <div [ngSwitch]="search">\n\n    <ion-list *ngSwitchCase="\'community\'">\n\n      <ion-list>\n\n        <ion-item *ngFor="let item of comm_arr">\n\n          <ion-avatar item-start>\n\n            <img src="{{item.comm_pic}}">\n\n          </ion-avatar>\n\n          <h3 (click)="onClick(item.comm_id)">{{item.comm_name}} </h3>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'user\'">\n\n      <ion-list>\n\n        <ion-item *ngFor="let item of arr1" (click)="onUser(item.user_id)">\n\n          <ion-avatar item-start>\n\n            <img src="{{item.user_pic}}">\n\n          </ion-avatar>\n\n          <h3>{{item.user_name}}</h3>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n\n\n    </ion-list>\n\n  </div>\n\n\n\n\n\n\n\n  <!--<ion-list>\n\n    <button ion-item (click)="openItem(item)" *ngFor="let item of currentItems">\n\n      <ion-avatar item-start>\n\n        <img [src]="item.profilePic" />\n\n      </ion-avatar>\n\n      <h2>{{item.name}}</h2>\n\n      <p>{{item.about}}</p>\n\n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n\n    </button>\n\n  </ion-list>-->\n\n\n\n\n\n\n\n\n\n<!--\n\n  <h4>Top Rated Communities</h4>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col *ngFor="let item of topComm">\n\n        <ion-card>\n\n          <img src="assets/img/communities/{{item.comm_pic}}" class="imgComm" />\n\n          <ion-card-content>\n\n            {{item.comm_name}}\n\n              <button ion-button small>Join Now</button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>-->\n\n<!--  <ion-col>\n\n        <ion-card>\n\n          <img src="assets/img/huddle1.jpg" class="imgComm" />\n\n          <ion-card-content>\n\n            Community 2\n\n            <button ion-button small>Join Now</button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card>\n\n          <img src="assets/img/huddle1.jpg" class="imgComm" />\n\n          <ion-card-content>\n\n            Community 3\n\n            <button ion-button small>Join Now</button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card>\n\n          <img src="assets/img/huddle1.jpg" class="imgComm" />\n\n          <ion-card-content>\n\n            Community 4\n\n            <button ion-button small>Join Now</button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>-->'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\search\search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage_dist_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_community_db_community_db__["a" /* ComminityDbTsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loginpro_loginpro__["a" /* LoginproProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Items */]])
], SearchPage);

//# sourceMappingURL=search.js.map
>>>>>>> e240063853c26afd484110599946d2bd37be6bcb

/***/ })

});
//# sourceMappingURL=9.js.map