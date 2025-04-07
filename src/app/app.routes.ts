import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'data-binding',
        loadComponent: () => import('./data-binding/data-binding.component').then(m => m.DataBindingComponent),
    },
    {
        path: '',
      redirectTo: 'data-binding',
      pathMatch: 'full',
    },
];
