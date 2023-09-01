import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  isModalOpen = false;
  //task id
  taskToDelete?: string;
  constructor(
    private router: Router,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.tasksService.getTasks();
  }

  setTaskToDelete(taskId: string) {
    console.log(taskId);
    this.taskToDelete = taskId;
    this.isModalOpen = true;
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  getCurrentFilter() {
    return this.tasksService.completedTaskFilter;
  }

  getFilteredTasks() {
    return this.tasksService.getFilteredTasks();
  }

  redirect() {
    this.router.navigate(['/new']);
  }

  setActiveTasks() {
    this.tasksService.setActiveTasks();
  }
}
