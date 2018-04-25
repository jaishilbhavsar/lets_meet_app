import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from "@angular/common/http";

/*
  Generated class for the EventCommunityDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventCommunityDbProvider {

  url: string = "https://letsmeetbackend.herokuapp.com/eventCommunity/";
  url1: string = "https://letsmeetbackend.herokuapp.com/eventNotReg/";

  constructor(public http: HttpClient) {
    console.log('Hello EventCommunityDbProvider Provider');
  }

  getCommunityByEventId(id) {
    return this.http.get(this.url + id);
  }

  getEventsNotReg(user_id) {
    return this.http.get(this.url1 + user_id);
  }

  getAllEventsAndCommunities() {
    return this.http.get(this.url);
  }

}
