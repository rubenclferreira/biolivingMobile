import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the EventDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private AlertCtrl: AlertController) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
  }

 doAlert(){
   var certificado = "Certificado";
    let alert = this.AlertCtrl.create({
    title: certificado,
    subTitle: 'Foi enviado para o seu e-mail o certificado de participação',
    buttons: ['OK']
  });
  alert.present();
 }

 

}



