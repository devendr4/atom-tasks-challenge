import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/core/services/tasks.service';
import { Task } from '../../models';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  editedTask: Task;
  constructor(
    private taskService: TasksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.editedTask = this.taskService.tasks.filter(v => v.id === id)[0];
  }

  redirect() {
    this.router.navigate(['/']);
  }
}
