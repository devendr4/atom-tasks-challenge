import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/core/services/tasks.service';
import dayjs from 'dayjs';

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
    this.setTaskToDelete.emit(this.task.id);
  }

  redirect() {
    this.router.navigate(['/new'], { state: { task: this.task } });
  }

  getDate() {
    const date = new Date(this.task.createdAt).toLocaleString();
    return dayjs(date).format('DD-MM-YY hh:mm a');
  }

  toggleCompleted() {
    this.taskService.updateTask({
      id: this.task.id,
      completed: !this.task.completed,
    });
  }
}
