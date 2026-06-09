import { Component } from '@angular/core';
import { DynamicTextComponent } from './components/dynamic-text/dynamic-text.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SquarePopupComponent } from './components/square-popup/square-popup.component';

@Component({
  selector: 'app-root',
  imports: [DynamicTextComponent, ProgressBarComponent, SquarePopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
