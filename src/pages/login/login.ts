import { EventsPage } from './../events/events';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';     


import'rxjs/add/operator/map';





/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {
  email: string;
  password: string;
  constructor(public navCtrl: NavController, private http: Http, private navParams: NavParams, private AlertCtrl: AlertController) {
  }
  

  ionViewDidLoad() {
   // console.log('ionViewDidLoad LoginPage');
  };



  login() {
      
        /*var getEmail = $scope.email 

        console.log(email);
        var link = 'http://localhost:8888/public/api/login';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let body = {
          email: getEmail,
          password: getPassword
        };

        this.http.post(link, JSON.stringify(body), {headers: headers})
        .map(res => res.json())
        .subscribe(data =>{
          console.log(data);
        });*/



             //detalhes a serem verificados
             var email = this.email
             var password = this.password
             var link = 'http://localhost:8888/public/api/login';
        let data = {
                    "email": email,
                    "password": password,
                  }
                  /*console.log(email);
                  console.log(password);*/
    //API Call/
                  return this.http
                    .post(link, data)
                    .map(res => res.json())
                    .subscribe(
                    data => {
                     // console.log(data);
                      //console.log(data.info)
                      this.navCtrl.push(EventsPage)
            },
                    err => {
                      let alert = this.AlertCtrl.create({
    title: "info",
    subTitle: 'Um ou ambos os campos errados',
    buttons: ['OK']
  });
  alert.present();
                      //console.log("ERROR!: ", err);
                    }
                    );
                    
            } 
    
    }
  
  
 
  
  
