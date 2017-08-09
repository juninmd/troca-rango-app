import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';

@Injectable()
export class LoaderCoreProvider {

    loader: any;
    constructor(private toastController: ToastController, private loadingController: LoadingController) {
    }

    public showPreloader() {
        this.loader = this.loadingController.create({});
        this.loader.present();
    }

    public hidePreloader() {
        this.loader.dismiss();
    }

    public showError(mensagem: string) {
        if (sessionStorage.getItem("exibindoErro") != null)
            return;
        sessionStorage.setItem("exibindoErro", "true");

        let a = this.toastController.create({
            duration: 4000,
            message: mensagem,
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        a.present();
        a.onDidDismiss(() => {
            sessionStorage.removeItem("exibindoErro");
        })
    }
}