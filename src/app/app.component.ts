import { Component } from '@angular/core';
import { AlertService } from './core/services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'atom-tasks-challenge';

  constructor(public alertService: AlertService) {}
}
