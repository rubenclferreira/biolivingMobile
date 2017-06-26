import { LoginPage } from './../login/login';
import { EventsPage } from './../events/events';
import { CreateAccountPage } from './../create-account/create-account';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //link = 'http://localhost:8888/public/api/me';
  data:any

  constructor(public navCtrl: NavController,private http: Http) {

  }
  onLoadCreateAccount(){
    this.navCtrl.push(CreateAccountPage);
  }
  onLoadEventsPage(){
    this.navCtrl.push(EventsPage);
  }

  LoginPage(){
    this.navCtrl.push(LoginPage);
  };

  

    ionViewDidLoad(){

      /*return this.http
                    .get(this.link)
                    .map(res => res.json())
                    .subscribe(
                    data => {
                      this.data = data;
                      console.log(data.id);
                      if(data.id == !null){
                        this.navCtrl.push(EventsPage);
                      }else{
                        console.log("passou");
                      }
            },
            
                    err => {
                      console.log(this.data)
                      console.log("não passou");
                    }
                    );*/

    }

    
                    

                    
                              







  }


