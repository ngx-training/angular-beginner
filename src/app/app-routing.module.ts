import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
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
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: '**',
    redirectTo: 'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
