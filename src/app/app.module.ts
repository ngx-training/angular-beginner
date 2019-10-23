import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { TestComponent } from './test/test.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsEditComponent } from './news/news-edit/news-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UserCardComponent,
    UsersComponent,
    NewsComponent,
    NewsListComponent,
    NewsDetailComponent,
    NavigationComponent,
    NewsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatListModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
