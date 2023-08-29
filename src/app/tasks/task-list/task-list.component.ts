import { Component } from '@angular/core';
import { Task } from '../models';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  tasks: Task[] = [
    { id: 1, title: 'First', pending: true, description: 'Lorem Ipsum' },
    { id: 2, title: 'Second', pending: true, description: 'Lorem Ipsum' },
    { id: 3, title: 'Third', pending: true, description: 'Lorem Ipsum' },

    { id: 1, title: 'First', pending: true, description: 'Lorem Ipsum' },
    { id: 2, title: 'Second', pending: true, description: 'Lorem Ipsum' },
    { id: 3, title: 'Third', pending: true, description: 'Lorem Ipsum' },

    { id: 1, title: 'First', pending: true, description: 'Lorem Ipsum' },
    { id: 2, title: 'Second', pending: true, description: 'Lorem Ipsum' },
    { id: 3, title: 'Third', pending: true, description: 'Lorem Ipsum' },

    { id: 1, title: 'First', pending: true, description: 'Lorem Ipsum' },
    { id: 2, title: 'Second', pending: true, description: 'Lorem Ipsum' },
    { id: 3, title: 'Third', pending: true, description: 'Lorem Ipsum' },
  ];
}
