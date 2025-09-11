import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products-page/products-page.component').then(
        (m) => m.ProductsPageComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'add-product',
    loadComponent: () =>
      import('./add-product/add-product.component').then(
        (m) => m.AddProductComponent
      ),
  },
  {
    path: 'productbatch',
    loadComponent: () =>
      import('./product-batch/product-batch.component').then(
        (m) => m.ProductBatchComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
