import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

const {ipcRenderer} = require('electron');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  message: string;
  message$: Observable<string>;
  selectedLanguage: string;

  constructor(private messageService: MessageService,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.selectedLanguage = this.translateService.getDefaultLang();
    this.messageService.messageStream$.subscribe(value => {
      this.message = value;
    });
    this.message$ = this.messageService.messageStream$;
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }

  notify() {
    ipcRenderer.send('notify-test');
  }

}
