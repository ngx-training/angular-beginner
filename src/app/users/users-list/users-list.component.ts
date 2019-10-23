import { Component, OnInit } from '@angular/core';
import { DataUser } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$: Observable<DataUser[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.users$ = this.userService.getUsers();
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(_ => {
      console.log('user deleted');
      this.loadUsers();
    }, error => {
      console.error(error);
    });
  }

}
