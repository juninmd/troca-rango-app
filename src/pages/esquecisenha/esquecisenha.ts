import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-esquecisenha',
  templateUrl: 'esquecisenha.html',
})
export class EsqueciSenhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsquecisenhaPage');
  }

}
