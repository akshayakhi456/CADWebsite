import { Routes } from '@angular/router';
import { DashboardComponent } from './components/admin-logins/dashboard/dashboard.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { LoginComponent } from './components/admin-logins/login/login.component';
import { authGuard } from './shared/guards/auth.guards';

export const routes: Routes = [
    {path: '', component: IndexPageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]}
];
