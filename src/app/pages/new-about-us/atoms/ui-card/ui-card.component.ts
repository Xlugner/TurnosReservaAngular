import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

export interface CardIcon {
  name: string;
  bgClass: string;
  colorClass: string;
  size?: 'sm' | 'md' | 'lg';
}

export interface CardData {
  title?: string;
  description?: string;
  icon?: CardIcon;
  variant?: 'default' | 'vision' | 'service' | 'featured';
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

@Component({
  selector: 'ui-card',
  imports: [NgClass],
  templateUrl: './ui-card.component.html',
})
export class UiCardComponent {
  @Input() data!: CardData;

  get cardClasses(): string {
    const baseClasses = 'transition-all duration-300';
    const variantClasses = this.getVariantClasses();
    const hoverClasses = this.data.hover !== false ? 'hover:shadow-sm' : '';
    const paddingClasses = this.getPaddingClasses();
    
    return [baseClasses, variantClasses, hoverClasses, paddingClasses].join(' ');
  }

  get iconClasses(): string {
    if (!this.data.icon) return '';
    
    const sizeClasses = this.getIconSizeClasses();
    const hoverClasses = this.data.variant === 'service' ? 'group-hover:bg-primary group-hover:scale-110' : '';
    return [this.data.icon.bgClass, this.data.icon.colorClass, sizeClasses, hoverClasses].join(' ');
  }

  private getVariantClasses(): string {
    const variant = this.data.variant || 'default';
    
    const variantMap = {
      vision: 'bg-white dark:bg-surface-dark rounded-sm shadow-subtle border border-gray-100 dark:border-gray-700',
      service: 'bg-white dark:bg-surface-dark rounded-sm shadow-subtle border border-gray-100 hover:border-gray-200 dark:border-gray-800 dark:hover:border-gray-700',
      featured: 'bg-white dark:bg-surface-dark p-8 rounded-sm shadow-subtle border border-gray-100 dark:border-gray-700',
      default: 'bg-white dark:bg-surface-dark rounded-2xl shadow-sm'
    };
    
    return variantMap[variant];
  }

  private getPaddingClasses(): string {
    const padding = this.data.padding || 'md';
    
    const paddingMap = {
      sm: 'p-4',
      lg: 'p-8',
      md: 'p-6'
    };
    
    return paddingMap[padding];
  }

  private getIconSizeClasses(): string {
    const size = this.data.icon?.size || 'md';
    
    const sizeMap = {
      sm: 'w-10 h-10',
      lg: 'w-16 h-16',
      md: 'w-12 h-12'
    };
    
    return sizeMap[size];
  }
}
