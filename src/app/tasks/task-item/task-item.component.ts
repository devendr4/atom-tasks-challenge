import { Component, Input } from '@angular/core';
import { Task } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task: Task;

  constructor(private router: Router) {}

  redirect(event: unknown) {
    console.log('r', event);
    this.router.navigate(['/new']);
  }
}
