import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news/news.service';
import { News } from 'src/app/services/news/news';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent implements OnInit {

  private newsId: string;

  news: News;

  constructor(private activatedRoute: ActivatedRoute,
              private newsService: NewsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.newsId = params.id;
      }
    });
  }

}
