import { Route } from '@angular/router';

  export const routes: Route[] = [
    {
      path: '',
      loadComponent: () => import('./components/moneda/moneda.component').then(mod => mod.MonedaComponent),
    },
    {
      path: 'moneda',
      loadComponent: () => import('./components/moneda/moneda.component').then(mod => mod.MonedaComponent),
    }
    ,
    {
      path: 'crearEditar',
      loadComponent: () => import('./components/crear-editar/crear-editar.component').then(mod => mod.CrearEditarComponent),
    },
    {
      path:"**",
      redirectTo: "moneda"
    }

  ];


