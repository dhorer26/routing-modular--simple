import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';

export const HomeRoutes: Routes = [
   {
       path: '',
       component: HomeComponent,
       children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'settings', component: SettingsComponent },
        { path: 'products', component: ProductsComponent }
       ]
   }
];
