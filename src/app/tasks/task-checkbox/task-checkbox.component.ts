import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-checkbox',
  templateUrl: './task-checkbox.component.html',
  styleUrls: ['./task-checkbox.component.scss'],
})
export class TaskCheckboxComponent {
  @Input() label: string;
}
