import { Component, OnInit, Input } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;

  @Input() description: string = 'Hier soll die Beschreibung stehen';

  constructor() { }

  ngOnInit() {
  }

}
