import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './tasks/pages/index/index.component';
import { NewTaskComponent } from './tasks/pages/new-task/new-task.component';
import { EditTaskComponent } from './tasks/pages/edit-task/edit-task.component';

const routes: Routes = [
  { component: IndexComponent, path: '' },
  { component: NewTaskComponent, path: 'new' },
  { component: EditTaskComponent, path: 'edit/:id' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
