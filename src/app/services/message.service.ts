import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageStream$: Subject<string> = new Subject<string>();

  constructor() { }

  sendMessage(message: string) {
    this.messageStream$.next(message);
  }
}
