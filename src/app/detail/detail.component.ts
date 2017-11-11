import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DetailService} from '../servicedetail/detail.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
    providers: [DetailService]
})
export class DetailComponent implements OnInit {
    dataDetail= '';
    // Alias: string
    constructor(private route: ActivatedRoute, private articleService: DetailService) {
    this.route.paramMap.subscribe( (params: ParamMap) => {
        const alias = route.snapshot.url[2].path;
        const detail = route.snapshot.url[1].path;
        const listObject = route.snapshot.url[0].path;
        this.articleService.getDetailByAlias('http://localhost:3000/' + listObject + '/' + detail , params.get('Alias'))
            .then(datas => {this.dataDetail = datas; console.log(datas); })
            .catch(err => console.log(err));
    });
  }





  ngOnInit() {
  }

}
