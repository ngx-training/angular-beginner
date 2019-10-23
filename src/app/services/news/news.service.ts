import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsUrl: string = environment.apiUrl + environment.endpoints.news;

  constructor(private httpClient: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.httpClient.get<News[]>(this.newsUrl);
  }
}
