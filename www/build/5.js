webpackJsonp([5],{

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesPageModule", function() { return StoriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stories__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StoriesPageModule = (function () {
    function StoriesPageModule() {
    }
    return StoriesPageModule;
}());
StoriesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__stories__["a" /* StoriesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__stories__["a" /* StoriesPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
    })
], StoriesPageModule);

//# sourceMappingURL=stories.module.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__story_detail_story_detail__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_story_create_story__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_story_db_story_db__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
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
 * Generated class for the StoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StoriesPage = (function () {
    function StoriesPage(navCtrl, navParams, _data, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._data = _data;
        this.storage = storage;
        this.arr = [];
        this.arr1 = [];
    }
    StoriesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad StoriesPage');
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            _this._data.getStoriesById(_this.user_id).subscribe(function (data) {
                _this.arr = data;
            }, function (err) {
                alert(err);
            }, function () {
            });
        });
        this._data.getAllStories().subscribe(function (data) {
            _this.arr1 = data;
        }, function (err) {
            alert(err);
        }, function () {
        });
    };
    StoriesPage.prototype.viewStory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__story_detail_story_detail__["a" /* StoryDetailPage */]);
    };
    StoriesPage.prototype.addStory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_story_create_story__["a" /* CreateStoryPage */]);
    };
    return StoriesPage;
}());
StoriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-stories',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\stories\stories.html"*/'<!--\n\n  Generated template for the StoriesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>Nearby Happening Stories</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addStory()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <!--<ion-fab top right edge>\n\n    <button ion-fab mini (click)="addStory()">\n\n      <ion-icon  name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>-->\n\n  \n\n  <h4><font color="red">My Story </font></h4>\n\n\n\n  <ion-item *ngFor="let item of arr">\n\n    <ion-avatar item-start>\n\n      <img src="{{item.story_pic}}">\n\n    </ion-avatar>\n\n    <h2>{{item.user_name}}</h2>\n\n    <p>{{item.story_time | date:"HH:mm"}}</p>\n\n  </ion-item>\n\n  \n\n  <h4><font color="red">Recent Updates</font></h4>\n\n   <ion-item *ngFor="let item of arr1">\n\n    <ion-avatar item-start>\n\n      <img src="{{item.story_pic}}">\n\n    </ion-avatar>\n\n    <h2>{{item.user_name}}</h2>\n\n    <p>{{item.story_time | date:"HH:mm"}}</p>\n\n  </ion-item>\n\n  \n\n</ion-content>'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\stories\stories.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_story_db_story_db__["a" /* StoryDbProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], StoriesPage);

//# sourceMappingURL=stories.js.map

/***/ })

});
//# sourceMappingURL=5.js.map