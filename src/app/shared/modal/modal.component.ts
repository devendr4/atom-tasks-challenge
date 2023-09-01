import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() isOpen: boolean;
  @Input() taskId: string;
  @Output() openModal: EventEmitter<unknown> = new EventEmitter();

  constructor(
    private httpService: HttpService,
    private taskService: TasksService
  ) {}

  toggleModal() {
    this.openModal.emit();
  }

  deleteTask() {
    this.httpService.deleteTask(this.taskId).subscribe(() => {
      this.openModal.emit();
      this.taskService.deleteTask(this.taskId);
      console.log('deleted');
    });
  }
}
