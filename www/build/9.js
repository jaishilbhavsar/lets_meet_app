webpackJsonp([9],{

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    return SearchPageModule;
}());
SearchPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]
        ]
    })
], SearchPageModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loginpro_loginpro__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_community_db_community_db__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = (function () {
    function SearchPage(navCtrl, load, _data1, _data, navParams) {
        this.navCtrl = navCtrl;
        this.load = load;
        this._data1 = _data1;
        this._data = _data;
        this.navParams = navParams;
        this.currentItems = [];
        //items:any=[];
        this.user = "allusers";
        this.txtsearch = '';
        this.arr = [];
        this.arr1 = [];
        this.topComm = [];
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._data.getAllUser().subscribe(function (data) {
            _this.arr = data;
        }, function (e) {
            alert(e);
        });
        var l2 = this.load.create({
            content: "Loading..."
        });
        l2.present();
        this._data1.gettopcommunity().subscribe(function (data) {
            _this.topComm = data;
        }, function (e) {
            alert(e);
        }, function () {
            l2.dismiss();
        });
    };
    /**
     * Perform a service for the proper items.
     */
    /*getUsers(us) {
      this.arr=this.arr1;
      let val = us.target.value;
      if (val && val.trim() != '') {
        this.arr1 = this.arr.filter((x) =>
          x.user_name.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1);
      }
     
    }*/
    /**
     * Navigate to the detail page for this item.
     */
    /* openItem(item: Item) {
       this.navCtrl.push('ItemDetailPage', {
         item: item
       });
     }*/
    SearchPage.prototype.onSearch = function () {
        var _this = this;
        if (this.txtsearch != '') {
            this.arr1 = this.arr.filter(function (x) { return x.user_name.toLocaleLowerCase().indexOf(_this.txtsearch.toLocaleLowerCase()) > -1; });
            //   this.arr1 = this.arr.filter((x) => x..startsWith(this.txtsearch))
        }
        else {
            this.arr1 = null;
        }
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\search\search.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>Search</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-searchbar [(ngModel)]="txtsearch" (keyup)="onSearch()" placeholder="Search by User"></ion-searchbar>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of arr1">\n\n      <ion-avatar item-start>\n\n        <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n\n      </ion-avatar>\n\n      <h3>{{item.user_name}}</h3>\n\n    </ion-item>\n\n  </ion-list>\n\n  <!--<ion-list>\n\n    <button ion-item (click)="openItem(item)" *ngFor="let item of currentItems">\n\n      <ion-avatar item-start>\n\n        <img [src]="item.profilePic" />\n\n      </ion-avatar>\n\n      <h2>{{item.name}}</h2>\n\n      <p>{{item.about}}</p>\n\n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n\n    </button>\n\n  </ion-list>-->\n\n\n\n\n\n\n\n  <h4>Top Rated Communities</h4>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col *ngFor="let item of topComm">\n\n        <ion-card>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{item.comm_pic}}" class="imgComm" />\n\n          <ion-card-content>\n\n            {{item.comm_name}}\n\n            <!--<button ion-button small>Join Now</button>-->\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n<!--  <ion-col>\n\n        <ion-card>\n\n          <img src="assets/img/huddle1.jpg" class="imgComm" />\n\n          <ion-card-content>\n\n            Community 2\n\n            <button ion-button small>Join Now</button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card>\n\n          <img src="assets/img/huddle1.jpg" class="imgComm" />\n\n          <ion-card-content>\n\n            Community 3\n\n            <button ion-button small>Join Now</button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card>\n\n          <img src="assets/img/huddle1.jpg" class="imgComm" />\n\n          <ion-card-content>\n\n            Community 4\n\n            <button ion-button small>Join Now</button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>-->\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\search\search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_community_db_community_db__["a" /* ComminityDbTsProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_loginpro_loginpro__["a" /* LoginproProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=9.js.map