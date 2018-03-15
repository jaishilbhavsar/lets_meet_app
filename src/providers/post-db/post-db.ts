import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Post_Class } from '../../shared/post_class';


/*
  Generated class for the PostDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostDbProvider {

  url: string = "http://localhost:3000/post/";
  url1: string = "http://localhost:3000/deletePost/";

  constructor(public http: HttpClient) {
    console.log('Hello PostDbProvider Provider');
  }

  getPostById(id: number) {
    return this.http.get(this.url + id);
  }

  /*addPost(post: Post_Class) {
    let body = JSON.stringify(post);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }*/

  addPost(fd: FormData) {
    return this.http.post(this.url, fd);
  }

  editPost(post: Post_Class) {
    let body = JSON.stringify(post);
    return this.http.put(this.url + post.post_id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  deletePost(post) {
    let body = JSON.stringify(post);
    return this.http.post(this.url1, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

}
