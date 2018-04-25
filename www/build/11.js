webpackJsonp([11],{

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_master__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListMasterPageModule = (function () {
    function ListMasterPageModule() {
    }
    return ListMasterPageModule;
}());
ListMasterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]
        ]
    })
], ListMasterPageModule);

//# sourceMappingURL=list-master.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_event_db_event_db__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_event_community_db_event_community_db__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_rsvp_class__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_rsvp_db_rsvp_db__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListMasterPage = (function () {
    function ListMasterPage(storage, tos, _data, _data1, _dataRSVP, load, navCtrl, items, modalCtrl) {
        this.storage = storage;
        this.tos = tos;
        this._data = _data;
        this._data1 = _data1;
        this._dataRSVP = _dataRSVP;
        this.load = load;
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.event = "upcEvents";
        this.u_id = "";
        this.arr = [];
        this.arr1 = [];
        //arr1: Events[] = [];
        //join_button: boolean[] = [true];
        //going_button: boolean[] = [false];
        this.user_id = "";
        this.flag = false;
        this.txtsearch = '';
        this.reg = [];
    }
    ListMasterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var l1 = this.load.create({
            content: 'Loading Events'
        });
        l1.present();
        this.storage.get('uid').then(function (val) {
            _this.u_id = val;
            //this._data1.getAllEventsAndCommunities().subscribe(
            _this._data.getNotRegisteredEventsofUser(_this.u_id).subscribe(function (d) {
                _this.arr = d;
                _this.arr1 = d;
                console.log(_this.arr);
                console.log(_this.arr[0].event_pic);
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        });
        var l2 = this.load.create({
            content: 'Registered Events'
        });
        l2.present();
        this.storage.get('uid').then(function (val) {
            _this.u_id = val;
            _this._data.getRegisteredEventsofUser(_this.u_id).subscribe(function (data) {
                _this.reg = data;
                console.log(_this.reg);
            }, function (err) {
                alert(err);
            }, function () {
                l2.dismiss();
            });
        });
    };
    ListMasterPage.prototype.ionViewDidEnter = function () {
        this.ionViewDidLoad();
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    ListMasterPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(function (item) {
            _this.ionViewDidLoad();
        });
        addModal.present();
        //this.navCtrl.push(CreateEventPage);
    };
    ListMasterPage.prototype.onClick = function (event_id) {
        // this.navCtrl.push(ViewEventPage, { e_id: event_id });
        //this.navCtrl.push(ViewEventPage);
        this.navCtrl.push('view-past-event', { e_id: event_id });
        this.storage.set('evn_id', event_id);
    };
    ListMasterPage.prototype.onRSVP = function (event_id) {
        var _this = this;
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            var l1 = _this.load.create({
                content: 'Joining ...'
            });
            l1.present();
            var t1 = _this.tos.create({
                duration: 3000,
                message: "Joined ..."
            });
            _this._dataRSVP.addRSVP(new __WEBPACK_IMPORTED_MODULE_6__shared_rsvp_class__["a" /* RSVP_Class */](null, _this.user_id, event_id)).subscribe(function (data) {
                _this.ionViewDidLoad();
                //this.join_button = false;
                //this.going_button = true;
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
                t1.present();
            });
        });
    };
    ListMasterPage.prototype.onSearchIcon = function () {
        if (this.flag == true) {
            this.flag = false;
        }
        else {
            this.flag = true;
        }
    };
    ListMasterPage.prototype.getItems = function (ev) {
        this.arr = this.arr1;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.arr = this.arr.filter(function (x) {
                return x.event_name.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1;
            });
        }
    };
    ListMasterPage.prototype.onClickRSVP = function (evn_id) {
        var _this = this;
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            var l1 = _this.load.create({
                content: 'Joining ...'
            });
            l1.present();
            _this._dataRSVP.checkRSVPOfEvent(_this.u_id, evn_id).subscribe(function (data) {
                if (data == "") {
                    _this.onRSVP(evn_id);
                    //console.log("hello");
                    //console.log(data);
                }
                else {
                    var t1 = _this.tos.create({
                        duration: 3000,
                        message: "You're already Going ...",
                        position: 'top'
                    });
                    t1.present();
                }
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        });
    };
    // doInfinite(infiniteScroll) {
    //   console.log('Begin async operation');
    //   setTimeout(() => {
    //     for (let i = 0; i < 30; i++) {
    //       this.items.push(this.items.length);
    //     }
    //     console.log('Async operation has ended');
    //     infiniteScroll.complete();
    //   }, 500);
    // }
    ListMasterPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    return ListMasterPage;
}());
ListMasterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list-master',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\list-master\list-master.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <!--<ion-title>{{ \'LIST_MASTER_TITLE\' | translate }}</ion-title>-->\n\n    <ion-title>Events</ion-title>\n\n    <ion-buttons start>\n\n      <button (click)="onSearchIcon()" ion-button icon-only>\n\n        <ion-icon name=\'search\'></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addItem()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="event">\n\n      <ion-segment-button value="upcEvents">\n\n        Upcomig\n\n      </ion-segment-button>\n\n      <ion-segment-button value="rgEvents">\n\n        Registered\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<!--<h1>Hello</h1>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of currentItems">\n\n      <button ion-item (click)="openItem(item)">\n\n        <ion-avatar item-start>\n\n          <img [src]="item.profilePic" />\n\n        </ion-avatar>\n\n        <h2>{{item.name}}</h2>\n\n        <p>{{item.about}}</p>\n\n        <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n\n      </button>\n\n\n\n      <ion-item-options>\n\n        <button ion-button color="danger" (click)="deleteItem(item)">\n\n          {{ \'DELETE_BUTTON\' | translate }}\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>-->\n\n\n\n<!--<ion-content class="cards-bg">\n\n\n\n  <ion-card *ngFor="let item of arr">\n\n\n\n    <img src="{{item.event_pic}}" (click)="onClick(item.event_id)" />\n\n\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-card-title (click)="onClick(item.event_id)">\n\n            {{item.event_name}}\n\n          </ion-card-title>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button class="align-button" ion-button block icon-left color="danger" item-end>\n\n            <ion-icon name="add"></ion-icon>\n\n            Join Event\n\n          </button>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n    </ion-card-content>-->\n\n<ion-content>\n\n  \n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-searchbar *ngIf="flag" (ionInput)="getItems($event)"></ion-searchbar>\n\n  <div [ngSwitch]="event">\n\n    <ion-list *ngSwitchCase="\'upcEvents\'">\n\n      <ion-list>\n\n        <ion-item *ngFor="let item of arr" class="text-wrap">\n\n          <ion-avatar item-start>\n\n            <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}" (click)="onClick(item.event_id)">\n\n          </ion-avatar>\n\n          <h2 class="text-wrap" (click)="onClick(item.event_id)">{{item.event_name}}</h2>\n\n          <h3 class="text-wrap" (click)="onClick(item.event_id)">{{item.comm_name}}</h3>\n\n          <p class="text-wrap" (click)="onClick(item.event_id)">{{item.event_date | date:\'fullDate\'}},{{item.event_s_time}}</p>\n\n          <ion-icon name="add-circle" (click)="onClickRSVP(item.event_id)" item-end color="danger"></ion-icon>\n\n          <!--<button ion-button (click)="onRemoveRSVP(item.event_id)" *ngIf="going_button[i]" clear item-end>Going</button>-->\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'rgEvents\'">\n\n      <ion-list>\n\n        <ion-item *ngFor="let item of reg" class="text-wrap">\n\n          <ion-avatar item-start>\n\n            <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}" (click)="onClick(item.event_id)">\n\n          </ion-avatar>\n\n          <h2 class="text-wrap" (click)="onClick(item.event_id)">{{item.event_name}}</h2>\n\n          <h3 class="text-wrap" (click)="onClick(item.event_id)">{{item.comm_name}}</h3>\n\n          <p class="text-wrap" (click)="onClick(item.event_id)">{{item.event_date | date:\'fullDate\'}},{{item.event_s_time}}</p>\n\n\n\n          <ion-icon name="checkmark-circle" (click)="onClickRSVP(item.event_id)" item-end color="danger"></ion-icon>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-list>\n\n  </div>\n\n  <!--<ion-searchbar *ngIf="flag" (ionInput)="getItems($event)"></ion-searchbar>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of arr" class="text-wrap">\n\n      <ion-avatar item-start>\n\n        <img src="{{item.event_pic}}" (click)="onClick(item.event_id)">\n\n      </ion-avatar>\n\n      <h2 class="text-wrap" (click)="onClick(item.event_id)">{{item.event_name}}</h2>\n\n      <h3 class="text-wrap" (click)="onClick(item.event_id)">{{item.comm_name}}</h3>\n\n      <p class="text-wrap" (click)="onClick(item.event_id)">{{item.event_date | date:\'fullDate\'}},{{item.event_s_time}}</p>\n\n      <button ion-button (click)="onClickRSVP(item.event_id)" color="danger" clear item-end>Join Event</button>-->\n\n  <!--<button ion-button (click)="onRemoveRSVP(item.event_id)" *ngIf="going_button[i]" clear item-end>Going</button>-->\n\n  <!--</ion-item>\n\n  </ion-list>-->\n\n\n\n  <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data...">\n\n    </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\list-master\list-master.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_event_db_event_db__["a" /* EventDbProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_event_community_db_event_community_db__["a" /* EventCommunityDbProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_rsvp_db_rsvp_db__["a" /* RsvpDbProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* Items */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], ListMasterPage);

/**
 * Delete an item from the list of items.
 */
/*deleteItem(item) {
  this.items.delete(item);
}*/
/**
 * Navigate to the detail page for this item.
 */
/* openItem(item: Item) {
   this.navCtrl.push('ItemDetailPage', {
     item: item
   });
 }*/
/*
onRemoveRSVP(event_id) {
 this.storage.get('uid').then((val) => {
   this.user_id = val;
   let l1 = this.load.create({
     content: 'Removing ...'
   });
   l1.present();
   let t1 = this.tos.create({
     duration: 3000,
     message: "Removed ..."
   })
   this._dataRSVP.deleteRSVP(new RSVP_Class(null, this.user_id, event_id)).subscribe(
     (data: any) => {
       t1.present();
     },
     function (e) {
       alert(e);
     },
     function () {
       l1.dismiss();
     }
   );
 });
}

*/
//# sourceMappingURL=list-master.js.map

/***/ })

});
//# sourceMappingURL=11.js.map