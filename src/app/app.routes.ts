import { Routes } from '@angular/router';

import { HomeAppComponent } from './view/home-app/home-app.component';
import { LoginAppComponent } from './view/login-app/login-app.component';
import { MachineAppComponent } from './view/machine-app/machine-app.component';
import { PartAppComponent } from './view/part-app/part-app.component';
import { RepairAppComponent } from './view/repair-app/repair-app.component';
import { DepartamentoComponent } from './view/departmant-app/departmant-app.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeAppComponent
  },
  {
    path: 'home',
    component: HomeAppComponent
  },
  {
    path: 'login',
    component: LoginAppComponent
  },
  {
    path: 'departamento',
    component: DepartamentoComponent
  },
  {
    path: 'maquina',
    component: MachineAppComponent
  },
  {
    path: 'peca',
    component: PartAppComponent
  },
  {
    path: 'reparo',
    component: RepairAppComponent
  },
];