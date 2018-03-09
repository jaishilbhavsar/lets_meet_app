import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Events_Class } from "../../shared/event_class";
import { Jsonp } from '@angular/http/src/http';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RSVP_Class } from '../../shared/rsvp_class';



/*
  Generated class for the EventDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventDbProvider {

  url: string = "http://localhost:3000/event/";
  url1: string = "http://localhost:3000/comingEvent/";
  url2: string = "http://localhost:3000/event_reg/";

  constructor(public http: HttpClient) {
    console.log('Hello EventDbProvider Provider');
  }

  /*getAllEvents() {
    return this.http.get(this.url);
  }*/

  getAllEvents() {
    return this.http.get(this.url1);
  }

  /*addEvent(evn: Events_Class) {
    let body = JSON.stringify(evn);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }*/
  addEvent(fd: FormData) {
    return this.http.post(this.url, fd, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  editEvent(evn: Events_Class) {
    let body = JSON.stringify(evn);
    return this.http.put(this.url + evn.event_id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  deleteEvent(evn: Events_Class) {
    return this.http.delete(this.url + evn.event_id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  getEventById(id) {
    return this.http.get(this.url + id);
  }

  getRegisteredEventsofUser(id) {
    console.log(id);
    return this.http.get(this.url2 + id);
  }

}
