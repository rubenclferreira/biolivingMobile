import { EventsPage } from './../events/events';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';


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
id: string;
detailArray = [];
deviceLatitude;
deviceLongitude;
date;



  constructor(public navCtrl: NavController, public navParams: NavParams,private AlertCtrl: AlertController, private http: Http, private geolocation: Geolocation) {

    this.id = this.navParams.get('id');
      console.log(this.id);

      this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            }).catch((error) => {
              console.log('Error getting location', error);
            });

            let watch = this.geolocation.watchPosition();
            watch.subscribe((data) => {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
            this.deviceLatitude =  data.coords.latitude;
            this.deviceLongitude = data.coords.longitude;
            console.log(this.deviceLatitude);
            console.log(this.deviceLongitude);
          });
          

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
    var link = 'http://localhost:8888/public/api/eventos/' + this.id;
    return this.http
                    .get(link)
                    .map(res => res.json())
                    .subscribe(
                    data => {
                      
                      for(var i = 0; i < data.data.length; i++){
                        
                        this.detailArray.push(data.data[i]);

                      }
                      console.log(this.detailArray);
                      
 
            },
            
                    err => {
                      /*let alert = this.AlertCtrl.create({
                        title: "info",
                        subTitle: 'Algo deu errado',
                        buttons: ['OK']
                      });
                      alert.present();
                      
                      this.navCtrl.push(EventsPage);*/
                      console.log("ERROR!: ", err);

                    }
                    );
                    

  }

  

 getCert(){
   var certificado = "Certificado";
   this.date = new Date();
          console.log(this.date);
          console.log(this.deviceLatitude);
            console.log(this.deviceLongitude);
    let alert = this.AlertCtrl.create({
    title: certificado,
    subTitle: 'Foi enviado para o seu e-mail o certificado de participação',
    buttons: ['OK']
    
  });
  alert.present();
 }

 

}



