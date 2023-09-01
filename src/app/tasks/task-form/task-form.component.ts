import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from 'src/app/core/services/tasks.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';

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
      title: new FormControl(this.task?.title, [Validators.required]),
      description: new FormControl(this.task?.description, [
        Validators.required,
      ]),
      completed: new FormControl(false, []),
    });
  }

  constructor(
    private taskService: TasksService,
    private router: Router,
    private alertService: AlertService
  ) {}

  onSubmit() {
    if (this.task) {
      this.taskService.updateTask({
        id: this.task.id,
        title: this.taskForm.get('title')?.value,
        description: this.taskForm.get('description')?.value,
      });

      this.alertService.setOpen('Task succesfully edited!');
    } else {
      this.taskService.createTask(this.taskForm.value);
      this.alertService.setOpen('Task succesfully created!');
    }
    this.taskForm.reset();
    this.router.navigate(['/']);
  }
}
