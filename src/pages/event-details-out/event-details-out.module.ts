import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventDetailsOutPage } from './event-details-out';

@NgModule({
  declarations: [
    EventDetailsOutPage,
  ],
  imports: [
    IonicPageModule.forChild(EventDetailsOutPage),
  ],
  exports: [
    EventDetailsOutPage
  ]
})
export class EventDetailsOutPageModule {}
