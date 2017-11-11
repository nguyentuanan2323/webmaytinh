import { Component, OnInit } from '@angular/core';
import {ArticlelistService} from '../servicearticle/articlelist.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
    providers: [ArticlelistService]
})
export class ArticleComponent implements OnInit {
/* dataArticle = '';*/
  constructor(/*private articleService: ArticlelistService*/) { }

  ngOnInit() {
    /*this.articleService.getArticle(url)
        .then(data => {this.dataArticle = data; })
        .catch(err => console.log(err));*/
  }

}
