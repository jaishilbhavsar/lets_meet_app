webpackJsonp([28],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FeedbackDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FeedbackDbProvider = (function () {
    function FeedbackDbProvider(http) {
        this.http = http;
        this.url1 = "https://letsmeetbackend.herokuapp.com/feedback/";
        this.url2 = "https://letsmeetbackend.herokuapp.com/feedbackByEvent/";
        console.log('Hello FeedbackDbProvider Provider');
    }
    FeedbackDbProvider.prototype.getFeedbacksByEvent = function (id) {
        return this.http.get(this.url2 + id);
    };
    FeedbackDbProvider.prototype.addFeedback = function (feed) {
        var body = JSON.stringify(feed);
        return this.http.post(this.url1, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    FeedbackDbProvider.prototype.deleteFeedback = function (id) {
        return this.http.delete(this.url1 + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    FeedbackDbProvider.prototype.editFeedback = function (feed) {
        var body = JSON.stringify(feed);
        return this.http.put(this.url1 + feed.feed_id, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    FeedbackDbProvider.prototype.getFeedbackById = function (id) {
        return this.http.get(this.url1);
    };
    return FeedbackDbProvider;
}());
FeedbackDbProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], FeedbackDbProvider);

//# sourceMappingURL=feedback-db.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_db_event_db__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_event_community_db_event_community_db__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_rsvp_class__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rsvp_db_rsvp_db__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_community_view_community__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_feedback_db_feedback_db__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_loginpro_loginpro__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_feedback_class__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__viewuser_viewuser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_calendar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_geolocation_geolocation__ = __webpack_require__(201);
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
 * Generated class for the ViewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewEventPage = (function () {
    function ViewEventPage(storage, load, tos, socialSharing, calendar, alerCtrl, _dataEvent, _dataRSVP, _dataEventComm, _dataFeedback, _dataUser, _geolocation, navCtrl, navParams, viewCtrl, platform) {
        this.storage = storage;
        this.load = load;
        this.tos = tos;
        this.socialSharing = socialSharing;
        this.calendar = calendar;
        this.alerCtrl = alerCtrl;
        this._dataEvent = _dataEvent;
        this._dataRSVP = _dataRSVP;
        this._dataEventComm = _dataEventComm;
        this._dataFeedback = _dataFeedback;
        this._dataUser = _dataUser;
        this._geolocation = _geolocation;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.viewEvent = "event_detail";
        this.event_name = "";
        this.event_des = "";
        this.event_s_time = null;
        this.event_e_time = null;
        this.event_date = null;
        this.event_loc = "";
        this.created_by = "";
        this.event_pic = "";
        this.user_id = "";
        this.e_pic = "";
        this.u_id = "";
        this.comm_name = "";
        this.comm_pic = "";
        this.rsvp_id = [];
        this.event_rsvp_user = [];
        this.feedback_event_user = [];
        this.arrUser = [];
        this.flag1 = true;
        this.feed_des = "";
    }
    ViewEventPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ViewEventPage');
        this.e_id = this.navParams.get('e_id');
        this._dataEvent.getEventById(this.e_id).subscribe(function (d) {
            _this.arr = d;
            _this.event_name = _this.arr[0].event_name;
            _this.event_des = _this.arr[0].event_des;
            _this.event_pic = _this.arr[0].event_pic;
            _this.event_s_time = _this.arr[0].event_s_time;
            _this.event_e_time = _this.arr[0].event_e_time;
            _this.event_date = _this.arr[0].event_date;
            _this.event_loc = _this.arr[0].event_loc;
            _this.created_by = _this.arr[0].user_name;
            _this.u_id = _this.arr[0].user_id;
            _this.e_date = _this.event_date;
            _this.e_Str = new String(_this.e_date).toString();
            //alert(this.e_Str.substr(0, this.e_Str.indexOf('T')));
            _this.e_Str = _this.e_Str.substr(0, _this.e_Str.indexOf('T'));
            _this.to_date = new Date(_this.e_Str);
            //this.geo_code(this.event_loc);
            _this.geo_code(_this.event_loc);
        }, function (e) {
            alert(e);
        }, function () {
        });
        this._dataEventComm.getCommunityByEventId(this.e_id).subscribe(function (data) {
            _this.event_community = data;
            _this.comm_id = _this.event_community[0].comm_id;
            _this.comm_name = _this.event_community[0].comm_name;
            _this.comm_pic = _this.event_community[0].comm_pic;
        }, function (e) {
            alert(e);
        }, function () {
        });
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            _this._dataRSVP.checkRSVPOfEvent(_this.user_id, _this.e_id).subscribe(function (data) {
                if (data == "") {
                    //alert("baki");
                    _this.join_button = true;
                    _this.going_button = false;
                }
                else {
                    _this.join_button = false;
                    _this.going_button = true;
                }
            }, function (e) {
                alert(e);
            }, function () {
            });
        });
        this._dataRSVP.countRSVP(this.e_id).subscribe(function (data) {
            //this.cnt_rsvp = data[0].count;
            _this.event_rsvp_user = data;
            _this.cnt_rsvp = _this.event_rsvp_user.length;
        }, function (err) {
            alert(err);
        }, function () {
        });
        //alert(this.e_id);
        this._dataFeedback.getFeedbacksByEvent(this.e_id).subscribe(function (data) {
            _this.feedback_event_user = data;
            //console.log(this.feedback_event_user);
        }, function (err) {
            alert(err);
        }, function () {
        });
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            _this._dataUser.getUser(_this.user_id).subscribe(function (data) {
                _this.arrUser = data;
                _this.user_pic = _this.arrUser[0].user_pic;
                _this.user_name = _this.arrUser[0].user_name;
            }, function (err) {
                alert(err);
            }, function () {
            });
        });
        this.calendar.createCalendar('MyCalendar').then(function (msg) { console.log(msg); }, function (err) { console.log(err); });
    };
    /* geo_code(address: string) {
      console.log("inside geocode");
      this._geolocation.getCurrentPosition(address).subscribe(
        (data: any) => {
          this.loadMap(data);
          console.log("Add:" + data);
        }
      );
    } */
    ViewEventPage.prototype.geo_code = function (address) {
        var _this = this;
        console.log("inside geo_code::");
        this._geolocation.getCurrentPosition(address).subscribe(function (data) {
            _this.loadMap(data);
            console.log("add:" + data);
        });
    };
    /* loadMap(data: any) {
      //let lat = data["results"][0].geometry.location.lat;
      let lat = data["results"][0].geometry.location.lat;
      let lng = data["results"][0].geometry.location.lng;
      let letlng = new google.maps.Latlng(lat, lng);
      console.log("lat:" + lat);
      let mapOptions = {
        center: letlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
  
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      var marker = new google.maps.Marker({
        position: letlng,
        title: this.event_loc,
        map: this.map,
        draggable: true
      });
    } */
    ViewEventPage.prototype.loadMap = function (data) {
        var lat = data["results"][0].geometry.location.lat;
        var lng = data["results"][0].geometry.location.lng;
        var latLng = new google.maps.LatLng(lat, lng);
        console.log("lat:" + lat);
        var mapOptions = {
            center: latLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            position: latLng,
            title: "Manekchowk,Ahmedabad,Gujarat,India",
            map: this.map,
            draggable: true
        });
    };
    ViewEventPage.prototype.changeFlag = function () {
        if (this.flag1 == true) {
            this.flag1 = false;
        }
        else {
            this.flag1 = true;
        }
    };
    ViewEventPage.prototype.onRSVP = function () {
        var _this = this;
        console.log(this.user_id);
        console.log(this.e_id);
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
            _this._dataRSVP.addRSVP(new __WEBPACK_IMPORTED_MODULE_5__shared_rsvp_class__["a" /* RSVP_Class */](null, _this.user_id, _this.e_id)).subscribe(function (data) {
                t1.present();
                _this.join_button = false;
                _this.going_button = true;
                _this.calendar.createEvent(_this.event_name, _this.event_loc, _this.event_des, _this.to_date, _this.to_date).then(function (msg) { console.log(msg); }, function (err) { console.log(err); });
                //his.arrRsvp = data;
                //this.rsvp_id = this.arrRsvp.RSVP_id;
                //alert(this.rsvp_id);
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        });
    };
    ViewEventPage.prototype.onClickRSVP = function () {
        var _this = this;
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            var l1 = _this.load.create({
                content: 'Joining ...'
            });
            l1.present();
            _this._dataRSVP.checkRSVPOfEvent(_this.user_id, _this.e_id).subscribe(function (data) {
                if (data == "") {
                    _this.onRSVP();
                }
                else {
                    var t1 = _this.tos.create({
                        duration: 3000,
                        message: "You're Going ..."
                    });
                    t1.present();
                    _this.arrRsvp = data;
                    // this.rsvp_id = this.arrRsvp.RSVP_id;
                    //alert(this.rsvp_id);
                }
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        });
    };
    ViewEventPage.prototype.onRemoveRSVP = function () {
        var _this = this;
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            var l1 = _this.load.create({
                content: 'Removing ...'
            });
            l1.present();
            var t1 = _this.tos.create({
                duration: 3000,
                message: "Removed ..."
            });
            _this._dataRSVP.checkRSVPOfEvent(_this.user_id, _this.e_id).subscribe(function (data) {
                if (data == "") {
                    alert("nathi");
                }
                else {
                    _this.arrRsvp = data;
                    //console.log(data);
                    //console.log(this.arrRsvp[0].RSVP_id);
                    _this._dataRSVP.deleteRSVP(_this.arrRsvp[0].RSVP_id).subscribe(function (data) {
                        _this.calendar.deleteEvent(_this.event_name, _this.event_loc, _this.event_des, _this.to_date, _this.to_date).then(function (msg) { console.log(msg); }, function (err) { console.log(err); });
                        //alert("thyu");
                        _this.join_button = true;
                        _this.going_button = false;
                    }, function (err) {
                        alert(err);
                    }, function () {
                    });
                }
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
                t1.present();
            });
        });
    };
    ViewEventPage.prototype.doConfirm = function () {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'Not going?',
            message: "Are you sure you don't want to attend this event?",
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        _this.onRemoveRSVP();
                    }
                }
            ]
        });
        confirm.present();
    };
    ViewEventPage.prototype.onView = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__view_community_view_community__["a" /* ViewCommunityPage */], { c_id: this.comm_id });
    };
    ViewEventPage.prototype.newFeedback = function () {
        var _this = this;
        if (this.feed_des.length > 0) {
            var l1_1 = this.load.create({
                content: 'Adding Feedback ...'
            });
            l1_1.present();
            this.storage.get('uid').then(function (val) {
                _this.user_id = val;
                _this._dataFeedback.addFeedback(new __WEBPACK_IMPORTED_MODULE_11__shared_feedback_class__["a" /* Feedback_Class */](null, _this.feed_des, _this.e_id, _this.user_id, null)).subscribe(function (d) {
                    _this.flag1 = true;
                    _this.feed_des = "";
                    _this.ionViewDidLoad();
                }, function (err) {
                    alert(err);
                }, function () {
                    l1_1.dismiss();
                });
            });
        }
        else {
            this.flag1 = true;
        }
    };
    ViewEventPage.prototype.deleteFeedback = function (id) {
        var _this = this;
        var t1 = this.tos.create({
            duration: 3000,
            message: "Deleted ..."
        });
        this._dataFeedback.deleteFeedback(id).subscribe(function (d) {
            _this.ionViewDidLoad();
            t1.present();
        }, function (err) {
            alert(err);
        }, function () {
        });
    };
    ViewEventPage.prototype.onSharing = function () {
        this.e_pic = "https://letsmeetbackend.herokuapp.com/public/images/events/" + this.event_pic;
        this.socialSharing.share(this.event_des, this.event_name).
            catch(function (err) { return alert(err); });
    };
    ViewEventPage.prototype.showuser = function (id) {
        this.storage.set('viewid', id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__viewuser_viewuser__["a" /* ViewuserPage */]);
    };
    return ViewEventPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("map"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ViewEventPage.prototype, "mapElement", void 0);
ViewEventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-view-event',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\view-event\view-event.html"*/'<!--\n\n  Generated template for the ViewEventPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-navbar>\n\n      <ion-title></ion-title>\n\n    </ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="onSharing()">\n\n        <ion-icon name="share"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item (click)="onView()">\n\n    <ion-avatar item-start>\n\n      <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{comm_pic}}">\n\n    </ion-avatar>\n\n    <h2>{{comm_name}}</h2>\n\n    <!--<p>November 5, 1955</p>-->\n\n  </ion-item>\n\n\n\n  <img src="https://letsmeetbackend.herokuapp.com/images/events/{{event_pic}}" />\n\n  <h1>{{event_name}}</h1>\n\n  <ion-item *ngIf="join_button">\n\n    <h2>Are you going?</h2>\n\n    <ion-buttons end>\n\n      <button small ion-button icon-only (click)="onClickRSVP()" color="success">\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-item>\n\n\n\n  <ion-item *ngIf="going_button">\n\n    <h2>You\'re going!</h2>\n\n    <ion-buttons end>\n\n      <button ion-button small icon-only (click)="doConfirm()" color="danger">\n\n        <ion-icon name="close-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-item>\n\n\n\n  <div padding>\n\n    <ion-segment [(ngModel)]="viewEvent">\n\n      <ion-segment-button value="event_detail">\n\n        Details\n\n      </ion-segment-button>\n\n      <ion-segment-button value="feedback">\n\n        Feedback\n\n      </ion-segment-button>\n\n      <ion-segment-button value="going_cnt">\n\n        {{cnt_rsvp}} are going\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="viewEvent">\n\n    <ion-list *ngSwitchCase="\'event_detail\'">\n\n      <ion-item>\n\n        <h3>\n\n          <ion-icon name="calendar" item-start></ion-icon> {{event_date | date:\'dd-MM-yy\' }}\n\n        </h3>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <h4>\n\n          <ion-icon name="time" item-start></ion-icon> {{event_s_time}} - {{event_e_time}}\n\n        </h4>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <h3 class="text-wrap">\n\n          <ion-icon name="navigate" item-start></ion-icon> {{event_loc}}\n\n        </h3>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <h3 (click)="showuser(u_id)">\n\n          <ion-icon name="person" item-start> Hosted by</ion-icon> {{created_by}}\n\n        </h3>\n\n      </ion-item>\n\n\n\n      <p>{{event_des}}</p>\n\n\n\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'feedback\'">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/users/{{user_pic}}">\n\n        </ion-avatar>\n\n        <h2>{{user_name}}</h2>\n\n        <p (click)="changeFlag()" *ngIf="flag1;else textAreaBox">Add a new Fedback</p>\n\n        <ng-template #textAreaBox>\n\n          <textarea placeholder="Add a new Fedback" [(ngModel)]="feed_des" name="" id="" cols="14" rows="3"></textarea>\n\n          <button ion-button icon-only (click)="newFeedback()">\n\n            <ion-icon name="happy"></ion-icon>\n\n          </button>\n\n        </ng-template>\n\n      </ion-item>\n\n      <ion-card>\n\n        <ion-item *ngFor="let item of feedback_event_user">\n\n          <ion-avatar item-start>\n\n            <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}" (click)="showuser(item.user_id)">\n\n          </ion-avatar>\n\n          <h2 (click)="showuser(item.user_id)">{{item.user_name}}</h2>\n\n          <p>{{item.feed_date | date:\'mediumDate\'}}</p>\n\n          <ion-card-content>\n\n            <p class="text-wrap">{{item.feed_des}}</p>\n\n          </ion-card-content>\n\n          <button *ngIf="item.user_id==user_id" (click)="deleteFeedback(item.feed_id)" ion-button icon-only item-end clear>\n\n            <ion-icon name="trash"></ion-icon>\n\n          </button>\n\n          <!--<button *ngIf="item.user_id==user_id" (click)="updateFeedback(item.feed_id)" ion-button icon-only item-end clear>\n\n            <ion-icon name="create"></ion-icon>\n\n          </button>-->\n\n        </ion-item>\n\n      </ion-card>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'going_cnt\'">\n\n      <ion-item *ngFor="let item of event_rsvp_user" (click)="showuser(item.user_id)">\n\n        <ion-avatar item-left>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n\n        </ion-avatar>\n\n        <h2>{{item.user_name}}</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div #map id="map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\view-event\view-event.html"*/,
=======
        selector: 'page-view-event',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\view-event\view-event.html"*/'<!--\n\n  Generated template for the ViewEventPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-navbar>\n\n      <ion-title></ion-title>\n\n    </ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="onSharing()">\n\n        <ion-icon name="share"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item (click)="onView()">\n\n    <ion-avatar item-start>\n\n      <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{comm_pic}}">\n\n    </ion-avatar>\n\n    <h2>{{comm_name}}</h2>\n\n    <!--<p>November 5, 1955</p>-->\n\n  </ion-item>\n\n\n\n  <img src="https://letsmeetbackend.herokuapp.com/images/events/{{event_pic}}" />\n\n  <h1>{{event_name}}</h1>\n\n  <ion-item *ngIf="join_button">\n\n    <h2>Are you going?</h2>\n\n    <ion-buttons end>\n\n      <button small ion-button icon-only (click)="onClickRSVP()" color="success">\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-item>\n\n\n\n  <ion-item *ngIf="going_button">\n\n    <h2>You\'re going!</h2>\n\n    <ion-buttons end>\n\n      <button ion-button small icon-only (click)="doConfirm()" color="danger">\n\n        <ion-icon name="close-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-item>\n\n\n\n  <div padding>\n\n    <ion-segment [(ngModel)]="viewEvent">\n\n      <ion-segment-button value="event_detail">\n\n        Details\n\n      </ion-segment-button>\n\n      <ion-segment-button value="feedback">\n\n        Feedback\n\n      </ion-segment-button>\n\n      <ion-segment-button value="going_cnt">\n\n        {{cnt_rsvp}} are going\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="viewEvent">\n\n    <ion-list *ngSwitchCase="\'event_detail\'">\n\n      <ion-item>\n\n        <h3>\n\n          <ion-icon name="calendar" item-start></ion-icon> {{event_date | date:\'dd-MM-yy\' }}\n\n        </h3>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <h4>\n\n          <ion-icon name="time" item-start></ion-icon> {{event_s_time}} - {{event_e_time}}\n\n        </h4>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <h3 class="text-wrap">\n\n          <ion-icon name="navigate" item-start></ion-icon> {{event_loc}}\n\n        </h3>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <h3 (click)="showuser(u_id)">\n\n          <ion-icon name="person" item-start> Hosted by</ion-icon> {{created_by}}\n\n        </h3>\n\n      </ion-item>\n\n\n\n      <p>{{event_des}}</p>\n\n\n\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'feedback\'">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/users/{{user_pic}}">\n\n        </ion-avatar>\n\n        <h2>{{user_name}}</h2>\n\n        <p (click)="changeFlag()" *ngIf="flag1;else textAreaBox">Add a new Fedback</p>\n\n        <ng-template #textAreaBox>\n\n          <textarea placeholder="Add a new Fedback" [(ngModel)]="feed_des" name="" id="" cols="14" rows="3"></textarea>\n\n          <button ion-button icon-only (click)="newFeedback()">\n\n            <ion-icon name="happy"></ion-icon>\n\n          </button>\n\n        </ng-template>\n\n      </ion-item>\n\n      <ion-card>\n\n        <ion-item *ngFor="let item of feedback_event_user">\n\n          <ion-avatar item-start>\n\n            <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}" (click)="showuser(item.user_id)">\n\n          </ion-avatar>\n\n          <h2 (click)="showuser(item.user_id)">{{item.user_name}}</h2>\n\n          <p>{{item.feed_date | date:\'mediumDate\'}}</p>\n\n          <ion-card-content>\n\n            <p class="text-wrap">{{item.feed_des}}</p>\n\n          </ion-card-content>\n\n          <button *ngIf="item.user_id==user_id" (click)="deleteFeedback(item.feed_id)" ion-button icon-only item-end clear>\n\n            <ion-icon name="trash"></ion-icon>\n\n          </button>\n\n          <!--<button *ngIf="item.user_id==user_id" (click)="updateFeedback(item.feed_id)" ion-button icon-only item-end clear>\n\n            <ion-icon name="create"></ion-icon>\n\n          </button>-->\n\n        </ion-item>\n\n      </ion-card>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'going_cnt\'">\n\n      <ion-item *ngFor="let item of event_rsvp_user" (click)="showuser(item.user_id)">\n\n        <ion-avatar item-left>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n\n        </ion-avatar>\n\n        <h2>{{item.user_name}}</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div #map id="map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\view-event\view-event.html"*/,
>>>>>>> 5b80d79608de99c5a23b28bb3d3eb94c53d8630a
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_calendar__["a" /* Calendar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_event_db_event_db__["a" /* EventDbProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_rsvp_db_rsvp_db__["a" /* RsvpDbProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_event_community_db_event_community_db__["a" /* EventCommunityDbProvider */],
        __WEBPACK_IMPORTED_MODULE_9__providers_feedback_db_feedback_db__["a" /* FeedbackDbProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_loginpro_loginpro__["a" /* LoginproProvider */],
        __WEBPACK_IMPORTED_MODULE_14__providers_geolocation_geolocation__["a" /* GeolocationProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], ViewEventPage);

//# sourceMappingURL=view-event.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewuser_viewuser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_loginpro_loginpro__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__ = __webpack_require__(36);
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
 * Generated class for the FollowerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FollowerPage = (function () {
    function FollowerPage(storage, load, data, navCtrl, navParams) {
        this.storage = storage;
        this.load = load;
        this.data = data;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.i = 0;
        this.arr = [];
        this.follow = [];
        this.uid = '';
        this.user = [];
    }
    FollowerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad FollowerPage');
        this.uid = this.navParams.get('uid');
        var l1 = this.load.create({
            content: "Loading ..."
        });
        l1.present();
        this.data.getFollowing(this.uid).subscribe(function (fl) {
            if (fl != null) {
                _this.follow = fl;
                console.log(_this.follow);
                console.log(_this.follow.length);
                _this.data.getFollowingUser(_this.uid).subscribe(function (data) { _this.arr = data; });
            }
        }, function (e) {
            alert(e);
        }, function () {
            l1.dismiss();
        });
    };
    FollowerPage.prototype.showuser = function (id) {
        this.storage.set('viewid', id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__viewuser_viewuser__["a" /* ViewuserPage */]);
    };
    return FollowerPage;
}());
FollowerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-follower',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\follower\follower.html"*/'<!--\n\n  Generated template for the FollowerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>follower</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-card>\n\n\n\n        <ion-item *ngFor="let item of arr" (click)="showuser(item.user_id)">\n\n          <ion-avatar item-start>\n\n            <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n\n          </ion-avatar>\n\n          <h2>{{item.user_name}}</h2>\n\n          <p>{{item.user_bdate}}</p>\n\n        </ion-item>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\follower\follower.html"*/,
=======
        selector: 'page-follower',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\follower\follower.html"*/'<!--\n\n  Generated template for the FollowerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>follower</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-card>\n\n\n\n        <ion-item *ngFor="let item of arr" (click)="showuser(item.user_id)">\n\n          <ion-avatar item-start>\n\n            <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n\n          </ion-avatar>\n\n          <h2>{{item.user_name}}</h2>\n\n          <p>{{item.user_bdate}}</p>\n\n        </ion-item>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\follower\follower.html"*/,
>>>>>>> 5b80d79608de99c5a23b28bb3d3eb94c53d8630a
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_loginpro_loginpro__["a" /* LoginproProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavParams */]])
], FollowerPage);

//# sourceMappingURL=follower.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewuser_viewuser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_loginpro_loginpro__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { viewuserPage } from "../viewuser/viewuser";
/**
 * Generated class for the FollowingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FollowingPage = (function () {
    function FollowingPage(data, storage, load, navCtrl, navParams) {
        this.data = data;
        this.storage = storage;
        this.load = load;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //f1:follower_class[]=[];
        this.follow = [];
        this.uid = '';
        this.arr = [];
    }
    FollowingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad FollowingPage');
        this.storage.get('uid').then(function (val) {
            _this.uid = val;
            _this.uid = _this.navParams.get('uid');
            var l1 = _this.load.create({
                content: "Loading ..."
            });
            l1.present();
            _this.data.getFollowingwhom(_this.uid).subscribe(function (data) { _this.arr = data; }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        });
    };
    FollowingPage.prototype.showuser = function (id) {
        this.storage.set('viewid', id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__viewuser_viewuser__["a" /* ViewuserPage */]);
    };
    return FollowingPage;
}());
FollowingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-following',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\following\following.html"*/'<!--\n\n  Generated template for the FollowingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>following</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n  <ion-content>\n\n    <ion-card>\n\n\n\n        <ion-item *ngFor="let item of arr" (click)="showuser(item.user_id)">\n\n          <ion-avatar item-start>\n\n            <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n\n          </ion-avatar>\n\n          <h2>{{item.user_name}}</h2>\n\n          <p>{{item.user_bdate}}</p>\n\n        </ion-item>\n\n    </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\following\following.html"*/,
=======
        selector: 'page-following',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\following\following.html"*/'<!--\n\n  Generated template for the FollowingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>following</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n  <ion-content>\n\n    <ion-card>\n\n\n\n        <ion-item *ngFor="let item of arr" (click)="showuser(item.user_id)">\n\n          <ion-avatar item-start>\n\n            <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n\n          </ion-avatar>\n\n          <h2>{{item.user_name}}</h2>\n\n          <p>{{item.user_bdate}}</p>\n\n        </ion-item>\n\n    </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\following\following.html"*/,
>>>>>>> 5b80d79608de99c5a23b28bb3d3eb94c53d8630a
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_loginpro_loginpro__["a" /* LoginproProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavParams */]])
], FollowingPage);

//# sourceMappingURL=following.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPastEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_db_event_db__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_event_community_db_event_community_db__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_rsvp_class__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rsvp_db_rsvp_db__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_community_view_community__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_feedback_db_feedback_db__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_loginpro_loginpro__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_feedback_class__ = __webpack_require__(199);
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
 * Generated class for the ViewPastEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewPastEventPage = (function () {
    function ViewPastEventPage(storage, load, tos, socialSharing, alerCtrl, _dataEvent, _dataRSVP, _dataEventComm, _dataFeedback, _dataUser, navCtrl, navParams, viewCtrl) {
        this.storage = storage;
        this.load = load;
        this.tos = tos;
        this.socialSharing = socialSharing;
        this.alerCtrl = alerCtrl;
        this._dataEvent = _dataEvent;
        this._dataRSVP = _dataRSVP;
        this._dataEventComm = _dataEventComm;
        this._dataFeedback = _dataFeedback;
        this._dataUser = _dataUser;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.viewEvent = "event_detail";
        this.event_name = "";
        this.event_des = "";
        this.event_s_time = null;
        this.event_e_time = null;
        this.event_date = null;
        this.event_loc = "";
        this.created_by = "";
        this.event_pic = "";
        this.user_id = "";
        this.e_pic = "";
        this.comm_name = "";
        this.comm_pic = "";
        this.rsvp_id = [];
        this.event_rsvp_user = [];
        this.feedback_event_user = [];
        this.arrUser = [];
        this.flag1 = true;
        this.feed_des = "";
    }
    ViewPastEventPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ViewEventPage');
        this.e_id = this.navParams.get('e_id');
        this._dataEvent.getEventById(this.e_id).subscribe(function (d) {
            _this.arr = d;
            _this.event_name = _this.arr[0].event_name;
            _this.event_des = _this.arr[0].event_des;
            _this.event_pic = _this.arr[0].event_pic;
            _this.event_s_time = _this.arr[0].event_s_time;
            _this.event_e_time = _this.arr[0].event_e_time;
            _this.event_date = _this.arr[0].event_date;
            _this.event_loc = _this.arr[0].event_loc;
            _this.created_by = _this.arr[0].fk_user_id;
        }, function (e) {
            alert(e);
        }, function () {
        });
        this._dataEventComm.getCommunityByEventId(this.e_id).subscribe(function (data) {
            _this.event_community = data;
            _this.comm_id = _this.event_community[0].comm_id;
            _this.comm_name = _this.event_community[0].comm_name;
            _this.comm_pic = _this.event_community[0].comm_pic;
        }, function (e) {
            alert(e);
        }, function () {
        });
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            _this._dataRSVP.checkRSVPOfEvent(_this.user_id, _this.e_id).subscribe(function (data) {
                if (data == "") {
                    //alert("baki");
                    _this.join_button = true;
                    _this.going_button = false;
                }
                else {
                    _this.join_button = false;
                    _this.going_button = true;
                }
            }, function (e) {
                alert(e);
            }, function () {
            });
        });
        this._dataRSVP.countRSVP(this.e_id).subscribe(function (data) {
            //this.cnt_rsvp = data[0].count;
            _this.event_rsvp_user = data;
            _this.cnt_rsvp = _this.event_rsvp_user.length;
        }, function (err) {
            alert(err);
        }, function () {
        });
        //alert(this.e_id);
        this._dataFeedback.getFeedbacksByEvent(this.e_id).subscribe(function (data) {
            _this.feedback_event_user = data;
            //console.log(this.feedback_event_user);
        }, function (err) {
            alert(err);
        }, function () {
        });
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            _this._dataUser.getUser(_this.user_id).subscribe(function (data) {
                _this.arrUser = data;
                _this.user_pic = _this.arrUser[0].user_pic;
                _this.user_name = _this.arrUser[0].user_name;
            }, function (err) {
                alert(err);
            }, function () {
            });
        });
    };
    ViewPastEventPage.prototype.changeFlag = function () {
        if (this.flag1 == true) {
            this.flag1 = false;
        }
        else {
            this.flag1 = true;
        }
    };
    ViewPastEventPage.prototype.onRSVP = function () {
        var _this = this;
        console.log(this.user_id);
        console.log(this.e_id);
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
            _this._dataRSVP.addRSVP(new __WEBPACK_IMPORTED_MODULE_5__shared_rsvp_class__["a" /* RSVP_Class */](null, _this.user_id, _this.e_id)).subscribe(function (data) {
                t1.present();
                _this.join_button = false;
                _this.going_button = true;
                //his.arrRsvp = data;
                //this.rsvp_id = this.arrRsvp.RSVP_id;
                //alert(this.rsvp_id);
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        });
    };
    ViewPastEventPage.prototype.onClickRSVP = function () {
        var _this = this;
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            var l1 = _this.load.create({
                content: 'Joining ...'
            });
            l1.present();
            _this._dataRSVP.checkRSVPOfEvent(_this.user_id, _this.e_id).subscribe(function (data) {
                if (data == "") {
                    _this.onRSVP();
                }
                else {
                    var t1 = _this.tos.create({
                        duration: 3000,
                        message: "You're Going ..."
                    });
                    t1.present();
                    _this.arrRsvp = data;
                    // this.rsvp_id = this.arrRsvp.RSVP_id;
                    //alert(this.rsvp_id);
                }
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        });
    };
    ViewPastEventPage.prototype.onRemoveRSVP = function () {
        var _this = this;
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            var l1 = _this.load.create({
                content: 'Removing ...'
            });
            l1.present();
            var t1 = _this.tos.create({
                duration: 3000,
                message: "Removed ..."
            });
            _this._dataRSVP.checkRSVPOfEvent(_this.user_id, _this.e_id).subscribe(function (data) {
                if (data == "") {
                    alert("nathi");
                }
                else {
                    _this.arrRsvp = data;
                    //console.log(data);
                    //console.log(this.arrRsvp[0].RSVP_id);
                    _this._dataRSVP.deleteRSVP(_this.arrRsvp[0].RSVP_id).subscribe(function (data) {
                        //alert("thyu");
                        _this.join_button = true;
                        _this.going_button = false;
                    }, function (err) {
                        alert(err);
                    }, function () {
                    });
                }
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
                t1.present();
            });
        });
    };
    ViewPastEventPage.prototype.doConfirm = function () {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'Not going?',
            message: "Are you sure you don't want to attend this event?",
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        _this.onRemoveRSVP();
                    }
                }
            ]
        });
        confirm.present();
    };
    ViewPastEventPage.prototype.onView = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__view_community_view_community__["a" /* ViewCommunityPage */], { c_id: this.comm_id });
    };
    ViewPastEventPage.prototype.newFeedback = function () {
        var _this = this;
        if (this.feed_des.length > 0) {
            var l1_1 = this.load.create({
                content: 'Adding Feedback ...'
            });
            l1_1.present();
            this.storage.get('uid').then(function (val) {
                _this.user_id = val;
                _this._dataFeedback.addFeedback(new __WEBPACK_IMPORTED_MODULE_11__shared_feedback_class__["a" /* Feedback_Class */](null, _this.feed_des, _this.e_id, _this.user_id, null)).subscribe(function (d) {
                    _this.flag1 = true;
                    _this.feed_des = "";
                    _this.ionViewDidLoad();
                }, function (err) {
                    alert(err);
                }, function () {
                    l1_1.dismiss();
                });
            });
        }
        else {
            this.flag1 = true;
        }
    };
    ViewPastEventPage.prototype.deleteFeedback = function (id) {
        var _this = this;
        var t1 = this.tos.create({
            duration: 3000,
            message: "Deleted ..."
        });
        this._dataFeedback.deleteFeedback(id).subscribe(function (d) {
            _this.ionViewDidLoad();
            t1.present();
        }, function (err) {
            alert(err);
        }, function () {
        });
    };
    ViewPastEventPage.prototype.onSharing = function () {
        this.e_pic = "https://letsmeetbackend.herokuapp.com/public/images/events/" + this.event_pic;
        this.socialSharing.share(this.event_des, this.event_name).
            catch(function (err) { return alert(err); });
    };
    return ViewPastEventPage;
}());
ViewPastEventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-view-past-event',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\view-past-event\view-past-event.html"*/'<!--\n\n  Generated template for the ViewPastEventPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-navbar>\n\n      <ion-title></ion-title>\n\n    </ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="onSharing()">\n\n        <ion-icon name="share"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item (click)="onView()">\n\n    <ion-avatar item-start>\n\n      <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{comm_pic}}">\n\n    </ion-avatar>\n\n    <h2>{{comm_name}}</h2>\n\n    <!--<p>November 5, 1955</p>-->\n\n  </ion-item>\n\n\n\n  <img src="https://letsmeetbackend.herokuapp.com/images/events/{{event_pic}}" />\n\n  <h1>{{event_name}}</h1>\n\n  <ion-item *ngIf="join_button">\n\n    <h2>Are you going?</h2>\n\n    <ion-buttons end>\n\n      <button small ion-button icon-only (click)="onClickRSVP()" color="success">\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-item>\n\n\n\n  <ion-item *ngIf="going_button">\n\n    <h2>You\'re going!</h2>\n\n    <ion-buttons end>\n\n      <button ion-button small icon-only (click)="doConfirm()" color="danger">\n\n        <ion-icon name="close-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-item>\n\n\n\n  <div padding>\n\n    <ion-segment [(ngModel)]="viewEvent">\n\n      <ion-segment-button value="event_detail">\n\n        Details\n\n      </ion-segment-button>\n\n      <ion-segment-button value="feedback">\n\n        Feedback\n\n      </ion-segment-button>\n\n      <ion-segment-button value="going_cnt">\n\n        {{cnt_rsvp}} are going\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="viewEvent">\n\n    <ion-list *ngSwitchCase="\'event_detail\'">\n\n      <ion-item>\n\n        <h3>\n\n          <ion-icon name="calendar"></ion-icon> {{event_date | date:\'dd-MM-yy\' }}</h3>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <h4>\n\n          <ion-icon name="time"></ion-icon> {{event_s_time}} - {{event_e_time}}</h4>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <h3 class="text-wrap">\n\n          <ion-icon name="navigate"></ion-icon> {{event_loc}}</h3>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <h3>\n\n          <ion-icon name="person"> Hosted by</ion-icon> {{created_by}}\n\n        </h3>\n\n      </ion-item>\n\n\n\n      <p>{{event_des}}</p>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'feedback\'">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/users/{{user_pic}}">\n\n        </ion-avatar>\n\n        <h2>{{user_name}}</h2>\n\n        <p (click)="changeFlag()" *ngIf="flag1;else textAreaBox">Add a new Fedback</p>\n\n        <ng-template #textAreaBox>\n\n          <textarea placeholder="Add a new Fedback" [(ngModel)]="feed_des" name="" id="" cols="14" rows="3"></textarea>\n\n          <button ion-button icon-only (click)="newFeedback()">\n\n            <ion-icon name="happy"></ion-icon>\n\n          </button>\n\n        </ng-template>\n\n      </ion-item>\n\n      <ion-card>\n\n        <ion-item *ngFor="let item of feedback_event_user">\n\n          <ion-avatar item-start>\n\n            <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n\n          </ion-avatar>\n\n          <h2>{{item.user_name}}</h2>\n\n          <p>{{item.feed_date | date:\'mediumDate\'}}</p>\n\n          <ion-card-content>\n\n            <p class="text-wrap">{{item.feed_des}}</p>\n\n          </ion-card-content>\n\n          <button *ngIf="item.user_id==user_id" (click)="deleteFeedback(item.feed_id)" ion-button icon-only item-end clear>\n\n            <ion-icon name="trash"></ion-icon>\n\n          </button>\n\n          <!--<button *ngIf="item.user_id==user_id" (click)="updateFeedback(item.feed_id)" ion-button icon-only item-end clear>\n\n            <ion-icon name="create"></ion-icon>\n\n          </button>-->\n\n        </ion-item>\n\n      </ion-card>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'going_cnt\'">\n\n      <ion-item *ngFor="let item of event_rsvp_user">\n\n        <ion-avatar item-left>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n\n        </ion-avatar>\n\n        <h2>{{item.user_name}}</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\view-past-event\view-past-event.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_event_db_event_db__["a" /* EventDbProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_rsvp_db_rsvp_db__["a" /* RsvpDbProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_event_community_db_event_community_db__["a" /* EventCommunityDbProvider */],
        __WEBPACK_IMPORTED_MODULE_9__providers_feedback_db_feedback_db__["a" /* FeedbackDbProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_loginpro_loginpro__["a" /* LoginproProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], ViewPastEventPage);

//# sourceMappingURL=view-past-event.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_post_db_post_db__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(41);
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
 * Generated class for the CreatePostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatePostPage = (function () {
    function CreatePostPage(_dataPost, storage, navCtrl, navParams, viewCtrl, tos, camera, formBuilder) {
        var _this = this;
        this._dataPost = _dataPost;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tos = tos;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.selectedFile = null;
        this.comm_id = this.navParams.get('c_id');
        this.arrPost = [];
        this.form = formBuilder.group({
            profilePic: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            post_title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            post_des: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(1500), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    CreatePostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatePostPage');
    };
    CreatePostPage.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]['installed']()) {
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
    CreatePostPage.prototype.processWebImage = function (event) {
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
    CreatePostPage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    CreatePostPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    CreatePostPage.prototype.done = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            console.log(_this.user_id);
            var fd = new FormData();
            fd.append("post_id", null);
            fd.append("post_title", _this.post_title);
            fd.append("post_des", _this.post_des);
            fd.append("image", _this.selectedFile, _this.selectedFile.name);
            fd.append("post_date", null);
            fd.append("post_fk_user_id", _this.user_id);
            fd.append("fk_comm_id", _this.comm_id);
            _this._dataPost.addPost(fd).subscribe(function (data) {
                _this.viewCtrl.dismiss();
                var t1 = _this.tos.create({
                    duration: 3000,
                    message: "Added ..."
                });
            }, function (err) {
                alert(err);
            }, function () {
            });
        });
    };
    return CreatePostPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], CreatePostPage.prototype, "fileInput", void 0);
CreatePostPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-create-post',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\create-post\create-post.html"*/'<!--\n\n  Generated template for the CreatePostPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add Post</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'CANCEL_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'DONE_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n    <div class="profile-image-wrapper" (click)="getPicture()">\n\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n\n        <ion-icon name="add"></ion-icon>\n\n        <div>\n\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n\n        </div>\n\n      </div>\n\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n\n    </div>\n\n    <div *ngIf="!this.form.controls.profilePic.valid  && this.form.controls.profilePic.dirty">\n\n      <p class="error">Please Choose an Image.</p>\n\n    </div>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-input type="text" formControlName="post_title" [(ngModel)]="post_title" placeholder="Title of the Post"></ion-input>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.post_title.valid  && this.form.controls.post_title.dirty">\n\n        <p class="error">Please Enter Post Title.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-textarea placeholder="Post Description" formControlName="post_des" [(ngModel)]="post_des"></ion-textarea>\n\n      </ion-item>\n\n      <div class="error" *ngIf="!this.form.controls.post_des.required  && this.form.controls.post_des.dirty">\n\n        <p>Please Enter Post Description.</p>\n\n      </div>\n\n      <div class="error" *ngIf="!this.form.controls.post_des.minlength  && this.form.controls.post_des.dirty">\n\n        <p>Please Enter Post Description with minimum length of 10.</p>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\create-post\create-post.html"*/,
=======
        selector: 'page-create-post',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\create-post\create-post.html"*/'<!--\n  Generated template for the CreatePostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Post</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios">\n          {{ \'CANCEL_BUTTON\' | translate }}\n        </span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n        <span color="primary" showWhen="ios">\n          {{ \'DONE_BUTTON\' | translate }}\n        </span>\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n    <div class="profile-image-wrapper" (click)="getPicture()">\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n        <ion-icon name="add"></ion-icon>\n        <div>\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n        </div>\n      </div>\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n    </div>\n    <div *ngIf="!this.form.controls.profilePic.valid  && this.form.controls.profilePic.dirty">\n      <p class="error">Please Choose an Image.</p>\n    </div>\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" formControlName="post_title" [(ngModel)]="post_title" placeholder="Title of the Post"></ion-input>\n      </ion-item>\n      <div *ngIf="!this.form.controls.post_title.valid  && this.form.controls.post_title.dirty">\n        <p class="error">Please Enter Post Title.</p>\n      </div>\n\n      <ion-item>\n        <ion-textarea placeholder="Post Description" formControlName="post_des" [(ngModel)]="post_des"></ion-textarea>\n      </ion-item>\n      <div class="error" *ngIf="!this.form.controls.post_des.required  && this.form.controls.post_des.dirty">\n        <p>Please Enter Post Description.</p>\n      </div>\n      <div class="error" *ngIf="!this.form.controls.post_des.minlength  && this.form.controls.post_des.dirty">\n        <p>Please Enter Post Description with minimum length of 10.</p>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\create-post\create-post.html"*/,
>>>>>>> 5b80d79608de99c5a23b28bb3d3eb94c53d8630a
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_post_db_post_db__["a" /* PostDbProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
], CreatePostPage);

//# sourceMappingURL=create-post.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_post_db_post_db__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_post_class__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(41);
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
 * Generated class for the EditPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPostPage = (function () {
    function EditPostPage(_dataPost, storage, navCtrl, navParams, viewCtrl, camera, formBuilder) {
        var _this = this;
        this._dataPost = _dataPost;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.selectedFile = null;
        this.arrPost = [];
        this.form = formBuilder.group({
            profilePic: [''],
            post_title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            post_des: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    EditPostPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EditPostPage');
        this.post_id = this.navParams.get('p_id');
        console.log(this.post_id);
        this._dataPost.getPostById(this.post_id).subscribe(function (data) {
            _this.arrPost = data;
            _this.post_pic = _this.arrPost[0].post_pic;
            _this.post_title = _this.arrPost[0].post_title;
            _this.post_des = _this.arrPost[0].post_des;
            //this.form.patchValue({ 'profilePic': this.post_pic });
        });
    };
    EditPostPage.prototype.getPicture = function () {
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
    EditPostPage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
        this.selectedFile = event.target.files[0];
    };
    EditPostPage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    EditPostPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    EditPostPage.prototype.done = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            console.log(_this.user_id);
            if (_this.selectedFile === null) {
                _this._dataPost.editPostOnly(new __WEBPACK_IMPORTED_MODULE_5__shared_post_class__["a" /* Post_Update_Class */](_this.post_id, _this.post_title, _this.post_des)).subscribe(function (data) {
                    console.log(data);
                    _this.viewCtrl.dismiss();
                }, function (err) {
                    alert(err);
                }, function () {
                });
            }
            else {
                var fd = new FormData();
                fd.append('post_id', _this.post_id);
                fd.append('post_title', _this.post_title);
                fd.append('post_des', _this.post_des);
                fd.append('image', _this.selectedFile, _this.selectedFile.name);
                _this._dataPost.editPost(fd).subscribe(function (data) {
                    console.log(data);
                    _this.viewCtrl.dismiss();
                }, function (err) {
                    alert(err);
                }, function () {
                });
            }
        });
    };
    return EditPostPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], EditPostPage.prototype, "fileInput", void 0);
EditPostPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-edit-post',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\edit-post\edit-post.html"*/'<!--\n\n  Generated template for the EditPostPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Edit Post</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'CANCEL_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n\n        <span color="primary" showWhen="ios">\n\n          {{ \'DONE_BUTTON\' | translate }}\n\n        </span>\n\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n\n    <label>Old Image:</label>\n\n    <img src="https://letsmeetbackend.herokuapp.com/images/posts/{{post_pic}}" *ngIf="post_pic" alt="Loading">\n\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n    <div class="profile-image-wrapper" (click)="getPicture()">\n\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n\n        <ion-icon name="add"></ion-icon>\n\n        <div>\n\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n\n        </div>\n\n      </div>\n\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n\n    </div>\n\n    <div *ngIf="!this.form.controls.profilePic.valid  && this.form.controls.profilePic.dirty">\n\n      <p class="error">Please Choose an Image.</p>\n\n    </div>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-input type="text" formControlName="post_title" [(ngModel)]="post_title" placeholder="Title of the Post"></ion-input>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.post_title.valid  && this.form.controls.post_title.dirty">\n\n        <p class="error">Please Enter Post Title.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-textarea placeholder="Post Description" formControlName="post_des" [(ngModel)]="post_des"></ion-textarea>\n\n      </ion-item>\n\n      <div class="error" *ngIf="!this.form.controls.post_des.required  && this.form.controls.post_des.dirty">\n\n        <p>Please Enter Post Description.</p>\n\n      </div>\n\n      <div class="error" *ngIf="!this.form.controls.post_des.minlength  && this.form.controls.post_des.dirty">\n\n        <p>Please Enter Post Description with minimum length of 10.</p>\n\n      </div>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\edit-post\edit-post.html"*/,
=======
        selector: 'page-edit-post',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\edit-post\edit-post.html"*/'<!--\n  Generated template for the EditPostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Post</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios">\n          {{ \'CANCEL_BUTTON\' | translate }}\n        </span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n        <span color="primary" showWhen="ios">\n          {{ \'DONE_BUTTON\' | translate }}\n        </span>\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n    <label>Old Image:</label>\n    <img src="https://letsmeetbackend.herokuapp.com/images/posts/{{post_pic}}" *ngIf="post_pic" alt="Loading">\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n    <div class="profile-image-wrapper" (click)="getPicture()">\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n        <ion-icon name="add"></ion-icon>\n        <div>\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n        </div>\n      </div>\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n    </div>\n    <div *ngIf="!this.form.controls.profilePic.valid  && this.form.controls.profilePic.dirty">\n      <p class="error">Please Choose an Image.</p>\n    </div>\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" formControlName="post_title" [(ngModel)]="post_title" placeholder="Title of the Post"></ion-input>\n      </ion-item>\n      <div *ngIf="!this.form.controls.post_title.valid  && this.form.controls.post_title.dirty">\n        <p class="error">Please Enter Post Title.</p>\n      </div>\n\n      <ion-item>\n        <ion-textarea placeholder="Post Description" formControlName="post_des" [(ngModel)]="post_des"></ion-textarea>\n      </ion-item>\n      <div class="error" *ngIf="!this.form.controls.post_des.required  && this.form.controls.post_des.dirty">\n        <p>Please Enter Post Description.</p>\n      </div>\n      <div class="error" *ngIf="!this.form.controls.post_des.minlength  && this.form.controls.post_des.dirty">\n        <p>Please Enter Post Description with minimum length of 10.</p>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\edit-post\edit-post.html"*/,
>>>>>>> 5b80d79608de99c5a23b28bb3d3eb94c53d8630a
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_post_db_post_db__["a" /* PostDbProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
], EditPostPage);

//# sourceMappingURL=edit-post.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RSVP_Class; });
var RSVP_Class = (function () {
    function RSVP_Class(RSVP_id, rsvp_fk_user_id, fk_event_id) {
        this.RSVP_id = RSVP_id;
        this.rsvp_fk_user_id = rsvp_fk_user_id;
        this.fk_event_id = fk_event_id;
    }
    return RSVP_Class;
}());

//# sourceMappingURL=rsvp_class.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityCommMemberProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Community_comm_member } from "../../shared/community_comm_member_class";

/*
  Generated class for the CommunityCommMemberProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommunityCommMemberProvider = (function () {
    function CommunityCommMemberProvider(http) {
        this.http = http;
        this.url = "https://letsmeetbackend.herokuapp.com/comm_mem_id/";
        this.url1 = "https://letsmeetbackend.herokuapp.com/allmember/";
        console.log('Hello CommunityCommMemberProvider Provider');
    }
    CommunityCommMemberProvider.prototype.getAllMembersByCommunityId = function (id) {
        return this.http.get(this.url + id);
    };
    CommunityCommMemberProvider.prototype.getAllCommunityAndMembers = function () {
        return this.http.get(this.url);
    };
    CommunityCommMemberProvider.prototype.getAllMembers = function (id) {
        return this.http.get(this.url1 + id);
    };
    return CommunityCommMemberProvider;
}());
CommunityCommMemberProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], CommunityCommMemberProvider);

//# sourceMappingURL=community-comm-member.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_post_db_post_db__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_comment_db_comment_db__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_comment_class__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loginpro_loginpro__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_like_db_like_db__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_like_class__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__viewuser_viewuser__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { DateTime } from 'ionic-angular/components/datetime/datetime';




/**
 * Generated class for the ViewPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewPostPage = (function () {
    function ViewPostPage(navCtrl, navParams, _dataPost, _dataComment, _dataUser, _dataLike, tos, storage, load) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._dataPost = _dataPost;
        this._dataComment = _dataComment;
        this._dataUser = _dataUser;
        this._dataLike = _dataLike;
        this.tos = tos;
        this.storage = storage;
        this.load = load;
        this.comments_button = false;
        this.arrPost = [];
        this.arrCommUserPost = [];
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth();
        this.day = new Date().getDate();
        this.today = new Date(this.year, this.month, this.day);
        this.comment_date = new Date();
        this.u_id = "";
        this.arrUser = [];
        this.arrLikePostUser = [];
        this.arrLike = [];
    }
    ViewPostPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ViewPostPage');
        this.post_id = this.navParams.get('post_id');
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            _this._dataUser.getUser(_this.user_id).subscribe(function (data) {
                _this.arrUser = data;
                _this.user_name = _this.arrUser[0].user_name;
                _this.user_pic = _this.arrUser[0].user_pic;
                _this.u_id = _this.arrUser[0].user_id;
            });
        });
        var l1 = this.load.create({
            content: 'Loading...'
        });
        l1.present();
        this._dataPost.getPostById(this.post_id).subscribe(function (data) {
            _this.arrPost = data;
        }, function (e) {
            alert(e);
        }, function () {
            l1.dismiss();
        });
        this._dataComment.getAllCommentsByPostId(this.post_id).subscribe(function (data) {
            _this.arrCommUserPost = data;
            _this.comment_count = _this.arrCommUserPost.length;
        }, function (err) {
            alert(err);
        }, function () {
        });
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            _this._dataLike.getLikeIdByPostAndUser(_this.post_id, _this.user_id).subscribe(function (data) {
                if (data == "") {
                    _this.like = true;
                    _this.dislike = false;
                }
                else {
                    _this.like = false;
                    _this.dislike = true;
                    _this.arrLike = data;
                    console.log(_this.arrLike);
                }
            });
        });
        this._dataLike.getlikesByPosts(this.post_id).subscribe(function (data) {
            _this.arrLikePostUser = data;
            _this.like_cnt = _this.arrLikePostUser.length;
        }, function (err) {
            alert(err);
        }, function () {
        });
    };
    /*doRefresh(refresher) {
      console.log('Started', refresher);
      setTimeout(() => {
        console.log('Async operation has ended');
        this.ionViewDidLoad();
        refresher.complete();
      }, 4000);
    }*/
    ViewPostPage.prototype.newComment = function () {
        var _this = this;
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            console.log(_this.comment_date);
            _this._dataComment.addComment(new __WEBPACK_IMPORTED_MODULE_5__shared_comment_class__["a" /* Comment_Class */](null, null, _this.new_comment, _this.post_id, _this.user_id)).subscribe(function (data) {
                console.log(data);
                _this.ionViewDidLoad();
                _this.new_comment = "";
            }, function (e) {
                alert(e);
            }, function () {
                alert("added");
            });
        });
    };
    ViewPostPage.prototype.onDeleteComment = function (id) {
        var _this = this;
        this._dataComment.deleteComment(id).subscribe(function (data) {
            _this.ionViewDidLoad();
        }, function (e) {
            alert(e);
        }, function () {
            alert("deleted");
        });
    };
    ViewPostPage.prototype.onClickLike = function () {
        var _this = this;
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            var l1 = _this.load.create({
                content: 'liking ...'
            });
            l1.present();
            _this._dataLike.getLikeIdByPostAndUser(_this.post_id, _this.user_id).subscribe(function (data) {
                if (data == "") {
                    _this.addLike();
                }
                else {
                    _this.arrLike = data;
                }
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        });
    };
    ViewPostPage.prototype.addLike = function () {
        var _this = this;
        var t1 = this.tos.create({
            duration: 3000,
            message: "Liked ..."
        });
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            _this._dataLike.addLikes(new __WEBPACK_IMPORTED_MODULE_9__shared_like_class__["a" /* Like_Class */](null, _this.post_id, _this.user_id)).subscribe(function (data) {
                t1.present();
                _this.like = false;
                _this.dislike = true;
                _this.like_cnt = _this.like_cnt + 1;
            }, function (err) {
                alert(err);
            }, function () {
            });
        });
    };
    ViewPostPage.prototype.onLikeRemove = function () {
        var _this = this;
        console.log(this.arrLike);
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            _this._dataLike.getLikeIdByPostAndUser(_this.post_id, _this.user_id).subscribe(function (data) {
                if (data == "") {
                    alert("nathi");
                }
                else {
                    _this.arrLike = data;
                    console.log(_this.arrLike);
                    _this._dataLike.deleteLike(_this.arrLike[0].like_id).subscribe(function (data) {
                        //alert("thyu");
                        _this.like = true;
                        _this.dislike = false;
                        _this.like_cnt = _this.like_cnt - 1;
                    }, function (err) {
                        alert(err);
                    }, function () {
                    });
                }
            }, function (e) {
                alert(e);
            }, function () {
                alert("disliked");
            });
        });
    };
    ViewPostPage.prototype.showuser = function (id) {
        this.storage.set('viewid', id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__viewuser_viewuser__["a" /* ViewuserPage */]);
    };
    return ViewPostPage;
}());
ViewPostPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-view-post',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\view-post\view-post.html"*/'<!--\n\n  Generated template for the ViewPostPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>view-post</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull Down." refreshingSpinner="circles" refreshingText="Loading...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>-->\n\n  <ion-item>\n\n    <ion-avatar item-start>\n\n      <img src="https://letsmeetbackend.herokuapp.com/images/users/{{user_pic}}" (click)="showuser(u_id)">\n\n    </ion-avatar>\n\n    <h2>{{user_name}}</h2>\n\n  </ion-item>\n\n  <ion-card *ngFor="let item of arrPost">\n\n\n\n    <img src="https://letsmeetbackend.herokuapp.com/images/posts/{{item.post_pic}}">\n\n\n\n    <ion-card-content>\n\n      <h1>{{item.post_title}}</h1>\n\n      <p>{{item.post_des}}</p>\n\n    </ion-card-content>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <button *ngIf="like" ion-button icon-left clear small (click)="addLike()">\n\n          <ion-icon name="heart-outline"></ion-icon>\n\n          <div>{{like_cnt}} Likes</div>\n\n        </button>\n\n        <button *ngIf="dislike" ion-button icon-left clear small (click)="onLikeRemove()">\n\n          <ion-icon name="heart" color="danger"></ion-icon>\n\n          <div>{{like_cnt}} Likes</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon name="text"></ion-icon>\n\n          <div>{{comment_count}} Comments</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col center text-center>\n\n        <ion-note>\n\n          11h ago\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-list>\n\n      <ion-item *ngFor="let item of arrCommUserPost">\n\n        <ion-avatar item-start (click)="showuser(item.user_id)">\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n\n        </ion-avatar>\n\n        <h2 (click)="showuser(item.user_id)">{{item.user_name}}</h2>\n\n        <p>{{item.com_des}}</p>\n\n        <button *ngIf="item.user_name==user_name" ion-button icon-only clear item-end color="primary" (click)="onDeleteComment(item.com_id)">\n\n          <ion-icon color="primary" small name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/users/{{user_pic}}">\n\n        </ion-avatar>\n\n        <h2>{{user_name}}</h2>\n\n        <button ion-button icon-only clear item-end color="primary" (click)="newComment()">\n\n          <ion-icon color="primary" name="arrow-dropright-circle"></ion-icon>\n\n        </button>\n\n        <ion-item>\n\n          <ion-input type="text" [(ngModel)]="new_comment" placeholder="Add a Comment..."></ion-input>\n\n        </ion-item>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\view-post\view-post.html"*/,
=======
        selector: 'page-view-post',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\view-post\view-post.html"*/'<!--\n\n  Generated template for the ViewPostPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>view-post</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull Down." refreshingSpinner="circles" refreshingText="Loading...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>-->\n\n  <ion-item>\n\n    <ion-avatar item-start>\n\n      <img src="https://letsmeetbackend.herokuapp.com/images/users/{{user_pic}}" (click)="showuser(u_id)">\n\n    </ion-avatar>\n\n    <h2>{{user_name}}</h2>\n\n  </ion-item>\n\n  <ion-card *ngFor="let item of arrPost">\n\n\n\n    <img src="https://letsmeetbackend.herokuapp.com/images/posts/{{item.post_pic}}">\n\n\n\n    <ion-card-content>\n\n      <h1>{{item.post_title}}</h1>\n\n      <p>{{item.post_des}}</p>\n\n    </ion-card-content>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <button *ngIf="like" ion-button icon-left clear small (click)="addLike()">\n\n          <ion-icon name="heart-outline"></ion-icon>\n\n          <div>{{like_cnt}} Likes</div>\n\n        </button>\n\n        <button *ngIf="dislike" ion-button icon-left clear small (click)="onLikeRemove()">\n\n          <ion-icon name="heart" color="danger"></ion-icon>\n\n          <div>{{like_cnt}} Likes</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon name="text"></ion-icon>\n\n          <div>{{comment_count}} Comments</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col center text-center>\n\n        <ion-note>\n\n          11h ago\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-list>\n\n      <ion-item *ngFor="let item of arrCommUserPost">\n\n        <ion-avatar item-start (click)="showuser(item.user_id)">\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n\n        </ion-avatar>\n\n        <h2 (click)="showuser(item.user_id)">{{item.user_name}}</h2>\n\n        <p>{{item.com_des}}</p>\n\n        <button *ngIf="item.user_name==user_name" ion-button icon-only clear item-end color="primary" (click)="onDeleteComment(item.com_id)">\n\n          <ion-icon color="primary" small name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/users/{{user_pic}}">\n\n        </ion-avatar>\n\n        <h2>{{user_name}}</h2>\n\n        <button ion-button icon-only clear item-end color="primary" (click)="newComment()">\n\n          <ion-icon color="primary" name="arrow-dropright-circle"></ion-icon>\n\n        </button>\n\n        <ion-item>\n\n          <ion-input type="text" [(ngModel)]="new_comment" placeholder="Add a Comment..."></ion-input>\n\n        </ion-item>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\view-post\view-post.html"*/,
>>>>>>> 5b80d79608de99c5a23b28bb3d3eb94c53d8630a
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_post_db_post_db__["a" /* PostDbProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_comment_db_comment_db__["a" /* CommentDbProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_loginpro_loginpro__["a" /* LoginproProvider */],
        __WEBPACK_IMPORTED_MODULE_8__providers_like_db_like_db__["a" /* LikeDbProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]])
], ViewPostPage);

//# sourceMappingURL=view-post.js.map

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/change-password/change-password.module": [
		349,
		27
	],
	"../pages/content/content.module": [
		350,
		13
	],
	"../pages/create-community/create-community.module": [
		351,
		26
	],
	"../pages/create-post/create-post.module": [
		352,
		25
	],
	"../pages/create-story/create-story.module": [
		353,
		24
	],
	"../pages/edit-post/edit-post.module": [
		354,
		23
	],
	"../pages/editprofile/editprofile.module": [
		355,
		22
	],
	"../pages/follower/follower.module": [
		356,
		21
	],
	"../pages/following/following.module": [
		357,
		20
	],
	"../pages/item-create/item-create.module": [
		358,
		12
	],
	"../pages/item-detail/item-detail.module": [
		359,
		11
	],
	"../pages/list-master/list-master.module": [
		360,
		10
	],
	"../pages/login/login.module": [
		361,
		0
	],
	"../pages/menu/menu.module": [
		362,
		9
	],
	"../pages/search/search.module": [
		363,
		8
	],
	"../pages/settings/settings.module": [
<<<<<<< HEAD
		364,
		7
	],
	"../pages/signup/signup.module": [
		365,
		6
	],
	"../pages/stories/stories.module": [
		366,
		5
	],
	"../pages/story-detail/story-detail.module": [
		367,
		19
	],
	"../pages/tabs/tabs.module": [
		368,
		4
	],
	"../pages/tutorial/tutorial.module": [
		369,
		3
	],
	"../pages/users/users.module": [
		370,
		2
	],
	"../pages/view-community/view-community.module": [
		371,
		18
	],
	"../pages/view-event/view-event.module": [
		372,
		17
	],
	"../pages/view-past-event/view-past-event.module": [
		373,
		16
	],
	"../pages/view-post/view-post.module": [
		376,
=======
		375,
		7
	],
	"../pages/signup/signup.module": [
		363,
		6
	],
	"../pages/stories/stories.module": [
		364,
		5
	],
	"../pages/story-detail/story-detail.module": [
		365,
		19
	],
	"../pages/tabs/tabs.module": [
		366,
		4
	],
	"../pages/tutorial/tutorial.module": [
		367,
		3
	],
	"../pages/users/users.module": [
		368,
		2
	],
	"../pages/view-community/view-community.module": [
		369,
		18
	],
	"../pages/view-event/view-event.module": [
		370,
		17
	],
	"../pages/view-past-event/view-past-event.module": [
		371,
		16
	],
	"../pages/view-post/view-post.module": [
		372,
>>>>>>> 5b80d79608de99c5a23b28bb3d3eb94c53d8630a
		15
	],
	"../pages/viewuser/viewuser.module": [
		373,
		14
	],
	"../pages/welcome/welcome.module": [
		374,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://example.com/api/v1';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    return Api;
}());
Api = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], Api);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    return Items;
}());
Items = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], Items);

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CommentDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommentDbProvider = (function () {
    function CommentDbProvider(http) {
        this.http = http;
        this.url = "https://letsmeetbackend.herokuapp.com/com_post/";
        this.url1 = "https://letsmeetbackend.herokuapp.com/comment/";
        console.log('Hello CommentDbProvider Provider');
    }
    CommentDbProvider.prototype.getAllCommentsByPostId = function (id) {
        return this.http.get(this.url + id);
    };
    CommentDbProvider.prototype.addComment = function (comment) {
        var body = JSON.stringify(comment);
        return this.http.post(this.url1, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    CommentDbProvider.prototype.deleteComment = function (id) {
        return this.http.delete(this.url1 + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    return CommentDbProvider;
}());
CommentDbProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], CommentDbProvider);

//# sourceMappingURL=comment-db.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikeDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LikeDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LikeDbProvider = (function () {
    function LikeDbProvider(http) {
        this.http = http;
        this.url = "https://letsmeetbackend.herokuapp.com/likebypost/";
        this.url1 = "https://letsmeetbackend.herokuapp.com/like/";
        /*likes: { fk_post_id: number, fk_user_id: string } = {
          fk_post_id='',
          fk_user_id=''
        };*/
        this.likes = {
            like_fk_post_id: '',
            like_fk_user_id: ''
        };
        console.log('Hello LikeDbProvider Provider');
    }
    LikeDbProvider.prototype.getlikesByPosts = function (id) {
        return this.http.get(this.url + id);
    };
    LikeDbProvider.prototype.getLikeIdByPostAndUser = function (like_fk_post_id, like_fk_user_id) {
        this.likes.like_fk_post_id = like_fk_post_id;
        this.likes.like_fk_user_id = like_fk_user_id;
        var body = JSON.stringify(this.likes);
        return this.http.post(this.url, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    LikeDbProvider.prototype.addLikes = function (lk) {
        var body = JSON.stringify(lk);
        return this.http.post(this.url1, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    LikeDbProvider.prototype.deleteLike = function (id) {
        return this.http.delete(this.url1 + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    return LikeDbProvider;
}());
LikeDbProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], LikeDbProvider);

//# sourceMappingURL=like-db.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RatingDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RatingDbProvider = (function () {
    function RatingDbProvider(http) {
        this.http = http;
        this.url = "https://letsmeetbackend.herokuapp.com/rating/";
        this.url1 = "https://letsmeetbackend.herokuapp.com/ratingcount/";
        this.url2 = "https://letsmeetbackend.herokuapp.com/ratecount/";
        this.url3 = "https://letsmeetbackend.herokuapp.com/avgcount/";
        console.log('Hello RatingDbProvider Provider');
    }
    RatingDbProvider.prototype.getRatingById = function (id) {
        return this.http.get(this.url + id);
    };
    RatingDbProvider.prototype.addRating = function (item) {
        var body = JSON.stringify(item);
        //  let h = new Headers({ 'Content-type': 'application/json' });
        // let rs = new RequestOptions({ headers: h });
        return this.http.post(this.url, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    RatingDbProvider.prototype.deleteRating = function (item) {
        return this.http.post(this.url + item.rate_id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    RatingDbProvider.prototype.editRating = function (item) {
        var body = JSON.stringify(item);
        return this.http.post(this.url + item.rate_id, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    RatingDbProvider.prototype.getRateCount = function (rate_value, id) {
        return this.http.get(this.url2 + rate_value + "&" + id);
    };
    RatingDbProvider.prototype.getAvgRating = function (id) {
        return this.http.get(this.url3 + id);
    };
    RatingDbProvider.prototype.getCountRating = function (id) {
        return this.http.get(this.url1 + id);
    };
    return RatingDbProvider;
}());
RatingDbProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], RatingDbProvider);

//# sourceMappingURL=rating-db.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feedback_Class; });
var Feedback_Class = (function () {
    function Feedback_Class(feed_id, feed_des, feed_fk_event_id, feed_fk_user_id, feed_date) {
        this.feed_id = feed_id;
        this.feed_des = feed_des;
        this.feed_fk_event_id = feed_fk_event_id;
        this.feed_fk_user_id = feed_fk_user_id;
        this.feed_date = feed_date;
    }
    return Feedback_Class;
}());

//# sourceMappingURL=feedback_class.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginproProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LoginproProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginproProvider = (function () {
    function LoginproProvider(storage, http) {
        this.storage = storage;
        this.http = http;
        this.account = {
            user_id: '',
            user_pass: '',
            token: ''
        };
        this.useradd = {
            user_id: '',
            user_name: '',
            user_pass: '',
            user_pic: '',
            gender: '',
            user_mob_no: '',
            user_bdate: null,
        };
        this.follow = {
            fk_user_id: '',
            fk_us_id: ''
        };
        this.chpass = {
            user_id: '',
            user_pass: '',
            token: ''
        };
        this.userupdate = {
            user_id: '',
            user_name: '',
            user_pic: '',
            gender: '',
            user_mob_no: '',
            user_bdate: null,
        };
        this.url = "https://letsmeetbackend.herokuapp.com/login";
        this.urlsignup = "https://letsmeetbackend.herokuapp.com/user/";
        this.ed = '';
        this.urluser = "https://letsmeetbackend.herokuapp.com/user/";
        this.follow_user = "https://letsmeetbackend.herokuapp.com/follow_user/";
        // urlmail: string = "https://letsmeetbackend.herokuapp.com/demomail/"
        this.urlmail = "http://localhost:3000/demomail";
        this.urlchangepass = "https://letsmeetbackend.herokuapp.com/changePass/";
        this.urlfollowers = "https://letsmeetbackend.herokuapp.com/follower/";
        this.urlfollowing = "https://letsmeetbackend.herokuapp.com/following/";
        this.urlfollowuser = "https://letsmeetbackend.herokuapp.com/follow_user/";
        this.urlfollowingwhom = "https://letsmeetbackend.herokuapp.com/followwhom/";
        console.log('Hello LoginproProvider Provider');
    }
    LoginproProvider.prototype.doLogin = function (eid, pass, token) {
        //let header = new Headers({ 'Content-Type': 'application/json' });
        //let ro = new RequestOptions({ headers: header });
        this.account.user_id = eid;
        this.account.user_pass = pass;
        this.account.token = token;
        var body = JSON.stringify(this.account);
        return this.http.post(this.url, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    /* addUser(eid, uname, pass, image, gender, mobile, myDate) {
      //let header = new Headers({ 'Content-Type': 'application/json' });
      // let ro = new RequestOptions({ headers: header });
      this.useradd.user_id = eid;
      this.useradd.user_name = uname;
      this.useradd.user_pass = pass;
      this.useradd.user_pic = image;
      this.useradd.gender = gender;
      this.useradd.user_mob_no = mobile;
      this.useradd.user_bdate = myDate;
      let body = JSON.stringify(this.useradd);
      return this.http.post(this.urlsignup, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
    } */
    LoginproProvider.prototype.addUser = function (fd) {
        console.log(fd);
        return this.http.post(this.urlsignup, fd);
    };
    LoginproProvider.prototype.updateUser = function (id, uname, image, gender, mobile, mydate) {
        // let header = new Headers({ 'Content-Type': 'application/json' });
        //let ro = new RequestOptions({ headers: header });
        this.userupdate.user_id = id;
        console.log('Login pro ma user update');
        console.log(id);
        console.log(this.userupdate.user_id);
        this.userupdate.user_name = uname;
        this.userupdate.user_pic = image;
        this.userupdate.gender = gender;
        this.userupdate.user_mob_no = mobile;
        this.userupdate.user_bdate = mydate;
        var body = JSON.stringify(this.userupdate);
        // alert(this.userupdate.user_id);
        return this.http.put(this.urlsignup, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    LoginproProvider.prototype.set_url = function () {
        //this.storage.get('uid').then((val) => {this.ed=this.urluser+val});
        /*this.storage.get('uid').then((val) => {this.ed=val});
        console.log("ed aavse have");
        console.log(this.ed);
        this.urluser="http://localhost:3000/user/"+this.ed;
        console.log(this.urluser);*/
        //return this.http.get(this.url + uid)
    };
    LoginproProvider.prototype.getAllUser = function () {
        return this.http.get(this.urlsignup);
    };
    LoginproProvider.prototype.getUser = function (id) {
        this.urluser.concat(id);
        console.log(id);
        console.log(this.urluser);
        console.log(this.urlsignup + id);
        return this.http.get(this.urlsignup + id);
        //alert(this.ed);
        //return this.http.get(this.ed);
    };
    LoginproProvider.prototype.sendMail = function (demo) {
        var body = JSON.stringify(demo);
        console.log(demo.name);
        console.log(demo.message);
        console.log(demo.subject);
        return this.http.post(this.urlmail, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    LoginproProvider.prototype.getFollowingUser = function (uid) {
        return this.http.get(this.urlfollowuser + uid);
    };
    LoginproProvider.prototype.getFollowingwhom = function (uid) {
        return this.http.get(this.urlfollowingwhom + uid);
    };
    LoginproProvider.prototype.getFollowers = function (uid) {
        return this.http.get(this.urlfollowers + uid);
    };
    LoginproProvider.prototype.getFollowing = function (uid) {
        return this.http.get(this.urlfollowing + uid);
    };
    LoginproProvider.prototype.change = function (uid, newpass) {
        this.chpass.user_id = uid;
        this.chpass.user_pass = newpass;
        console.log(this.chpass);
        var body = JSON.stringify(this.chpass);
        return this.http.put(this.urlchangepass, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
        //"https://letsmeetbackend.herokuapp.com/changepassword/"
    };
    LoginproProvider.prototype.iffollowing = function (user_id, us_id) {
        this.follow.fk_user_id = user_id;
        this.follow.fk_us_id = us_id;
        var body = JSON.stringify(this.follow);
        return this.http.post("http://localhost:3000/iffollowing/", body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    LoginproProvider.prototype.insertfollower = function (user_id, us_id) {
        this.follow.fk_user_id = user_id;
        this.follow.fk_us_id = us_id;
        var body = JSON.stringify(this.follow);
        return this.http.post("http://localhost:3000/insertfollower/", body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    LoginproProvider.prototype.deletefollower = function (user_id, us_id) {
        this.follow.fk_user_id = user_id;
        this.follow.fk_us_id = us_id;
        var body = JSON.stringify(this.follow);
        return this.http.post("http://localhost:3000/deletefollower/", body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    return LoginproProvider;
}());
LoginproProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], LoginproProvider);

//# sourceMappingURL=loginpro.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GeolocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GeolocationProvider = (function () {
    function GeolocationProvider(http) {
        this.http = http;
        this.url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
        console.log('Hello GeolocationProvider Provider');
    }
    GeolocationProvider.prototype.getCurrentPosition = function (address) {
        console.log(this.url + address + "&key=AIzaSyC_yzslPZ6nIkW6225NHfNYlnbOBeZGFTk");
        return this.http.get(this.url + address + "&key=AIzaSyC_yzslPZ6nIkW6225NHfNYlnbOBeZGFTk");
    };
    return GeolocationProvider;
}());
GeolocationProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], GeolocationProvider);

//# sourceMappingURL=geolocation.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tab3Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Tab4Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Tab5Root; });
// The page the user lands on after opening the app and without a session
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'TutorialPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'ListMasterPage';
var Tab3Root = 'SearchPage';
var Tab2Root = 'SettingsPage';
var Tab4Root = 'StoriesPage';
var Tab5Root = 'UsersPage';
//export const Tab6Root = '';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loginpro_loginpro__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
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
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangePasswordPage = (function () {
    function ChangePasswordPage(navCtrl, navParams, _dataUser, formBuilder, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._dataUser = _dataUser;
        this.storage = storage;
        this.newPass = "";
        this.conNewPass = "";
        this.uid = "";
        this.form = formBuilder.group({
            newPass: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(12), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            conNewPass: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(12), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage.prototype.changePass = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        this.storage.get('uid').then(function (val) {
            _this.uid = val;
            alert(_this.uid);
            _this._dataUser.change(_this.uid, _this.conNewPass).subscribe(function (data) {
                _this.navCtrl.pop();
            }, function (e) {
                alert(e);
            }, function () {
            });
        });
    };
    return ChangePasswordPage;
}());
ChangePasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-change-password',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\change-password\change-password.html"*/'<!--\n\n  Generated template for the ChangePasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>change_password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="changePass()">\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating>New Password</ion-label>\n\n        <ion-input type="password" formControlName="newPass" [(ngModel)]="newPass"></ion-input>\n\n        <ion-item *ngIf="!this.form.controls.newPass.valid  && this.form.controls.newPass.dirty">\n\n          <p>Please enter Password</p>\n\n        </ion-item>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Confirm New Password</ion-label>\n\n        <ion-input type="password" formControlName="conNewPass" [(ngModel)]="conNewPass"></ion-input>\n\n        <ion-item *ngIf="!this.form.controls.conNewPass.valid  && this.form.controls.conNewPass.dirty">\n\n          <p>Please choose Event Starting Time.</p>\n\n        </ion-item>\n\n        <ion-item *ngIf="!this.form.controls.newPass.value==this.form.controls.conNewPass.value">\n\n          <p>Passwords are not same</p>\n\n        </ion-item>\n\n      </ion-item>\n\n      <button ion-button full>\n\n        Done\n\n      </button>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\change-password\change-password.html"*/,
=======
        selector: 'page-change-password',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\change-password\change-password.html"*/'<!--\n  Generated template for the ChangePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>change_password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="changePass()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>New Password</ion-label>\n        <ion-input type="password" formControlName="newPass" [(ngModel)]="newPass"></ion-input>\n        <ion-item *ngIf="!this.form.controls.newPass.valid  && this.form.controls.newPass.dirty">\n          <p>Please enter Password</p>\n        </ion-item>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Confirm New Password</ion-label>\n        <ion-input type="password" formControlName="conNewPass" [(ngModel)]="conNewPass"></ion-input>\n        <ion-item *ngIf="!this.form.controls.conNewPass.valid  && this.form.controls.conNewPass.dirty">\n          <p>Please choose Event Starting Time.</p>\n        </ion-item>\n        <ion-item *ngIf="!this.form.controls.newPass.value==this.form.controls.conNewPass.value">\n          <p>Passwords are not same</p>\n        </ion-item>\n      </ion-item>\n      <button ion-button full>\n        Done\n      </button>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\change-password\change-password.html"*/,
>>>>>>> 5b80d79608de99c5a23b28bb3d3eb94c53d8630a
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_loginpro_loginpro__["a" /* LoginproProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], ChangePasswordPage);

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCommunityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_community_db_community_db__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(11);
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
 * Generated class for the CreateCommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateCommunityPage = (function () {
    function CreateCommunityPage(http, st, navCtrl, _data, navParams, tos, load, viewCtrl, formBuilder, camera) {
        var _this = this;
        this.http = http;
        this.st = st;
        this.navCtrl = navCtrl;
        this._data = _data;
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
        //comm_date: any = new Date();
        this.comm_date = null;
        this.created_by = '';
        this.comm_rating = null;
        this.comm_fk_cat_id = '3';
        this.rate = 0;
        this.form = formBuilder.group({
            profilePic: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            comm_name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            comm_des: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(280), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    CreateCommunityPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.st.get('uid').then(function (val) {
            _this.created_by = val;
        });
        this.st.get("rating").then(function (val) {
            _this.rate = val;
        });
        console.log('ionViewDidLoad CreateStoryPage');
    };
    CreateCommunityPage.prototype.getPicture = function () {
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
    CreateCommunityPage.prototype.processWebImage = function (event) {
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
    CreateCommunityPage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    CreateCommunityPage.prototype.onCreate = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        this.st.get('uid').then(function (val) {
            _this.created_by = val;
            var t1 = _this.tos.create({
                message: "Created",
                duration: 3000
            });
            var l1 = _this.load.create({
                content: "Loading..."
            });
            l1.present();
            var fd = new FormData();
            alert(_this.created_by);
            fd.append("comm_id", _this.comm_id);
            fd.append("comm_name", _this.comm_name);
            fd.append("comm_des", _this.comm_des);
            fd.append("image", _this.selectedFile, _this.selectedFile.name);
            fd.append("comm_date", _this.comm_date);
            fd.append("comm_rating", _this.comm_rating);
            fd.append("created_by", _this.created_by);
            fd.append("comm_fk_cat_id", _this.comm_fk_cat_id);
            _this._data.addCommunity(fd).subscribe(function (data) {
                console.log(data);
                t1.present();
<<<<<<< HEAD
=======
                _this.navCtrl.pop();
            }, function (err) {
                alert(err);
            }, function () {
                l1.dismiss();
            });
        });
    };
    return CreateCommunityPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], CreateCommunityPage.prototype, "fileInput", void 0);
CreateCommunityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-community',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\create-community\create-community.html"*/'<!--\n\n  Generated template for the CreateCommunityPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>Create Community</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form *ngIf="form" [formGroup]="form">\n\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n    <div class="profile-image-wrapper" (click)="getPicture()">\n\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n\n        <ion-icon name="add"></ion-icon>\n\n        <div>\n\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n\n        </div>\n\n      </div>\n\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n\n    </div>\n\n    <div *ngIf="!this.form.controls.profilePic.valid  && this.form.controls.profilePic.dirty">\n\n      <p class="error">Please Choose an Image.</p>\n\n    </div>\n\n\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-input type="text" formControlName="comm_name" placeholder="Community Name" [(ngModel)]="comm_name"></ion-input>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.comm_name.valid  && this.form.controls.comm_name.dirty">\n\n        <p class="error">Please Enter an Community Name.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-input type="text" formControlName="comm_des" placeholder="Community Description" [(ngModel)]="comm_des"></ion-input>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.comm_des.valid  && this.form.controls.comm_des.dirty">\n\n        <p class="error">Please Enter an Community Description.</p>\n\n      </div>\n\n      <div *ngIf="!this.form.controls.comm_des.valid  && this.form.controls.comm_des.dirty">\n\n        <p class="error">Please Enter Community Description with minimum length of 10.</p>\n\n      </div>\n\n\n\n    </ion-list>\n\n    <button ion-button color="danger" [disabled]="!isReadyToSave" (click)="onCreate()" block>Create Community</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\create-community\create-community.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_community_db_community_db__["a" /* ComminityDbTsProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], CreateCommunityPage);

//# sourceMappingURL=create-community.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateStoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the CreateStoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateStoryPage = (function () {
    function CreateStoryPage(navCtrl, navParams, viewCtrl, formBuilder, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.form = formBuilder.group({
            profilePic: [''],
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            about: ['']
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    CreateStoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateStoryPage');
    };
    CreateStoryPage.prototype.getPicture = function () {
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
    CreateStoryPage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    CreateStoryPage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    CreateStoryPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    CreateStoryPage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    return CreateStoryPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], CreateStoryPage.prototype, "fileInput", void 0);
CreateStoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-story',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\create-story\create-story.html"*/'<!--\n\n  Generated template for the CreateStoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add My Story</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n\n        <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n        <div class="profile-image-wrapper" (click)="getPicture()">\n\n          <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n\n            <ion-icon name="add"></ion-icon>\n\n            <div>\n\n              {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n\n            </div>\n\n          </div>\n\n          <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n\n        </div>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-input type="text" placeholder="Story Title" formControlName="name"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </form>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\create-story\create-story.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], CreateStoryPage);

//# sourceMappingURL=create-story.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_loginpro_loginpro__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { UsersPage } from './../users/users';





/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = (function () {
    function EditprofilePage(tos, load, data, viewCtrl, storage, navCtrl, navParams) {
        this.tos = tos;
        this.load = load;
        this.data = data;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checkstate = '';
        this.id = '';
        this.gender = '';
        this.uname = '';
        this.image = '';
        this.mobile = '';
        this.eid = '';
        this.u = [];
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EditprofilePage');
        this.storage.get('uid').then(function (val) {
            _this.eid = val;
            var l1 = _this.load.create({
                content: "Loading ..."
            });
            l1.present();
            _this.data.getUser(_this.eid).subscribe(function (dt) {
                _this.u = dt;
                _this.id = _this.u[0].user_id;
                _this.uname = _this.u[0].user_name;
                _this.image = _this.u[0].user_pic;
                _this.mydate = _this.u[0].user_bdate;
                _this.gender = _this.u[0].gender;
                _this.mobile = _this.u[0].user_mob_no;
                console.log(_this.mobile);
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        });
    };
    EditprofilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditprofilePage.prototype.onClick = function () {
        var _this = this;
        console.log(this.id);
        this.data.updateUser(this.id, this.uname, this.image, this.gender, this.mobile, this.mydate).subscribe(function (dt) {
            if (dt.affectedRows == 1) {
                var mes = _this.tos.create({
                    message: 'Updated...',
                    duration: 4000,
                    position: 'top'
                });
                mes.present();
>>>>>>> 5b80d79608de99c5a23b28bb3d3eb94c53d8630a
                _this.navCtrl.pop();
            }, function (err) {
                alert(err);
            }, function () {
                l1.dismiss();
            });
        });
    };
    return CreateCommunityPage;
}());
<<<<<<< HEAD
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], CreateCommunityPage.prototype, "fileInput", void 0);
CreateCommunityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-community',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\create-community\create-community.html"*/'<!--\n\n  Generated template for the CreateCommunityPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>Create Community</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form *ngIf="form" [formGroup]="form">\n\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n    <div class="profile-image-wrapper" (click)="getPicture()">\n\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n\n        <ion-icon name="add"></ion-icon>\n\n        <div>\n\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n\n        </div>\n\n      </div>\n\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n\n    </div>\n\n    <div *ngIf="!this.form.controls.profilePic.valid  && this.form.controls.profilePic.dirty">\n\n      <p class="error">Please Choose an Image.</p>\n\n    </div>\n\n\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-input type="text" formControlName="comm_name" placeholder="Community Name" [(ngModel)]="comm_name"></ion-input>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.comm_name.valid  && this.form.controls.comm_name.dirty">\n\n        <p class="error">Please Enter an Community Name.</p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-input type="text" formControlName="comm_des" placeholder="Community Description" [(ngModel)]="comm_des"></ion-input>\n\n      </ion-item>\n\n      <div *ngIf="!this.form.controls.comm_des.valid  && this.form.controls.comm_des.dirty">\n\n        <p class="error">Please Enter an Community Description.</p>\n\n      </div>\n\n      <div *ngIf="!this.form.controls.comm_des.valid  && this.form.controls.comm_des.dirty">\n\n        <p class="error">Please Enter Community Description with minimum length of 10.</p>\n\n      </div>\n\n\n\n    </ion-list>\n\n    <button ion-button color="danger" [disabled]="!isReadyToSave" (click)="onCreate()" block>Create Community</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\create-community\create-community.html"*/,
=======
EditprofilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-editprofile',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\editprofile\editprofile.html"*/'<!--\n\n  Generated template for the EditprofilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-toolbar>\n\n    <ion-title>Edit Profile</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n      <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n      <ion-icon name="close" showWhen="android,windows"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>UserName</ion-label>\n\n      <ion-input type="text" [(ngModel)]="uname"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n\n\n    </ion-item>\n\n\n\n    <ion-list radio-group [(ngModel)]="gender">\n\n      <ion-item>\n\n        <ion-label>Male</ion-label>\n\n        <ion-radio value="Male" [checked]="gender==\'Male\'"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Female</ion-label>\n\n        <ion-radio value="Female" [checked]="gender==\'Female\'"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Mobile No</ion-label>\n\n      <ion-input type="text" [value]="mobile" [(ngModel)]="mobile" ></ion-input>\n\n    </ion-item>\n\n    <ion-item></ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Image</ion-label>\n\n      <ion-input type="text" [(ngModel)]="image"></ion-input>\n\n    </ion-item>\n\n    <!--<ion-item>\n\n      <ion-label fixed>{{ \'NAME\' | translate }}</ion-label>\n\n      <ion-input type="text" [(ngModel)]="account.name" name="name"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label fixed>{{ \'EMAIL\' | translate }}</ion-label>\n\n      <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n    </ion-item>\n\n  -->\n\n    <!--\n\n    Want to add a Username? Here you go:\n\n\n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n\n    </ion-item>\n\n    -->\n\n<!--\n\n    <ion-item>\n\n      <button ion-button color="primary" (click)="onfile()"block>{{ \'Image\' | translate }}</button>  \n\n    </ion-item>-->\n\n    \n\n\n\n  <ion-item>\n\n    <ion-label>Date</ion-label>\n\n    <ion-datetime displayFormat="DD/MMMM/YYYY" pickerFormat="DD MMMM YYYY" [(ngModel)]="mydate"></ion-datetime>\n\n  </ion-item>\n\n  \n\n    <div padding>\n\n      <button ion-button color="meetup" (click)="onClick()" block>{{ \'Done\' | translate }}</button>\n\n    </div>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\editprofile\editprofile.html"*/,
>>>>>>> 5b80d79608de99c5a23b28bb3d3eb94c53d8630a
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_community_db_community_db__["a" /* ComminityDbTsProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], CreateCommunityPage);

//# sourceMappingURL=create-community.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateStoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the CreateStoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateStoryPage = (function () {
    function CreateStoryPage(navCtrl, navParams, viewCtrl, formBuilder, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.form = formBuilder.group({
            profilePic: [''],
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            about: ['']
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    CreateStoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateStoryPage');
    };
    CreateStoryPage.prototype.getPicture = function () {
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
    CreateStoryPage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    CreateStoryPage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    CreateStoryPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    CreateStoryPage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    return CreateStoryPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], CreateStoryPage.prototype, "fileInput", void 0);
CreateStoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-story',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\create-story\create-story.html"*/'<!--\n\n  Generated template for the CreateStoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add My Story</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n\n        <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n        <div class="profile-image-wrapper" (click)="getPicture()">\n\n          <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n\n            <ion-icon name="add"></ion-icon>\n\n            <div>\n\n              {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n\n            </div>\n\n          </div>\n\n          <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n\n        </div>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-input type="text" placeholder="Story Title" formControlName="name"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\create-story\create-story.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], CreateStoryPage);

//# sourceMappingURL=create-story.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_loginpro_loginpro__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { UsersPage } from './../users/users';





/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = (function () {
    function EditprofilePage(tos, load, data, viewCtrl, storage, navCtrl, navParams) {
        this.tos = tos;
        this.load = load;
        this.data = data;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checkstate = '';
        this.id = '';
        this.gender = '';
        this.uname = '';
        this.image = '';
        this.mobile = '';
        this.eid = '';
        this.u = [];
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EditprofilePage');
        this.storage.get('uid').then(function (val) {
            _this.eid = val;
            var l1 = _this.load.create({
                content: "Loading ..."
            });
            l1.present();
            _this.data.getUser(_this.eid).subscribe(function (dt) {
                _this.u = dt;
                _this.id = _this.u[0].user_id;
                _this.uname = _this.u[0].user_name;
                _this.image = _this.u[0].user_pic;
                _this.mydate = _this.u[0].user_bdate;
                _this.gender = _this.u[0].gender;
                _this.mobile = _this.u[0].user_mob_no;
                console.log(_this.mobile);
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        });
    };
    EditprofilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditprofilePage.prototype.onClick = function () {
        var _this = this;
        console.log(this.id);
        this.data.updateUser(this.id, this.uname, this.image, this.gender, this.mobile, this.mydate).subscribe(function (dt) {
            if (dt.affectedRows == 1) {
                var mes = _this.tos.create({
                    message: 'Updated...',
                    duration: 4000,
                    position: 'top'
                });
                mes.present();
                _this.navCtrl.pop();
                //this.navCtrl.push(UsersPage);
            }
            else {
                var mes = _this.tos.create({
                    message: 'Failed...',
                    duration: 4000,
                    position: 'top'
                });
                mes.present();
            }
        });
    };
    return EditprofilePage;
}());
<<<<<<< HEAD
EditprofilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-editprofile',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\editprofile\editprofile.html"*/'<!--\n\n  Generated template for the EditprofilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-toolbar>\n\n    <ion-title>Edit Profile</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n      <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n      <ion-icon name="close" showWhen="android,windows"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>UserName</ion-label>\n\n      <ion-input type="text" [(ngModel)]="uname"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n\n\n    </ion-item>\n\n\n\n    <ion-list radio-group [(ngModel)]="gender">\n\n      <ion-item>\n\n        <ion-label>Male</ion-label>\n\n        <ion-radio value="Male" [checked]="gender==\'Male\'"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Female</ion-label>\n\n        <ion-radio value="Female" [checked]="gender==\'Female\'"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Mobile No</ion-label>\n\n      <ion-input type="text" [value]="mobile" [(ngModel)]="mobile" ></ion-input>\n\n    </ion-item>\n\n    <ion-item></ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Image</ion-label>\n\n      <ion-input type="text" [(ngModel)]="image"></ion-input>\n\n    </ion-item>\n\n    <!--<ion-item>\n\n      <ion-label fixed>{{ \'NAME\' | translate }}</ion-label>\n\n      <ion-input type="text" [(ngModel)]="account.name" name="name"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label fixed>{{ \'EMAIL\' | translate }}</ion-label>\n\n      <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n    </ion-item>\n\n  -->\n\n    <!--\n\n    Want to add a Username? Here you go:\n\n\n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n\n    </ion-item>\n\n    -->\n\n<!--\n\n    <ion-item>\n\n      <button ion-button color="primary" (click)="onfile()"block>{{ \'Image\' | translate }}</button>  \n\n    </ion-item>-->\n\n    \n\n\n\n  <ion-item>\n\n    <ion-label>Date</ion-label>\n\n    <ion-datetime displayFormat="DD/MMMM/YYYY" pickerFormat="DD MMMM YYYY" [(ngModel)]="mydate"></ion-datetime>\n\n  </ion-item>\n\n  \n\n    <div padding>\n\n      <button ion-button color="meetup" (click)="onClick()" block>{{ \'Done\' | translate }}</button>\n\n    </div>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\editprofile\editprofile.html"*/,
=======
ViewPastEventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-view-past-event',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\view-past-event\view-past-event.html"*/'<!--\n  Generated template for the ViewPastEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-navbar>\n      <ion-title></ion-title>\n    </ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onSharing()">\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item (click)="onView()">\n    <ion-avatar item-start>\n      <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{comm_pic}}">\n    </ion-avatar>\n    <h2>{{comm_name}}</h2>\n    <!--<p>November 5, 1955</p>-->\n  </ion-item>\n\n  <img src="https://letsmeetbackend.herokuapp.com/images/events/{{event_pic}}" />\n  <h1>{{event_name}}</h1>\n  <ion-item *ngIf="join_button">\n    <h2>Are you going?</h2>\n    <ion-buttons end>\n      <button small ion-button icon-only (click)="onClickRSVP()" color="success">\n        <ion-icon name="checkmark-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-item>\n\n  <ion-item *ngIf="going_button">\n    <h2>You\'re going!</h2>\n    <ion-buttons end>\n      <button ion-button small icon-only (click)="doConfirm()" color="danger">\n        <ion-icon name="close-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-item>\n\n  <div padding>\n    <ion-segment [(ngModel)]="viewEvent">\n      <ion-segment-button value="event_detail">\n        Details\n      </ion-segment-button>\n      <ion-segment-button value="feedback">\n        Feedback\n      </ion-segment-button>\n      <ion-segment-button value="going_cnt">\n        {{cnt_rsvp}} are going\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="viewEvent">\n    <ion-list *ngSwitchCase="\'event_detail\'">\n      <ion-item>\n        <h3>\n          <ion-icon name="calendar"></ion-icon> {{event_date | date:\'dd-MM-yy\' }}</h3>\n      </ion-item>\n\n      <ion-item>\n        <h4>\n          <ion-icon name="time"></ion-icon> {{event_s_time}} - {{event_e_time}}</h4>\n      </ion-item>\n\n      <ion-item>\n        <h3 class="text-wrap">\n          <ion-icon name="navigate"></ion-icon> {{event_loc}}</h3>\n      </ion-item>\n\n      <ion-item>\n        <h3>\n          <ion-icon name="person"> Hosted by</ion-icon> {{created_by}}\n        </h3>\n      </ion-item>\n\n      <p>{{event_des}}</p>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'feedback\'">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="https://letsmeetbackend.herokuapp.com/images/users/{{user_pic}}">\n        </ion-avatar>\n        <h2>{{user_name}}</h2>\n        <p (click)="changeFlag()" *ngIf="flag1;else textAreaBox">Add a new Fedback</p>\n        <ng-template #textAreaBox>\n          <textarea placeholder="Add a new Fedback" [(ngModel)]="feed_des" name="" id="" cols="14" rows="3"></textarea>\n          <button ion-button icon-only (click)="newFeedback()">\n            <ion-icon name="happy"></ion-icon>\n          </button>\n        </ng-template>\n      </ion-item>\n      <ion-card>\n        <ion-item *ngFor="let item of feedback_event_user">\n          <ion-avatar item-start>\n            <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n          </ion-avatar>\n          <h2>{{item.user_name}}</h2>\n          <p>{{item.feed_date | date:\'mediumDate\'}}</p>\n          <ion-card-content>\n            <p class="text-wrap">{{item.feed_des}}</p>\n          </ion-card-content>\n          <button *ngIf="item.user_id==user_id" (click)="deleteFeedback(item.feed_id)" ion-button icon-only item-end clear>\n            <ion-icon name="trash"></ion-icon>\n          </button>\n          <!--<button *ngIf="item.user_id==user_id" (click)="updateFeedback(item.feed_id)" ion-button icon-only item-end clear>\n            <ion-icon name="create"></ion-icon>\n          </button>-->\n        </ion-item>\n      </ion-card>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'going_cnt\'">\n      <ion-item *ngFor="let item of event_rsvp_user">\n        <ion-avatar item-left>\n          <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n        </ion-avatar>\n        <h2>{{item.user_name}}</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\view-past-event\view-past-event.html"*/,
>>>>>>> 5b80d79608de99c5a23b28bb3d3eb94c53d8630a
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__providers_loginpro_loginpro__["a" /* LoginproProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */]])
], EditprofilePage);

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryDetailPage; });
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


/**
 * Generated class for the StoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StoryDetailPage = (function () {
    function StoryDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StoryDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoryDetailPage');
    };
    return StoryDetailPage;
}());
StoryDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-story-detail',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\story-detail\story-detail.html"*/'<!--\n\n  Generated template for the StoryDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>storyDetail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="assets/img/marty-avatar.png">\n\n          </ion-avatar>\n\n          <h2>Jon</h2>\n\n        </ion-item>\n\n      </ion-list>\n\n    <ion-card>\n\n      <img src="assets/img/card-amsterdam.png"/>\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n            Amsterdam\n\n        </ion-card-title>\n\n        <p>\n\n          <ion-icon name="eye">30</ion-icon>\n\n          <ion-icon name="book">5</ion-icon>\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\story-detail\story-detail.html"*/,
=======
        selector: 'page-story-detail',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\story-detail\story-detail.html"*/'<!--\n\n  Generated template for the StoryDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>storyDetail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="assets/img/marty-avatar.png">\n\n          </ion-avatar>\n\n          <h2>Jon</h2>\n\n        </ion-item>\n\n      </ion-list>\n\n    <ion-card>\n\n      <img src="assets/img/card-amsterdam.png"/>\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n            Amsterdam\n\n        </ion-card-title>\n\n        <p>\n\n          <ion-icon name="eye">30</ion-icon>\n\n          <ion-icon name="book">5</ion-icon>\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\story-detail\story-detail.html"*/,
>>>>>>> 5b80d79608de99c5a23b28bb3d3eb94c53d8630a
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], StoryDetailPage);

//# sourceMappingURL=story-detail.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the StoryDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StoryDbProvider = (function () {
    function StoryDbProvider(http) {
        this.http = http;
        this.url = "https://letsmeetbackend.herokuapp.com/story/";
        console.log('Hello StoryDbProvider Provider');
    }
    StoryDbProvider.prototype.getAllStories = function () {
        return this.http.get(this.url);
    };
    StoryDbProvider.prototype.getStoriesById = function (id) {
        return this.http.get(this.url + id);
    };
    return StoryDbProvider;
}());
StoryDbProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], StoryDbProvider);

//# sourceMappingURL=story-db.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(268);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_social_sharing__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_chooser__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic2_rating__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_screen_orientation__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_calendar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__mocks_providers_items__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_providers__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_story_detail_story_detail__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_create_story_create_story__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_create_community_create_community__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_view_event_view_event__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_view_community_view_community__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_editprofile_editprofile__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_view_post_view_post__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_create_post_create_post__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_follower_follower__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_following_following__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_edit_post_edit_post__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_viewuser_viewuser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_change_password_change_password__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_view_past_event_view_past_event__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_loginpro_loginpro__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_community_db_community_db__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_event_db_event_db__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_event_community_db_event_community_db__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_rsvp_db_rsvp_db__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_post_db_post_db__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_community_member_db_community_member_db__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_community_comm_member_community_comm_member__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_comment_db_comment_db__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_like_db_like_db__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_feedback_db_feedback_db__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_story_db_story_db__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_geolocation_geolocation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_rating_db_rating_db__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { ViewuserPage } from './../pages/viewuser/viewuser';

















































// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_18__providers_providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_20__pages_story_detail_story_detail__["a" /* StoryDetailPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_create_story_create_story__["a" /* CreateStoryPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_create_community_create_community__["a" /* CreateCommunityPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_view_event_view_event__["a" /* ViewEventPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_view_community_view_community__["a" /* ViewCommunityPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_view_post_view_post__["a" /* ViewPostPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_create_post_create_post__["a" /* CreatePostPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_follower_follower__["a" /* FollowerPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_following_following__["a" /* FollowingPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_edit_post_edit_post__["a" /* EditPostPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_viewuser_viewuser__["a" /* ViewuserPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_change_password_change_password__["a" /* ChangePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_view_past_event_view_past_event__["a" /* ViewPastEventPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-community/create-community.module#CreateCommunityPageModule', name: 'CreateCommunityPage', segment: 'create-community', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-post/create-post.module#CreatePostPageModule', name: 'CreatePostPage', segment: 'create-post', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-story/create-story.module#CreateStoryPageModule', name: 'CreateStoryPage', segment: 'create-story', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-post/edit-post.module#EditPostPageModule', name: 'EditPostPage', segment: 'edit-post', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/follower/follower.module#FollowerPageModule', name: 'FollowerPage', segment: 'follower', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/following/following.module#FollowingPageModule', name: 'FollowingPage', segment: 'following', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/stories/stories.module#StoriesPageModule', name: 'StoriesPage', segment: 'stories', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/story-detail/story-detail.module#StoryDetailPageModule', name: 'StoryDetailPage', segment: 'story-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/view-community/view-community.module#ViewCommunityPageModule', name: 'ViewCommunityPage', segment: 'view-community', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/view-event/view-event.module#ViewEventPageModule', name: 'ViewEventPage', segment: 'view-event', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/view-past-event/view-past-event.module#ViewPastEventPageModule', name: 'view-past-event', segment: 'view-past-event', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/viewuser/viewuser.module#ViewuserPageModule', name: 'ViewuserPage', segment: 'viewuser', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
<<<<<<< HEAD
                    { loadChildren: '../pages/view-post/view-post.module#ViewPostPageModule', name: 'ViewPostPage', segment: 'view-post', priority: 'low', defaultHistory: [] }
=======
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
>>>>>>> 5b80d79608de99c5a23b28bb3d3eb94c53d8630a
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14_ionic2_rating__["a" /* Ionic2RatingModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_20__pages_story_detail_story_detail__["a" /* StoryDetailPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_create_story_create_story__["a" /* CreateStoryPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_create_community_create_community__["a" /* CreateCommunityPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_view_event_view_event__["a" /* ViewEventPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_view_community_view_community__["a" /* ViewCommunityPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_view_post_view_post__["a" /* ViewPostPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_create_post_create_post__["a" /* CreatePostPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_follower_follower__["a" /* FollowerPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_following_following__["a" /* FollowingPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_edit_post_edit_post__["a" /* EditPostPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_viewuser_viewuser__["a" /* ViewuserPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_change_password_change_password__["a" /* ChangePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_view_past_event_view_past_event__["a" /* ViewPastEventPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_17__mocks_providers_items__["a" /* Items */],
            __WEBPACK_IMPORTED_MODULE_18__providers_providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__["a" /* DatePicker */],
            { provide: __WEBPACK_IMPORTED_MODULE_18__providers_providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]] },
            // Keep this to enable Ionic's runtime error handling during development
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_34__providers_loginpro_loginpro__["a" /* LoginproProvider */],
            __WEBPACK_IMPORTED_MODULE_35__providers_community_db_community_db__["a" /* ComminityDbTsProvider */],
            __WEBPACK_IMPORTED_MODULE_36__providers_event_db_event_db__["a" /* EventDbProvider */],
            __WEBPACK_IMPORTED_MODULE_37__providers_event_community_db_event_community_db__["a" /* EventCommunityDbProvider */],
            __WEBPACK_IMPORTED_MODULE_38__providers_rsvp_db_rsvp_db__["a" /* RsvpDbProvider */],
            __WEBPACK_IMPORTED_MODULE_39__providers_post_db_post_db__["a" /* PostDbProvider */],
            __WEBPACK_IMPORTED_MODULE_40__providers_community_member_db_community_member_db__["a" /* CommunityMemberDbProvider */],
            __WEBPACK_IMPORTED_MODULE_41__providers_community_comm_member_community_comm_member__["a" /* CommunityCommMemberProvider */],
            __WEBPACK_IMPORTED_MODULE_42__providers_comment_db_comment_db__["a" /* CommentDbProvider */],
            __WEBPACK_IMPORTED_MODULE_43__providers_like_db_like_db__["a" /* LikeDbProvider */],
            __WEBPACK_IMPORTED_MODULE_44__providers_feedback_db_feedback_db__["a" /* FeedbackDbProvider */],
            __WEBPACK_IMPORTED_MODULE_45__providers_story_db_story_db__["a" /* StoryDbProvider */],
            __WEBPACK_IMPORTED_MODULE_46__providers_geolocation_geolocation__["a" /* GeolocationProvider */],
            __WEBPACK_IMPORTED_MODULE_47__providers_rating_db_rating_db__["a" /* RatingDbProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Post_Class */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post_Update_Class; });
var Post_Class = (function () {
    function Post_Class(post_id, post_title, post_des, post_pic, post_date, post_fk_user_id, fk_comm_id) {
        this.post_id = post_id;
        this.post_title = post_title;
        this.post_des = post_des;
        this.post_pic = post_pic;
        this.post_date = post_date;
        this.post_fk_user_id = post_fk_user_id;
        this.fk_comm_id = fk_comm_id;
    }
    return Post_Class;
}());

var Post_Update_Class = (function () {
    function Post_Update_Class(post_id, post_title, post_des) {
        this.post_id = post_id;
        this.post_title = post_title;
        this.post_des = post_des;
    }
    return Post_Update_Class;
}());

//# sourceMappingURL=post_class.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(12);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    return Settings;
}());
Settings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
], Settings);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(194);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    return User;
}());
User = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
], User);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment_Class; });
var Comment_Class = (function () {
    function Comment_Class(com_id, com_date, com_des, fk_post_id, com_fk_user_id) {
        this.com_id = com_id;
        this.com_date = com_date;
        this.com_des = com_des;
        this.fk_post_id = fk_post_id;
        this.com_fk_user_id = com_fk_user_id;
    }
    return Comment_Class;
}());

//# sourceMappingURL=comment_class.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Like_Class; });
var Like_Class = (function () {
    function Like_Class(like_id, like_fk_post_id, like_fk_user_id) {
        this.like_id = like_id;
        this.like_fk_post_id = like_fk_post_id;
        this.like_fk_user_id = like_fk_user_id;
    }
    return Like_Class;
}());

//# sourceMappingURL=like_class.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comm_member_class; });
var Comm_member_class = (function () {
    function Comm_member_class(join_id, fk_user_id, fk_comm_id) {
        this.join_id = join_id;
        this.fk_user_id = fk_user_id;
        this.fk_comm_id = fk_comm_id;
    }
    return Comm_member_class;
}());

//# sourceMappingURL=comm_member_class.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rate_Class; });
var Rate_Class = (function () {
    function Rate_Class(rate_id, rate_value, rate_fk_comm_id, rate_fk_user_id) {
        this.rate_id = rate_id;
        this.rate_value = rate_value;
        this.rate_fk_comm_id = rate_fk_comm_id;
        this.rate_fk_user_id = rate_fk_user_id;
    }
    return Rate_Class;
}());

//# sourceMappingURL=rating_tbl_class.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pages__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_providers__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(translate, platform, settings, config, storage, statusBar, alertCtrl, splashScreen, screenOrientation) {
        var _this = this;
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.storage = storage;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.splashScreen = splashScreen;
        this.screenOrientation = screenOrientation;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_pages__["a" /* FirstRunPage */];
        this.alertShown = false;
        this.pages = [
            { title: 'Tutorial', component: 'TutorialPage' },
            { title: 'Welcome', component: 'WelcomePage' },
            { title: 'Tabs', component: 'TabsPage' },
            // { title: 'Cards', component: 'CardsPage' },
            { title: 'Content', component: 'ContentPage' },
            { title: 'Login', component: 'LoginPage' },
            { title: 'Signup', component: 'SignupPage' },
            { title: 'Master Detail', component: 'ListMasterPage' },
            { title: 'Menu', component: 'MenuPage' },
            { title: 'Settings', component: 'SettingsPage' },
            { title: 'Search', component: 'SearchPage' },
            { title: 'Stories', component: 'StoriesPage' },
            { title: 'Users', component: 'UsersPage' },
            { title: 'StoriesDetail', component: 'StoryDetailPage' },
            { title: 'AddStory', component: 'CreateStoryPage' },
            //{ title: 'AddCommunity', component: 'CreateCommunityPage' },
            { title: 'ViewEvent', component: 'ViewEventPage' },
            { title: 'ViewCommunity', component: 'ViewCommunityPage' },
            { title: 'ViewPost', component: 'ViewPostPage' },
            { title: 'CreatePost', component: 'CreatePostPage' },
            { title: 'EditPost', component: 'EditPostPage' },
            { title: 'PastEvent', component: 'ViewPastEventPage' },
            { title: 'EditProfile', component: 'EditprofilePage' },
            { title: 'Follower', community: 'FollowerPage' },
            { title: 'Following', component: 'FollowingPage' },
            { title: 'ViewUser', component: 'ViewuserPage' }
        ];
        this.u_id = null;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.backgroundColorByHexString('#fa5454');
            _this.splashScreen.hide();
            console.log("demo" + _this.storage.get('uid'));
            _this.storage.get('uid').catch(function (data) {
                _this.u_id = data;
            });
            console.log("demo1" + _this.storage.get('uid'));
            if (_this.u_id != null) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_pages__["b" /* MainPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_pages__["a" /* FirstRunPage */];
            }
            _this.platform.resume;
            platform.registerBackButtonAction(function () {
                if (_this.alertShown == false) {
                    _this.presentConfirm();
                }
            });
            //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        });
        this.initTranslate();
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Exit',
            message: 'Do you want Exit?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.alertShown = false;
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present().then(function () {
            _this.alertShown = true;
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "<ion-menu [content]=\"content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Pages</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_8__providers_providers__["c" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Config */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_event_db_event_db__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__follower_follower__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loginpro_loginpro__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_loading_loading_controller__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__following_following__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_community_member_db_community_member_db__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { EditprofilePage } from './../editprofile/editprofile';







/**
 * Generated class for the ViewuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewuserPage = (function () {
    function ViewuserPage(_dataEvent, _DataCommu, data, load, storage, platform, modalCtrl, navCtrl, navParams) {
        this._dataEvent = _dataEvent;
        this._DataCommu = _DataCommu;
        this.data = data;
        this.load = load;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.segme = "events";
        this.arrUpc = [];
        this.arrPast = [];
        this.arrCommu = [];
        this.followers = [];
        this.followings = [];
        this.ed = "";
        this.u = [];
        this.eid = "";
        this.uid = "";
        this.img = "";
        this.pet = "kittens";
        this.isAndroid = false;
        this.user_id = "";
        this.us_id = "";
        this.id = "";
        this.isAndroid = platform.is('android');
    }
    ViewuserPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ViewuserPage');
        this.storage.get('viewid').then(function (val) {
            _this.uid = val;
            _this.user_id = val;
            var l1 = _this.load.create({
                content: "Loading ..."
            });
            l1.present();
            _this.storage.get('viewid').then(function (val) {
                _this.uid = val;
                _this._dataEvent.getUpcEventRegUser(_this.uid).subscribe(function (data) {
                    _this.arrUpc = data;
                }, function (err) {
                    alert(err);
                }, function () {
                });
            });
            _this.storage.get('viewid').then(function (val) {
                _this.uid = val;
                _this._dataEvent.getPastEventReg(_this.uid).subscribe(function (data) {
                    _this.arrPast = data;
                }, function (err) {
                    alert(err);
                }, function () {
                });
            });
            _this.storage.get('viewid').then(function (val) {
                _this.uid = val;
                _this._DataCommu.getcommunitiesofuser(_this.uid).subscribe(function (data) {
                    _this.arrCommu = data;
                }, function (err) {
                    alert(err);
                }, function () {
                });
            });
            _this.storage.get('uid').then(function (val) {
                _this.us_id = val;
                _this.data.iffollowing(_this.user_id, _this.us_id).subscribe(function (ft) {
                    if (ft == "") {
                        _this.iffo = false;
                        _this.ifunfollo = true;
                    }
                    else {
                        _this.iffo = true;
                        _this.ifunfollo = false;
                    }
                });
            });
            _this.data.getUser(_this.uid).subscribe(function (dt) {
                _this.u = dt;
                _this.eid = _this.u[0].user_name;
                _this.img = _this.u[0].user_pic;
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
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
        //this.data.set_url();
    };
    ViewuserPage.prototype.onFollower = function () {
        //this.storage.get('uid').then((val)=>{this.id;
        //alert(this.uid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__follower_follower__["a" /* FollowerPage */], { uid: this.uid });
        // });
    };
    ViewuserPage.prototype.onfollow = function () {
        var _this = this;
        this.storage.get('viewid').then(function (val) {
            _this.user_id = val;
            _this.storage.get('uid').then(function (val) {
                _this.us_id = val;
                _this.data.insertfollower(_this.user_id, _this.us_id).subscribe(function (dt) {
                    alert("done");
                    _this.ionViewDidLoad();
                }, function (e) {
                    alert(e);
                });
            });
        });
    };
    ViewuserPage.prototype.onunfollow = function () {
        var _this = this;
        this.storage.get('viewid').then(function (val) {
            _this.user_id = val;
            _this.storage.get('uid').then(function (val) {
                _this.us_id = val;
                _this.data.deletefollower(_this.user_id, _this.us_id).subscribe(function (dt) {
                    alert("done");
                    _this.ionViewDidLoad();
                }, function (e) {
                    alert(e);
                });
            });
        });
    };
    ViewuserPage.prototype.onFollowing = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__following_following__["a" /* FollowingPage */], { uid: this.uid });
    };
    return ViewuserPage;
}());
ViewuserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-viewuser',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\viewuser\viewuser.html"*/'<!--\n\n  Generated template for the UsersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>{{eid}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="https://letsmeetbackend.herokuapp.com/images/users/{{img}}" height="100" width="100">\n\n      </ion-avatar>\n\n      <h1>{{eid}}</h1>\n\n    </ion-item>\n\n    <button ion-button primary *ngIf="iffo" (click)="onfollow()">Follow</button>\n\n    <button ion-button *ngIf="ifunfollo" (click)="onunfollow()">Following</button>\n\n  </ion-list>\n\n\n\n  <ion-item (click)="onFollower()">\n\n    <ion-icon name="logo-twitter" item-start></ion-icon>\n\n    Followers\n\n    <ion-badge item-end>{{followercount}}</ion-badge>\n\n  </ion-item>\n\n  <ion-item (click)="onFollowing()">\n\n    <ion-icon name="logo-twitter" item-start></ion-icon>\n\n    Following\n\n    <ion-badge item-end>{{followingcount}}</ion-badge>\n\n  </ion-item>\n\n\n\n  <div padding >\n\n    <ion-segment [(ngModel)]="segme">\n\n      <ion-segment-button value="events">\n\n        Events\n\n      </ion-segment-button>\n\n      <ion-segment-button value="commu">\n\n        Communities\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="segme">\n\n    <ion-list *ngSwitchCase="\'events\'">\n\n      <ion-list-header>\n\n        Attending\n\n      </ion-list-header>\n\n      <ion-list-header></ion-list-header>\n\n      <ion-item *ngFor="let item of arrUpc" (click)="onCLickUpcEvent(item.event_id)">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}">\n\n        </ion-thumbnail>\n\n        <h2>{{item.event_name}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-list-header>\n\n        Attended\n\n      </ion-list-header>\n\n      <ion-item *ngFor="let item of arrPast" (click)="onCLickPastEvent(item.event_id)">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}">\n\n        </ion-thumbnail>\n\n        <h2>{{item.event_name}}</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'commu\'">\n\n      <ion-item *ngFor="let item of arrCommu" (click)="onCLickCommu(item.event_id)">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{item.comm_pic}}">\n\n        </ion-thumbnail>\n\n        <h2>{{item.comm_name}}</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\viewuser\viewuser.html"*/,
=======
        selector: 'page-viewuser',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\viewuser\viewuser.html"*/'<!--\n\n  Generated template for the UsersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>{{eid}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="https://letsmeetbackend.herokuapp.com/images/users/{{img}}" height="100" width="100">\n\n      </ion-avatar>\n\n      <h1>{{eid}}</h1>\n\n    </ion-item>\n\n    <button ion-button primary *ngIf="iffo" (click)="onfollow()">Follow</button>\n\n    <button ion-button *ngIf="ifunfollo" (click)="onunfollow()">Following</button>\n\n  </ion-list>\n\n\n\n  <ion-item (click)="onFollower()">\n\n    <ion-icon name="logo-twitter" item-start></ion-icon>\n\n    Followers\n\n    <ion-badge item-end>{{followercount}}</ion-badge>\n\n  </ion-item>\n\n  <ion-item (click)="onFollowing()">\n\n    <ion-icon name="logo-twitter" item-start></ion-icon>\n\n    Following\n\n    <ion-badge item-end>{{followingcount}}</ion-badge>\n\n  </ion-item>\n\n\n\n  <div padding >\n\n    <ion-segment [(ngModel)]="segme">\n\n      <ion-segment-button value="events">\n\n        Events\n\n      </ion-segment-button>\n\n      <ion-segment-button value="commu">\n\n        Communities\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="segme">\n\n    <ion-list *ngSwitchCase="\'events\'">\n\n      <ion-list-header>\n\n        Attending\n\n      </ion-list-header>\n\n      <ion-list-header></ion-list-header>\n\n      <ion-item *ngFor="let item of arrUpc" (click)="onCLickUpcEvent(item.event_id)">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}">\n\n        </ion-thumbnail>\n\n        <h2>{{item.event_name}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-list-header>\n\n        Attended\n\n      </ion-list-header>\n\n      <ion-item *ngFor="let item of arrPast" (click)="onCLickPastEvent(item.event_id)">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}">\n\n        </ion-thumbnail>\n\n        <h2>{{item.event_name}}</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'commu\'">\n\n      <ion-item *ngFor="let item of arrCommu" (click)="onCLickCommu(item.event_id)">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{item.comm_pic}}">\n\n        </ion-thumbnail>\n\n        <h2>{{item.comm_name}}</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\viewuser\viewuser.html"*/,
>>>>>>> 5b80d79608de99c5a23b28bb3d3eb94c53d8630a
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_event_db_event_db__["a" /* EventDbProvider */],
        __WEBPACK_IMPORTED_MODULE_8__providers_community_member_db_community_member_db__["a" /* CommunityMemberDbProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_loginpro_loginpro__["a" /* LoginproProvider */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* NavParams */]])
], ViewuserPage);

//# sourceMappingURL=viewuser.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PostDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PostDbProvider = (function () {
    function PostDbProvider(http) {
        this.http = http;
        this.url = "https://letsmeetbackend.herokuapp.com/post/";
        this.url1 = "https://letsmeetbackend.herokuapp.com/deletePost/";
        this.url2 = 'https://letsmeetbackend.herokuapp.com/updatePostOnly/';
        console.log('Hello PostDbProvider Provider');
    }
    PostDbProvider.prototype.getPostById = function (id) {
        return this.http.get(this.url + id);
    };
    /*addPost(post: Post_Class) {
      let body = JSON.stringify(post);
      return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
    }*/
    PostDbProvider.prototype.addPost = function (fd) {
        return this.http.post(this.url, fd);
    };
    PostDbProvider.prototype.editPostOnly = function (post) {
        var body = JSON.stringify(post);
        return this.http.put(this.url2, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    PostDbProvider.prototype.editPost = function (fd) {
        return this.http.put(this.url, fd);
    };
    PostDbProvider.prototype.deletePost = function (post) {
        var body = JSON.stringify(post);
        return this.http.post(this.url1, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    return PostDbProvider;
}());
PostDbProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], PostDbProvider);

//# sourceMappingURL=post-db.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(322);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });





//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { RSVP_Class } from '../../shared/rsvp_class';
/*
  Generated class for the EventDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EventDbProvider = (function () {
    function EventDbProvider(http) {
        this.http = http;
        this.url = "https://letsmeetbackend.herokuapp.com/event/";
        this.url1 = "https://letsmeetbackend.herokuapp.com/comingEvent/";
        this.url2 = "https://letsmeetbackend.herokuapp.com/event_reg/";
        this.url3 = "https://letsmeetbackend.herokuapp.com/eventNotReg/";
        this.url4 = "https://letsmeetbackend.herokuapp.com/upcEvnByUser/";
        this.url5 = "https://letsmeetbackend.herokuapp.com/pastEvnByUser/";
        console.log('Hello EventDbProvider Provider');
    }
    /*getAllEvents() {
      return this.http.get(this.url);
    }*/
    EventDbProvider.prototype.getAllEvents = function () {
        return this.http.get(this.url1);
    };
    /*addEvent(evn: Events_Class) {
      let body = JSON.stringify(evn);
      return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
    }*/
    EventDbProvider.prototype.addEvent = function (fd) {
        return this.http.post(this.url, fd);
    };
    EventDbProvider.prototype.editEvent = function (evn) {
        var body = JSON.stringify(evn);
        return this.http.put(this.url + evn.event_id, body, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    EventDbProvider.prototype.deleteEvent = function (evn) {
        return this.http.delete(this.url + evn.event_id, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    EventDbProvider.prototype.getEventById = function (id) {
        return this.http.get(this.url + id);
    };
    EventDbProvider.prototype.getRegisteredEventsofUser = function (id) {
        console.log(id);
        return this.http.get(this.url2 + id);
    };
    EventDbProvider.prototype.getNotRegisteredEventsofUser = function (id) {
        return this.http.get(this.url3 + id);
    };
    EventDbProvider.prototype.getUpcEventRegUser = function (id) {
        return this.http.get(this.url4 + id);
    };
    EventDbProvider.prototype.getPastEventReg = function (id) {
        return this.http.get(this.url5 + id);
    };
    return EventDbProvider;
}());
EventDbProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
], EventDbProvider);

//# sourceMappingURL=event-db.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventCommunityDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the EventCommunityDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EventCommunityDbProvider = (function () {
    function EventCommunityDbProvider(http) {
        this.http = http;
        this.url = "https://letsmeetbackend.herokuapp.com/eventCommunity/";
        this.url1 = "https://letsmeetbackend.herokuapp.com/eventNotReg/";
        this.url2 = "https://letsmeetbackend.herokuapp.com/comm_past_event/";
        this.url3 = "https://letsmeetbackend.herokuapp.com/comm_upcoming_event/";
        console.log('Hello EventCommunityDbProvider Provider');
    }
    EventCommunityDbProvider.prototype.getCommunityByEventId = function (id) {
        return this.http.get(this.url + id);
    };
    EventCommunityDbProvider.prototype.getEventsNotReg = function (user_id) {
        return this.http.get(this.url1 + user_id);
    };
    EventCommunityDbProvider.prototype.getAllEventsAndCommunities = function () {
        return this.http.get(this.url);
    };
    EventCommunityDbProvider.prototype.getCommunityByPastEvent = function (id) {
        return this.http.get(this.url2 + id);
    };
    EventCommunityDbProvider.prototype.getCommunityByUpcomingEvent = function (id) {
        return this.http.get(this.url3 + id);
    };
    return EventCommunityDbProvider;
}());
EventCommunityDbProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
], EventCommunityDbProvider);

//# sourceMappingURL=event-community-db.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCommunityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_community_member_db_community_member_db__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_community_comm_member_community_comm_member__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_community_db_community_db__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_view_post_view_post__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_comm_member_class__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_loginpro_loginpro__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_post_create_post__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_post_db_post_db__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_edit_post_edit_post__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_rating_tbl_class__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_rating_db_rating_db__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_event_community_db_event_community_db__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__view_past_event_view_past_event__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__view_event_view_event__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__viewuser_viewuser__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import { Ionic2RatingModule } from 'ionic2-rating';


//import { Community_User_Class } from "../../shared/community_user_class";






/**
 * Generated class for the ViewCommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewCommunityPage = (function () {
    function ViewCommunityPage(dataPost, commu_member, storage, toast, load, alerCtrl, modalCtrl, modalCtrl1, _comm_mem_data, _data, _dataUser, navCtrl, navParams, _rate, _commEvent) {
        this.dataPost = dataPost;
        this.commu_member = commu_member;
        this.storage = storage;
        this.toast = toast;
        this.load = load;
        this.alerCtrl = alerCtrl;
        this.modalCtrl = modalCtrl;
        this.modalCtrl1 = modalCtrl1;
        this._comm_mem_data = _comm_mem_data;
        this._data = _data;
        this._dataUser = _dataUser;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._rate = _rate;
        this._commEvent = _commEvent;
        this.join_button = true;
        this.leave_button = false;
        this.Community = "posts";
        this.arr = [];
        this.comm_post_user = [];
        this.arrMember = [];
        this.comm_mem = [];
        this.comm_member_count = null;
        this.user_id = "";
        this.members = [];
        this.comm_comm_member = [];
        this.arrUser = [];
        this.comm_past_event = [];
        this.comm_upcoming_event = [];
        this.s1 = 0;
        this.s2 = 0;
        this.s3 = 0;
        this.s4 = 0;
        this.s5 = 0;
        this.sum = 0;
        this.w = 0.0;
        this.w2 = 0.0;
        this.w3 = 0.0;
        this.w4 = 0.0;
        this.w5 = 0.0;
    }
    ViewCommunityPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ViewCommunityPage');
        this.comm_id = this.navParams.get('c_id');
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            var l1 = _this.load.create({
                content: "Loading..."
            });
            l1.present();
            _this._data.getCommunityById(_this.comm_id).subscribe(function (data) {
                _this.arr = data;
                _this.comm_name = _this.arr[0].comm_name;
                _this.comm_des = _this.arr[0].comm_des;
                _this.comm_pic = _this.arr[0].comm_pic;
                _this.comm_date = _this.arr[0].comm_date;
                if (_this.user_id == _this.arr[0].created_by) {
                    _this.comm_rating = _this.arr[0].comm_rating;
                }
                _this.created_by = _this.arr[0].user_name;
            }, function (err) {
                alert(err);
            }, function () {
                l1.dismiss();
            });
            _this._rate.getRateCount(1, _this.comm_id).subscribe(function (data) {
                _this.s1 = data[0]['COUNT(rate_value)'];
                _this.sum += _this.s1;
            }, function (err) {
                alert(err);
            }, function () {
            });
            _this._rate.getAvgRating(_this.comm_id).subscribe(function (data) {
                _this.avg = data[0]['AVG(rate_value)'];
            }, function (err) {
                alert(err);
            }, function () {
            });
            _this._rate.getCountRating(_this.comm_id).subscribe(function (data) {
                _this.rate = data[0]['COUNT(rate_value)'];
            }, function (err) {
                alert(err);
            }, function () {
            });
            _this._rate.getRateCount(2, _this.comm_id).subscribe(function (data) {
                _this.s2 = data[0]['COUNT(rate_value)'];
                _this.sum += _this.s2;
            }, function (err) {
                alert(err);
            }, function () {
            });
            _this._rate.getRateCount(3, _this.comm_id).subscribe(function (data) {
                _this.s3 = data[0]['COUNT(rate_value)'];
                _this.sum += _this.s3;
            }, function (err) {
                alert(err);
            }, function () {
            });
            _this._rate.getRateCount(4, _this.comm_id).subscribe(function (data) {
                _this.s4 = data[0]['COUNT(rate_value)'];
                _this.sum += _this.s4;
            }, function (err) {
                alert(err);
            }, function () {
            });
            _this._rate.getRateCount(5, _this.comm_id).subscribe(function (data) {
                _this.s5 = data[0]['COUNT(rate_value)'];
                _this.sum += _this.s5;
                _this.w = (_this.s1 / _this.sum);
                _this.w2 = (_this.s2 / _this.sum);
                _this.w3 = (_this.s3 / _this.sum);
                _this.w4 = (_this.s4 / _this.sum);
                _this.w5 = (_this.s5 / _this.sum);
            }, function (err) {
                alert(err);
            }, function () {
            });
            _this._commEvent.getCommunityByPastEvent(_this.comm_id).subscribe(function (data) {
                _this.comm_past_event = data;
            }, function (e) {
                alert(e);
            }, function () {
            });
            _this._commEvent.getCommunityByUpcomingEvent(_this.comm_id).subscribe(function (data) {
                _this.comm_upcoming_event = data;
            }, function (e) {
                alert(e);
            });
            var l2 = _this.load.create({
                content: "Loading..."
            });
            l2.present();
            _this._data.getPostByCommunityId(_this.comm_id).subscribe(function (data) {
                _this.comm_post_user = data;
            }, function (e) {
                alert(e);
            }, function () {
                l2.dismiss();
            });
            _this._comm_mem_data.getAllMembersByCommunityId(_this.comm_id).subscribe(function (data) {
                _this.comm_mem = data;
                _this.comm_member_count = _this.comm_mem.length;
            });
            _this._comm_mem_data.getAllMembers(_this.comm_id).subscribe(function (data) {
                _this.comm_comm_member = data;
                //this.mem_length=this.comm_comm_member.length;
            }, function (e) {
                alert(e);
            }, function () {
            });
            _this._data.checkCommMember(_this.user_id, _this.comm_id).subscribe(function (data) {
                if (data == "") {
                    _this.join_button = true;
                    _this.leave_button = false;
                }
                else {
                    _this.join_button = false;
                    _this.leave_button = true;
                    _this.arrMember = data;
                    console.log(_this.arrMember);
                }
            });
        });
        this.commu_member.memberCount(this.comm_id).subscribe(function (data) {
            _this.cnt_member = data[0].count;
        }, function (err) {
            alert(err);
        }, function () {
        });
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            _this._dataUser.getUser(_this.user_id).subscribe(function (data) {
                _this.arrUser = data;
                _this.user_pic = _this.arrUser[0].user_pic;
                _this.user_name = _this.arrUser[0].user_name;
            }, function (err) {
                alert(err);
            }, function () {
            });
        });
    };
    ViewCommunityPage.prototype.onJoin = function () {
        var _this = this;
        this.storage.get('uid').then(function (val) {
            _this.user_id = val;
            //alert(this.user_id);
            var l1 = _this.load.create({
                content: 'Joining ...'
            });
            l1.present();
            var t1 = _this.toast.create({
                duration: 3000,
                message: "Joined ..."
            });
            _this.commu_member.addCommunityMember(new __WEBPACK_IMPORTED_MODULE_7__shared_comm_member_class__["a" /* Comm_member_class */](null, _this.user_id, _this.comm_id)).subscribe(function (data) {
                t1.present();
                _this.join_button = false;
                _this.leave_button = true;
                _this.ionViewDidLoad();
                _this._data.checkCommMember(_this.user_id, _this.comm_id).subscribe(function (data) {
                    if (data == "") {
                        _this.join_button = true;
                        _this.leave_button = false;
                    }
                    else {
                        _this.join_button = false;
                        _this.leave_button = true;
                        _this.arrMember = data;
                        console.log(_this.arrMember);
                    }
                });
            }, function (e) {
                alert(e);
            }, function () {
                l1.dismiss();
            });
        });
    };
    /*onClickJoin() {
      this.storage.get('uid').then((val) => {
        this.user_id = val;
        let l1 = this.load.create({
          content: 'Joining ...'
        });
        l1.present();
        this._data.checkCommMember(this.user_id, this.comm_id).subscribe(
          (data: any) => {
            if (data == "") {
              this.onJoin();
            }
            else {
              let t1 = this.toast.create({
                duration: 3000,
                message: "You're already a Member ..."
              });
              t1.present();
              this.arrMember = data;
              console.log(this.arrMember);
            }
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
    ViewCommunityPage.prototype.onRemove = function () {
        var _this = this;
        var l1 = this.load.create({
            content: "Loading..."
        });
        l1.present();
        console.log(this.arrMember[0].join_id);
        this.commu_member.deleteMember(this.arrMember[0].join_id).subscribe(function (data) {
            //alert("deleted");
            _this.join_button = true;
            _this.leave_button = false;
            _this.ionViewDidLoad();
        }, function (err) {
            alert(err);
        }, function () {
            l1.dismiss();
        });
    };
    ViewCommunityPage.prototype.doConfirm = function () {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'Leave Community?',
            message: "Are you sure you don't want to be a part of this Community?",
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        _this.onRemove();
                    }
                }
            ]
        });
        confirm.present();
    };
    ViewCommunityPage.prototype.onPostClick = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_view_post_view_post__["a" /* ViewPostPage */], { post_id: item.post_id });
    };
    ViewCommunityPage.prototype.onAddPost = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__create_post_create_post__["a" /* CreatePostPage */], { c_id: this.comm_id });
        addModal.onDidDismiss(function (item) {
            _this.ionViewDidLoad();
        });
        addModal.present();
    };
    ViewCommunityPage.prototype.deletePost = function (item) {
        var _this = this;
        var confirm1 = this.alerCtrl.create({
            title: 'Delete Post?',
            message: 'Are you sure you want to delete this Post?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No Clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes Clicked');
                        _this.removePost(item);
                    }
                }
            ]
        });
        confirm1.present();
    };
    ViewCommunityPage.prototype.removePost = function (item) {
        var _this = this;
        this.dataPost.deletePost(item).subscribe(function (data) {
            var toast = _this.toast.create({
                message: 'Your post has been successfully deleted.',
                showCloseButton: true,
                closeButtonText: 'Ok'
            });
            _this.ionViewDidLoad();
            toast.present();
        }, function (err) {
            alert(err);
        }, function () {
        });
    };
    ViewCommunityPage.prototype.editPost = function (id) {
        var _this = this;
        var addModal1 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__pages_edit_post_edit_post__["a" /* EditPostPage */], { p_id: id });
        addModal1.onDidDismiss(function (item) {
            _this.ionViewDidLoad();
        });
        addModal1.present();
    };
    ViewCommunityPage.prototype.onModelChange = function (rt) {
        var t1 = this.toast.create({
            duration: 3000,
            message: "Done..."
        });
        this.comm_rating = rt;
        alert(this.comm_rating);
        this._rate.addRating(new __WEBPACK_IMPORTED_MODULE_12__shared_rating_tbl_class__["a" /* Rate_Class */](null, this.comm_rating, this.comm_id, this.user_id)).subscribe(function (data) {
            t1.present();
        }, function (e) {
            alert(e);
        });
    };
    ViewCommunityPage.prototype.showuser = function (id) {
        this.storage.set('viewid', id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__viewuser_viewuser__["a" /* ViewuserPage */]);
    };
    ViewCommunityPage.prototype.onPastEvent = function (event_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__view_past_event_view_past_event__["a" /* ViewPastEventPage */], { e_id: event_id });
    };
    ViewCommunityPage.prototype.onUpcomingEvent = function (event_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__view_event_view_event__["a" /* ViewEventPage */], { e_id: event_id });
    };
    return ViewCommunityPage;
}());
ViewCommunityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-view-community',template:/*ion-inline-start:"E:\final\lets_meet_app\src\pages\view-community\view-community.html"*/'<!--\n\n  Generated template for the ViewCommunityPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>view-community</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{comm_pic}}" align="center" height="150" width="250"\n\n  />\n\n  <h5>{{comm_name}}\n\n    <button ion-button style="float: right" small *ngIf="join_button" (click)="onJoin()" color="danger">Join Now</button>\n\n    <button ion-button style="float: right" small *ngIf="leave_button" (click)="doConfirm()" color="danger">Leave Community</button>\n\n  </h5>\n\n  <!--<button ion-button style="float: right" (click)="onJoin()" color="danger" small>Join Now</button>-->\n\n\n\n  <!-- <rating ng-model="data.rating" max="data.max" ></rating>-->\n\n\n\n\n\n  <ion-segment [(ngModel)]="Community" padding>\n\n    <ion-segment-button value="posts">\n\n      Posts\n\n    </ion-segment-button>\n\n    <ion-segment-button value="details">\n\n      Details\n\n    </ion-segment-button>\n\n    <ion-segment-button value="events">\n\n      Events\n\n    </ion-segment-button>\n\n    <ion-segment-button value="members">\n\n      {{comm_member_count}} Members\n\n    </ion-segment-button>\n\n\n\n  </ion-segment>\n\n\n\n  <div [ngSwitch]="Community">\n\n    <ion-list *ngSwitchCase="\'details\'">\n\n      <ion-item>\n\n        <h4>\n\n          <ion-icon name="calendar"></ion-icon> {{comm_date | date:\'dd-MM-yy\'}} </h4>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h4>\n\n          <ion-icon name="person">Created by </ion-icon> {{created_by}} </h4>\n\n      </ion-item>\n\n\n\n      {{comm_des}}\n\n\n\n      <h4 align="center">\n\n        <rating [(ngModel)]="comm_rating" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"\n\n          starIconName="star" nullable="false" (ngModelChange)="onModelChange($event)"></rating>\n\n      </h4>\n\n      <ion-item style="padding-top:6px;" align="right">\n\n        <button item-right class="ratebtn"> {{comm_rating}}&nbsp;&nbsp;\n\n          <ion-icon name="star" small></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n\n\n\n\n      <ion-grid style="padding-top:10px;">\n\n        <ion-row>\n\n          <ion-col col-4 style="border-right:2px solid lightgrey;text-align:center;">\n\n            <h1>{{avg}}\n\n              <ion-icon name="star"></ion-icon>\n\n            </h1>\n\n            <p style="color:rgb(120, 126, 86);font-size:12px;">\n\n              {{rate}} ratings\n\n            </p>\n\n          </ion-col>\n\n          <ion-col col-8 style="text-align:center;">\n\n            <h5 no-padding class="ItemSpace">\n\n              <font size="2">\n\n                5\n\n                <ion-icon name="star" small></ion-icon>\n\n              </font>\n\n              <progress value="{{w5}}" class="progress1"></progress>\n\n              <font size="2" color="grey">{{s5}}</font>\n\n            </h5>\n\n            <h5 no-padding class="ItemSpace">\n\n              <font size="2">\n\n                4\n\n                <ion-icon name="star" small></ion-icon>\n\n              </font>\n\n              <progress value="{{w4}}" class="progress1"></progress>\n\n              <font size="2" color="grey">{{s4}}</font>\n\n            </h5>\n\n            <h5 no-padding class="ItemSpace">\n\n              <font size="2">\n\n                3\n\n                <ion-icon name="star" small></ion-icon>\n\n              </font>\n\n              <progress value="{{w3}}" class="progress1"></progress>\n\n              <font size="2" color="grey">{{s3}}</font>\n\n            </h5>\n\n            <h5 no-padding class="ItemSpace">\n\n              <font size="2">\n\n                2\n\n                <ion-icon name="star" small></ion-icon>\n\n              </font>\n\n              <progress value="{{w2}}" class="progress3"></progress>\n\n              <font size="2" color="grey">{{s2}}</font>\n\n            </h5>\n\n            <h5 no-padding class="ItemSpace">\n\n              <font size="2">\n\n                1\n\n                <ion-icon name="star" small></ion-icon>\n\n              </font>\n\n              <progress value="{{w}}" class="progress2"></progress>\n\n              <font size="2" color="grey">{{s1}}</font>\n\n            </h5>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n\n\n    </ion-list>\n\n\n\n\n\n    <ion-list *ngSwitchCase="\'posts\'">\n\n      <ion-item (click)="onAddPost()">\n\n        <ion-avatar item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/users/{{user_pic}}">\n\n        </ion-avatar>\n\n        <h2>{{user_name}}</h2>\n\n        <p>Add a new Post</p>\n\n      </ion-item>\n\n      <ion-card *ngFor="let item of comm_post_user">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/posts/{{item.post_pic}}" (click)="onPostClick(item)">\n\n        </ion-thumbnail>\n\n        <ion-card-content (click)="onPostClick(item)">\n\n          <p class="text-wrap">{{item.post_title}}</p>\n\n        </ion-card-content>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <button ion-button small *ngIf="item.post_fk_user_id==user_id" (click)="editPost(item.post_id)">\n\n                <ion-icon name="create"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <button ion-button small *ngIf="item.post_fk_user_id==user_id" (click)="deletePost(item)">\n\n                <ion-icon name="trash"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n      </ion-card>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'members\'">\n\n      <!-- <button ion-button full *ngIf="created_by==user_id" (click)="addNewMember()" ><ion-icon name="person-add"> Add a new Member</ion-icon></button>-->\n\n      <ion-list>\n\n        <ion-item *ngFor="let item of comm_comm_member" (click)="showuser(item.user_id)">\n\n          <ion-avatar item-start>\n\n            <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n\n          </ion-avatar>\n\n          <h2>{{item.user_name}}</h2>\n\n\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'events\'">\n\n      <!-- <button ion-button full *ngIf="created_by==user_id" (click)="addNewMember()" ><ion-icon name="person-add"> Add a new Member</ion-icon></button>-->\n\n      <ion-list>\n\n        <ion-segment [(ngModel)]="check_event" padding>\n\n          <ion-segment-button value="pasts">\n\n            Past\n\n          </ion-segment-button>\n\n          <ion-segment-button value="upComing">\n\n            Up Coming\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n\n\n\n\n        <div [ngSwitch]="check_event">\n\n\n\n          <ion-list *ngSwitchCase="\'pasts\'">\n\n            <!-- <button ion-button full *ngIf="created_by==user_id" (click)="addNewMember()" ><ion-icon name="person-add"> Add a new Member</ion-icon></button>-->\n\n            <ion-list>\n\n              <ion-item *ngFor="let item of comm_past_event">\n\n                <ion-avatar item-start>\n\n                  <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}">\n\n                </ion-avatar>\n\n                <h4 (click)="onPastEvent(item.event_id)">{{item.event_name}}</h4>\n\n\n\n              </ion-item>\n\n            </ion-list>\n\n\n\n          </ion-list>\n\n\n\n          <ion-list *ngSwitchCase="\'upComing\'">\n\n            <!-- <button ion-button full *ngIf="created_by==user_id" (click)="addNewMember()" ><ion-icon name="person-add"> Add a new Member</ion-icon></button>-->\n\n            <ion-list>\n\n              <ion-item *ngFor="let item of comm_upcoming_event">\n\n                <ion-avatar item-start>\n\n                  <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}">\n\n                </ion-avatar>\n\n                <h4 (click)="onUpcomingEvent(item.event_id)">{{item.event_name}}</h4>\n\n\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-list>\n\n        </div>\n\n\n\n\n\n      </ion-list>\n\n\n\n    </ion-list>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\final\lets_meet_app\src\pages\view-community\view-community.html"*/,
=======
        selector: 'page-view-community',template:/*ion-inline-start:"F:\Let's Meet\lets_meet_app\src\pages\view-community\view-community.html"*/'<!--\n\n  Generated template for the ViewCommunityPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="signcolor">\n\n    <ion-title>view-community</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <img src="https://letsmeetbackend.herokuapp.com/images/communities/{{comm_pic}}" align="center" height="150" width="250"\n\n  />\n\n  <h5>{{comm_name}}\n\n    <button ion-button style="float: right" small *ngIf="join_button" (click)="onJoin()" color="danger">Join Now</button>\n\n    <button ion-button style="float: right" small *ngIf="leave_button" (click)="doConfirm()" color="danger">Leave Community</button>\n\n  </h5>\n\n  <!--<button ion-button style="float: right" (click)="onJoin()" color="danger" small>Join Now</button>-->\n\n\n\n  <!-- <rating ng-model="data.rating" max="data.max" ></rating>-->\n\n\n\n\n\n  <ion-segment [(ngModel)]="Community" padding>\n\n    <ion-segment-button value="posts">\n\n      Posts\n\n    </ion-segment-button>\n\n    <ion-segment-button value="details">\n\n      Details\n\n    </ion-segment-button>\n\n    <ion-segment-button value="events">\n\n      Events\n\n    </ion-segment-button>\n\n    <ion-segment-button value="members">\n\n      {{comm_member_count}} Members\n\n    </ion-segment-button>\n\n\n\n  </ion-segment>\n\n\n\n  <div [ngSwitch]="Community">\n\n    <ion-list *ngSwitchCase="\'details\'">\n\n      <ion-item>\n\n        <h4>\n\n          <ion-icon name="calendar"></ion-icon> {{comm_date | date:\'dd-MM-yy\'}} </h4>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h4>\n\n          <ion-icon name="person">Created by </ion-icon> {{created_by}} </h4>\n\n      </ion-item>\n\n\n\n      {{comm_des}}\n\n\n\n      <h4 align="center">\n\n        <rating [(ngModel)]="comm_rating" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"\n\n          starIconName="star" nullable="false" (ngModelChange)="onModelChange($event)"></rating>\n\n      </h4>\n\n      <ion-item style="padding-top:6px;" align="right">\n\n        <button item-right class="ratebtn"> {{comm_rating}}&nbsp;&nbsp;\n\n          <ion-icon name="star" small></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n\n\n\n\n      <ion-grid style="padding-top:10px;">\n\n        <ion-row>\n\n          <ion-col col-4 style="border-right:2px solid lightgrey;text-align:center;">\n\n            <h1>{{avg}}\n\n              <ion-icon name="star"></ion-icon>\n\n            </h1>\n\n            <p style="color:rgb(120, 126, 86);font-size:12px;">\n\n              {{rate}} ratings\n\n            </p>\n\n          </ion-col>\n\n          <ion-col col-8 style="text-align:center;">\n\n            <h5 no-padding class="ItemSpace">\n\n              <font size="2">\n\n                5\n\n                <ion-icon name="star" small></ion-icon>\n\n              </font>\n\n              <progress value="{{w5}}" class="progress1"></progress>\n\n              <font size="2" color="grey">{{s5}}</font>\n\n            </h5>\n\n            <h5 no-padding class="ItemSpace">\n\n              <font size="2">\n\n                4\n\n                <ion-icon name="star" small></ion-icon>\n\n              </font>\n\n              <progress value="{{w4}}" class="progress1"></progress>\n\n              <font size="2" color="grey">{{s4}}</font>\n\n            </h5>\n\n            <h5 no-padding class="ItemSpace">\n\n              <font size="2">\n\n                3\n\n                <ion-icon name="star" small></ion-icon>\n\n              </font>\n\n              <progress value="{{w3}}" class="progress1"></progress>\n\n              <font size="2" color="grey">{{s3}}</font>\n\n            </h5>\n\n            <h5 no-padding class="ItemSpace">\n\n              <font size="2">\n\n                2\n\n                <ion-icon name="star" small></ion-icon>\n\n              </font>\n\n              <progress value="{{w2}}" class="progress3"></progress>\n\n              <font size="2" color="grey">{{s2}}</font>\n\n            </h5>\n\n            <h5 no-padding class="ItemSpace">\n\n              <font size="2">\n\n                1\n\n                <ion-icon name="star" small></ion-icon>\n\n              </font>\n\n              <progress value="{{w}}" class="progress2"></progress>\n\n              <font size="2" color="grey">{{s1}}</font>\n\n            </h5>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n\n\n    </ion-list>\n\n\n\n\n\n    <ion-list *ngSwitchCase="\'posts\'">\n\n      <ion-item (click)="onAddPost()">\n\n        <ion-avatar item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/users/{{user_pic}}">\n\n        </ion-avatar>\n\n        <h2>{{user_name}}</h2>\n\n        <p>Add a new Post</p>\n\n      </ion-item>\n\n      <ion-card *ngFor="let item of comm_post_user">\n\n        <ion-thumbnail item-start>\n\n          <img src="https://letsmeetbackend.herokuapp.com/images/posts/{{item.post_pic}}" (click)="onPostClick(item)">\n\n        </ion-thumbnail>\n\n        <ion-card-content (click)="onPostClick(item)">\n\n          <p class="text-wrap">{{item.post_title}}</p>\n\n        </ion-card-content>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <button ion-button small *ngIf="item.post_fk_user_id==user_id" (click)="editPost(item.post_id)">\n\n                <ion-icon name="create"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <button ion-button small *ngIf="item.post_fk_user_id==user_id" (click)="deletePost(item)">\n\n                <ion-icon name="trash"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n      </ion-card>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'members\'">\n\n      <!-- <button ion-button full *ngIf="created_by==user_id" (click)="addNewMember()" ><ion-icon name="person-add"> Add a new Member</ion-icon></button>-->\n\n      <ion-list>\n\n        <ion-item *ngFor="let item of comm_comm_member">\n\n          <ion-avatar item-start>\n\n            <img src="https://letsmeetbackend.herokuapp.com/images/users/{{item.user_pic}}">\n\n          </ion-avatar>\n\n          <h2>{{item.user_name}}</h2>\n\n\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'events\'">\n\n      <!-- <button ion-button full *ngIf="created_by==user_id" (click)="addNewMember()" ><ion-icon name="person-add"> Add a new Member</ion-icon></button>-->\n\n      <ion-list>\n\n        <ion-segment [(ngModel)]="check_event" padding>\n\n          <ion-segment-button value="pasts">\n\n            Past\n\n          </ion-segment-button>\n\n          <ion-segment-button value="upComing">\n\n            Up Coming\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n\n\n\n\n        <div [ngSwitch]="check_event">\n\n\n\n          <ion-list *ngSwitchCase="\'pasts\'">\n\n            <!-- <button ion-button full *ngIf="created_by==user_id" (click)="addNewMember()" ><ion-icon name="person-add"> Add a new Member</ion-icon></button>-->\n\n            <ion-list>\n\n              <ion-item *ngFor="let item of comm_past_event" (click)="onPastEvent(comm_id)">\n\n                <ion-avatar item-start>\n\n                  <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}">\n\n                </ion-avatar>\n\n                <h4>{{item.event_name}}</h4>\n\n\n\n              </ion-item>\n\n            </ion-list>\n\n\n\n          </ion-list>\n\n\n\n          <ion-list *ngSwitchCase="\'upComing\'">\n\n            <!-- <button ion-button full *ngIf="created_by==user_id" (click)="addNewMember()" ><ion-icon name="person-add"> Add a new Member</ion-icon></button>-->\n\n            <ion-list>\n\n              <ion-item *ngFor="let item of comm_upcoming_event" (click)="onUpcomingEvent(comm_id)">\n\n                <ion-avatar item-start>\n\n                  <img src="https://letsmeetbackend.herokuapp.com/images/events/{{item.event_pic}}">\n\n                </ion-avatar>\n\n                <h4>{{item.event_name}}</h4>\n\n\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-list>\n\n        </div>\n\n\n\n\n\n      </ion-list>\n\n\n\n    </ion-list>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Let's Meet\lets_meet_app\src\pages\view-community\view-community.html"*/,
>>>>>>> 5b80d79608de99c5a23b28bb3d3eb94c53d8630a
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_post_db_post_db__["a" /* PostDbProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_community_member_db_community_member_db__["a" /* CommunityMemberDbProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_community_comm_member_community_comm_member__["a" /* CommunityCommMemberProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_community_db_community_db__["a" /* ComminityDbTsProvider */],
        __WEBPACK_IMPORTED_MODULE_8__providers_loginpro_loginpro__["a" /* LoginproProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_13__providers_rating_db_rating_db__["a" /* RatingDbProvider */],
        __WEBPACK_IMPORTED_MODULE_14__providers_event_community_db_event_community_db__["a" /* EventCommunityDbProvider */]])
], ViewCommunityPage);

//# sourceMappingURL=view-community.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComminityDbTsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Community_User_Class } from "../../shared/community_user_class";


/*
  Generated class for the ComminityDbTsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ComminityDbTsProvider = (function () {
    function ComminityDbTsProvider(http) {
        this.http = http;
        this.url = "https://letsmeetbackend.herokuapp.com/community/";
        this.url1 = "https://letsmeetbackend.herokuapp.com/comm_post/";
        this.url2 = "https://letsmeetbackend.herokuapp.com/checkMember/";
        this.url4 = "https://letsmeetbackend.herokuapp.com/topcommunity/";
        this.community_member = {
            fk_user_id: '',
            fk_comm_id: ''
        };
        console.log('Hello ComminityDbTsProvider Provider');
    }
    ComminityDbTsProvider.prototype.getAllCommunities = function () {
        return this.http.get(this.url);
    };
    ComminityDbTsProvider.prototype.getCommunityById = function (id) {
        return this.http.get(this.url + id);
    };
    /* addCommuniy(item: Community_Class) {
  
      let body = JSON.stringify(item);
      //  let h = new Headers({ 'Content-type': 'application/json' });
      // let rs = new RequestOptions({ headers: h });
      return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
    } */
    ComminityDbTsProvider.prototype.addCommunity = function (fd) {
        return this.http.post(this.url, fd);
    };
    ComminityDbTsProvider.prototype.deleteCommunity = function (item) {
        return this.http.post(this.url + item.comm_id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    ComminityDbTsProvider.prototype.editCommunity = function (item) {
        var body = JSON.stringify(item);
        return this.http.post(this.url + item.comm_id, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    ComminityDbTsProvider.prototype.getPostByCommunityId = function (id) {
        return this.http.get(this.url1 + id);
    };
    ComminityDbTsProvider.prototype.checkCommMember = function (user_id, comm_id) {
        this.community_member.fk_user_id = user_id;
        this.community_member.fk_comm_id = comm_id;
        var body = JSON.stringify(this.community_member);
        return this.http.post(this.url2, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    ComminityDbTsProvider.prototype.gettopcommunity = function () {
        return this.http.get(this.url4);
    };
    return ComminityDbTsProvider;
}());
ComminityDbTsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], ComminityDbTsProvider);

//# sourceMappingURL=community-db.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityMemberDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CommunityMemberDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommunityMemberDbProvider = (function () {
    function CommunityMemberDbProvider(http) {
        this.http = http;
        this.url = "https://letsmeetbackend.herokuapp.com/comm_member/";
        this.urlcommbyuser = "https://letsmeetbackend.herokuapp.com/commbyuser/";
        this.url1 = "https://letsmeetbackend.herokuapp.com/membercount/";
        this.url2 = "https://letsmeetbackend.herokuapp.com/memberList/";
        console.log('Hello CommunityMemberDbProvider Provider');
    }
    CommunityMemberDbProvider.prototype.getAllMembersByCommunityId = function (id) {
        return this.http.get(this.url + id);
    };
    CommunityMemberDbProvider.prototype.getcommunitiesofuser = function (id) {
        return this.http.get(this.urlcommbyuser + id);
    };
    CommunityMemberDbProvider.prototype.addCommunityMember = function (item) {
        var body = JSON.stringify(item);
        //  let h = new Headers({ 'Content-type': 'application/json' });
        // let rs = new RequestOptions({ headers: h });
        return this.http.post(this.url, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    CommunityMemberDbProvider.prototype.deleteMember = function (id) {
        return this.http.delete(this.url + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    CommunityMemberDbProvider.prototype.memberCount = function (id) {
        return this.http.get(this.url1 + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    CommunityMemberDbProvider.prototype.getMemberListToAdd = function (comm_id, user_id) {
        return this.http.get(this.url2 + comm_id + "/" + user_id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    return CommunityMemberDbProvider;
}());
CommunityMemberDbProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], CommunityMemberDbProvider);

//# sourceMappingURL=community-member-db.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RsvpDbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RsvpDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RsvpDbProvider = (function () {
    function RsvpDbProvider(http) {
        this.http = http;
        this.url = "https://letsmeetbackend.herokuapp.com/rsvp/";
        this.url1 = "https://letsmeetbackend.herokuapp.com/rsvpabc/";
        this.url2 = "https://letsmeetbackend.herokuapp.com/rsvpCount/";
        this.rsvp = {
            rsvp_fk_user_id: '',
            fk_event_id: ''
        };
        console.log('Hello RsvpDbProvider Provider');
    }
    RsvpDbProvider.prototype.getAllRSVP = function () {
        return this.http.get(this.url);
    };
    RsvpDbProvider.prototype.checkRSVPOfEvent = function (user_id, event_id) {
        console.log("rsvp pro");
        this.rsvp.rsvp_fk_user_id = user_id;
        this.rsvp.fk_event_id = event_id;
        var body = JSON.stringify(this.rsvp);
        console.log(this.rsvp);
        return this.http.post(this.url1, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    RsvpDbProvider.prototype.addRSVP = function (rsvp) {
        var body = JSON.stringify(rsvp);
        return this.http.post(this.url, body, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    RsvpDbProvider.prototype.deleteRSVP = function (id) {
        //alert(id);
        return this.http.delete(this.url + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json') });
    };
    RsvpDbProvider.prototype.countRSVP = function (id) {
        return this.http.get(this.url2 + id);
    };
    return RsvpDbProvider;
}());
RsvpDbProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], RsvpDbProvider);

//# sourceMappingURL=rsvp-db.js.map

/***/ })

},[253]);
//# sourceMappingURL=main.js.map