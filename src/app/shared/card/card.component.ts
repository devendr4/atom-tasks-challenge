import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [
    './card.component.scss',
    // '../../../../node_modules/papercss/dist/paper.min.css',
  ],
})
export class CardComponent {
  @Input() title: string;
  @Input() content: string;
}
