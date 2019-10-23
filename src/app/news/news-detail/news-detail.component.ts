import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/services/news/news';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  private newsId: string;

  news: News;

  constructor(private activatedRoute: ActivatedRoute,
              private newsService: NewsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.newsId = params.id;
        this.loadDetailNews(this.newsId);
      }
    });
  }

  loadDetailNews(id: string) {
    this.newsService.getSingleNews(id).subscribe(data => {
      this.news = data;
    }, error => {
      console.error(error);
    });
  }

}
