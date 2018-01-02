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

  url:string="http://localhost:3000/comm_member/";

  constructor(public http: HttpClient) {
    console.log('Hello CommunityMemberDbProvider Provider');
  }

  getAllMembersByCommunityId(id) {
    return this.http.get(this.url + id);
  }
  
  addCommunityMember(item: Comm_member_class) {

    let body = JSON.stringify(item);
    //  let h = new Headers({ 'Content-type': 'application/json' });
    // let rs = new RequestOptions({ headers: h });
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

}
