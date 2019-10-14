import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { TestComponent } from './test/test.component';
import { IntervalComponent } from './interval/interval.component';
import { AnimationFrameComponent } from './animation-frame/animation-frame.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, TestComponent, IntervalComponent, AnimationFrameComponent, ListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
