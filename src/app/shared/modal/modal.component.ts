import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert.service';
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
    private taskService: TasksService,
    private alertService: AlertService
  ) {}

  toggleModal() {
    this.openModal.emit();
  }

  deleteTask() {
    this.taskService.deleteTask(this.taskId);
    this.openModal.emit();

    this.alertService.setOpen('Task succesfully deleted!');
  }
}
