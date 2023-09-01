import { Injectable } from '@angular/core';
import { Task } from 'src/app/tasks/models';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [];
  //used for pagination
  lastTaskId = '';
  completedTaskFilter = false;

  constructor(private httpService: HttpService) {}

  getTasks() {
    console.log('getting');
    //only make request if there are more tasks to fetch or if there aren't any tasks at first
    // if (reset) this.lastTaskId = '';
    if (this.lastTaskId || this.tasks.length === 0)
      this.httpService.getTasks(this.lastTaskId).subscribe(data => {
        this.tasks = this.tasks.concat(data.tasks);
        this.lastTaskId = data.lastTaskId;
      });
  }

  setActiveTasks() {
    this.completedTaskFilter = !this.completedTaskFilter;
  }

  getFilteredTasks() {
    return this.tasks.filter(v => v.completed === this.completedTaskFilter);
  }

  updateTask(editedTask: Partial<Task>) {
    this.httpService
      .editTask({
        ...editedTask,
      })
      .subscribe(task => {
        const taskIndex = this.tasks.findIndex(v => v.id === task.id);
        //need to spread both edited fields and existing ones
        //since date and id are not editable and could be lost otherwise
        this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...task };
      });

    //update currently stored task without having refetch all tasks
  }

  createTask(task: Task) {
    this.httpService.createTask(task).subscribe(createdTask => {
      this.tasks.push(createdTask);
    });
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(v => v.id !== taskId);
  }
}
