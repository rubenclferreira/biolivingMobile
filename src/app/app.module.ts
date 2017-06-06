import { EventDetailsOutPage } from './../pages/event-details-out/event-details-out';
import { EventDetailsPage } from './../pages/event-details/event-details';
import { EventsPage } from './../pages/events/events';
import { CreateAccountPage } from './../pages/create-account/create-account';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateAccountPage,
    EventsPage,
    EventDetailsPage,
    EventDetailsOutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateAccountPage,
    EventsPage,
    EventDetailsPage,
    EventDetailsOutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
