import { HomePage } from './../home/home';
//import { EventsPage } from './../events/events';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { Geofence } from '@ionic-native/geofence';


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
//linkme = 'http://localhost:8888/public/api/me';
data;



  constructor(public navCtrl: NavController, public navParams: NavParams,private AlertCtrl: AlertController, private http: Http, private geolocation: Geolocation, private Geofence: Geofence) {

    this.id = this.navParams.get('id');
      //console.log(this.id);
      //inicio a geolocalização e obtem lat e long
      this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            }).catch((error) => {
              //console.log('Error getting location', error);
            });
            // faz retrieve das coordenadas ao longo do tempo
            let watch = this.geolocation.watchPosition();
            watch.subscribe((data) => {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
            this.deviceLatitude =  data.coords.latitude;
            this.deviceLongitude = data.coords.longitude;
            //console.log(this.deviceLatitude);
            //console.log(this.deviceLongitude);
          });

          // initialize the plugin
  /*Geofence.initialize().then(
    // resolved promise does not return a value
    () => console.log('Geofence Plugin Ready'),
    (err) => console.log(err)
  )*/
          

  }
  

  ionViewDidLoad() {
    //console.log('ionViewDidLoad EventDetailsPage');
    //vai a base de dados buscar o evento especifico solicitado
    var link = 'http://localhost:8888/public/api/eventos/' + this.id;
    return this.http
                    .get(link)
                    .map(res => res.json())
                    .subscribe(
                    data => {
                      
                      for(var i = 0; i < data.data.length; i++){
                        
                        this.detailArray.push(data.data[i]);

                      }
                      //console.log(this.detailArray);
            },
            
                    err => {
              
                      //console.log("ERROR!: ", err);

                    }
                    );
                    

  }

  

 getCert(){
  //buscar o id do utilizador
  /*return this.http
                    .get(this.linkme)
                    .map(res => res.json())
                    .subscribe(
                    data => {
                      this.data = data;
                      console.log(data.id);
                      if(data.id == !null){
                        this.navCtrl.push(EventsPage);
                      }else{
                        console.log("passou");
                        this.alertCert();
                      }
            },
            
                    err => {
                      console.log(this.data)
                      console.log("não passou");
                    }
                    );*/







   
   
 }
//faz a verificação para a atribuiçao do certificado
 alertCert(){
   this.date = new Date();
          //console.log(this.date);
          //console.log(this.deviceLatitude);
            //console.log(this.deviceLongitude);
    let alert = this.AlertCtrl.create({
    title: "Certificado",
    subTitle: 'Foi enviado para o seu e-mail o certificado de participação',
    buttons: ['OK']
    
  });
  alert.present();
 }

//envia o utilizador para a página inicial
 logout(){
    let alert = this.AlertCtrl.create({
    title: 'Logout',
    message: 'Pretende fazer Logout?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          //console.log('Cancelar clicado');
        }
      },
      {
        text: 'Sim',
        handler: () => {
          this.navCtrl.popToRoot(HomePage);
          //console.log('Sair clicado');
        }
      }
    ]
  });
  alert.present();

  }

 

}



