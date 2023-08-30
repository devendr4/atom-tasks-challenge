import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent {
  editedTask?: Task;
  constructor(private router: Router) {
    this.editedTask = this.router.getCurrentNavigation()?.extras.state?.[
      'task'
    ] as Task;
  }

  redirect() {
    this.router.navigate(['/']);
  }
}
