import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  border: string;
  class: string;

  ngOnInit(): void {
    this.border = this.randomBorder();
  }

  randomBorder() {
    //paper css has 6 different borders to choose from
    const randomNumber = Math.random();

    const result = Math.floor(randomNumber * 6) + 1;

    return result < 1 ? '' : '-' + result;
  }
}
