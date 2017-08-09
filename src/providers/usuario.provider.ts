import { Injectable } from '@angular/core';
import { HttpBaseCoreProvider } from "./core/http-base-core.provider";

@Injectable()
export class UsuarioProvider {

  constructor(private http: HttpBaseCoreProvider) { }

  public login(usuario: any) {
    return this.http.get(`usuario?email=${usuario.email}&senha=${usuario.senha}`)
  }

  public cadastro(usuario: any) {
    return this.http.post(`usuario`, usuario)
  }

}
