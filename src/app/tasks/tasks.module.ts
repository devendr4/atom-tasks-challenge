import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { SharedModule } from '../shared/shared.module';
import { TaskCheckboxComponent } from './task-checkbox/task-checkbox.component';

@NgModule({
  declarations: [TaskListComponent, TaskCheckboxComponent],
  imports: [CommonModule, SharedModule],
  exports: [TaskListComponent],
})
export class TasksModule {}
