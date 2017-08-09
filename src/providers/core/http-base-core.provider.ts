import {
    Http,
    XHRBackend,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Headers,
} from '@angular/http';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthCoreProvider } from './auth-core.provider';
import { LoaderCoreProvider } from "./loader-core.provider";

@Injectable()
export class HttpBaseCoreProvider extends Http {
    constructor(backend: XHRBackend,
        options: RequestOptions,
        private loaderCoreProvider: LoaderCoreProvider,
        private authCoreProvider: AuthCoreProvider) {
        super(backend, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor(options);
        return super.get(this.getUrl(url), this.requestOptions(options))
            .catch(this.onCatch)
            .timeout(10000)
            .map(response => response.json())
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(options, error);
            })
            .finally(() => {
                this.onFinally(options);
            });
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor(options);
        return super.post(this.getUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch)
            .timeout(10000)
            .map(response => response.json())
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(options, error);
            })
            .finally(() => {
                this.onFinally(options);
            });
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor(options);
        return super.put(this.getUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch)
            .timeout(10000)
            .map(response => response.json())
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(options, error);
            })
            .finally(() => {
                this.onFinally(options);
            });
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor(options);
        return super.delete(this.getUrl(url), this.requestOptions(options))
            .catch(this.onCatch)
            .timeout(10000)
            .map(response => response.json())
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(options, error);
            })
            .finally(() => {
                this.onFinally(options);
            });
    }

    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }

        if (options.headers == null) {
            options.headers = new Headers();
        }

        if (options.headers.keys().filter(q => q == "skipheaders").length == 1) {
            options.headers = new Headers();
            options.headers.append("Content-Type", 'application/json');
            return options;
        }
        if (this.authCoreProvider.isLoggedIn() && options.headers.keys().filter(q => q == "skipusuariologado").length == 0) {
            options.headers.append("usuariologado", localStorage.getItem("usuarioLogado"));
        }

        return options;
    }

    private requestInterceptor(options: any): void {
        if (!(options == null || (options != null && options.headers.keys().filter(q => q == "skiploading").length == 0))) {
            return;
        }

        if (sessionStorage.getItem("loading") == "true") {
            return;
        }

        sessionStorage.setItem("loading", "true");
        this.loaderCoreProvider.showPreloader();
    }

    private responseInterceptor(): void {
        if (sessionStorage.getItem("loading") == "false") {
            return;
        }

        sessionStorage.setItem("loading", "false");
        this.loaderCoreProvider.hidePreloader();
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    private onSubscribeSuccess(res: Response): void {
    }

    private onSubscribeError(options: any, error: any): void {
        if (options == null || (options != null && options.headers.keys().filter(q => q == "skiperror").length == 0)) {
            this.handleError(error);
        }
    }

    private onFinally(options: any): void {
        if (options == null || (options != null && options.headers.keys().filter(q => q == "skiploading").length == 0)) {
            this.responseInterceptor();
        }
    }

    public handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {

            if (this.isJson(error.text())) {
                const body = error.json() || '';
                const err = body.error || JSON.stringify(body);
                if (error.status == 0) {
                    errMsg = "Ocorreu uma falha na comunicação do sistema.";
                }
                else if ((error.status == 401 || error.status == 403) && body.message && body.message.userMessage) {
                    errMsg = `${body.message.userMessage}`;
                    this.loaderCoreProvider.showError(errMsg);
                    localStorage.removeItem("usuarioLogado")
                    return;
                }
                else if (body.message && body.message.userMessage) {
                    errMsg = `${body.message.userMessage}`;
                }
                else {
                    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
                }
                if (error.json().noValidate == null)
                    this.loaderCoreProvider.showError(errMsg);
            }
            else {
                this.loaderCoreProvider.showError(error.text());
            }

        } else {
            errMsg = error.message ? error.message : error.toString();
            this.loaderCoreProvider.showError(errMsg);
        }

    }

    private isJson(str: string): boolean {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    private getUrl(url: string): string {
        return `http://localhost:4600/${url}`;
    }
}