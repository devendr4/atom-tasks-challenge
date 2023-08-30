import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() isOpen: boolean;
  @Input() msg: string;
  @Output() openModal: EventEmitter<unknown> = new EventEmitter();

  toggleModal() {
    this.openModal.emit();
  }
}
