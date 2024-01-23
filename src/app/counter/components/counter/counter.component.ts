import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
<h1>counter: {{counter}}</h1>
<button  (click)="increaseBy(+1)">+1</button>
<button  (click)="reset()">reset</button>
<button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent   {
 // constructor() { }
  public counter: number = 10;

  increaseBy(value: number) {
    this.counter += value;
  }

  reset() {
    this.counter = 10;
  }

}
