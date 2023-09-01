import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './tasks/pages/index/index.component';
import { NewTaskComponent } from './tasks/pages/new-task/new-task.component';

const routes: Routes = [
  { component: IndexComponent, path: '' },
  { component: NewTaskComponent, path: 'new' },
  { component: NewTaskComponent, path: 'new' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
