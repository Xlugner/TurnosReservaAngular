import { Component } from "@angular/core";


// counter.component.ts
@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
  
})
export class CounterComponent {
  /* Your component code goes here */
  counter = 10;

  increaseBy(value: number){
    this.counter += value;
  }
}