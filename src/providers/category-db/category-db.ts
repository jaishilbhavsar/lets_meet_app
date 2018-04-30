import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
<<<<<<< HEAD
import { Category_class } from "../../shared/category_class";
=======
>>>>>>> 41551c0d1547f8a58104539fbe1a3ae26e0e0df7

/*
  Generated class for the CategoryDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryDbProvider {

<<<<<<< HEAD
  constructor(public http: HttpClient) {
    console.log('Hello CategoryDbProvider Provider');
  }

  url: string = "https://letsmeetbackend.herokuapp.com/category/";

  
  getAllCommunityByCategory(id) {
    return this.http.get(this.url+id);
  }

=======
  url: string = 'https://letsmeetbackend.herokuapp.com/category/';

  constructor(public http: HttpClient) { }

  getAllCategories() {
    return this.http.get(this.url);
  }

  getCategoryById(id) {
    return this.http.get(this.url + id);
  }


>>>>>>> 41551c0d1547f8a58104539fbe1a3ae26e0e0df7
}
