import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoriesPage } from './stories';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    StoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(StoriesPage),
    TranslateModule.forChild()
  ],
})
export class StoriesPageModule { }
