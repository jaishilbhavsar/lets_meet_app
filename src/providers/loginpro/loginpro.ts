import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
//import { CommentStmt } from '@angular/compiler/src/output/output_ast';
import { email_class } from '../../shared/email_class';

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
  useradd: { user_id: string, user_name: string, user_pass: string, user_pic: string, gender: string, user_mob_no: string, user_bdate: Date } = {
    user_id: '',
    user_name: '',
    user_pass: '',
    user_pic: '',
    gender: '',
    user_mob_no: '',
    user_bdate: null,
  };
  chpass:{user_id:string,user_pass:string}={
    user_id:'',
    user_pass:''
  };
  userupdate: { user_id: string, user_name: string, user_pic: string, gender: string, user_mob_no: string, user_bdate: Date } = {
    user_id: '',
    user_name: '',
    user_pic: '',
    gender: '',
    user_mob_no: '',
    user_bdate: null,
  };
  constructor(public storage: Storage, public http: HttpClient) {
    console.log('Hello LoginproProvider Provider');
  }
  url: string = "https://letsmeetbackend.herokuapp.com/login";
  urlsignup: string = "https://letsmeetbackend.herokuapp.com/user/";

  doLogin(eid, pass) {
    //let header = new Headers({ 'Content-Type': 'application/json' });
    //let ro = new RequestOptions({ headers: header });
    this.account.user_id = eid;
    this.account.user_pass = pass;
    let body = JSON.stringify(this.account);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  addUser(eid, uname, pass, image, gender, mobile, myDate) {
    //let header = new Headers({ 'Content-Type': 'application/json' });
    // let ro = new RequestOptions({ headers: header });
    this.useradd.user_id = eid;
    this.useradd.user_name = uname;
    this.useradd.user_pass = pass;
    this.useradd.user_pic = image;
    this.useradd.gender = gender;
    this.useradd.user_mob_no = mobile;
    this.useradd.user_bdate = myDate;
    let body = JSON.stringify(this.useradd);
    return this.http.post(this.urlsignup, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  updateUser(id, uname, image, gender, mobile, mydate) {
   // let header = new Headers({ 'Content-Type': 'application/json' });
    //let ro = new RequestOptions({ headers: header });
    this.userupdate.user_id = id;
    console.log('Login pro ma user update');
    console.log(id);
    console.log(this.userupdate.user_id);
    this.userupdate.user_name = uname;
    this.userupdate.user_pic = image;
    this.userupdate.gender = gender;
    this.userupdate.user_mob_no = mobile;
    this.userupdate.user_bdate = mydate;
    let body = JSON.stringify(this.userupdate);
    // alert(this.userupdate.user_id);
    return this.http.put(this.urlsignup, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  ed: string = '';
  urluser: string = "https://letsmeetbackend.herokuapp.com/user/";
  follow_user: string = "https://letsmeetbackend.herokuapp.com/follow_user/";
  set_url() {
    //this.storage.get('uid').then((val) => {this.ed=this.urluser+val});
    /*this.storage.get('uid').then((val) => {this.ed=val});
    console.log("ed aavse have");
    console.log(this.ed);
    this.urluser="http://localhost:3000/user/"+this.ed;
    console.log(this.urluser);*/
    //return this.http.get(this.url + uid)
  }
  getAllUser() {
    return this.http.get(this.urlsignup);
  }
  getUser(id: string) {
    this.urluser.concat(id);
    console.log(id);
    console.log(this.urluser);
    console.log(this.urlsignup + id);
    return this.http.get(this.urlsignup + id);
    //alert(this.ed);
    //return this.http.get(this.ed);
  }
  urlmail: string = "https://letsmeetbackend.herokuapp.com/demomail/"
  sendMail(demo: email_class) {
    let body = JSON.stringify(demo);
    console.log(demo.name);
    console.log(demo.message);
    console.log(demo.subject);
    return this.http.post(this.urlmail, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  urlchangepass:string="https://localhost:3000/changepassword/";
  urlfollowers: string = "https://letsmeetbackend.herokuapp.com/follower/";
  urlfollowing: string = "https://letsmeetbackend.herokuapp.com/following/";
  urlfollowuser: string = "https://letsmeetbackend.herokuapp.com/follow_user/";
  urlfollowingwhom: string = "https://letsmeetbackend.herokuapp.com/followwhom/";
  getFollowingUser(uid) {
    return this.http.get(this.urlfollowuser + uid);
  }
  getFollowingwhom(uid) {
    return this.http.get(this.urlfollowingwhom + uid);
  }
  getFollowers(uid) {
    return this.http.get(this.urlfollowers + uid);
  }
  getFollowing(uid) {
    return this.http.get(this.urlfollowing + uid);
  }
  change(uid,newpass)
  {
      this.chpass.user_id=uid;
      this.chpass.user_pass=newpass;
    let body=JSON.stringify(this.chpass);
    return this.http.post(this.urlchangepass,body,{ headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
}