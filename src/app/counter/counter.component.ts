import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  counterValue = 0;
  inputValue = 0;

  constructor() {}

  incrementCounter() {
    this.counterValue += 1;
  }

  decrementCounter() {
    if (this.counterValue <= this.inputValue) return;

    this.counterValue -= 1;
  }
}
