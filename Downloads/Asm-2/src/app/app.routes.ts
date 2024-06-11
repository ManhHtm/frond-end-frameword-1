import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DasComponent } from './das/das.component';
import { TaskComponent } from './task/task.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: 'das',
    component: DasComponent,
    title: '',
  },
  {
    path: 'add',
    component: AddComponent,
    title: '',
  },
  {
    path: 'detail/:product',
    component: DetailComponent,
    title: '',
  },
  {
    path: 'edit/:project',
    component: EditComponent,
    title: '',
  },
  {
    path: 'task',
    component: TaskComponent,
    title: '',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: '',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: '',
  },
  {
    path: '',
    component: HomeComponent,
    title: '',
  },
];
