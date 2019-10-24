import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import { FirstDirectiveDirective } from 'src/app/directives/first-directive.directive';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule, TranslateService, TranslatePipe } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListComponent, FirstDirectiveDirective ],
      imports: [MatCardModule, TranslateModule, RouterTestingModule, HttpClientModule],
      providers: [
        { provide: TranslateService, useValue: {} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
