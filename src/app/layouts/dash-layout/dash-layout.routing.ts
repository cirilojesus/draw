import { Routes } from '@angular/router';

export const DashLayoutRoutes: Routes = [
    { path: 'home', loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule) },
];
