import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Community_Class } from "../../pages/settings/community_class";
import 'rxjs/add/operator/map';

/*
  Generated class for the ComminityDbTsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ComminityDbTsProvider {

    url:string="http://localhost:3000/community/";
  constructor(public http: Http) {
    console.log('Hello ComminityDbTsProvider Provider');
  }

  getAllCommunities()
  {
      return this.http.get(this.url).map(
        (res:Response)=>res.json()
      );
  }

}
