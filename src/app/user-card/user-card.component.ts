import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit, OnChanges {

  private _description: string

  @Input() user: User;

  @Input()
  set description(value: string) {
    this._description = value;
    this.descriptionChange.emit(this._description);
  }

  get description(): string {
    return this._description;
  }

  @Output() statusEvent = new EventEmitter<boolean>();

  @Output() descriptionChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  sendStatus(status: boolean) {
    this.statusEvent.emit(status);
  }

}
