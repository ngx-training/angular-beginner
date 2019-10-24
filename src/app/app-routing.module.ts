import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersDetailComponent } from './users/users-detail/users-detail.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadChildren: './news/news.module#NewsModule'
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersListComponent
      },
      {
        path: ':id',
        component: UsersDetailComponent
      },
      {
        path: 'edit/:id',
        component: UsersEditComponent
      }
    ]
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
