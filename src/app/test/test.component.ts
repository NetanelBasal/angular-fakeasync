import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p *ngIf="showMsg">Some message</p>
    <button (click)="submit()">Submit</button>
  `
})
export class TestComponent {
  showMsg = false;

  submit() {
    this.showMsg = true;
    setTimeout(() => (this.showMsg = false), 2000);
  }
}
