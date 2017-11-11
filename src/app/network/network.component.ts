import { Component, OnInit } from '@angular/core';
import {ArticlelistService} from '../servicearticle/articlelist.service';
@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css'],
    providers: [ArticlelistService]
})
export class NetworkComponent implements OnInit {
    dataArticle = '';
    constructor(private articleService: ArticlelistService) { }
    ngOnInit() {
        this.articleService.getArticle('http://localhost:3000/listnetwork/network')
            .then(data => {this.dataArticle = data; console.log(data); })
            .catch(err => console.log(err));
    }

}
