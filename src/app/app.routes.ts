import { Routes } from '@angular/router';

import { HomeAppComponent } from './view/home-app/home-app.component';
import { LoginAppComponent } from './view/login-app/login-app.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeAppComponent
  },
  {
    path: 'login',
    component: LoginAppComponent
  }
];