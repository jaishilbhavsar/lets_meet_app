import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginproProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginproProvider {
  account: { user_id: string, user_pass: string } = {
    user_id: '',
    user_pass: ''
  };
  useradd: { user_id: string,user_name: string,user_pass: string,user_pic: string,gender: string,user_mob_no: string,user_bdate: Date } = {
    user_id: '',
    user_name:'',
    user_pass: '',
    user_pic:'',
    gender:'',
    user_mob_no:'',
    user_bdate:null,
  };
  constructor(public http: Http) {
    console.log('Hello LoginproProvider Provider');
  }
  url:string="http://localhost:3000/login";
  urlsignup:string="http://localhost:3000/user";
  doLogin(eid,pass)
  {
    let header=new Headers({'Content-Type':'application/json'});
    let ro=new RequestOptions({headers:header});
    this.account.user_id=eid;
    this.account.user_pass=pass;
    let body=JSON.stringify(this.account);
    return this.http.post(this.url,body,ro).map((res:Response)=>res.json()); 
  }
  addUser(eid,uname,pass,image,gender,mobile,myDate)
  {
    let header=new Headers({'Content-Type':'application/json'});
    let ro=new RequestOptions({headers:header});
    this.useradd.user_id=eid;
    this.useradd.user_name=uname;
    this.useradd.user_pass=pass;
    this.useradd.user_pic=image;
    this.useradd.gender=gender;
    
    this.useradd.user_mob_no=mobile;
    this.useradd.user_bdate=myDate;
    let body=JSON.stringify(this.useradd);
    return this.http.post(this.urlsignup,body,ro).map((res:Response)=>res.json());
  }
}