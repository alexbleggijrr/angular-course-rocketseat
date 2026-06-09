import { Component } from '@angular/core';

@Component({
  selector: 'app-square-popup',
  imports: [],
  template: `
    <div class="square" [style.left.%]="horizontalPosition"></div>
    <div class="popup" [style.top]="popupHeight + 'vh'" [style.right]="'10px'">
      Dynamic Popup
    </div>

    <button (click)="moveSquare()">Move Square</button>
    <button (click)="togglePopup()">Toggle Popup</button>
  `,
  styles: `
    .square {
      width: 50px;
      height: 50px;
      background-color: purple;
      position: relative;
      transition: left 0.5s ease;
      margin-top: 20px;
    }

    .popup {
      position: fixed;
      background-color: lightcoral;
      padding: 15px;
      border-radius: 8px;
      transform: translateY(-100%);
      transition:
        transform 0.3s ease-out,
        top 0.3s ease-out;
    }
  `,
})
export class SquarePopupComponent {
  horizontalPosition: number = 0;
  popupHeight: number = -10;

  moveSquare() {
    this.horizontalPosition = (this.horizontalPosition + 10) % 100;
    console.log(this.horizontalPosition);
  }

  togglePopup() {
    this.popupHeight = this.popupHeight === -10 ? 10 : -10;
  }
}
