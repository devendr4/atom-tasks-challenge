import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-btn',
  templateUrl: './icon-btn.component.html',
  styleUrls: ['./icon-btn.component.scss'],
})
export class IconBtnComponent {
  @Input() iconSrc: string;
  @Input() class: string;
  @Output() clicked: EventEmitter<MouseEvent> = new EventEmitter();

  onClick(event: MouseEvent) {
    this.clicked.emit(event);
  }
}
