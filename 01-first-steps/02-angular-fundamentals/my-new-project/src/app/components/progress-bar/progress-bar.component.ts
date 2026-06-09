import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  progress: number = 0;

  increaseProgress() {
    this.progress = Math.min(this.progress + 30, 300);
  }
}
