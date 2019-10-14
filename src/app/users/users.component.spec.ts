import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { UsersService } from '../users.service';
import { fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let spectator: Spectator<UsersComponent>;
  const createComponent = createComponentFactory({
    component: UsersComponent,
    detectChanges: false,
    mocks: [UsersService]
  });

  beforeEach(() => (spectator = createComponent()));

  it('should resolve the promise and show the users list', fakeAsync(() => {
    const usersService = spectator.get(UsersService);
    usersService.getUsers.and.callFake(() => Promise.resolve([{ id: 1 }, { id: 2 }]));

    // Run ngOnInit
    spectator.detectChanges();

    // Resolve all Promises
    flushMicrotasks();

    spectator.detectChanges();
    expect(spectator.queryAll('li').length).toBe(2);
  }));
});
