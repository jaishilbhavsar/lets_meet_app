webpackJsonp([4],{

<<<<<<< HEAD
/***/ 366:
=======
/***/ 367:
>>>>>>> d560afb8b86e99ca4ae927c08b78c8ce1904ba02
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(121);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs__ = __webpack_require__(387);
>>>>>>> d560afb8b86e99ca4ae927c08b78c8ce1904ba02
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    return TabsPageModule;
}());
TabsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]
        ]
    })
], TabsPageModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 386:
=======
/***/ 387:
>>>>>>> d560afb8b86e99ca4ae927c08b78c8ce1904ba02
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { Tab6Root } from "../pages";
var TabsPage = (function () {
    function TabsPage(navCtrl, translateService) {
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__pages__["c" /* Tab1Root */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__pages__["d" /* Tab2Root */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__pages__["e" /* Tab3Root */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__pages__["f" /* Tab4Root */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_3__pages__["g" /* Tab5Root */];
        //tab6Root: any = Tab6Root;
        this.tab1Title = "Home";
        this.tab2Title = "Stories";
        this.tab3Title = "Search";
        this.tab4Title = "Communities";
        this.tab5Title = "Users";
        /*translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
          this.tab1Title = values['TAB1_TITLE'];
          this.tab2Title = values['TAB2_TITLE'];
          this.tab3Title = values['TAB3_TITLE'];
        });*/
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-tutorial',template:/*ion-inline-start:"C:\jaishil\Lets meet\lets_meet\lets_meet_app\src\pages\tutorial\tutorial.html"*/'<ion-header no-shadow>\n\n  <ion-navbar color="signcolor">\n\n    <ion-buttons end *ngIf="showSkip">\n\n      <button ion-button (click)="startApp()" color="white">{{ \'TUTORIAL_SKIP_BUTTON\' | translate}}</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n  <ion-slides pager="true" dir="{{dir}}" (ionSlideWillChange)="onSlideChangeStart($event)">\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image" />\n\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      <p [innerHTML]="slide.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image" />\n\n      <h2 class="slide-title">{{ \'TUTORIAL_SLIDE4_TITLE\' | translate }}</h2>\n\n      <button ion-button icon-end large clear (click)="startApp()">\n\n        {{ \'TUTORIAL_CONTINUE_BUTTON\' | translate }}\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\jaishil\Lets meet\lets_meet\lets_meet_app\src\pages\tutorial\tutorial.html"*/
=======
        selector: 'page-tabs',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\tabs\tabs.html"*/'<ion-tabs class="tabs-icon-text" >\n\n  <ion-tab [root]="tab1Root"  [tabTitle]="tab1Title" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab4Root" [tabTitle]="tab2Title" tabIcon="aperture"></ion-tab>\n\n  <ion-tab [root]="tab3Root" [tabTitle]="tab3Title" tabIcon="search"></ion-tab>\n\n  <ion-tab [root]="tab2Root" [tabTitle]="tab4Title" tabIcon="globe"></ion-tab>\n\n  <ion-tab [root]="tab5Root" [tabTitle]="tab5Title" tabIcon="contact"></ion-tab>\n\n  <!--<ion-tab tabIcon="home" [tabTitle]="tab6Title" [root]="tab6Root" ></ion-tab>-->\n\n</ion-tabs>'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\tabs\tabs.html"*/
>>>>>>> d560afb8b86e99ca4ae927c08b78c8ce1904ba02
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=4.js.map