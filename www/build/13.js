webpackJsonp([13],{

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPageModule", function() { return ContentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContentPageModule = (function () {
    function ContentPageModule() {
    }
    return ContentPageModule;
}());
ContentPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__content__["a" /* ContentPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__content__["a" /* ContentPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__content__["a" /* ContentPage */]
        ]
    })
], ContentPageModule);

//# sourceMappingURL=content.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPage; });
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


var ContentPage = (function () {
    function ContentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContentPage;
}());
ContentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-content',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\content\content.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Content\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    This is a perfect starting point for a page with primarily text content. The body is padded nicely and ready for prose.\n\n  </p>\n\n</ion-content>'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\content\content.html"*/
=======
<<<<<<< HEAD
        selector: 'page-item-create',template:/*ion-inline-start:"C:\jaishil\Lets meet\lets_meet\lets_meet_app\src\pages\item-create\item-create.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Create Event</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'CANCEL_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'DONE_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="addItem()">\n\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n    <div class="profile-image-wrapper" (click)="getPicture()">\n\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n\n        <ion-icon name="add"></ion-icon>\n\n        <div>\n\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n\n        </div>\n\n      </div>\n\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n\n    </div>\n\n    <ion-item *ngIf="!this.form.controls.profilePic.valid  && this.form.controls.profilePic.dirty">\n\n      <p>Please Choose an Image.</p>\n\n    </ion-item>\n\n\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-input type="text" formControlName="event_name" [(ngModel)]="event_name" placeholder="Event Name"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="!this.form.controls.event_name.valid  && this.form.controls.event_name.dirty">\n\n        <p>Please Enter an Event Name.</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-textarea placeholder="Event Description" formControlName="event_des" [(ngModel)]="event_des"></ion-textarea>\n\n      </ion-item>\n\n      <ion-item *ngIf="!this.form.controls.event_des.valid  && this.form.controls.event_des.dirty">\n\n        <p>Please Enter Event Description with minimum length of 15.</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Event Starting Time</ion-label>\n\n        <ion-datetime displayFormat="hh:mm A" formControlName="event_s_time" pickerFormat="hh mm A" [(ngModel)]="event_s_time"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item *ngIf="!this.form.controls.event_s_time.valid  && this.form.controls.event_s_time.dirty">\n\n        <p>Please choose Event Starting Time.</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Event Ending Time</ion-label>\n\n        <ion-datetime displayFormat="hh:mm A" formControlName="event_e_time" pickerFormat="hh mm A" [(ngModel)]="event_e_time"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item *ngIf="!this.form.controls.event_e_time.valid  && this.form.controls.event_e_time.dirty">\n\n        <p>Please choose Event Ending Time.</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Event Date</ion-label>\n\n        <ion-datetime displayFormat="DD/MMMM/YYYY" min="{{today}}" formControlName="event_date" pickerFormat="DD MMMM YYYY" [(ngModel)]="event_date"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item *ngIf="!this.form.controls.event_date.valid  && this.form.controls.event_date.dirty">\n\n        <p>Please choose Event Date.</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Event Location</ion-label>\n\n        <ion-textarea formControlName="event_loc" [(ngModel)]="event_loc"></ion-textarea>\n\n      </ion-item>\n\n      <ion-item *ngIf="!this.form.controls.event_loc.valid  && this.form.controls.event_loc.dirty">\n\n        <p>Please Enter Event Location with minimum length of 10.</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Community Name : </ion-label>\n\n        <ion-select formControlName="community_id" [(ngModel)]="community_id">\n\n          <ion-option *ngFor="let item of arr" value="{{item.comm_id}}">\n\n            {{item.comm_name}}\n\n          </ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="!this.form.controls.community_id.valid  && this.form.controls.community_id.dirty">\n\n        <p>Please Select a Community.</p>\n\n      </ion-item>\n\n      <!--<button ion-button block (click)="onAdd()" icon-right color="danger">\n\n        Create\n\n        <ion-icon name="checkmark-circle" color="primary"></ion-icon>\n\n      </button>-->\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\jaishil\Lets meet\lets_meet\lets_meet_app\src\pages\item-create\item-create.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_event_db_event_db__["a" /* EventDbProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_community_db_community_db__["a" /* ComminityDbTsProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], ItemCreatePage);

//# sourceMappingURL=item-create.js.map
=======
        selector: 'page-content',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\content\content.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Content\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    This is a perfect starting point for a page with primarily text content. The body is padded nicely and ready for prose.\n\n  </p>\n\n</ion-content>'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\content\content.html"*/
>>>>>>> a01ee7b6a2e886d322d94a66fdb50f74d59167e2
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
], ContentPage);

//# sourceMappingURL=content.js.map
>>>>>>> d560afb8b86e99ca4ae927c08b78c8ce1904ba02

/***/ })

});
//# sourceMappingURL=13.js.map