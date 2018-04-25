import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Like_Class } from "../../shared/like_class";

/*
  Generated class for the LikeDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LikeDbProvider {

  url: string = "https://letsmeetbackend.herokuapp.com/likebypost/";
  url1: string = "https://letsmeetbackend.herokuapp.com/like/";



  constructor(public http: HttpClient) {
    console.log('Hello LikeDbProvider Provider');
  }

  getlikesByPosts(id) {
    return this.http.get(this.url + id);
  }

  /*likes: { fk_post_id: number, fk_user_id: string } = {
    fk_post_id='',
    fk_user_id=''
  };*/

  likes: { like_fk_post_id: string, like_fk_user_id: string } = {
    like_fk_post_id: '',
    like_fk_user_id: ''
  };

  getLikeIdByPostAndUser(like_fk_post_id, like_fk_user_id) {
    this.likes.like_fk_post_id = like_fk_post_id;
    this.likes.like_fk_user_id = like_fk_user_id;
    let body = JSON.stringify(this.likes);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  addLikes(lk: Like_Class) {
    let body = JSON.stringify(lk);
    return this.http.post(this.url1, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  deleteLike(id: number) {
    return this.http.delete(this.url1 + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }


}
