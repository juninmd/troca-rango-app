import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from "../../providers/usuario.provider";

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public usuarioProvider: UsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  registrar(usuario: any) {
    this.usuarioProvider.cadastro(usuario).subscribe(q => {
      console.log(q);
    })
  }

}
