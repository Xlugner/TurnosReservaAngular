import { Component } from "@angular/core";


// header.ts
@Component({
  selector: 'header',
  template: `
    <header class="brand-name" >  
        <img class="brand-logo" src="/src/app/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
  `,
  styles: `
    h1 {
      font-size: 3em;
    }
  `,
})
export class Header {
  /* Your component code goes here */
}