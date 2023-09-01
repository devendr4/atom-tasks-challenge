import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models';
import { HttpService } from 'src/app/core/http.service';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(
    private router: Router,
    public tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.tasksService.getTasks();
  }

  redirect(event: unknown) {
    this.router.navigate(['/new']);
  }

  setActiveTasks(active: boolean) {
    this.tasksService.setActiveTasks(active);
  }
}
