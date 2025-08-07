import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: '/menu', pathMatch: 'full'
  },
  {
    path: 'menu',loadComponent: () => import("./pages/menu/menu.component").then(m => m.MenuComponent),
  },
  {
    path:'cart', loadComponent: () => import("./pages/cart/cart.component").then(m => m.CartComponent),
  },
  {
    path:'detail/:id',loadComponent: () => import("./pages/detail/detail.component").then(m => m.DetailComponent),
  },
  {
    path:'**', loadComponent: () => import("./pages/not-found/not-found.component").then(m => m.NotFoundComponent),
  }

];
