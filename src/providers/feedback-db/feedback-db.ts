import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Feedback_Class } from "../../shared/feedback_class";
import { Feedback_Event_User_Class } from "../../shared/feedback_event_user_class";

/*
  Generated class for the FeedbackDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FeedbackDbProvider {

  url1: string = "http://localhost:3000/feedback/";
  url2: string = "http://localhost:3000/feedbackByEvent/";

  constructor(public http: HttpClient) {
    console.log('Hello FeedbackDbProvider Provider');
  }

  getFeedbacksByEvent(id) {
    return this.http.get<Feedback_Event_User_Class[]>(this.url2 + id);
  }

  addFeedback(feed: Feedback_Class) {
    let body = JSON.stringify(feed);
    return this.http.post(this.url1, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  deleteFeedback(id) {
    return this.http.delete(this.url1 + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  editFeedback(feed: Feedback_Class) {
    let body = JSON.stringify(feed);
    return this.http.put(this.url1 + feed.feed_id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  getFeedbackById(id) {
    return this.http.get(this.url1);
  }
}
