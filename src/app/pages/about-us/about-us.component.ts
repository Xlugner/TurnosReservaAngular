import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

@Component({
  selector: 'store-about-us',
  host: {
    class: 'block w-full',
  },
  imports: [RouterLink],
  templateUrl: './about-us.component.html',
})
export class OldAboutUsComponent {

  // Agrupa los miembros en slides de 3
  readonly teamMembers: TeamMember[] = [
    {
      name: 'Euclides Jiménez Arró',
      role: 'Presidente',
      photo: 'assets/images/team/euclides.jpg',
    },
    {
      name: 'José L. Figueredo',
      role: 'Económico',
      photo: 'assets/images/team/jose.jpg',
    },
    {
      name: 'Alexandro Hernández M.',
      role: 'Desarrollador de Software',
      photo: 'assets/images/team/alexandro.jpg',
    },
    // Agrega más miembros aquí; se paginarán automáticamente de 3 en 3
  ];

  readonly slides: TeamMember[][] = this.chunkArray(this.teamMembers, 3);

  currentSlide = 0;

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  private chunkArray<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
}