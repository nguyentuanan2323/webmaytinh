import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  private ulrAUTH = 'http://';
  private loggedIn = false;
  constructor(private http: Http) {
    // check contain in local store
      this.loggedIn = !!localStorage.getItem('auth_token');
  }

  isLogged() {
    return this.loggedIn;
  }

    /*  login(username: string, password: string): Observable<string> {
     /* return this.http.post(`${this.ulrAUTH}/login`, {username, password})
             .map(res => res.json())
             .do(res => {
                   if (res.token) {
                     localStorage.setItem('auth_token', res.token);
                   }
                 }).catch();
  }*/

  private handleError(err) {
    let errMesage: string;
    if (err instanceof Response) {
      const body = err.json() || '';
        const error = body.error || JSON.stringify(body);
      errMesage = `${err.status}-${err.statusText || ''}- ${error}`;
    }else {
      errMesage = errMesage ? err.message : err.toString();
    }
  }
}
