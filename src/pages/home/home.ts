import { EventsPage } from './../events/events';
import { CreateAccountPage } from './../create-account/create-account';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onLoadCreateAccount(){
    this.navCtrl.push(CreateAccountPage);
  }
  onLoadEventsPage(){
    this.navCtrl.push(EventsPage);
  }

}
