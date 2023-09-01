import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { SharedModule } from '../shared/shared.module';
import { TaskCheckboxComponent } from './task-checkbox/task-checkbox.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { IndexComponent } from './pages/index/index.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskCheckboxComponent,
    TaskItemComponent,
    TaskFormComponent,
    IndexComponent,
    NewTaskComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    InfiniteScrollModule,
    AngularSvgIconModule,
    ReactiveFormsModule,
    NgScrollbarModule,
  ],
  exports: [TaskListComponent],
})
export class TasksModule {}
