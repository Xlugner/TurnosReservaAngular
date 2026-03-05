import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiCardComponent, CardIcon } from './atoms/ui-card';

@Component({
  selector: 'store-about-us',
  host: {
    class: 'block w-full',
  },
  imports: [
    UiCardComponent,
    RouterLink,
  ],
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent {
  readonly services: { title: string; description: string; icon: CardIcon }[] = [
    {
      title: 'Garantía y Seguridad',
      description: 'Offix te garantiza rapidez y seguridad en la instalación, el mantenimiento y reparación de ordenadores y equipos periféricos.',
      icon: {
        name: 'security',
        bgClass: 'bg-blue-50',
        colorClass: 'text-blue-500',
        size: 'md'
      }
    },
    {
      title: 'Reparación de Equipos',
      description: 'Máquinas registradoras, fotocopiadoras y Plotter. También reparamos tus equipos de comunicaciones con la mayor comodidad.',
      icon: {
        name: 'print',
        bgClass: 'bg-teal-50',
        colorClass: 'text-teal-600',
        size: 'md'
      }
    },
    {
      title: 'Ventas a Distancia',
      description: 'Te ofrecemos mayor comodidad a través de ventas por correo electrónico e internet.',
      icon: {
        name: 'shopping_bag',
        bgClass: 'bg-violet-50',
        colorClass: 'text-violet-500',
        size: 'md'
      }
    },
    {
      title: 'Comercialización',
      description: 'Para conectarte con tus metas comercializamos programas informáticos, ordenadores, equipos periféricos y de telecomunicaciones.',
      icon: {
        name: 'storefront',
        bgClass: 'bg-orange-50',
        colorClass: 'text-orange-400',
        size: 'md'
      }
    },
    {
      title: 'Piezas y Accesorios',
      description: 'Además de sus partes, piezas y accesorios para asegurar el funcionamiento óptimo de tus equipos.',
      icon: {
        name: 'build',
        bgClass: 'bg-pink-50',
        colorClass: 'text-pink-500',
        size: 'md'
      }
    },
    {
      title: 'Consultoría de Proyectos',
      description: 'Si lo que necesitas es ayuda para un proyecto inmediato, cuenta con nuestro equipo experto para asesorarte.',
      icon: {
        name: 'lightbulb',
        bgClass: 'bg-green-50',
        colorClass: 'text-green-500',
        size: 'md'
      }
    },
  ];

  getVisionCard(icon: string, title: string, description: string, bgClass: string, colorClass: string) {
    const iconName = icon === 'eye' ? 'visibility' : 'verified';

    return {
      title,
      description,
      variant: 'vision' as const,
      hover: true,
      padding: 'lg' as const,
      icon: {
        name: iconName,
        bgClass,
        colorClass,
        size: 'lg' as const
      }
    };
  }

  getServiceCard(service: { title: string; description: string; icon: CardIcon }) {
    return {
      ...service,
      variant: 'service' as const,
      hover: true,
      padding: 'md' as const,
    };
  }
}
