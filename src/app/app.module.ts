/** Core Angular 2 */
import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule, XHRBackend, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from '../pages/home/home';
import { UsuarioProvider } from '../providers/usuario.provider';
import { HttpBaseCoreProvider } from "../providers/core/http-base-core.provider";
import { LoaderCoreProvider } from "../providers/core/loader-core.provider";
import { AuthCoreProvider } from "../providers/core/auth-core.provider";

/**
 * Módulos de Páginas
 */
import { LoginPageModule } from "../pages/login/login.module";
import { RegistrarPageModule } from "../pages/registrar/registrar.module";

export function httpFactory(backend: XHRBackend, options: RequestOptions, loaderCoreProvider: LoaderCoreProvider, authCoreProvider: AuthCoreProvider) {
  return new HttpBaseCoreProvider(backend, options, loaderCoreProvider, authCoreProvider)
}

@NgModule({
  declarations: [
    AppComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent, {
      tabsPlacement: 'top',
      backButtonText: '',
    }),
    FormsModule, 
    HttpModule,
    JsonpModule,
    LoginPageModule,
    RegistrarPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UsuarioProvider,
    XHRBackend,
    RequestOptions,
    LoaderCoreProvider,
    AuthCoreProvider,
    HttpBaseCoreProvider,
    { provide: LOCALE_ID, useValue: "pt-BR" },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: HttpBaseCoreProvider,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, LoaderCoreProvider, AuthCoreProvider]
    },
  ]
})
export class AppModule { }
