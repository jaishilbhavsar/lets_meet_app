import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Event_Community_Class } from "../../shared/event_community_class";

/*
  Generated class for the EventCommunityDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventCommunityDbProvider {

  url: string = "http://localhost:3000/eventCommunity/";

  constructor(public http: HttpClient) {
    console.log('Hello EventCommunityDbProvider Provider');
  }

  getCommunityByEventId(id) {
    return this.http.get(this.url + id);
  }

}
