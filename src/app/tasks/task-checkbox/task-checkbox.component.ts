import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-task-checkbox',
  templateUrl: './task-checkbox.component.html',
  styleUrls: ['./task-checkbox.component.scss'],
})
export class TaskCheckboxComponent {
  @Input() completed? = true;
  checked?: boolean = this.completed;
  @ViewChild('checkbox') check: ElementRef;
  @Output() toggleCheck = new EventEmitter();

  onClick() {
    const classes = this.check.nativeElement.classList;
    if (classes.contains('pristine'))
      this.check.nativeElement.classList.remove('pristine');
    this.toggleCheck.emit();
  }
}
