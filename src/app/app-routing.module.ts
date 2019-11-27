import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './login/user.component';
import { ReportsComponent } from './reports/reports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: 'dashboard',
    component: DashboardComponent, canActivate: [AuthGuard]
  },
  {path: 'report', 
    component: ReportsComponent, canActivate: [AuthGuard]
  },
  {path: '', redirectTo:'/login', pathMatch: 'full',
  },
  // {path: 'homepage',
  //   component: HomepageComponent
  // },
  {path: 'login',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
