import { Component, OnInit } from '@angular/core';
import {AuthService} from '../serviceauth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    providers: [AuthService]
})
export class LoginComponent implements OnInit {
  // authuser = { username = '' , password = '' };
  successMes = '';
  errMes = '';
  constructor(private service: AuthService) { }

  ngOnInit() {
    /*
    * Login user*/
    /*login() {
        this.service.login(this.authuser.password, this.authuser.password)
            .subscribe(
              data => {}
              error =>{}
            );
      }*/
  }

}
