import { Component, OnInit } from '@angular/core';
import {ArticlelistService} from '../servicearticle/articlelist.service';
@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css'],
    providers: [ArticlelistService]
})
export class HardwareComponent implements OnInit {
    dataArticle = '';
    constructor(private articleService: ArticlelistService) { }
    ngOnInit() {
        this.articleService.getArticle('http://localhost:3000/listhardware/hardware')
            .then(data => {this.dataArticle = data; })
            .catch(err => console.log(err));
    }
}
