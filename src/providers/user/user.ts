import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Api } from '../api/api';

@Injectable()
export class User {
  urluser: string = 'https://letsmeetbackend.herokuapp.com/user/';
  urlsignup: string = 'http://localhost:3000/user/';
  urlUpdate: string = 'https://letsmeetbackend.herokuapp.com/updateUserOnly';

  constructor(public http: HttpClient) { }


  editUser(fd: FormData) {
    console.log(fd);
    return this.http.put(this.urluser, fd);
  }

  editUserOnly(item) {
    console.log(item);
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(item);
    return this.http.put(this.urlUpdate, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
}