import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowerPage } from './follower';

@NgModule({
  declarations: [
    FollowerPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowerPage),
  ],
})
export class FollowerPageModule {}
