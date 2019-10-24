import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsEditComponent } from './news-edit/news-edit.component';

const routes: Routes = [
  {
    path: 'news',
    component: NewsComponent,
    children: [
      {
        path: '',
        component: NewsListComponent
      },
      {
        path: ':id',
        component: NewsDetailComponent
      },
      {
        path: 'edit/:id',
        component: NewsEditComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewsRoutingModule { }
