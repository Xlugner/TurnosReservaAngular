import { Component, Input } from '@angular/core';

export type ContactType = 'email' | 'phone' | 'mobile';

@Component({
  selector: 'about-contact-item',
  templateUrl: './about-contact-item.component.html',
})
export class AboutContactItemComponent {
  @Input() type: ContactType = 'phone';
  @Input() value: string = '';
  @Input() href: string = '';
}
