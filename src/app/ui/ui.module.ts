import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FontChangerDirective } from '../directives/font-changer.directive';
import { FirstDirectiveDirective } from '../directives/first-directive.directive';
import { FunnyPipe } from '../pipes/funny.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FontChangerDirective,
    FirstDirectiveDirective,
    FunnyPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FontChangerDirective,
    FirstDirectiveDirective,
    FunnyPipe
  ]
})
export class UiModule { }
