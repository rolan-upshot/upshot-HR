import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private server:string = "http://localhost";

  constructor( private httpClient:HttpClient) { }

  login():void {
    var url:string = this.server + "/api/test-login";
    this.httpClient.get(url).subscribe(data=>{
      console.log(data);
    });

  }

}
