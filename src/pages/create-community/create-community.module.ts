import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCommunityPage } from './create-community';

@NgModule({
  declarations: [
    CreateCommunityPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateCommunityPage),
  ],
})
export class CreateCommunityPageModule {}
