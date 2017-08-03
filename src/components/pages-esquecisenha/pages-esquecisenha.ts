import { Component } from '@angular/core';

/**
 * Generated class for the PagesEsquecisenhaComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pages-esquecisenha',
  templateUrl: 'pages-esquecisenha.html'
})
export class PagesEsquecisenhaComponent {

  text: string;

  constructor() {
    console.log('Hello PagesEsquecisenhaComponent Component');
    this.text = 'Hello World';
  }

}
