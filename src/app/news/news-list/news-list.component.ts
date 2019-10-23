import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/services/news/news';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.newsService.getNews().subscribe(data => {
      this.news = data;
    }, error => {
      console.error(error);
    });
  }

}
