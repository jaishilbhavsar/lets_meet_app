webpackJsonp([13],{

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPageModule", function() { return ContentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content__ = __webpack_require__(375);
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

/***/ 375:
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
<<<<<<< HEAD
    return ContentPage;
=======
    ItemCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._data1.getAllCommunities().subscribe(function (data) {
            _this.arr = data;
        }, function (e) {
            alert(e);
        }, function () {
        });
    };
    /* onAdd() {
   
       this.storage.get('uid').then((val) => {
         this.created_by = val;
         let l1 = this.load.create({
           content: 'Creating ...'
         });
         l1.present();
         let t1 = this.tos.create({
           duration: 3000,
           message: "Added ..."
         })
         this._data.addEvent(new Events_Class(this.event_id, this.event_name, this.event_des, this.event_pic, this.event_s_time, this.event_e_time, this.event_date, this.event_loc, this.created_by, this.community_id, 'true')).subscribe(
           (data: any) => {
             this.navCtrl.pop();
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
     }*/
    ItemCreatePage.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                _this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ItemCreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        if (this.selectedFile.type != 'image/png' && this.selectedFile.type != 'image/jpeg') {
            this.selectedFile = null;
            this.isReadyToSave = this.form.invalid;
            var toast = this.tos.create({
                message: 'Only Image formats are accepted!',
                showCloseButton: true,
                closeButtonText: 'Ok'
            });
            toast.present();
        }
        else {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                var imageData = readerEvent.target.result;
                _this.form.patchValue({ 'profilePic': imageData });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    ItemCreatePage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    ItemCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    ItemCreatePage.prototype.done = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        this.storage.get('uid').then(function (val) {
            _this.created_by = val;
            var l1 = _this.load.create({
                content: 'Creating ...'
            });
            l1.present();
            var t1 = _this.tos.create({
                duration: 3000,
                message: "Added ..."
            });
            var fd = new FormData();
            fd.append("event_id", _this.event_id);
            fd.append("event_name", _this.event_name);
            fd.append("event_des", _this.event_des);
            fd.append("image", _this.selectedFile, _this.selectedFile.name);
            fd.append("event_s_time", _this.event_s_time);
            fd.append("event_e_time", _this.event_e_time);
            fd.append("event_date", _this.event_date);
            fd.append("event_loc", _this.event_loc);
            fd.append("fk_user_id", _this.created_by);
            fd.append("fk_comm_id", _this.community_id);
            fd.append("event_verify", "true");
            _this._data.addEvent(fd).subscribe(function (data) {
                console.log(data);
                _this.viewCtrl.dismiss();
                t1.present();
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        });
    };
    return ItemCreatePage;
>>>>>>> e240063853c26afd484110599946d2bd37be6bcb
}());
ContentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-content',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\content\content.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Content\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    This is a perfect starting point for a page with primarily text content. The body is padded nicely and ready for prose.\n\n  </p>\n\n</ion-content>'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\content\content.html"*/
=======
        selector: 'page-item-create',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\item-create\item-create.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Create Event</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'CANCEL_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'DONE_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="addItem()">\n\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n    <div class="profile-image-wrapper" (click)="getPicture()">\n\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n\n        <ion-icon name="add"></ion-icon>\n\n        <div>\n\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n\n        </div>\n\n      </div>\n\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n\n    </div>\n\n    <div *ngIf="!this.form.controls.profilePic.valid  && this.form.controls.profilePic.dirty">\n\n      <p class="error">Please Choose an Image.</p>\n\n    </div>\n\n\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-input type="text" formControlName="event_name" [(ngModel)]="event_name" placeholder="Event Name"></ion-input>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.event_name.valid  && this.form.controls.event_name.dirty">\n\n        <p class="error">Please Enter an Event Name.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-textarea placeholder="Event Description" formControlName="event_des" [(ngModel)]="event_des"></ion-textarea>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.event_des.valid  && this.form.controls.event_des.dirty">\n\n        <p class="error">Please Enter Event Description with minimum length of 15.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label>Event Starting Time</ion-label>\n\n        <ion-datetime displayFormat="hh:mm A" formControlName="event_s_time" pickerFormat="hh mm A" [(ngModel)]="event_s_time"></ion-datetime>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.event_s_time.valid  && this.form.controls.event_s_time.dirty">\n\n        <p class="error">Please choose Event Starting Time.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label>Event Ending Time</ion-label>\n\n        <ion-datetime displayFormat="hh:mm A" formControlName="event_e_time" pickerFormat="hh mm A" [(ngModel)]="event_e_time"></ion-datetime>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.event_e_time.valid  && this.form.controls.event_e_time.dirty">\n\n        <p class="error">Please choose Event Ending Time.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label>Event Date</ion-label>\n\n        <ion-datetime displayFormat="DD/MMMM/YYYY" min="{{today}}" formControlName="event_date" pickerFormat="DD MMMM YYYY" [(ngModel)]="event_date"></ion-datetime>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.event_date.valid  && this.form.controls.event_date.dirty">\n\n        <p class="error">Please choose Event Date.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label>Event Location</ion-label>\n\n        <ion-textarea formControlName="event_loc" [(ngModel)]="event_loc"></ion-textarea>\n\n      </ion-item>\n\n      <div class="error" *ngIf="!this.form.controls.event_loc.valid  && this.form.controls.event_loc.dirty">\n\n        <p>Please Enter Event Location with minimum length of 10.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label>Community Name : </ion-label>\n\n        <ion-select formControlName="community_id" [(ngModel)]="community_id">\n\n          <ion-option *ngFor="let item of arr" value="{{item.comm_id}}">\n\n            {{item.comm_name}}\n\n          </ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <div class="error" *ngIf="!this.form.controls.community_id.valid  && this.form.controls.community_id.dirty">\n\n        <p>Please Select a Community.</p>\n\n      </div>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\item-create\item-create.html"*/
>>>>>>> e240063853c26afd484110599946d2bd37be6bcb
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
], ContentPage);

//# sourceMappingURL=content.js.map

/***/ })

});
//# sourceMappingURL=13.js.map