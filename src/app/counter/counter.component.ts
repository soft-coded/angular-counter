import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  counterValue = 0;
  inputValue = 1;

  constructor() {}

  incrementCounter() {
    this.counterValue += this.inputValue;
  }

  decrementCounter() {
    this.counterValue -= this.inputValue;
  }
}
