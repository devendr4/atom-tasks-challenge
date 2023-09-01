import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() tasks: Task[];
  isModalOpen = false;
  //task id
  taskToDelete?: string;
  @Output() getData: EventEmitter<Task> = new EventEmitter();

  setTaskToDelete(taskId: string) {
    this.taskToDelete = taskId;
    this.isModalOpen = true;
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  scroll() {
    this.getData.emit();
  }
}
