import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { TestComponent } from './test.component';
import { fakeAsync, tick } from '@angular/core/testing';

describe('TestComponent', () => {
  let spectator: Spectator<TestComponent>;
  const createComponent = createComponentFactory(TestComponent);

  beforeEach(() => (spectator = createComponent()));

  it('should show the message only on submit and remove it after 2 seconds', fakeAsync(() => {
    expect(spectator.query('p')).not.toExist();
    spectator.click('button');
    expect(spectator.query('p')).toExist();

    // Advance the virtual clock by 2 seconds
    tick(2000);
    spectator.detectChanges();
    expect(spectator.query('p')).not.toExist();
  }));
});
