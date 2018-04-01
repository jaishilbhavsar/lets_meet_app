import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCommunityPage } from './create-community';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CreateCommunityPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateCommunityPage),
    TranslateModule.forChild()
  ],
})
export class CreateCommunityPageModule { }
