import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './login/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportsComponent } from './reports/reports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
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
  declarations: [
    AppComponent,
    HomepageComponent,
    UserComponent,
    ReportsComponent,
    DashboardComponent,
    RegisterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
