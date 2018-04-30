webpackJsonp([1],{

<<<<<<< HEAD
/***/ 369:
=======
/***/ 385:
>>>>>>> 90b10f97ac7fa42128c906973a3de57f5019a6c0
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyeventPageModule", function() { return MyeventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myevent__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyeventPageModule = (function () {
    function MyeventPageModule() {
    }
    return MyeventPageModule;
}());
MyeventPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__myevent__["a" /* MyeventPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myevent__["a" /* MyeventPage */]),
        ],
    })
], MyeventPageModule);

//# sourceMappingURL=myevent.module.js.map

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

/***/ })

});
//# sourceMappingURL=1.js.map