import { Component, signal } from '@angular/core';

@Component({
    selector: 'hero-page',
    templateUrl: './hero-page.component.html'
})

export class HeroPageComponent {
    changeAge() {
        this.age.set(60);
    }
    name = signal('Ironman');
    
    age = signal(45);

    getHeroDescription() {
            return `${this.name()} - ${this.age()}`;
    }

    changeHero() {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }
     
}