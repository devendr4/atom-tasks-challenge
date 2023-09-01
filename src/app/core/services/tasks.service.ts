import { Injectable } from '@angular/core';
import { Task } from 'src/app/tasks/models';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  //used for pagination
  lastTaskId = '';

  constructor(private httpService: HttpService) {}

  getTasks(reset?: boolean) {
    //only make request if there are more tasks to fetch or if there aren't any tasks at first
    if (reset) this.lastTaskId = '';
    if (reset || this.lastTaskId || this.tasks.length === 0)
      this.httpService.getTasks(this.lastTaskId).subscribe(data => {
        this.tasks = this.tasks.concat(data.tasks);
        this.filteredTasks = this.tasks.filter(v => !v.completed);
        this.lastTaskId = data.lastTaskId;
      });
  }

  setActiveTasks(active: boolean) {
    this.filteredTasks = this.tasks.filter(v => v.completed === active);
  }

  updateTask(editedTask: Task) {
    this.httpService
      .editTask({
        ...editedTask,
      })
      .subscribe(task => {
        const taskIndex = this.tasks.findIndex(v => v.id === task.id);
        this.tasks[taskIndex] = task;
      });

    //update currently stored task without having refetch all tasks
  }

  createTask(task: Task) {
    this.httpService.createTask(task).subscribe(createdTask => {
      this.tasks.push(createdTask);
      console.log(this.tasks);
    });
  }

  deleteTask(taskId: string) {
    console.log('deleting');
    this.tasks = this.tasks.filter(v => v.id !== taskId);
    console.log(this.tasks);
  }
}
