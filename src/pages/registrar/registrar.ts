import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from "../../providers/usuario.provider";

@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  usuario: any = {};
  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private usuarioProvider: UsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  registrar() {
    this.usuarioProvider.cadastro(this.usuario).subscribe(q => {
      console.log(q);
    })
  }

}
