import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardNumber: string;
  @Input() name: string;
  @Input() expiration: string;
  randomColor: string;
  randomColorObject: object;

  constructor() {
    this.randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.randomColorObject = {fill: this.randomColor};
  }


  ngOnInit(): void {
  }

}
