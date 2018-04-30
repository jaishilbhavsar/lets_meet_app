webpackJsonp([0],{

<<<<<<< HEAD
/***/ 377:
=======
/***/ 369:
>>>>>>> 90b10f97ac7fa42128c906973a3de57f5019a6c0
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UsersPageModule = (function () {
    function UsersPageModule() {
    }
    return UsersPageModule;
}());
UsersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__users__["a" /* UsersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__users__["a" /* UsersPage */]),
        ],
    })
], UsersPageModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditcommunityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_community_db_community_db__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_community_class__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_category_db_category_db__ = __webpack_require__(244);
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
 * Generated class for the EditcommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditcommunityPage = (function () {
    function EditcommunityPage(st, navCtrl, _data, _dataCategory, navParams, tos, load, viewCtrl, formBuilder, camera) {
        var _this = this;
        this.st = st;
        this.navCtrl = navCtrl;
        this._data = _data;
        this._dataCategory = _dataCategory;
        this.navParams = navParams;
        this.tos = tos;
        this.load = load;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.selectedFile = null;
        this.comm_id = null;
        this.comm_name = '';
        this.comm_des = '';
        this.comm_pic = '';
        this.comm_date = null;
        this.created_by = '';
        this.comm_rating = null;
        this.rate = 0;
        this.arr = [];
        this.arrCat = [];
        this.form = formBuilder.group({
            profilePic: [''],
            comm_name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            comm_des: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(280), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            comm_fk_cat_id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    EditcommunityPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EditcommunityPage');
        this.comm_id = this.navParams.get('c_id');
        this._data.getCommunityById(this.comm_id).subscribe(function (dt) {
            _this.arr = dt;
            console.log(_this.arr);
            _this.comm_name = _this.arr[0].comm_name;
            _this.comm_des = _this.arr[0].comm_des;
            _this.comm_date = _this.arr[0].comm_date;
            _this.comm_pic = _this.arr[0].comm_pic;
            _this.comm_fk_cat_id = _this.arr[0].comm_fk_cat_id;
        });
        this._dataCategory.getAllCategories().subscribe(function (data) {
            _this.arrCat = data;
            console.log(_this.arrCat);
        }, function (err) {
            alert(err);
        }, function () {
        });
    };
    EditcommunityPage.prototype.getPicture = function () {
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
        this.fileInput.nativeElement.click();
    };
    EditcommunityPage.prototype.processWebImage = function (event) {
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
    EditcommunityPage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    EditcommunityPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EditcommunityPage.prototype.done = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        if (this.selectedFile === null) {
            this._data.editCommunityOnly(new __WEBPACK_IMPORTED_MODULE_6__settings_community_class__["b" /* Update_Community_Class */](this.comm_id, this.comm_name, this.comm_des, this.comm_fk_cat_id)).subscribe(function (data) {
                console.log(data);
                _this.viewCtrl.dismiss();
            }, function (err) {
                alert(err);
            }, function () {
            });
        }
        else {
            var fd = new FormData();
            alert(this.created_by);
            fd.append('comm_id', this.comm_id);
            fd.append('comm_name', this.comm_name);
            fd.append('comm_des', this.comm_des);
            fd.append('image', this.selectedFile, this.selectedFile.name);
            fd.append('comm_fk_cat_id', this.comm_fk_cat_id);
            this._data.editCommunity(fd).subscribe(function (data) {
                _this.viewCtrl.dismiss();
            }, function (err) {
                alert(err);
            }, function () {
            });
        }
    };
    return EditcommunityPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], EditcommunityPage.prototype, "fileInput", void 0);
EditcommunityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editcommunity',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\editcommunity\editcommunity.html"*/'<!--\n\n  Generated template for the EditcommunityPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Edit Community</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'CANCEL_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'DONE_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form *ngIf="form" [formGroup]="form">\n\n    <label *ngIf="comm_pic">Old Image:</label>\n\n    <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{comm_pic}}" *ngIf="comm_pic" alt="Loading">\n\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n    <div class="profile-image-wrapper" (click)="getPicture()">\n\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n\n        <ion-icon name="add"></ion-icon>\n\n        <div>\n\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n\n        </div>\n\n      </div>\n\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n\n    </div>\n\n    <div *ngIf="!this.form.controls.profilePic.valid  && this.form.controls.profilePic.dirty">\n\n      <p class="error">Please Choose an Image.</p>\n\n    </div>\n\n\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-input type="text" formControlName="comm_name" placeholder="Community Name" [(ngModel)]="comm_name"></ion-input>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.comm_name.valid  && this.form.controls.comm_name.dirty">\n\n        <p class="error">Please Enter an Community Name.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-textarea formControlName="comm_des" placeholder="Community Description" [(ngModel)]="comm_des"></ion-textarea>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.comm_des.valid  && this.form.controls.comm_des.dirty">\n\n        <p class="error">Please Enter an Community Description.</p>\n\n      </div>\n\n      <div *ngIf="!this.form.controls.comm_des.valid  && this.form.controls.comm_des.dirty">\n\n        <p class="error">Please Enter Community Description with minimum length of 10.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label>Select Community Category:</ion-label>\n\n        <ion-select formControlName="comm_fk_cat_id" [(ngModel)]="comm_fk_cat_id">\n\n          <ion-option *ngFor="let item of arrCat" value="{{item.cat_id}}">{{item.cat_name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n   <!--  <button ion-button color="danger" [disabled]="!isReadyToSave" (click)="onUpdate()" block>Update Community</button> -->\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\editcommunity\editcommunity.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_community_db_community_db__["a" /* ComminityDbTsProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_category_db_category_db__["a" /* CategoryDbProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], EditcommunityPage);

//# sourceMappingURL=editcommunity.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditeventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_db_event_db__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_community_db_community_db__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_event_class__ = __webpack_require__(386);
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
 * Generated class for the EditeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditeventPage = (function () {
    function EditeventPage(storage, _data, _data1, load, tos, navCtrl, viewCtrl, navParams, formBuilder, camera) {
        var _this = this;
        this.storage = storage;
        this._data = _data;
        this._data1 = _data1;
        this.load = load;
        this.tos = tos;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.arr = [];
        this.arrCommu = [];
        this.event_id = null;
        this.event_name = "";
        this.event_des = "";
        this.event_loc = "";
        this.created_by = "";
        this.event_pic = "";
        this.event_verify = "false";
        this.selectedFile = null;
        this.form = formBuilder.group({
            profilePic: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            event_name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            event_des: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(15), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            event_s_time: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            event_e_time: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            event_date: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            event_loc: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            community_id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.today = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString();
    }
    EditeventPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EditeventPage');
        this.e_id = this.navParams.get('e_id');
        this._data.getEventById(this.e_id).subscribe(function (d) {
            _this.arr = d;
            console.log(_this.arr);
            _this.event_name = _this.arr[0].event_name;
            _this.event_des = _this.arr[0].event_des;
            _this.event_pic = _this.arr[0].event_pic;
            _this.event_s_time = _this.arr[0].event_s_time;
            _this.event_e_time = _this.arr[0].event_e_time;
            _this.event_date = _this.arr[0].event_date;
            _this.event_loc = _this.arr[0].event_loc;
            _this.created_by = _this.arr[0].fk_user_id;
            _this.community_id = _this.arr[0].fk_comm_id;
        });
        this._data1.getAllCommunities().subscribe(function (data) {
            _this.arrCommu = data;
        }, function (e) {
            alert(e);
        }, function () {
        });
    };
    EditeventPage.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
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
    EditeventPage.prototype.processWebImage = function (event) {
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
    EditeventPage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    EditeventPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    EditeventPage.prototype.done = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        this.storage.get('uid').then(function (val) {
            _this.created_by = val;
            var l1 = _this.load.create({
                content: 'Updating ...'
            });
            l1.present();
            var t1 = _this.tos.create({
                duration: 3000,
                message: "Updated ..."
            });
            if (_this.selectedFile === null) {
                _this._data.updateEventOnly(new __WEBPACK_IMPORTED_MODULE_7__shared_event_class__["a" /* Event_update_class */](_this.e_id, _this.event_name, _this.event_des, _this.event_s_time, _this.event_e_time, _this.event_date, _this.event_loc, _this.community_id)).subscribe(function (data) {
                    console.log(data);
                    _this.viewCtrl.dismiss();
                    t1.present();
                }, function (e) {
                    alert(e);
                }, function () {
                    l1.dismiss();
                });
            }
            else {
                var fd = new FormData();
                fd.append("event_id", _this.e_id);
                fd.append("event_name", _this.event_name);
                fd.append("event_des", _this.event_des);
                fd.append("image", _this.selectedFile, _this.selectedFile.name);
                fd.append("event_s_time", _this.event_s_time);
                fd.append("event_e_time", _this.event_e_time);
                fd.append("event_date", _this.event_date);
                fd.append("event_loc", _this.event_loc);
                fd.append("fk_user_id", _this.created_by);
                fd.append("fk_comm_id", _this.community_id);
                fd.append("event_verify", "false");
                _this._data.editEvent(fd).subscribe(function (data) {
                    console.log(data);
                    _this.viewCtrl.dismiss();
                    t1.present();
                }, function (e) {
                    alert(e);
                }, function () {
                    l1.dismiss();
                });
            }
        });
    };
    return EditeventPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], EditeventPage.prototype, "fileInput", void 0);
EditeventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editevent',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\editevent\editevent.html"*/'<!--\n\n  Generated template for the EditeventPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Edit Event</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'CANCEL_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n\n        <span color="primary" showWhen="ios">\n\n          Done\n\n        </span>\n\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="addItem()">\n\n    <label>Old Image:</label>\n\n    <img src="https://letsmeetbackend.herokuapp.com/images/events/{{event_pic}}" *ngIf="event_pic" alt="Loading">\n\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n    <div class="profile-image-wrapper" (click)="getPicture()">\n\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n\n        <ion-icon name="add"></ion-icon>\n\n        <div>\n\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n\n        </div>\n\n      </div>\n\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n\n    </div>\n\n    <div *ngIf="!this.form.controls.profilePic.valid  && this.form.controls.profilePic.dirty">\n\n      <p class="error">Please Choose an Image.</p>\n\n    </div>\n\n\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-input type="text" formControlName="event_name" [(ngModel)]="event_name" placeholder="Event Name"></ion-input>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.event_name.valid  && this.form.controls.event_name.dirty">\n\n        <p class="error">Please Enter an Event Name.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-textarea placeholder="Event Description" formControlName="event_des" [(ngModel)]="event_des"></ion-textarea>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.event_des.valid  && this.form.controls.event_des.dirty">\n\n        <p class="error">Please Enter Event Description with minimum length of 15.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label>Event Starting Time</ion-label>\n\n        <ion-datetime displayFormat="hh:mm A" formControlName="event_s_time" pickerFormat="hh mm A" [(ngModel)]="event_s_time"></ion-datetime>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.event_s_time.valid  && this.form.controls.event_s_time.dirty">\n\n        <p class="error">Please choose Event Starting Time.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label>Event Ending Time</ion-label>\n\n        <ion-datetime displayFormat="hh:mm A" formControlName="event_e_time" pickerFormat="hh mm A" [(ngModel)]="event_e_time"></ion-datetime>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.event_e_time.valid  && this.form.controls.event_e_time.dirty">\n\n        <p class="error">Please choose Event Ending Time.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label>Event Date</ion-label>\n\n        <ion-datetime displayFormat="DD/MMMM/YYYY" min="{{today}}" formControlName="event_date" pickerFormat="DD MMMM YYYY" [(ngModel)]="event_date"></ion-datetime>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.event_date.valid  && this.form.controls.event_date.dirty">\n\n        <p class="error">Please choose Event Date.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label>Event Location</ion-label>\n\n        <ion-textarea formControlName="event_loc" [(ngModel)]="event_loc"></ion-textarea>\n\n      </ion-item>\n\n      <div class="error" *ngIf="!this.form.controls.event_loc.valid  && this.form.controls.event_loc.dirty">\n\n        <p>Please Enter Event Location with minimum length of 10.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label>Community Name : </ion-label>\n\n        <ion-select formControlName="community_id" [(ngModel)]="community_id">\n\n          <ion-option *ngFor="let item of arrCommu" value="{{item.comm_id}}">\n\n            {{item.comm_name}}\n\n          </ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <div class="error" *ngIf="!this.form.controls.community_id.valid  && this.form.controls.community_id.dirty">\n\n        <p>Please Select a Community.</p>\n\n      </div>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\editevent\editevent.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_event_db_event_db__["a" /* EventDbProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_community_db_community_db__["a" /* ComminityDbTsProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]])
], EditeventPage);

//# sourceMappingURL=editevent.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Events_Class */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event_update_class; });
var Events_Class = (function () {
    function Events_Class(event_id, event_name, event_des, event_pic, event_s_time, event_e_time, event_date, event_loc, fk_user_id, fk_comm_id, event_verify) {
        this.event_id = event_id;
        this.event_name = event_name;
        this.event_des = event_des;
        this.event_pic = event_pic;
        this.event_s_time = event_s_time;
        this.event_e_time = event_e_time;
        this.event_date = event_date;
        this.event_loc = event_loc;
        this.fk_user_id = fk_user_id;
        this.fk_comm_id = fk_comm_id;
        this.event_verify = event_verify;
    }
    return Events_Class;
}());

var Event_update_class = (function () {
    function Event_update_class(event_id, event_name, event_des, event_s_time, event_e_time, event_date, event_loc, fk_comm_id) {
        this.event_id = event_id;
        this.event_name = event_name;
        this.event_des = event_des;
        this.event_s_time = event_s_time;
        this.event_e_time = event_e_time;
        this.event_date = event_date;
        this.event_loc = event_loc;
        this.fk_comm_id = fk_comm_id;
    }
    return Event_update_class;
}());

//# sourceMappingURL=event_class.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycommunityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editcommunity_editcommunity__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_community_view_community__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_loading_loading_controller__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loginpro_loginpro__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_community_db_community_db__ = __webpack_require__(67);
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
 * Generated class for the MycommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MycommunityPage = (function () {
    function MycommunityPage(cprovider, load, storage, modalCtrl, data, navCtrl, navParams) {
        this.cprovider = cprovider;
        this.load = load;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.data = data;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.arr = [];
    }
    MycommunityPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MycommunityPage');
        this.storage.get('uid').then((function (val) {
            _this.uid = val;
            var l1 = _this.load.create({
                content: "Loading ..."
            });
            l1.present();
            _this.data.getmycommunity(_this.uid).subscribe(function (dt) {
                _this.arr = dt;
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        }));
    };
    MycommunityPage.prototype.showcommunity = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__view_community_view_community__["a" /* ViewCommunityPage */], { c_id: id });
    };
    MycommunityPage.prototype.onEdit = function (id) {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__editcommunity_editcommunity__["a" /* EditcommunityPage */], { c_id: id });
        addModal.onDidDismiss(function (item) {
            _this.ionViewDidLoad();
        });
        addModal.present();
        //this.navCtrl.push(EditcommunityPage, { c_id: id });
    };
    MycommunityPage.prototype.onDelete = function (id) {
        this.cprovider.deleteCommunity(this.arr[0]);
        this.ionViewDidLoad();
    };
    return MycommunityPage;
}());
MycommunityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-mycommunity',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\mycommunity\mycommunity.html"*/'<!--\n\n  Generated template for the MycommunityPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>mycommunity</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card>\n\n  <ion-item *ngFor="let item of arr">\n\n        <ion-avatar item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{item.comm_pic}}">\n\n        </ion-avatar>\n\n        <h2>{{item.comm_name}}</h2>\n\n        <p>{{item.comm_desc}}</p>\n\n        <button ion-button (click)="onEdit(item.comm_id)" color="primary" round>Edit</button>\n\n        <button ion-button (click)="showcommunity(item.comm_id)" color="light" round>View</button>\n\n        <button ion-button (click)="onDelete(item.comm_id)" color="danger" round>Delete</button>\n\n      </ion-item>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\mycommunity\mycommunity.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_community_db_community_db__["a" /* ComminityDbTsProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loginpro_loginpro__["a" /* LoginproProvider */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* NavParams */]])
], MycommunityPage);

//# sourceMappingURL=mycommunity.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyeventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_past_event_view_past_event__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editevent_editevent__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_db_event_db__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_event_view_event__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loginpro_loginpro__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the MyeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyeventPage = (function () {
    function MyeventPage(edata, storage, data, load, navCtrl, modalCtrl, navParams) {
        this.edata = edata;
        this.storage = storage;
        this.data = data;
        this.load = load;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.arrPast = [];
        this.arrUp = [];
    }
    MyeventPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MyeventPage');
        console.log('ionViewDidLoad MycommunityPage');
        this.storage.get('uid').then((function (val) {
            _this.uid = val;
            var l1 = _this.load.create({
                content: "Loading ..."
            });
            l1.present();
            _this.data.getmyUpcomingEvents(_this.uid).subscribe(function (dt) {
                _this.arrUp = dt;
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        }));
        this.storage.get('uid').then((function (val) {
            _this.uid = val;
            var l1 = _this.load.create({
                content: "Loading ..."
            });
            l1.present();
            _this.data.getmyPastEvents(_this.uid).subscribe(function (dt) {
                _this.arrPast = dt;
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        }));
    };
    MyeventPage.prototype.onEdit = function (id) {
        var _this = this;
        //this.navCtrl.push(EditeventPage, { e_id: id });
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__editevent_editevent__["a" /* EditeventPage */], { e_id: id });
        modal.onDidDismiss(function (item) {
            _this.ionViewDidLoad();
        });
        modal.present();
    };
    MyeventPage.prototype.showUpevent = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__view_event_view_event__["a" /* ViewEventPage */], { e_id: id });
    };
    MyeventPage.prototype.onDeleteUpcoming = function (id) {
        this.edata.deleteEvent(this.arrUp[0]);
        this.ionViewDidLoad();
    };
    MyeventPage.prototype.showPastevent = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__view_past_event_view_past_event__["a" /* ViewPastEventPage */], { e_id: id });
    };
    MyeventPage.prototype.onDeletePast = function (id) {
        this.edata.deleteEvent(this.arrPast[0]);
        this.ionViewDidLoad();
    };
    return MyeventPage;
}());
MyeventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({
        selector: 'page-myevent',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\myevent\myevent.html"*/'<!--\n\n  Generated template for the MyeventPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>myevent</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-list-header>\n\n      Upcoming\n\n    </ion-list-header>\n\n      <ion-item *ngFor="let item of arrUp">\n\n        <ion-avatar item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}">\n\n        </ion-avatar>\n\n        <h2>{{item.event_name}}</h2>\n\n        <p>{{item.event_desc}}</p>\n\n        <button ion-button (click)="onEdit(item.event_id)" color="primary" round>Edit</button>\n\n        <button ion-button (click)="showUpevent(item.event_id)" color="light" round>View</button>\n\n        <button ion-button (click)="onDeleteUpcoming(item.event_id)" color="danger" round>Delete</button>\n\n      </ion-item>\n\n<ion-item></ion-item>\n\n    <ion-list-header>\n\n      Past\n\n    </ion-list-header>\n\n      <ion-item *ngFor="let item of arrPast">\n\n        <ion-avatar item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}">\n\n        </ion-avatar>\n\n        <h2>{{item.event_name}}</h2>\n\n        <p>{{item.event_desc}}</p>\n\n        <button ion-button (click)="showPastevent(item.event_id)" color="light" round>View</button>\n\n        <button ion-button (click)="onDeletePast(item.event_id)" color="danger" round>Delete</button>\n\n      </ion-item>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\myevent\myevent.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_event_db_event_db__["a" /* EventDbProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_loginpro_loginpro__["a" /* LoginproProvider */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["m" /* NavParams */]])
], MyeventPage);

//# sourceMappingURL=myevent.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myevent_myevent__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mycommunity_mycommunity__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__follower_follower__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loginpro_loginpro__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_event_db_event_db__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_loading_loading_controller__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__following_following__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__change_password_change_password__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_community_member_db_community_member_db__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__view_event_view_event__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__view_past_event_view_past_event__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__view_community_view_community__ = __webpack_require__(68);
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
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsersPage = (function () {
    function UsersPage(alert, menu, data, _dataEvent, _DataCommu, load, storage, platform, modalCtrl, navCtrl, viewCtrl, appCtrl, navParams) {
        this.alert = alert;
        this.menu = menu;
        this.data = data;
        this._dataEvent = _dataEvent;
        this._DataCommu = _DataCommu;
        this.load = load;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.navParams = navParams;
        this.arrmyevent = [];
        this.followers = [];
        this.followings = [];
        this.ed = "";
        this.u = [];
        this.eid = "";
        this.uid = "";
        this.img = "";
        this.usr = "upc";
        this.segme = "events";
        this.isAndroid = false;
        this.arrUpc = [];
        this.arrPast = [];
        this.arrCommu = [];
        this.arrmycommu = [];
        this.communitycount = 0;
        this.eventcount = 0;
        this.id = "";
        this.newpassword = "";
        this.oldpassword = "";
        this.isAndroid = platform.is('android');
    }
    UsersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('uid').then(function (val) {
            _this.uid = val;
            var l1 = _this.load.create({
                content: "Loading ..."
            });
            l1.present();
            _this.data.getUser(_this.uid).subscribe(function (dt) {
                _this.u = dt;
                _this.eid = _this.u[0].user_name;
                _this.img = _this.u[0].user_pic;
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
            _this.data.getmycommunity(_this.uid).subscribe(function (dt) {
                _this.arrmycommu = dt;
                _this.communitycount = _this.arrmycommu.length;
            });
            _this.data.getmyevent(_this.uid).subscribe(function (dt) {
                _this.arrmyevent = dt;
                _this.eventcount = _this.arrmyevent.length;
            });
            _this.data.getFollowers(_this.uid).subscribe(function (ft) {
                if (ft !== "") {
                    _this.followers = ft;
                    _this.followercount = _this.followers.length;
                }
            });
            _this.data.getFollowing(_this.uid).subscribe(function (fl) {
                if (fl != "") {
                    _this.followings = fl;
                    _this.followingcount = _this.followings.length;
                }
            });
        });
        this.storage.get('uid').then(function (val) {
            _this.uid = val;
            _this._dataEvent.getUpcEventRegUser(_this.uid).subscribe(function (data) {
                _this.arrUpc = data;
            }, function (err) {
                alert(err);
            }, function () {
            });
        });
        this.storage.get('uid').then(function (val) {
            _this.uid = val;
            _this._dataEvent.getPastEventReg(_this.uid).subscribe(function (data) {
                _this.arrPast = data;
            }, function (err) {
                alert(err);
            }, function () {
            });
        });
        this.storage.get('uid').then(function (val) {
            _this.uid = val;
            _this._DataCommu.getcommunitiesofuser(_this.uid).subscribe(function (data) {
                _this.arrCommu = data;
            }, function (err) {
                alert(err);
            }, function () {
            });
        });
        //this.data.set_url();
    };
    UsersPage.prototype.onFollower = function () {
        //this.storage.get('uid').then((val)=>{this.id;
        //alert(this.uid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__follower_follower__["a" /* FollowerPage */], { uid: this.uid });
        // });
    };
    UsersPage.prototype.onFollowing = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__following_following__["a" /* FollowingPage */], { uid: this.uid });
    };
    UsersPage.prototype.openModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__["a" /* EditprofilePage */]);
        modal.onDidDismiss(function (item) {
            _this.ionViewDidLoad();
        });
        modal.present();
    };
    UsersPage.prototype.onLogout = function () {
        this.storage.clear();
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_11__pages__["a" /* FirstRunPage */]);
    };
    UsersPage.prototype.changepass = function (newpass) {
        var _this = this;
        this.storage.get('uid').then(function (val) {
            _this.uid = val;
            console.log(_this.uid);
            console.log(newpass);
            _this.data.change(_this.uid, newpass).subscribe(function (dt) {
                var prompt2 = _this.alert.create({
                    title: 'Password Changed',
                    message: "Your Password has been successfully changed",
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function (data) {
                                console.log('Cancel clicked');
                            }
                        }
                    ]
                });
                prompt2.present();
            }, function (e) {
                console.log(e);
            }, function () {
            });
        });
    };
    UsersPage.prototype.validate = function (oldpass) {
        var _this = this;
        var l1 = this.load.create({
            content: "Loading ..."
        });
        l1.present();
        this.storage.get('uid').then(function (val) {
            _this.uid = val;
            _this.data.doLogin(_this.uid, oldpass, "user")
                .subscribe(function (dt) {
                if (dt != "") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__change_password_change_password__["a" /* ChangePasswordPage */]);
                }
                else {
                    alert("Incorrect Old Password");
                }
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        });
    };
    UsersPage.prototype.onChangePassword = function () {
        var _this = this;
        var prompt = this.alert.create({
            title: 'Change Password',
            message: "Enter Your Old Password",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Enter Old Password'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        _this.oldpassword = data.name;
                        _this.validate(_this.oldpassword);
                    }
                },
            ]
        });
        prompt.present();
    };
    UsersPage.prototype.onCLickUpcEvent = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__view_event_view_event__["a" /* ViewEventPage */], { e_id: id });
    };
    UsersPage.prototype.onCLickPastEvent = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__view_past_event_view_past_event__["a" /* ViewPastEventPage */], { e_id: id });
    };
    UsersPage.prototype.onCLickCommu = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__view_community_view_community__["a" /* ViewCommunityPage */], { c_id: id });
    };
    UsersPage.prototype.onMycommunity = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__mycommunity_mycommunity__["a" /* MycommunityPage */]);
    };
    UsersPage.prototype.onMyevent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__myevent_myevent__["a" /* MyeventPage */]);
    };
    return UsersPage;
}());
UsersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({
        selector: 'page-users',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\users\users.html"*/'<!--\n\n  Generated template for the UsersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>Welcome, {{eid}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="https://letsmeetbackend.herokuapp.com/images/users/{{img}}" height="100" width="100">\n\n      </ion-avatar>\n\n      <h1>{{eid}}</h1>\n\n      <button ion-button round (click)="openModal()">Edit Profile</button>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-item (click)="onFollower()">\n\n    <ion-icon name="logo-twitter" item-start></ion-icon>\n\n    Followers\n\n    <ion-badge item-end>{{followercount}}</ion-badge>\n\n  </ion-item>\n\n  <ion-item (click)="onFollowing()">\n\n    <ion-icon name="logo-twitter" item-start></ion-icon>\n\n    Following\n\n    <ion-badge item-end>{{followingcount}}</ion-badge>\n\n  </ion-item>\n\n  <ion-item (click)="onMycommunity()">\n\n    <ion-icon name="people" item-start></ion-icon>\n\n    My Communities\n\n    <ion-badge item-end>{{communitycount}}</ion-badge>\n\n  </ion-item>\n\n  <ion-item (click)="onMyevent()">\n\n    <ion-icon name="megaphone" item-start></ion-icon>\n\n    My Events\n\n    <ion-badge item-end>{{eventcount}}</ion-badge>\n\n  </ion-item>\n\n\n\n\n\n  <div padding >\n\n    <ion-segment [(ngModel)]="segme">\n\n      <ion-segment-button value="events">\n\n        Events\n\n      </ion-segment-button>\n\n      <ion-segment-button value="commu">\n\n        Communities\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="segme">\n\n    <ion-list *ngSwitchCase="\'events\'">\n\n      <ion-list-header>\n\n        Attending\n\n      </ion-list-header>\n\n      <ion-list-header></ion-list-header>\n\n      <ion-item *ngFor="let item of arrUpc" (click)="onCLickUpcEvent(item.event_id)">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}">\n\n        </ion-thumbnail>\n\n        <h2>{{item.event_name}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-list-header>\n\n        Attended\n\n      </ion-list-header>\n\n      <ion-item *ngFor="let item of arrPast" (click)="onCLickPastEvent(item.event_id)">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}">\n\n        </ion-thumbnail>\n\n        <h2>{{item.event_name}}</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'commu\'">\n\n      <ion-item *ngFor="let item of arrCommu" (click)="onCLickCommu(item.event_id)">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{item.comm_pic}}">\n\n        </ion-thumbnail>\n\n        <h2>{{item.comm_name}}</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n  </div>\n\n\n\n  <ion-list>\n\n    <ion-item (click)="onChangePassword()">\n\n      <h2>\n\n        <ion-icon name="key" md="md-key">&nbsp;&nbsp;</ion-icon> Change Password</h2>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="onLogout()">\n\n      <h2>\n\n        <ion-icon name="power" md="md-key">&nbsp;&nbsp;</ion-icon> Log Out</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\users\users.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_loginpro_loginpro__["a" /* LoginproProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_event_db_event_db__["a" /* EventDbProvider */],
        __WEBPACK_IMPORTED_MODULE_13__providers_community_member_db_community_member_db__["a" /* CommunityMemberDbProvider */],
        __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["m" /* NavParams */]])
], UsersPage);

// @Component({
//   template: `
// <ion-header>
//   <ion-toolbar>
//     <ion-title>
//       Description
//     </ion-title>
//     <ion-buttons start>
//       <button ion-button (click)="dismiss()">
//         <span ion-text color="primary" showWhen="ios">Cancel</span>
//         <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
//       </button>
//     </ion-buttons>
//   </ion-toolbar>
// </ion-header>
// <ion-content>
//   <ion-list>
//       <ion-item>
//         <ion-avatar item-start>
//           <img src="{{character.image}}">
//         </ion-avatar>
//         <h2>{{character.name}}</h2>
//         <p>{{character.quote}}</p>
//       </ion-item>
//   </ion-list>
// </ion-content>
// `
// })
// export class ModalContentPage {
//   character;
//   constructor(
//     public platform: Platform,
//     public params: NavParams,
//     public viewCtrl: ViewController
//   ) {
//     var characters = [
//       {
//         name: 'Gollum',
//         quote: 'Sneaky little hobbitses!',
//         image: 'assets/img/avatar-gollum.jpg'
//       }
//     ];
//   }
//   dismiss() {
//     this.viewCtrl.dismiss();
//   }
// }
//# sourceMappingURL=users.js.map

/***/ })

});
//# sourceMappingURL=0.js.map