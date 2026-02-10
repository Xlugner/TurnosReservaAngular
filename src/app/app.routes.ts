import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { Header } from './pages/header/header';

export const routes: Routes = [
    {
        path:'',
        component: CounterComponent
    }

];
