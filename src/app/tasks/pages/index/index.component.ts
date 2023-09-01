import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  //used for pagination
  lastTaskId = '';

  constructor(
    private router: Router,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.httpService.getTasks(this.lastTaskId).subscribe(data => {
      if (data.lastTaskId) {
        this.tasks = this.tasks.concat(data.tasks);
        this.filteredTasks = this.tasks.filter(v => !v.completed);
        this.lastTaskId = data.lastTaskId;
      }
    });
  }

  redirect(event: unknown) {
    console.log('r', event);
    this.router.navigate(['/new']);
  }

  setActiveTasks(active: boolean) {
    this.filteredTasks = this.tasks.filter(v => v.completed === active);
  }
}
