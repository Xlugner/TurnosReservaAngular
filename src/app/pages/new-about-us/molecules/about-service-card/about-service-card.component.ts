import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

export interface ServiceCard {
  title: string;
  description: string;
  iconSvg: string;       // SVG path inner content (just the <path> tags)
  iconBg: string;        // Tailwind bg class
  iconColor: string;     // Tailwind text class
  iconFill: boolean;     // true = fill, false = stroke
}

@Component({
  selector: 'about-service-card',
  imports: [NgClass],
  templateUrl: './about-service-card.component.html',
})
export class AboutServiceCardComponent {
  @Input() service!: ServiceCard;
}
