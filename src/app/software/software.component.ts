import { Component, OnInit } from '@angular/core';
import {ArticlelistService} from '../servicearticle/articlelist.service';
@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css'],
    providers: [ArticlelistService]
})
export class SoftwareComponent implements OnInit {

    dataArticle = '';
    constructor(private articleService: ArticlelistService) { }
  ngOnInit() {
      this.articleService.getArticle('http://localhost:3000/listsoftware/software')
          .then(data => {this.dataArticle = data; console.log(data); })
          .catch(err => console.log(err));
  }

}
