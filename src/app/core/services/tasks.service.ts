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
    //update currently stored task without having refetch all tasks
    const taskIndex = this.tasks.findIndex(v => v.id === editedTask.id);
    this.tasks[taskIndex] = editedTask;
  }

  appendTask(task: Task) {
    this.tasks.push(task);
    console.log(this.tasks);
  }

  deleteTask(taskId: string) {
    console.log('deleting');
    this.tasks = this.tasks.filter(v => v.id !== taskId);
    console.log(this.tasks);
  }
}
