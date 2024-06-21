import { Routes } from '@angular/router';
import { DashboardComponent } from './components/admin-logins/dashboard/dashboard.component';
import { IndexPageComponent } from './index-page/index-page.component';

export const routes: Routes = [
    {path: '', component: IndexPageComponent},
    {path: 'dashboard', component: DashboardComponent}
];
