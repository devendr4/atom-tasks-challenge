import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/http.service';
import { TasksService } from 'src/app/core/services/tasks.service';

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

  constructor(
    private httpService: HttpService,
    private taskService: TasksService
  ) {}

  onSubmit() {
    if (this.task)
      this.httpService
        .editTask({ ...this.taskForm.value, id: this.task.id })
        .subscribe(editedTask => {
          console.log(editedTask);
          this.taskService.updateTask(editedTask);
        });
    else
      this.httpService
        .createTask(this.taskForm.value)
        .subscribe(createdTask => {
          this.taskService.appendTask(createdTask);
        });
    this.taskForm.reset();
  }
}
