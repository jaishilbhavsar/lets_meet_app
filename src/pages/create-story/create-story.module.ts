import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateStoryPage } from './create-story';

@NgModule({
  declarations: [
    CreateStoryPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateStoryPage),
  ],
})
export class CreateStoryPageModule {}
