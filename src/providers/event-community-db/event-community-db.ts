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
  url2: string = "https://letsmeetbackend.herokuapp.com/comm_past_event/";
  url3: string = "https://letsmeetbackend.herokuapp.com/comm_upcoming_event/";

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

  getCommunityByPastEvent(id) {
    return this.http.get(this.url2 + id);
  }

  getCommunityByUpcomingEvent(id) {
    return this.http.get(this.url3 + id);
  }
}
