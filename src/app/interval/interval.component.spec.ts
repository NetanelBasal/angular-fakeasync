import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { IntervalComponent } from './interval.component';
import { fakeAsync, tick } from '@angular/core/testing';

describe('IntervalComponent', () => {
  let spectator: Spectator<IntervalComponent>;
  const createComponent = createComponentFactory(IntervalComponent);

  it('should increment the number', fakeAsync(() => {
    spectator = createComponent({ detectChanges: false });
    // Initial number
    spectator.detectChanges();
    expect(spectator.query('p')).toHaveText('0');

    // Advance the clock by 1000 milliseconds
    tick(1000);
    spectator.detectChanges();
    expect(spectator.query('p')).toHaveText('50');

    // Advance the clock by 2000 milliseconds (1000 + 1000)
    tick(1000);
    spectator.detectChanges();
    expect(spectator.query('p')).toHaveText('100');
  }));
});
