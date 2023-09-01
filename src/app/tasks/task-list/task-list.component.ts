import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() tasks: Task[];
  isModalOpen = false;
  @Output() getData: EventEmitter<Task> = new EventEmitter();

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  scroll() {
    console.log('scrolling');
    this.getData.emit();
  }
}
