import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GeolocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeolocationProvider {

  url: string = "https://maps.googleapis.com/maps/api/geocode/json?address=";

  constructor(public http: HttpClient) {
    console.log('Hello GeolocationProvider Provider');
  }

  /*   getCurrentPosition(address: string) {
      console.log(this.url + address + "&key=AIzaSyC_yzslPZ6nIkW6225NHfNYlnbOBeZGFTk");
      return this.http.get(this.url + address + "&key=AIzaSyC_yzslPZ6nIkW6225NHfNYlnbOBeZGFTk");
    } */

  getCurrentPosition(address: string) {
    console.log(this.url + address + "&key=AIzaSyCOT-IW9-43QEMmHrheojSCt4Zr64HrnS4");
    return this.http.get(this.url + address + "&key=AIzaSyCOT-IW9-43QEMmHrheojSCt4Zr64HrnS4");
  }
}
