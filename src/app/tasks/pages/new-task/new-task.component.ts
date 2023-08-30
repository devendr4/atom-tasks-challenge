import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent {
  constructor(private router: Router) {}

  redirect(event: unknown) {
    console.log('r', event);
    this.router.navigate(['/']);
  }
}
