import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewCommunityPage } from './view-community';

@NgModule({
  declarations: [
    ViewCommunityPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewCommunityPage),
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewCommunityPageModule { }
