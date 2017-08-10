/** Core Angular */
import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule, XHRBackend, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/** Native */
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from '../pages/home/home';

/** Core */
import { HttpBaseCoreProvider } from "../providers/core/http-base-core.provider";
import { LoaderCoreProvider } from "../providers/core/loader-core.provider";
import { AuthCoreProvider } from "../providers/core/auth-core.provider";

/** Provider */
import { UsuarioProvider } from '../providers/usuario.provider';

/** Página */
import { RegistrarPage } from "../pages/registrar/registrar";
import { LoginPage } from "../pages/login/login";
import { EsqueciSenhaPage } from "../pages/esquecisenha/esquecisenha";
import { MenuPage } from "../pages/menu/menu";

export function httpFactory(backend: XHRBackend, options: RequestOptions, loaderCoreProvider: LoaderCoreProvider, authCoreProvider: AuthCoreProvider) {
  return new HttpBaseCoreProvider(backend, options, loaderCoreProvider, authCoreProvider)
}

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    RegistrarPage,
    LoginPage,
    EsqueciSenhaPage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent, {
      tabsPlacement: 'top',
      backButtonText: '',
    }),
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    HomePage,
    RegistrarPage,
    LoginPage,
    EsqueciSenhaPage,
    MenuPage
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: HttpBaseCoreProvider,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, LoaderCoreProvider, AuthCoreProvider]
    },
    StatusBar,
    SplashScreen,
    UsuarioProvider,
    LoaderCoreProvider,
    AuthCoreProvider,
    HttpBaseCoreProvider,
  ]
})
export class AppModule { }
