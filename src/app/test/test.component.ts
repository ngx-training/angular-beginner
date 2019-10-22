import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  user: User = {
    name: 'Gregor',
    position: 'Software Engineer',
    salary: 340000.39,
    hobbies: ['Longboard', 'Programming', 'Travelling'],
    canSpeakEnglish: false
  };

  constructor() { }

  ngOnInit() {
  }

  changeLanguage() {
    this.user.canSpeakEnglish = !this.user.canSpeakEnglish;
  }

}
