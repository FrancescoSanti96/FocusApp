import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { task } from './task';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  tasks: task[] = [];
  button: boolean = true;
  inputTaskName = '';

  taskFormControl = new FormControl('', [Validators.required]);
  constructor() {}

  ngOnInit(): void {}

  onSubmit(description: string) {
    this.tasks.push({
      name: description,
      dateStart: new Date().toLocaleString(),
      dateStop: '',
    });
    this.button = false;
  }

  onStop() {
    this.button = true;
    this.inputTaskName = ' ';
    this.tasks[this.tasks.length - 1].dateStop = new Date().toLocaleString();
  }
}
