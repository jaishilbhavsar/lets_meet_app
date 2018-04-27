import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Post_Class, Post_Update_Class } from '../../shared/post_class';


/*
  Generated class for the PostDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostDbProvider {

  url: string = "https://letsmeetbackend.herokuapp.com/post/";
  url1: string = "https://letsmeetbackend.herokuapp.com/deletePost/";
  url2: string = 'https://letsmeetbackend.herokuapp.com/updatePostOnly/';

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

  editPostOnly(post: Post_Update_Class) {
    let body = JSON.stringify(post);
    return this.http.put(this.url2, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  editPost(fd: FormData) {
    return this.http.put(this.url, fd);
  }

  deletePost(post) {
    let body = JSON.stringify(post);
    return this.http.post(this.url1, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }


}
