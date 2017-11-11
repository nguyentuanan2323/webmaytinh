import { Component, OnInit } from '@angular/core';
import {ArticlelistService} from '../servicearticle/articlelist.service';
@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css'],
    providers: [ArticlelistService]
})
export class TipsComponent implements OnInit {

    dataArticle = '';
    constructor(private articleService: ArticlelistService) { }
    ngOnInit() {
        this.articleService.getArticle('http://localhost:3000/listtip/tip')
            .then(data => {this.dataArticle = data; })
            .catch(err => console.log(err));
    }

}
