import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
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
    path: 'add-product',
    loadComponent: () =>
      import('./features/products/add-product/add-product.component').then(
        (m) => m.AddProductComponent
      ),
  },
  {
    path: 'add-category',
    loadComponent: () =>
      import(
        './features/products/category/add-category/add-category.component'
      ).then((m) => m.AddCategoryComponent),
  },
  {
    path: 'productbatch',
    loadComponent: () =>
      import('./features/products/product-batch/product-batch.component').then(
        (m) => m.ProductBatchComponent
      ),
  },
  {
    path: 'add-order',
    loadComponent: () =>
      import('./features/order/add-order/add-order.component').then(
        (m) => m.AddOrderComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  { path: '**', redirectTo: '' },
];
