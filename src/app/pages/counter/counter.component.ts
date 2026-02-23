import { Component, signal } from "@angular/core";


// counter.component.ts
@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
  
})
export class CounterComponent {
  /* Your component code goes here */
  counter = 10;
  counterSignal = signal(10);

  increaseBy(value: number){
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  decreaseBy(value: number){
    this.counter -= value;
    this.counterSignal.update((current) => current - value);
    
  }

  resetBy(){
    this.counter = 10;
    this.counterSignal.set(10);
  }
}