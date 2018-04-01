import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateStoryPage } from './create-story';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CreateStoryPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateStoryPage),
    TranslateModule.forChild()
  ],
})
export class CreateStoryPageModule { }
