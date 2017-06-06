import { EventDetailsOutPage } from './../event-details-out/event-details-out';
import { EventDetailsPage } from './../event-details/event-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }
  eventDetailsIN(){
    this.navCtrl.push(EventDetailsPage);
  }
  eventDetailsOut(){
    this.navCtrl.push(EventDetailsOutPage);
  }

}
