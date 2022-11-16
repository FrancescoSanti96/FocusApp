import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  tasks: string[] = [];
  button: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(description: string) {
    this.tasks = this.tasks.concat(description);
    this.button = false;
  }
}
