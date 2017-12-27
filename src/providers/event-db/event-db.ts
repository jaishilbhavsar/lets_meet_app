import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Events_Class } from "../../shared/event_class";
import { Jsonp } from '@angular/http/src/http';

/*
  Generated class for the EventDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventDbProvider {

  url: string = "http://localhost:3000/event/";

  constructor(public http: Http) {
    console.log('Hello EventDbProvider Provider');
  }

  getAllEvents() {
    return this.http.get(this.url).map((res: Response) => res.json());
  }

  addEvent(evn) {
    let body = JSON.stringify(evn);
    let h = new Headers({ 'Content-Type': 'application/json' });
    let rs = new RequestOptions({ headers: h });
    return this.http.post(this.url, body, rs).map((res: Response) => res.json());
  }

  editEvent(evn) {
    let body = JSON.stringify(evn);
    let h = new Headers({ 'Content-Type': 'application/json' });
    let rs = new RequestOptions({ headers: h });
    return this.http.put(this.url + evn.event_id, body, rs).map((res: Response) => res.json());
  }

  deleteEvent(evn) {
    let h = new Headers({ 'Content-Type': 'application/json' });
    let rs = new RequestOptions({ headers: h });
    return this.http.delete(this.url + evn.event_id, rs).map((res: Response) => res.json());
  }

}
