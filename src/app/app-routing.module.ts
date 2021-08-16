import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScreeningComponent } from './screening/screening.component';
import { AdminComponent } from './admin/admin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { ScreenReportComponent } from './screen-report/screen-report.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'screening', component: ScreeningComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user-profile' ,component: UserProfileComponent},
  {path: 'user' ,component: UserComponent},
  {path: 'screen-report' ,component: ScreenReportComponent},
  {path: 'statistics' ,component: StatisticsComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
