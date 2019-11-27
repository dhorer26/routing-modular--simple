import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index.component';
import { Routes, RouterModule } from '@angular/router';

export const IndexRoutes: Routes = [
   {
       path: '',
       component: IndexComponent,
       children: [
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'forgot', component: ForgotComponent }
       ]
   }
];
