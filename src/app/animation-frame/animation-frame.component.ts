import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-frame',
  template: `
    <p>{{ value }}</p>
  `
})
export class AnimationFrameComponent implements OnInit {
  value = '';
  ngOnInit() {
    requestAnimationFrame(() => {
      this.value = 'requestAnimationFrame';
    });
  }
}
