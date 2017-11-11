import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ArticlelistService {

  constructor(private http: Http) { }

  getArticle(url: string) {
    return this.http.get(url)
        .toPromise()
        .then(res => res.json())
        .then(dataJson => dataJson.data);

  }
}
