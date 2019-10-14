import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { ListComponent } from './list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../users.service';
import { fakeAsync, tick } from '@angular/core/testing';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

describe('ListComponent', () => {
  let spectator: Spectator<ListComponent>;
  const createComponent = createComponentFactory({
    component: ListComponent,
    imports: [ReactiveFormsModule],
    mocks: [UsersService]
  });

  it('should search users', fakeAsync(() => {
    spectator = createComponent({ detectChanges: false });
    const userService = spectator.get(UsersService);

    // Simulate HTTP request with mock data
    userService.search.andCallFake(() => timer(100).pipe(mapTo([{ id: 1 }, { id: 2 }])));
    // Run ngOnInit
    spectator.detectChanges();

    // Search..
    spectator.typeInElement('Netanel', 'input');

    // Advance the clock by 100 milis to run debounceTime(100)
    tick(100);
    spectator.detectChanges();
    expect(spectator.query('.loading')).toExist();

    // Advance the clock by 100 milis to run userService.search()
    tick(100);
    spectator.detectChanges();

    expect(userService.search).toHaveBeenCalledWith('Netanel');
    expect(spectator.query('.loading')).not.toExist();
    expect(spectator.queryAll('li').length).toEqual(2);
  }));
});
