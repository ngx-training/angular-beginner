import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news/news.service';
import { News } from 'src/app/services/news/news';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent implements OnInit {

  newsId: string;
  currentDate = Date.now().toString();

  news: News;
  newsFormGroup: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private newsService: NewsService,
              private formBuilder: FormBuilder,
              private location: Location) { }

  ngOnInit() {
    this.createForm();
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.newsId = params.id;
        if (this.newsId !== 'new') {
          this.loadDetailNews(this.newsId);
        }
      }
    });
  }

  createForm() {
    this.newsFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      content: ['Beispielinhalt', Validators.required]
    });
  }

  fillForm() {
    this.newsFormGroup.setValue({
      title: this.news.title,
      author: this.news.author,
      content: this.news.content
    });
  }

  loadDetailNews(id: string) {
    this.newsService.getSingleNews(id).subscribe(data => {
      if (data) {
        this.news = data;
        this.fillForm();
      }
    }, error => {
      console.error(error);
    });
  }

  submit(form: FormGroup) {
    const formValue: News = form.value;
    formValue.created_at = this.currentDate;
    if (this.newsId === 'new') {
      this.newsService.createNews(formValue).subscribe(_ => {
        console.log('new news creted');
        this.cancel();
      }, error => {
        console.error(error);
      });
    } else {
      this.newsService.updateNews(this.newsId, formValue).subscribe(data => {
        this.news = data;
        this.fillForm();
      }, error => {
        console.error(error);
      });
    }
  }

  cancel() {
    this.location.back();
  }

}
