import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from 'src/app/core/services/tasks.service';
import { Router } from '@angular/router';

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
    this.taskForm = new FormGroup({
      title: new FormControl(this.task?.title, [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl(this.task?.description, [
        Validators.required,
        Validators.minLength(3),
      ]),
      completed: new FormControl(false, []),
    });
  }

  constructor(
    private taskService: TasksService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.task) {
      this.taskService.updateTask({
        id: this.task.id,
        title: this.taskForm.get('title')?.value,
        description: this.taskForm.get('description')?.value,
      });
    } else {
      this.taskService.createTask(this.taskForm.value);
    }
    this.taskForm.reset();
    this.router.navigate(['/']);
  }
}
