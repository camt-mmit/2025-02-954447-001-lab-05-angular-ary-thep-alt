import { Routes } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';

export const routes: Routes = [
  {
    path: '',

    redirectTo: 'hello-world',
    pathMatch: 'full',
  }, // default route
  { path: 'hello-world', component: HelloWorld },
];
