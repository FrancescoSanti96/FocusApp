import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'focus';
  plusTasks: number[] = [];

  onPlusTasks() {
    this.plusTasks.push(1);
  }
}
