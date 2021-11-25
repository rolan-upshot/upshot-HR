import { Component, OnInit, Input } from '@angular/core';
import{ LoginService } from '../login.service';

@Component({
  selector: 'app-upshot-login',
  templateUrl: './upshot-login.component.html',
  styleUrls: ['./upshot-login.component.scss']
})
export class UpshotLoginComponent implements OnInit {
  @Input() email: string | undefined;
  @Input() password:string | undefined;
  constructor(private loginservice:LoginService ) {
  }

  ngOnInit(): void {
  }

  login(): void{
    console.log("email:");
    console.log("password:");
    this.loginservice.login();


  }

}
