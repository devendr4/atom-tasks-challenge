import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() setTaskToDelete: EventEmitter<string> = new EventEmitter();

  constructor(
    private router: Router,
    private taskService: TasksService
  ) {}

  deleteTask() {
    console.log('deleting');
    this.setTaskToDelete.emit(this.task.id);
  }

  redirect() {
    this.router.navigate(['/new'], { state: { task: this.task } });
  }

  toggleCompleted() {
    console.log('complete');
    this.taskService.updateTask({
      ...this.task,
      completed: !this.task.completed,
    });
  }
}
