import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Rate_Class } from "../../shared/rating_tbl_class";
import 'rxjs/add/operator/map';

/*
  Generated class for the RatingDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RatingDbProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RatingDbProvider Provider');
  }

  url: string = "https://letsmeetbackend.herokuapp.com/rating/";
  url1: string = "https://letsmeetbackend.herokuapp.com/ratingcount/";
  url2: string = "https://letsmeetbackend.herokuapp.com/ratecount/";
  url3: string = "https://letsmeetbackend.herokuapp.com/avgcount/";


  getRatingById(id) {
    return this.http.get(this.url + id);
  }

  addRating(item: Rate_Class) {

    let body = JSON.stringify(item);
    //  let h = new Headers({ 'Content-type': 'application/json' });
    // let rs = new RequestOptions({ headers: h });
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  deleteRating(item: Rate_Class) {

    return this.http.post(this.url + item.rate_id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });

  }
  editRating(item: Rate_Class) {

    let body = JSON.stringify(item);
    return this.http.post(this.url + item.rate_id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });

  }

  getRateCount(rate_value, id) {
    return this.http.get(this.url2 + rate_value + "&" + id);
  }

  getAvgRating(id) {
    return this.http.get(this.url3 + id);
  }

  getCountRating(id) {
     return this.http.get(this.url1 + id);
  }

}
