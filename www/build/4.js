webpackJsonp([4],{

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycommunityPageModule", function() { return MycommunityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mycommunity__ = __webpack_require__(387);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MycommunityPageModule = (function () {
    function MycommunityPageModule() {
    }
    return MycommunityPageModule;
}());
MycommunityPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__mycommunity__["a" /* MycommunityPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mycommunity__["a" /* MycommunityPage */]),
        ],
    })
], MycommunityPageModule);

//# sourceMappingURL=mycommunity.module.js.map

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

/***/ })

});
//# sourceMappingURL=4.js.map