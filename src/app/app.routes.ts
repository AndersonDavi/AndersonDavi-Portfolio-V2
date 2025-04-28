import { Routes } from '@angular/router';
import { HomeComponent } from './landing/pages/home/home.component';
import { TestComponent } from './landing/pages/test/test.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
