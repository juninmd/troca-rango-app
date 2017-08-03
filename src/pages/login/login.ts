import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrarPage } from "../registrar/registrar";
import { EsquecisenhaPage } from "../esquecisenha/esquecisenha";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToRegister() {
    this.navCtrl.push(RegistrarPage);
  }

  goToEsqueci() {
    this.navCtrl.push(EsquecisenhaPage);
  }
 
}
