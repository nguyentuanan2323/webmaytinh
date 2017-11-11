import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DetailService {

  constructor(private http: Http) { }

  getDetailByAlias(url: string, alias: string) {
    return this.http.get(url + '/' + alias).toPromise().then(res => res.json())
        .then(dataJson => dataJson.data);
  }

}
