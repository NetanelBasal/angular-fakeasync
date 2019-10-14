import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AnimationFrameComponent } from './animation-frame.component';
import { fakeAsync, tick } from '@angular/core/testing';

describe('AnimationFrameComponent', () => {
  let spectator: Spectator<AnimationFrameComponent>;
  const createComponent = createComponentFactory(AnimationFrameComponent);

  it('should run requestAnimationFrame', fakeAsync(() => {
    spectator = createComponent({ detectChanges: false });
    spectator.detectChanges();
    tick(16);
    spectator.detectChanges();
    expect(spectator.query('p')).toHaveText('requestAnimationFrame');
  }));
});
