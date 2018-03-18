import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    id: 1,
    email: 'd.lysohor@gmail.com',
    password: 'hunter96',
    password_confirmation: 'hunter96',
    name: 'Windstorm'
  };
  users = USERS;
  selectedUser: User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }
  constructor() { }

  ngOnInit() {
  }

}
