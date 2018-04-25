import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { RSVP_Class } from "../../shared/rsvp_class";

/*
  Generated class for the RsvpDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RsvpDbProvider {

  url: string = "https://letsmeetbackend.herokuapp.com/rsvp/";
  url1: string = "https://letsmeetbackend.herokuapp.com/rsvpabc/";
  url2: string = "https://letsmeetbackend.herokuapp.com/rsvpCount/";

  constructor(public http: HttpClient) {
    console.log('Hello RsvpDbProvider Provider');
  }

  getAllRSVP() {
    return this.http.get(this.url);
  }

  rsvp: { rsvp_fk_user_id: string, fk_event_id: string } = {
    rsvp_fk_user_id: '',
    fk_event_id: ''
  };

  checkRSVPOfEvent(user_id, event_id) {
    console.log("rsvp pro");
    this.rsvp.rsvp_fk_user_id = user_id;
    this.rsvp.fk_event_id = event_id;
    let body = JSON.stringify(this.rsvp);
    console.log(this.rsvp);
    return this.http.post(this.url1, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  addRSVP(rsvp: RSVP_Class) {
    let body = JSON.stringify(rsvp);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  deleteRSVP(id: number) {
    //alert(id);
    return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  countRSVP(id) {
    return this.http.get(this.url2 + id);
  }
}
