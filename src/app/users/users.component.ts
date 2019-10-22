import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UserCardComponent } from '../user-card/user-card.component';

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

  statusChanged: boolean;

  parentDescription = 'Init description';

  @ViewChild('userCard', { static: false }) userCard: UserCardComponent;

  constructor() { }

  ngOnInit() {
  }

  readStatusEvent(value: boolean) {
    this.statusChanged = value;
  }

  triggerDescription() {
    this.userCard.description = 'Changed from parents TypeScript code';
  }

}
