import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  tasks: string[] = [];
  button: boolean = true;

  taskFormControl = new FormControl('', [Validators.required]);
  constructor() {}

  ngOnInit(): void {}

  onSubmit(description: string) {
    this.tasks = this.tasks.concat(description);
    this.button = false;
  }
}
