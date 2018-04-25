import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPastEventPage } from './view-past-event';

@NgModule({
  declarations: [
    ViewPastEventPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewPastEventPage),
  ],
})
export class ViewPastEventPageModule {}
