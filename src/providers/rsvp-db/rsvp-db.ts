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

  url: string = "http://localhost:3000/rsvp/";

  constructor(public http: HttpClient) {
    console.log('Hello RsvpDbProvider Provider');
  }

  getAllRSVP() {

    return this.http.get(this.url);
  }

  addRSVP(rsvp: RSVP_Class) {
    let body = JSON.stringify(rsvp);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  deleteRSVP(id) {
    return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
}
