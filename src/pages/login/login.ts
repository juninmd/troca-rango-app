import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { RegistrarPage } from "../registrar/registrar";
import { EsqueciSenhaPage } from "../esquecisenha/esquecisenha";
import { UsuarioProvider } from "../../providers/usuario.provider";
import { HomePage } from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario: any = {};
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private usuarioProvider: UsuarioProvider,
    private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false);
  }

  logar() {
    this.usuarioProvider.login(this.usuario).subscribe(q => {
      this.menuCtrl.enable(true);
      this.navCtrl.setRoot(HomePage);
    })
  }

  goToRegister() {
    this.navCtrl.push(RegistrarPage);
  }

  goToEsqueci() {
    this.navCtrl.push(EsqueciSenhaPage);
  }

}
