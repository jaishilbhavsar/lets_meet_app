webpackJsonp([11],{

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(396);
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]
        ]
    })
], SearchPageModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loginpro_loginpro__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_community_db_community_db__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_community_view_community__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewuser_viewuser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage_dist_storage__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_category_db_category_db__ = __webpack_require__(244);
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
    function SearchPage(navCtrl, storage, load, _data1, _data, navParams, items, _cat_comm) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.load = load;
        this._data1 = _data1;
        this._data = _data;
        this.navParams = navParams;
        this.items = items;
        this._cat_comm = _cat_comm;
        this.currentItems = [];
        //items:any=[];
        this.user = "allusers";
        this.txtsearch = '';
        this.arr = [];
        this.arr1 = [];
        this.comm_arr = [];
        this.comm_arr1 = [];
        this.search = "user";
        this.cat_comm = [];
        this.cat_comm1 = [];
        this.topComm = [];
        this.currentItems = this.items.query();
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._data.getAllUser().subscribe(function (data) {
            _this.arr = data;
        }, function (e) {
            alert(e);
        });
        this._data1.getAllCommunities().subscribe(function (data) {
            // alert(data[0].comm_fk_cat_id);
            _this.comm_arr1 = data;
            //this.arr1 = data;
        }, function (err) {
            alert(err);
        }, function () {
            //l1.dismiss();
        });
        this._cat_comm.getAllCommunityByCategory(this.txtsearch).subscribe(function (data1) {
            _this.cat_comm = data1;
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
            this.arr1 = this.arr.filter(function (x) { return x.user_name.indexOf(_this.txtsearch); });
            //   this.arr1 = this.arr.filter((x) => x..startsWith(this.txtsearch));
            this.cat_comm1 = this.cat_comm.filter(function (x) { return x.comm_name.indexOf(_this.txtsearch); });
        }
        else {
            this.arr1 = null;
            this.cat_comm1 = null;
        }
    };
    SearchPage.prototype.onClick = function (comm_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__view_community_view_community__["a" /* ViewCommunityPage */], { c_id: comm_id });
    };
    SearchPage.prototype.onUser = function (user_id) {
        this.storage.set('viewid', user_id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__viewuser_viewuser__["a" /* ViewuserPage */]);
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\search\search.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>Search</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-searchbar [(ngModel)]="txtsearch" (keyup)="onSearch()" placeholder="Search by User or Community"></ion-searchbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="search">\n\n      <ion-segment-button value="community">\n\n        Comminity\n\n      </ion-segment-button>\n\n      <ion-segment-button value="user">\n\n        User\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n  <div [ngSwitch]="search">\n\n    <ion-list *ngSwitchCase="\'community\'">\n\n<<<<<<< HEAD\n\n\n\n      <ion-toolbar no-border-top>\n\n        <ion-segment [(ngModel)]="community">\n\n          <ion-segment-button value="category">\n\n            Category\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n      </ion-toolbar>\n\n\n\n      <div [ngSwitch]="community">\n\n        <ion-list *ngSwitchCase="\'category\'">\n\n          <ion-grid *ngFor="let item of cat_comm1">\n\n            <ion-row>\n\n              <ion-col col-4>\n\n                <h3>{{item.cat_name}}</h3>\n\n              </ion-col>\n\n              <ion-col col-8>\n\n                <h3 (click)="onClick(item.comm_id)">{{item.comm_name}}</h3>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <!-- <ion-item *ngFor="let item of comm_arr">\n\n            <ion-avatar item-start>\n\n              <img src="{{item.comm_pic}}">\n\n            </ion-avatar>\n\n            <h3 (click)="onClick(item.comm_id)">{{item.comm_name}} </h3>\n\n          </ion-item>-->\n\n        </ion-list>\n\n      </div>\n\n=======\n\n      <ion-list>\n\n        <ion-item *ngFor="let item of comm_arr">\n\n          <ion-avatar item-start>\n\n            <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{item.comm_pic}}">\n\n          </ion-avatar>\n\n          <h3 (click)="onClick(item.comm_id)">{{item.comm_name}} </h3>\n\n        </ion-item>\n\n      </ion-list>\n\n>>>>>>> 41551c0d1547f8a58104539fbe1a3ae26e0e0df7\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'user\'">\n\n      <ion-list>\n\n        <ion-item *ngFor="let item of arr1" (click)="onUser(item.user_id)">\n\n          <ion-avatar item-start>\n\n            <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n\n          </ion-avatar>\n\n          <h3>{{item.user_name}}</h3>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n\n\n    </ion-list>\n\n  </div>\n\n\n\n\n\n\n\n  <!--<ion-list>\n\n    <button ion-item (click)="openItem(item)" *ngFor="let item of currentItems">\n\n      <ion-avatar item-start>\n\n        <img [src]="item.profilePic" />\n\n      </ion-avatar>\n\n      <h2>{{item.name}}</h2>\n\n      <p>{{item.about}}</p>\n\n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n\n    </button>\n\n  </ion-list>-->\n\n\n\n\n\n\n\n\n\n  <!--\n\n  <h4>Top Rated Communities</h4>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col *ngFor="let item of topComm">\n\n        <ion-card>\n\n          <img src="assets/img/communities/{{item.comm_pic}}" class="imgComm" />\n\n          <ion-card-content>\n\n            {{item.comm_name}}\n\n              <button ion-button small>Join Now</button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>-->\n\n  <!--  <ion-col>\n\n        <ion-card>\n\n          <img src="assets/img/huddle1.jpg" class="imgComm" />\n\n          <ion-card-content>\n\n            Community 2\n\n            <button ion-button small>Join Now</button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card>\n\n          <img src="assets/img/huddle1.jpg" class="imgComm" />\n\n          <ion-card-content>\n\n            Community 3\n\n            <button ion-button small>Join Now</button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card>\n\n          <img src="assets/img/huddle1.jpg" class="imgComm" />\n\n          <ion-card-content>\n\n            Community 4\n\n            <button ion-button small>Join Now</button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>-->'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\search\search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage_dist_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_community_db_community_db__["a" /* ComminityDbTsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loginpro_loginpro__["a" /* LoginproProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_8__providers_category_db_category_db__["a" /* CategoryDbProvider */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=11.js.map