import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  //for editing tasks
  @Input() task?: Task;
  taskForm: FormGroup;

  ngOnInit(): void {
    console.log(this.task);
    this.taskForm = new FormGroup({
      title: new FormControl(this.task?.title, [Validators.required]),
      description: new FormControl(this.task?.description, [
        Validators.required,
      ]),
      completed: new FormControl(false, []),
    });
  }

  constructor() {}

  onSubmit() {
    console.log(this.taskForm.get('title')?.value);
    console.log(this.taskForm.get('description')?.value);
    console.log('submitted');
  }
}
