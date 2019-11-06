import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component'
import { DashboardComponent } from '../app/components/dashboard/dashboard.component'
import { AuthGuard } from './auth-guard/auth.guard';
import { UnapprovedAnsComponent } from './components/unapproved-ans/unapproved-ans.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  { path: 'unapprovedAnswers', component: UnapprovedAnsComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
