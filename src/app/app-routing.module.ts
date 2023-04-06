import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ApiPageComponent } from './pages/api-page/api-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    component: DashboardComponent,
    path: '',
    children: [
      {
        component: HomePageComponent,
        path: '',
      },
      {
        component: ApiPageComponent,
        path: 'api',
      },
      {
        component: ContactPageComponent,
        path: 'contact',
      },
      {
        component: AboutPageComponent,
        path: 'about',
      },
      {
        component: AboutPageComponent,
        path: 'faqs',
      },
    ],
  },
  {
    component: LoginPageComponent,
    path: 'login',
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
