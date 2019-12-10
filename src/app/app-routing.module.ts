import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'work-order-list', loadChildren: () => import('./pages/work-order-list/work-order-list.module').then(m => m.WorkOrderListModule)},
  { path: 'assets-list', loadChildren: () => import('./pages/assets-list/assets-list.module').then(m => m.AssetsListModule) },
  { path: 'parts-list', loadChildren: () => import('./pages/parts-list/parts-list.module').then(m => m.PartsListModule) },
  { path: 'purchase-order', loadChildren: () => import('./pages/purchase-order/purchase-order.module').then(m => m.PurchaseOrderModule) },
  { path: 'quotes', loadChildren: () => import('./pages/quotes/quotes.module').then(m => m.QuotesModule) },
  { path: 'suppliers-list', loadChildren: () => import('./pages/suppliers-list/suppliers-list.module').then(m => m.SuppliersListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
