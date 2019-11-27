import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes } from './home/home.router';
import { nopageRoutes } from './no-page/no-page.router';
import { IndexRoutes } from './index/index.router';

export const baseRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  ...IndexRoutes,
  ...HomeRoutes,
  ...nopageRoutes
];
