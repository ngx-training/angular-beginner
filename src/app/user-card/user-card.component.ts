import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { MessageService } from '../services/message.service';

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

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  sendStatus(status: boolean) {
    this.statusEvent.emit(status);
  }

  sendMessage() {
    this.messageService.sendMessage('Message from user card');
  }

}
