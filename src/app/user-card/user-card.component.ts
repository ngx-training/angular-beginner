import { Component, OnInit, Input } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  private _description: string

  @Input() user: User;

  @Input()
  set description(value: string) {
    this._description = value.toUpperCase();
  }

  get description(): string {
    return this._description;
  }

  constructor() { }

  ngOnInit() {
  }

}
