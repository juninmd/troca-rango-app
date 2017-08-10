import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild('content') navCtrl: NavController

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
