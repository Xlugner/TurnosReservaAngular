import { Component } from '@angular/core';
import { AboutServiceCardComponent, ServiceCard } from '../../molecules/about-service-card/about-service-card.component';

@Component({
  selector: 'about-ofertamos',
  imports: [AboutServiceCardComponent],
  templateUrl: './about-ofertamos.component.html',
})
export class AboutOfertamosComponent {

  readonly services: ServiceCard[] = [
    {
      title: 'Garantía y Seguridad',
      description: 'Offix te garantiza rapidez y seguridad en la instalación, el mantenimiento y reparación de ordenadores y equipos periféricos.',
      iconSvg: `<path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>`,
      iconBg: 'bg-blue-50', iconColor: 'text-blue-500', iconFill: true,
    },
    {
      title: 'Reparación de Equipos',
      description: 'Máquinas registradoras, fotocopiadoras y Plotter. También reparamos tus equipos de comunicaciones con la mayor comodidad.',
      iconSvg: `<path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v1a1 1 0 102 0v-1h6v1a1 1 0 102 0v-1h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a1 1 0 00-1-1H6a1 1 0 00-1 1zm2 3V5h6v2H7zm-1 5a1 1 0 100-2 1 1 0 000 2zm8-1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"/>`,
      iconBg: 'bg-teal-600', iconColor: 'text-white', iconFill: true,
    },
    {
      title: 'Ventas a Distancia',
      description: 'Te ofrecemos mayor comodidad a través de ventas por correo electrónico e internet.',
      iconSvg: `<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"/>`,
      iconBg: 'bg-violet-50', iconColor: 'text-violet-500', iconFill: true,
    },
    {
      title: 'Comercialización',
      description: 'Para conectarte con tus metas comercializamos programas informáticos, ordenadores, equipos periféricos y de telecomunicaciones.',
      iconSvg: `<path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>`,
      iconBg: 'bg-orange-50', iconColor: 'text-orange-400', iconFill: true,
    },
    {
      title: 'Piezas y Accesorios',
      description: 'Además de sus partes, piezas y accesorios para asegurar el funcionamiento óptimo de tus equipos.',
      iconSvg: `<path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>`,
      iconBg: 'bg-pink-50', iconColor: 'text-pink-500', iconFill: true,
    },
    {
      title: 'Consultoría de Proyectos',
      description: 'Si lo que necesitas es ayuda para un proyecto inmediato, cuenta con nuestro equipo experto para asesorarte.',
      iconSvg: `<path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.995.508-1.944 1.064-2.8a5 5 0 10-6.128 0C7.492 12.056 7.985 13.005 8 14h4z"/>`,
      iconBg: 'bg-green-50', iconColor: 'text-green-500', iconFill: true,
    },
  ];
}
