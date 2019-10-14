import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap, switchMap } from 'rxjs/operators';
import { UsersService } from '../users.service';

@Component({
  template: `
    <input [formControl]="searchControl" />
    <p *ngIf="loading" class="loading">{{ loading }}</p>
    <ul>
      <li *ngFor="let user of users$ | async">
        {{ user.id }}
      </li>
    </ul>
  `
})
export class ListComponent implements OnInit {
  searchControl = new FormControl();
  loading = false;
  users$;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    // don't forget to unsubscribe :)
    this.users$ = this.searchControl.valueChanges.pipe(
      debounceTime(100),
      tap(() => (this.loading = true)),
      switchMap(term => this.usersService.search(term)),
      tap(() => (this.loading = false))
    );
  }
}
