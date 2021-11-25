import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private server:string = "http://localhost";

  constructor( private httpClient:HttpClient) { }

  login( email: string, password:string):void {
    var url:string = this.server + "/api/test-login";
    var data ={
      "email": email,
      "password": password
    }
    this.httpClient.post(url , data).subscribe(data=>{
      console.log(data);
    });

  }

}
