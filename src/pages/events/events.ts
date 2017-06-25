import { HomePage } from './../home/home';
import { LoginPage } from './../login/login';
import { EventDetailsOutPage } from './../event-details-out/event-details-out';
import { EventDetailsPage } from './../event-details/event-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, URLSearchParams, Request, RequestMethod, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

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
    id;
    singleArray = [];
    
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private AlertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
    var link = 'http://localhost:8888/public/api/pesquisa/eventos';

    

    return this.http
                    .get(link)
                    .map(res => res.json())
                    .subscribe(
                    data => {
                      console.log(data);
                      
                      
                      
                      
                      
                      for(var i = 0; i < data.data.length; i++){
                        
                        this.singleArray.push(data.data[i]);

                      }
                      console.log(this.singleArray);
                      
                      /*
                      console.log(data);
                      console.log(data.data["0"]);
                      
                      console.log(data.info);
                      console.log(datas);*/
                      
                      
                      
            },
            
                    err => {
                      let alert = this.AlertCtrl.create({
                        title: "info",
                        subTitle: 'Algo deu errado',
                        buttons: ['OK']
                      });
                      alert.present();
                      console.log("ERROR!: ", err);
                      this.navCtrl.push(HomePage);
                    }
                    );
                    

                    
                            







  }
  eventDetails(id: string){
    this.navCtrl.push(EventDetailsPage, {id: id});
    this.id = id;
    console.log(id);
  }
  eventDetailsOut(){
    this.navCtrl.push(EventDetailsOutPage);
  }



}
