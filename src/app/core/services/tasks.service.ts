import { Injectable } from '@angular/core';
import { Task } from 'src/app/tasks/models';
import { HttpService } from '../http.service';
import { AlertService } from './alert.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [];
  //used for pagination
  lastTaskId = '';
  completedTaskFilter = false;

  constructor(
    private httpService: HttpService,
    private alertService: AlertService,
    private spinner: NgxSpinnerService
  ) {}

  getTasks() {
    //only make request if there are more tasks to fetch or if there aren't any tasks at first
    // if (reset) this.lastTaskId = '';
    if (this.lastTaskId || this.tasks.length === 0) {
      this.spinner.show();

      this.httpService.getTasks(this.lastTaskId).subscribe({
        next: data => {
          this.tasks = this.tasks.concat(data.tasks);
          this.lastTaskId = data.lastTaskId;

          this.spinner.hide();
        },
        error: () => {
          this.spinner.hide();
          this.alertService.setOpen(
            'An error has ocurred while fetching the tasks',
            'danger'
          );
        },
      });
    }
  }

  setActiveTasks() {
    this.completedTaskFilter = !this.completedTaskFilter;
  }

  getFilteredTasks() {
    return this.tasks.filter(v => v.completed === this.completedTaskFilter);
  }

  updateTask(editedTask: Partial<Task>) {
    this.spinner.show();
    this.httpService
      .editTask({
        ...editedTask,
      })
      .subscribe({
        next: task => {
          const taskIndex = this.tasks.findIndex(v => v.id === task.id);
          //need to spread both edited fields and existing ones
          //since date and id are not editable and could be lost otherwise
          this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...task };

          this.spinner.hide();

          this.alertService.setOpen('Task succesfully edited!');
          //updates currently stored task without having refetch all tasks
        },

        error: () => {
          this.spinner.hide();
          this.alertService.setOpen(
            'An error has ocurred while updating the task',
            'danger'
          );
        },
      });
  }

  createTask(task: Task) {
    this.spinner.show();
    this.httpService.createTask(task).subscribe({
      next: createdTask => {
        this.tasks.unshift(createdTask);
        this.spinner.hide();

        this.alertService.setOpen('Task succesfully created!');
      },

      error: () => {
        this.spinner.hide();
        this.alertService.setOpen(
          'An error has ocurred while creating the task',
          'danger'
        );
      },
    });
  }

  deleteTask(taskId: string) {
    this.spinner.show();
    this.httpService.deleteTask(taskId).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(v => v.id !== taskId);
        this.spinner.hide();
      },
      error: () => {
        this.spinner.hide();
        this.alertService.setOpen(
          'An error has ocurred while deleting the task',
          'danger'
        );
      },
    });
  }
}
