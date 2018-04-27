webpackJsonp([11],{

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailPageModule", function() { return ItemDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_detail__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemDetailPageModule = (function () {
    function ItemDetailPageModule() {
    }
    return ItemDetailPageModule;
}());
ItemDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */]
        ]
    })
], ItemDetailPageModule);

//# sourceMappingURL=item-detail.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemDetailPage = (function () {
    function ItemDetailPage(navCtrl, navParams, items) {
        this.navCtrl = navCtrl;
        this.item = navParams.get('item') || items.defaultItem;
    }
    return ItemDetailPage;
}());
ItemDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-list-master',template:/*ion-inline-start:"C:\jaishil\Lets meet\lets_meet\lets_meet_app\src\pages\list-master\list-master.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <!--<ion-title>{{ \'LIST_MASTER_TITLE\' | translate }}</ion-title>-->\n\n    <ion-title>Events</ion-title>\n\n    <ion-buttons start>\n\n      <button (click)="onSearchIcon()" ion-button icon-only>\n\n        <ion-icon name=\'search\'></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addItem()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="event">\n\n      <ion-segment-button value="upcEvents">\n\n        Upcomig\n\n      </ion-segment-button>\n\n      <ion-segment-button value="rgEvents">\n\n        Registered\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<!--<h1>Hello</h1>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of currentItems">\n\n      <button ion-item (click)="openItem(item)">\n\n        <ion-avatar item-start>\n\n          <img [src]="item.profilePic" />\n\n        </ion-avatar>\n\n        <h2>{{item.name}}</h2>\n\n        <p>{{item.about}}</p>\n\n        <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n\n      </button>\n\n\n\n      <ion-item-options>\n\n        <button ion-button color="danger" (click)="deleteItem(item)">\n\n          {{ \'DELETE_BUTTON\' | translate }}\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>-->\n\n\n\n<!--<ion-content class="cards-bg">\n\n\n\n  <ion-card *ngFor="let item of arr">\n\n\n\n    <img src="{{item.event_pic}}" (click)="onClick(item.event_id)" />\n\n\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-card-title (click)="onClick(item.event_id)">\n\n            {{item.event_name}}\n\n          </ion-card-title>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button class="align-button" ion-button block icon-left color="danger" item-end>\n\n            <ion-icon name="add"></ion-icon>\n\n            Join Event\n\n          </button>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n    </ion-card-content>-->\n\n<ion-content>\n\n  \n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-searchbar *ngIf="flag" (ionInput)="getItems($event)"></ion-searchbar>\n\n  <div [ngSwitch]="event">\n\n    <ion-list *ngSwitchCase="\'upcEvents\'">\n\n      <ion-list>\n\n        <ion-item *ngFor="let item of arr" class="text-wrap">\n\n          <ion-avatar item-start>\n\n            <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}" (click)="onClick(item.event_id)">\n\n          </ion-avatar>\n\n          <h2 class="text-wrap" (click)="onClick(item.event_id)">{{item.event_name}}</h2>\n\n          <h3 class="text-wrap" (click)="onClick(item.event_id)">{{item.comm_name}}</h3>\n\n          <p class="text-wrap" (click)="onClick(item.event_id)">{{item.event_date | date:\'fullDate\'}},{{item.event_s_time}}</p>\n\n          <ion-icon name="add-circle" (click)="onClickRSVP(item.event_id)" item-end color="danger"></ion-icon>\n\n          <!--<button ion-button (click)="onRemoveRSVP(item.event_id)" *ngIf="going_button[i]" clear item-end>Going</button>-->\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'rgEvents\'">\n\n      <ion-list>\n\n        <ion-item *ngFor="let item of reg" class="text-wrap">\n\n          <ion-avatar item-start>\n\n            <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}" (click)="onClick(item.event_id)">\n\n          </ion-avatar>\n\n          <h2 class="text-wrap" (click)="onClick(item.event_id)">{{item.event_name}}</h2>\n\n          <h3 class="text-wrap" (click)="onClick(item.event_id)">{{item.comm_name}}</h3>\n\n          <p class="text-wrap" (click)="onClick(item.event_id)">{{item.event_date | date:\'fullDate\'}},{{item.event_s_time}}</p>\n\n\n\n          <ion-icon name="checkmark-circle" (click)="onClickRSVP(item.event_id)" item-end color="danger"></ion-icon>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-list>\n\n  </div>\n\n  <!--<ion-searchbar *ngIf="flag" (ionInput)="getItems($event)"></ion-searchbar>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of arr" class="text-wrap">\n\n      <ion-avatar item-start>\n\n        <img src="{{item.event_pic}}" (click)="onClick(item.event_id)">\n\n      </ion-avatar>\n\n      <h2 class="text-wrap" (click)="onClick(item.event_id)">{{item.event_name}}</h2>\n\n      <h3 class="text-wrap" (click)="onClick(item.event_id)">{{item.comm_name}}</h3>\n\n      <p class="text-wrap" (click)="onClick(item.event_id)">{{item.event_date | date:\'fullDate\'}},{{item.event_s_time}}</p>\n\n      <button ion-button (click)="onClickRSVP(item.event_id)" color="danger" clear item-end>Join Event</button>-->\n\n  <!--<button ion-button (click)="onRemoveRSVP(item.event_id)" *ngIf="going_button[i]" clear item-end>Going</button>-->\n\n  <!--</ion-item>\n\n  </ion-list>-->\n\n\n\n  <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data...">\n\n    </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\jaishil\Lets meet\lets_meet\lets_meet_app\src\pages\list-master\list-master.html"*/
=======
        selector: 'page-item-detail',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\item-detail\item-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ item.name }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="item-profile" text-center #profilePic [style.background-image]="\'url(\' + item.profilePic + \')\'">\n\n  </div>\n\n\n\n  <div class="item-detail" padding>\n\n    <h2>{{item.name}}</h2>\n\n    <p>{{item.about}}</p>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\item-detail\item-detail.html"*/
>>>>>>> d560afb8b86e99ca4ae927c08b78c8ce1904ba02
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Items */]])
], ItemDetailPage);

//# sourceMappingURL=item-detail.js.map

/***/ })

});
//# sourceMappingURL=11.js.map