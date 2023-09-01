import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() clicked: EventEmitter<MouseEvent> = new EventEmitter();
  @Input() disabled: boolean;
  @Input() type?: 'danger' | 'success' | 'warning' | '' = '';
  @Input() outline?: boolean;
  @Input() class?: string;

  onClick(event: MouseEvent) {
    this.clicked.emit(event);
  }
}
