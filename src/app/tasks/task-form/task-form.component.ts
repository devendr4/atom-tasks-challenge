import { Component, Input } from '@angular/core';
import { Task } from '../models';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  //for editing tasks
  @Input() task?: Task;
}
