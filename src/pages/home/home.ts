import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SolicitartrocaPage } from "../solicitartroca/solicitartroca";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  solicitarTrocaModal() {
    this.navCtrl.push(SolicitartrocaPage)
  }
}
