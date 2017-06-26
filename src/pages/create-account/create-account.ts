import { EventsPage } from './../events/events';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';  

/**
 * Generated class for the CreateAccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  email: string;
  password: string;
  nome: string;
  apelido: string;
  link = 'http://localhost:8888/public/api/create';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private AlertCtrl: AlertController) {
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad CreateAccountPage');
  }

  createAccount(){
    this.email = this.email;
    this.password = this.password;
    this.nome = this.nome;
    this.apelido = this.apelido;

     
        let data = {
                    "email": this.email,
                    "password": this.password,
                    "nome": this.nome,
                    "apelido": this.apelido
                  }
                  //API Call
                  return this.http
                    .post(this.link, data)
                    .map(res => res.json())
                    .subscribe(
                    data => {
                      /*console.log(data);
                      console.log(this.password);
                      console.log(this.email);
                      console.log(this.nome);
                      console.log(this.apelido);*/
                      this.navCtrl.push(EventsPage);
                      
            },
                    err => {
                      /*console.log(this.email);
                      console.log(this.nome);
                      console.log(this.apelido);
                      console.log(this.password);*/
                      let alert = this.AlertCtrl.create({
    title: "info",
    subTitle: 'Não foi possivel criar conta',
    buttons: ['OK']
  });
  alert.present();
                      //console.log("ERROR!: ", err);
                    }
                    );
                    
            } 
  }


