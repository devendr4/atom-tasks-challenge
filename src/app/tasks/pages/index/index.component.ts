import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  tasks: Task[] = [
    {
      id: 1,
      title: 'First',
      completed: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    { id: 2, title: 'Second', completed: true, description: 'Lorem Ipsum' },
    { id: 3, title: 'Third', completed: true, description: 'Lorem Ipsum' },

    { id: 1, title: 'First', completed: false, description: 'Lorem Ipsum' },
    { id: 2, title: 'Second', completed: true, description: 'Lorem Ipsum' },
    { id: 3, title: 'Third', completed: true, description: 'Lorem Ipsum' },

    { id: 1, title: 'First2', completed: true, description: 'Lorem Ipsum' },
    { id: 2, title: 'Second2', completed: true, description: 'Lorem Ipsum' },
    { id: 3, title: 'Third2', completed: true, description: 'Lorem Ipsum' },

    { id: 1, title: 'First3', completed: true, description: 'Lorem Ipsum' },
    { id: 2, title: 'Second3', completed: true, description: 'Lorem Ipsum' },
    { id: 3, title: 'Third3', completed: true, description: 'Lorem Ipsum' },
  ];
  filteredTasks: Task[] = this.tasks.filter(v => !v.completed);
  constructor(private router: Router) {}

  redirect(event: unknown) {
    console.log('r', event);
    this.router.navigate(['/new']);
  }

  setActiveTasks(active: boolean) {
    this.filteredTasks = this.tasks.filter(v => v.completed === active);
  }
}
