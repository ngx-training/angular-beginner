import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user.interface';
import { MessageService } from './services/message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  message: string;
  message$: Observable<string>;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.messageStream$.subscribe(value => {
      this.message = value;
    });
    this.message$ = this.messageService.messageStream$;
  }

}
