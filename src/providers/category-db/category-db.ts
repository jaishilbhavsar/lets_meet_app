import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
<<<<<<< HEAD
import { Category_Class } from "../../shared/category_class";
=======
import { Category_class } from "../../shared/category_class";
>>>>>>> 7470f0e83491969f32d0d17c7f4133e1c6df39e5

/*
  Generated class for the CategoryDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryDbProvider {

<<<<<<< HEAD
  url: string = 'https://letsmeetbackend.herokuapp.com/category/';
=======
  constructor(public http: HttpClient) {
    console.log('Hello CategoryDbProvider Provider');
  }

  url: string = "https://letsmeetbackend.herokuapp.com/category/";


  getAllCommunityByCategory(id) {
    return this.http.get(this.url + id);
  }

  /*   url: string = 'https://letsmeetbackend.herokuapp.com/category/'; */
>>>>>>> 7470f0e83491969f32d0d17c7f4133e1c6df39e5

  /* constructor(public http: HttpClient) { } */

  getAllCategories() {
    return this.http.get(this.url);
  }

  getCategoryById(id) {
    return this.http.get(this.url + id);
  }


}
