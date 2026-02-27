import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ui-divider',
  imports: [NgClass],
  template: `<div class="w-12 h-1 rounded mb-6" [ngClass]="color"></div>`,
})
export class UiDividerComponent {
  /** Tailwind bg color class: 'bg-red-600' | 'bg-slate-800' | 'bg-teal-600' */
  @Input() color: string = 'bg-slate-800';
}
