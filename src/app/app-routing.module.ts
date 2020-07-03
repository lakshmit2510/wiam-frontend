import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseTemplateComponent } from './templates/base-template/base-template.component';
import { AuthGuard } from './middlewares/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', canActivate: [AuthGuard], redirectTo: '/parts-list' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  // {
  //   path: 'welcome',
  //   component: BaseTemplateComponent,
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
  // },
  // {
  //   path: 'dashboard',
  //   component: BaseTemplateComponent,
  //   loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  // },
  {
    path: 'work-order-list',
    canActivate: [AuthGuard],
    component: BaseTemplateComponent,
    loadChildren: () => import('./pages/work-order-list/work-order-list.module').then(m => m.WorkOrderListModule)
  },
  // {
  //   path: 'assets-list',
  //   component: BaseTemplateComponent,
  //   loadChildren: () => import('./pages/assets-list/assets-list.module').then(m => m.AssetsListModule)
  // },
  {
    path: 'parts-list',
    canActivate: [AuthGuard],
    component: BaseTemplateComponent,
    loadChildren: () => import('./pages/parts-list/parts-list.module').then(m => m.PartsListModule)
  },
  {
    path: 'purchase-order',
    canActivate: [AuthGuard],
    component: BaseTemplateComponent,
    loadChildren: () => import('./pages/purchase-order/purchase-order.module').then(m => m.PurchaseOrderModule)
  },
  {
    path: 'quotes',
    canActivate: [AuthGuard],
    component: BaseTemplateComponent,
    loadChildren: () => import('./pages/quotes/quotes.module').then(m => m.QuotesModule)
  },
  {
    path: 'suppliers-list',
    canActivate: [AuthGuard],
    component: BaseTemplateComponent,
    loadChildren: () => import('./pages/suppliers-list/suppliers-list.module').then(m => m.SuppliersListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
