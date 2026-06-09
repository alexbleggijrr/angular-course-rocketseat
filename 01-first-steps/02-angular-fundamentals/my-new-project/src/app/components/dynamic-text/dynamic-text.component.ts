import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-text',
  imports: [],
  template: `
    <p [style.font-size.rem]="sizeRem">Dynamic size text</p>

    <button (click)="increaseText()">Tamanho +</button>
    <button (click)="decreaseText()">Tamanho -</button>
  `,
  styles: ``,
})
export class DynamicTextComponent {
  sizeRem: number = 1.2;

  increaseText() {
    this.sizeRem = Math.min(this.sizeRem + 0.2, 2.0);
  }

  decreaseText() {
    this.sizeRem = Math.max(this.sizeRem - 0.2, 0.8);
  }
}
