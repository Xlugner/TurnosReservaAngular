import { Component } from '@angular/core';
import { AboutHeroComponent } from './organisms/about-hero/about-hero.component';
import { AboutVisionDestacamosComponent } from './organisms/about-vision-destacamos/about-vision-destacamos.component';
import { AboutPreferimosComponent } from './organisms/about-preferimos/about-preferimos.component';
import { AboutOfertamosComponent } from './organisms/about-ofertamos/about-ofertamos.component';

@Component({
  selector: 'store-about-us',
  host: {
    class: 'block w-full',
  },
  imports: [
    AboutHeroComponent,
    AboutVisionDestacamosComponent,
    AboutPreferimosComponent,
    AboutOfertamosComponent,
  ],
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent {}
