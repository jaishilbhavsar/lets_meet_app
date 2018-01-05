import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Comment_Class } from "../../shared/comment_class";
import { Comment_User_Post } from "../../shared/comment_user_post";

/*
  Generated class for the CommentDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommentDbProvider {

  url: string = "http://localhost:3000/com_post/";

  constructor(public http: HttpClient) {
    console.log('Hello CommentDbProvider Provider');
  }

  getAllCommentsByPostId(id) {
    return this.http.get<Comment_User_Post[]>(this.url + id);
  }
}
