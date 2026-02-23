import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    {
        path:'',
        component: CounterComponent
    },
    {
        path:'hero',
        component: HeroPageComponent
    },
    {
        path:'about-us',
        component: AboutUsComponent
    },
    {
        path:'contact-us',
        component: ContactUsComponent
    }

];
