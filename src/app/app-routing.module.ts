import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'work-order-list', loadChildren: () => import('./pages/work-order-list/work-order-list.module').then(m => m.WorkOrderListModule) },
  { path: 'assets-list', loadChildren: () => import('./pages/assets-list/assets-list.module').then(m => m.AssetsListModule) },
  { path: 'parts-list', loadChildren: () => import('./pages/parts-list/parts-list.module').then(m => m.PartsListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
