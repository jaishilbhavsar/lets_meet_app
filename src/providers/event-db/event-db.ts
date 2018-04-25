import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Events_Class } from "../../shared/event_class";

import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { RSVP_Class } from '../../shared/rsvp_class';



/*
  Generated class for the EventDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventDbProvider {

  url: string = "https://letsmeetbackend.herokuapp.com/event/";
  url1: string = "https://letsmeetbackend.herokuapp.com/comingEvent/";
  url2: string = "https://letsmeetbackend.herokuapp.com/event_reg/";
  url3: string = "https://letsmeetbackend.herokuapp.com/eventNotReg/";
  url4: string = "https://letsmeetbackend.herokuapp.com/upcEvnByUser/";
  url5: string = "https://letsmeetbackend.herokuapp.com/pastEvnByUser/";

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
    return this.http.post(this.url, fd);
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

  getNotRegisteredEventsofUser(id) {
    return this.http.get(this.url3 + id);
  }

  getUpcEventRegUser(id) {
    return this.http.get(this.url4 + id);
  }

  getPastEventReg(id) {
    return this.http.get(this.url5 + id);
  }
}
