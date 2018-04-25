import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Comm_member_class } from "../../shared/comm_member_class";

import 'rxjs/add/operator/map';

/*
  Generated class for the CommunityMemberDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommunityMemberDbProvider {

  url: string = "https://letsmeetbackend.herokuapp.com/comm_member/";
  urlcommbyuser: string = "https://letsmeetbackend.herokuapp.com/commbyuser/";
  url1: string = "https://letsmeetbackend.herokuapp.com/membercount/";
  url2: string = "https://letsmeetbackend.herokuapp.com/memberList/";

  constructor(public http: HttpClient) {
    console.log('Hello CommunityMemberDbProvider Provider');
  }

  getAllMembersByCommunityId(id) {
    return this.http.get(this.url + id);
  }

  getcommunitiesofuser(id)
  {
    return this.http.get(this.urlcommbyuser+id);
  }
  addCommunityMember(item: Comm_member_class) {

    let body = JSON.stringify(item);
    //  let h = new Headers({ 'Content-type': 'application/json' });
    // let rs = new RequestOptions({ headers: h });
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  deleteMember(id) {
    return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });

  }

  memberCount(id) {
    return this.http.get(this.url1 + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });

  }

  getMemberListToAdd(comm_id, user_id) {
    return this.http.get(this.url2 + comm_id + "/" + user_id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

}
