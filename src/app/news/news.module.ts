import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsRoutingModule } from './news-routing.module';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [
    NewsComponent,
    NewsListComponent,
    NewsDetailComponent,
    NewsEditComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
