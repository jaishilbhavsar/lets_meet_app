import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Events_Class } from '../../shared/event_class';
import 'rxjs/add/operator/map';

/*
  Generated class for the Demo1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Demo1Provider {

  url: string = "http://localhost:3000/event/";
  constructor(public http: HttpClient) {
    console.log('Hello Demo1Provider Provider');
  }

  getAllEvents(){
    
    let body=null;
  // return  this.http.get<Events>(this.url);
   this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
}
