import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { RegistrarPageModule } from "../registrar/registrar.module";
import { EsquecisenhaPageModule } from "../esquecisenha/esquecisenha.module";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    RegistrarPageModule,
    EsquecisenhaPageModule,
  ],
})
export class LoginPageModule {}
