import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventMasterPage } from './event-master';

@NgModule({
  declarations: [
    EventMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(EventMasterPage),
  ],
})
export class EventMasterPageModule {}
