import { Component, Input } from '@angular/core';
import { Task } from '../models';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() tasks: Task[];
  isModalOpen = false;

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
