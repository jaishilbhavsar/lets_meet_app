webpackJsonp([4],{

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs__ = __webpack_require__(387);
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

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(243);
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
        selector: 'page-tabs',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\tabs\tabs.html"*/'<ion-tabs class="tabs-icon-text" >\n\n  <ion-tab [root]="tab1Root"  [tabTitle]="tab1Title" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab4Root" [tabTitle]="tab2Title" tabIcon="aperture"></ion-tab>\n\n  <ion-tab [root]="tab3Root" [tabTitle]="tab3Title" tabIcon="search"></ion-tab>\n\n  <ion-tab [root]="tab2Root" [tabTitle]="tab4Title" tabIcon="globe"></ion-tab>\n\n  <ion-tab [root]="tab5Root" [tabTitle]="tab5Title" tabIcon="contact"></ion-tab>\n\n  <!--<ion-tab tabIcon="home" [tabTitle]="tab6Title" [root]="tab6Root" ></ion-tab>-->\n\n</ion-tabs>'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=4.js.map