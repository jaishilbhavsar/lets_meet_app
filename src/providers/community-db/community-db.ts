import { Injectable } from '@angular/core';
import { Community_Class } from "../../pages/settings/community_class";
import { Community_User_Class } from "../../shared/community_user_class";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';

/*
  Generated class for the ComminityDbTsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ComminityDbTsProvider {

  url: string = "http://localhost:3000/community/";
  url1: string = "http://localhost:3000/comm_post/";
  url2: string = "http://localhost:3000/checkMember/";
  url4: string = "http://localhost:3000/topcommunity/";

  community_member: { fk_user_id: string, fk_comm_id: string } = {
    fk_user_id: '',
    fk_comm_id: ''
  }

  constructor(public http: HttpClient) {
    console.log('Hello ComminityDbTsProvider Provider');
  }

  getAllCommunities() {
    return this.http.get(this.url);
  }

  getCommunityById(id) {
    return this.http.get(this.url + id);
  }

  addCommuniy(item: Community_Class) {

    let body = JSON.stringify(item);
    //  let h = new Headers({ 'Content-type': 'application/json' });
    // let rs = new RequestOptions({ headers: h });
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  deleteCommunity(item: Community_Class) {

    return this.http.post(this.url + item.comm_id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });

  }
  editCommunity(item: Community_Class) {

    let body = JSON.stringify(item);
    return this.http.post(this.url + item.comm_id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });

  }

  getPostByCommunityId(id) {
    return this.http.get(this.url1 + id);
  }

  checkCommMember(user_id, comm_id) {
    this.community_member.fk_user_id = user_id;
    this.community_member.fk_comm_id = comm_id;
    let body = JSON.stringify(this.community_member);
    return this.http.post(this.url2, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  gettopcommunity() {
    return this.http.get(this.url4);
    
  }

}
