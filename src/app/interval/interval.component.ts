import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interval',
  template: `
    <p>{{ progress }}</p>
  `
})
export class IntervalComponent implements OnInit {
  progress = 0;

  ngOnInit() {
    const id = setInterval(() => {
      this.progress += 50;

      if (this.progress === 100) {
        clearInterval(id);
      }
    }, 1000);
  }
}
