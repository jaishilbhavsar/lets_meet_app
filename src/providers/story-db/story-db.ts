import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Story_class } from "../../shared/stoty_class";
import 'rxjs/add/operator/map';

/*
  Generated class for the StoryDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoryDbProvider {

  url: string = "http://localhost:3000/story/";

  constructor(public http: HttpClient) {
    console.log('Hello StoryDbProvider Provider');
  }

  getAllStories() {
    return this.http.get(this.url);
  }
  getStoriesById(id) {
    return this.http.get(this.url + id);
  }
}
