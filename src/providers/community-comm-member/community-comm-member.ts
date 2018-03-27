import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Community_comm_member } from "../../shared/community_comm_member_class";
import 'rxjs/add/operator/map';

/*
  Generated class for the CommunityCommMemberProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommunityCommMemberProvider {

    url:string="https://letsmeetbackend.herokuapp.com/comm_mem_id/";
    url1:string="https://letsmeetbackend.herokuapp.com/allmember/";

  constructor(public http: HttpClient) {
    console.log('Hello CommunityCommMemberProvider Provider');
  }

    getAllMembersByCommunityId(id){
      return this.http.get(this.url + id);
    }

    getAllCommunityAndMembers(){
      return this.http.get(this.url);
    }

    getAllMembers(id){
      return this.http.get(this.url1 + id);
    }
}
