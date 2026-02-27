import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'about-info-card',
  imports: [NgClass],
  templateUrl: './about-info-card.component.html',
})
export class AboutInfoCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  /** Tailwind border-top color: 'border-teal-600' | 'border-red-500' */
  @Input() borderColor: string = 'border-teal-600';
  /** Tailwind bg for icon circle: 'bg-teal-50' | 'bg-red-50' */
  @Input() iconBg: string = 'bg-teal-50';
  /** Tailwind text color for icon: 'text-teal-600' | 'text-red-500' */
  @Input() iconColor: string = 'text-teal-600';
  /** 'eye' | 'badge' */
  @Input() icon: 'eye' | 'badge' = 'eye';
}
