import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  tasks: Task[];

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
