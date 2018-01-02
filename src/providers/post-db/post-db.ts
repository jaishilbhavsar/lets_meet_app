import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the PostDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostDbProvider {

  url: string = "http://localhost:3000/post/"

  constructor(public http: HttpClient) {
    console.log('Hello PostDbProvider Provider');
  }

  getPostById(id: number) {
    return this.http.get(this.url + id);
  }

  addPost(post) {
    let body = JSON.stringify(post);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

}