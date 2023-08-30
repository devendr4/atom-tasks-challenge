import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { SharedModule } from '../shared/shared.module';
import { TaskCheckboxComponent } from './task-checkbox/task-checkbox.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TaskItemComponent } from './task-item/task-item.component';

@NgModule({
  declarations: [TaskListComponent, TaskCheckboxComponent, TaskItemComponent],
  imports: [CommonModule, SharedModule, AngularSvgIconModule],
  exports: [TaskListComponent],
})
export class TasksModule {}
