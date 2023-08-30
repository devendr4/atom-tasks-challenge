import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-task-checkbox',
  templateUrl: './task-checkbox.component.html',
  styleUrls: ['./task-checkbox.component.scss'],
})
export class TaskCheckboxComponent implements AfterViewInit {
  @Input() completed? = false;
  checked?: boolean = this.completed;
  @ViewChild('checkbox') check: ElementRef;
  // renderer: Renderer2;

  ngAfterViewInit(): void {
    const classes = this.check.nativeElement.classList;
    if (classes.contains('pristine'))
      this.check.nativeElement.classList.remove('pristine');
  }
}
