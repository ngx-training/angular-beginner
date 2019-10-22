import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    {
      name: 'Gregor',
      position: 'Software Engineer',
      salary: 340000.39,
      hobbies: ['Longboard', 'Programming', 'Travelling'],
      canSpeakEnglish: false
    },
    {
      name: 'Thomas',
      position: 'Designer',
      salary: 40000.39,
      hobbies: ['Longboard', 'Programming', 'Travelling'],
      canSpeakEnglish: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
