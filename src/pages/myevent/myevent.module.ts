import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyeventPage } from './myevent';

@NgModule({
  declarations: [
    MyeventPage,
  ],
  imports: [
    IonicPageModule.forChild(MyeventPage),
  ],
})
export class MyeventPageModule {}
