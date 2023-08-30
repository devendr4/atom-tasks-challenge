import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() clicked: EventEmitter<MouseEvent> = new EventEmitter();
  @Input() disabled: boolean;
  @Input() type?: 'danger' | 'success' | 'warning' | '' = '';
  @Input() class?: string;

  ngOnInit(): void {
    console.log(this.type);
  }

  onClick(event: MouseEvent) {
    this.clicked.emit(event);
  }
}
