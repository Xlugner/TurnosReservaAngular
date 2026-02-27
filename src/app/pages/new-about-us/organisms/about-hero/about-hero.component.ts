import { Component } from '@angular/core';
import { UiDividerComponent } from '../../atoms/ui-divider.component';
import { AboutContactItemComponent } from '../../molecules/about-contact-item/about-contact-item.component';

@Component({
  selector: 'about-hero',
  imports: [UiDividerComponent, AboutContactItemComponent],
  templateUrl: './about-hero.component.html',
})
export class AboutHeroComponent {}
