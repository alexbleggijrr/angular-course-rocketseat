import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-flat',
  imports: [],
  template: `
    <button class="btn btn-flat" (click)="limpar()">
      Limpar filtro {{ counter }}
    </button>
  `,
  styles: `
    .btn {
      --primary-orange: #f55a00;
      --white: #fff;

      font-family: Arial, sans-serif;
      padding: 12px 25px;
      font-size: 1em;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      min-width: 150px;
      text-align: center;
      box-sizing: border-box;
    }

    .btn-flat {
      background-color: var(--white);
      border: 2px solid var(--primary-orange);
      color: var(--primary-orange);
    }
  `,
})
export class ButtonFlatComponent {
  // 01. fazer injeções de dependência
  // 02. criar propriedades
  // 03. criar métodos
  // 04. utilizar ciclos de vida do componente
  // 05. passar valores para o template

  // 01. injeções de dependência
  // inject();
  // constructor() {}

  // 02. propriedades
  counter = 0;
  // private counter = 0;
  // private readonly counter = 0;

  // 03. métodos
  limpar() {
    this.counter += 1;

    console.log('Método limpar');
  }
  /* private limpar() {
    console.log('Método limpar');
  } */

  // 04. utilizar ciclos de vida do componente
  ngOnInit() {
    console.log('ngOnInit');
  }

  // 04. utilizar ciclos de vida do componente
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
