import { Component, Input } from '@angular/core';
import { Task } from '../models';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  //for editing tasks
  @Input() task?: Task;
  taskForm = new FormGroup({
    title: new FormControl('', []),
    description: new FormControl('', []),
    completed: new FormControl(false, []),
  });

  onSubmit() {
    console.log(this.taskForm.get('title')?.value);
    console.log(this.taskForm.get('description')?.value);
    console.log('submitted');
  }
}
