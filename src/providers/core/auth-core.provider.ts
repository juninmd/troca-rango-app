import { Injectable } from '@angular/core';

@Injectable()
export class AuthCoreProvider {

    public UsuarioLogado: any = {};

    constructor() {
        this.UsuarioLogado = this.retrieveUser();
    }

    public login(usuarioModel: any) {
        this.UsuarioLogado = usuarioModel.user;
    }

    public logout() {
        this.UsuarioLogado = null;
        localStorage.removeItem("usuarioLogado")
    }

    public isLoggedIn() {
        return this.UsuarioLogado != null;
    }

    public getUserInfo(): any {
        return this.UsuarioLogado;
    }

    public retrieveUser(): any {
        try {
            if (localStorage.getItem("usuarioLogado") != null) {
                let usuarioLogado = JSON.parse(atob(localStorage.getItem("usuarioLogado")))
                this.login(usuarioLogado);
                return usuarioLogado.user;
            }
            else {
                this.logout();
                return null;
            }
        } catch (error) {
            this.logout();
            return null;
        }
    }
}