webpackJsonp([6],{

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]
        ]
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_providers__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loginpro_loginpro__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupPage = (function () {
    function SignupPage(data, formBuilder, datePicker, navCtrl, user, toastCtrl, camera, translateService) {
        var _this = this;
        this.data = data;
        this.datePicker = datePicker;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.translateService = translateService;
        this.selectedFile = null;
        this.token = "user";
        this.form = formBuilder.group({
            eid: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            uname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')])],
            pass: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            mobile: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            myDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            profilePic: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.today = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString();
    }
    SignupPage.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
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
    SignupPage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        //alert(this.selectedFile.type);
        if (this.selectedFile.type != 'image/png' && this.selectedFile.type != 'image/jpeg') {
            this.selectedFile = null;
            this.isReadyToSave = this.form.invalid;
            var toast = this.toastCtrl.create({
                message: 'Only Image formats are accepted!',
                showCloseButton: true,
                closeButtonText: 'Ok'
            });
            toast.present();
        }
    };
    SignupPage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    SignupPage.prototype.onClick = function () {
        if (!this.form.valid) {
            return;
        }
        var fd = new FormData();
        fd.append("user_id", this.eid);
        fd.append("user_name", this.uname);
        fd.append("user_pass", this.pass);
        fd.append("image", this.selectedFile, this.selectedFile.name);
        fd.append("gender", this.gender);
        fd.append("user_mob_no", this.mobile);
        fd.append("user_bdate", this.myDate);
        fd.append("token", "user");
        alert(this.eid);
        console.log(fd);
        console.log(this.token);
        this.data.addUser(fd).subscribe(function (data) {
            alert("done");
            console.log(data);
        }, function (err) {
            alert(err);
        }, function () {
        });
    };
    return SignupPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], SignupPage.prototype, "fileInput", void 0);
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\signup\signup.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>{{ \'SIGNUP_TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <form *ngIf="form" [formGroup]="form">\n\n\n\n    <ion-list>\n\n      <ion-item>\n\n        <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n        <div class="profile-image-wrapper" (click)="getPicture()">\n\n          <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n\n            <ion-icon name="add"></ion-icon>\n\n            <div>\n\n              {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n\n            </div>\n\n          </div>\n\n          <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n\n        </div>\n\n        <div *ngIf="!this.form.controls.profilePic.valid  && this.form.controls.profilePic.dirty">\n\n          <p class="error">Please Choose an Image.</p>\n\n        </div>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-input type="email" formControlName="eid" [(ngModel)]="eid" placeholder="Enter Email ID"></ion-input>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.eid.valid  && this.form.controls.eid.dirty">\n\n        <p class="error">Please Enter Email ID.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-input type="text" formControlName="uname" placeholder="UserName" [(ngModel)]="uname"></ion-input>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.uname.valid  && this.form.controls.uname.dirty">\n\n        <p class="error">Please Enter User Name.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-input type="password" formControlName="pass" placeholder="Enter Password" [(ngModel)]="pass"></ion-input>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.pass.valid  && this.form.controls.pass.dirty">\n\n        <p class="error">Please Enter Password between 6-10.</p>\n\n      </div>\n\n      <div *ngIf="!this.form.controls.pass.minlength  && this.form.controls.pass.dirty">\n\n        <p class="error">Please Enter Password with minimum length of 6.</p>\n\n      </div>\n\n\n\n      <ion-list radio-group formControlName="gender" placeholder="Select Gender" [(ngModel)]="gender">\n\n        <ion-list-header>\n\n          Gender:\n\n        </ion-list-header>\n\n        <ion-item>\n\n          <ion-label>Male</ion-label>\n\n          <ion-radio value="Male"></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Female</ion-label>\n\n          <ion-radio value="Female"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n      <div *ngIf="!this.form.controls.gender.valid && this.form.controls.gender.dirty ">\n\n        <p class="error">Please select gender.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-input type="text" formControlName="mobile" placeholder="Enter Mobile No" minlength="6" maxlength="10" [(ngModel)]="mobile"></ion-input>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.mobile.valid  && this.form.controls.mobile.dirty">\n\n        <p class="error">Please Enter Mobile No.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label>Birth Date:</ion-label>\n\n        <ion-datetime displayFormat="DD/MMMM/YYYY" pickerFormat="DD MMMM YYYY" formControlName="myDate" [(ngModel)]="myDate"></ion-datetime>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.myDate.valid  && this.form.controls.myDate.dirty">\n\n        <p class="error">Please Enter Birthday.</p>\n\n      </div>\n\n\n\n      <div padding>\n\n        <button ion-button color="meetup" (click)="onClick()" [disabled]="!isReadyToSave" block>{{ \'SIGNUP_BUTTON\' | translate }}</button>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\signup\signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_loginpro_loginpro__["a" /* LoginproProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__["a" /* DatePicker */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_providers__["d" /* User */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=6.js.map