import { Component } from '@angular/core';

interface NavRoute {
  name: string;
  path: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  routes: NavRoute[] = [
    {
      name: 'Users',
      path: 'users'
    },
    {
      name: 'News',
      path: 'news'
    }
  ];

}
