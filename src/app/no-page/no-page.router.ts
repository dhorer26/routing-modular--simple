import { NoPageComponent } from './no-page.component';
import { Routes, RouterModule } from '@angular/router';

export const nopageRoutes: Routes = [
   {
       path: '**',
       component: NoPageComponent
   }
];
