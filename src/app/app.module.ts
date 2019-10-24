import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersComponent } from './users/users.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { UsersDetailComponent } from './users/users-detail/users-detail.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UiModule } from './ui/ui.module';
import { NewsModule } from './news/news.module';

export function createTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UserCardComponent,
    UsersComponent,
    NavigationComponent,
    UsersListComponent,
    UsersEditComponent,
    UsersDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UiModule,
    NewsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translateService: TranslateService) {
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.setDefaultLang(browserLang);
  }
}
