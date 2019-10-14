import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  template: `
    <ul>
      <li *ngFor="let user of users | async">
        {{ user.id }}
      </li>
    </ul>
  `
})
export class UsersComponent implements OnInit {
  users;
  constructor(private service: UsersService) {}

  ngOnInit() {
    this.users = this.service.getUsers();
  }
}
