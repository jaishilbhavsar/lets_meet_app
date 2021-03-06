import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Category_Class } from "../../shared/category_class";

/*
  Generated class for the CategoryDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryDbProvider {

  url: string = 'https://letsmeetbackend.herokuapp.com/category/';
  constructor(public http: HttpClient) {
    console.log('Hello CategoryDbProvider Provider');
  }


  getAllCommunityByCategory(id) {
    return this.http.get(this.url + id);
  }

  /*   url: string = 'https://letsmeetbackend.herokuapp.com/category/'; */

  /* constructor(public http: HttpClient) { } */

  getAllCategories() {
    return this.http.get(this.url);
  }

  getCategoryById(id) {
    return this.http.get(this.url + id);
  }


}
