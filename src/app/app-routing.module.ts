import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseTemplateComponent } from './templates/base-template/base-template.component';
import { LandingTemplateComponent } from './templates/landing-template/landing-template.component';
import { LoginComponent } from './templates/landing-template/login/login.component';
import { RegisterComponent } from './templates/landing-template/register/register.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnAutorizedComponent } from './pages/un-autorized/un-autorized.component';
import { AuthGuard } from './middlewares/auth.guard';
import { Role } from './types/user';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        redirectTo: '/work-order-list',
    },
    {
        path: 'login',
        component: LandingTemplateComponent,
        children: [
            {
                path: '',
                component: LoginComponent,
            },
        ],
    },
    {
        path: 'register',
        component: LandingTemplateComponent,
        children: [
            {
                path: '',
                component: RegisterComponent,
            },
        ],
    },
    {
        path: 'work-order-list',
        canActivate: [AuthGuard],
        component: BaseTemplateComponent,
        data: { roles: [Role.Admin] },
        loadChildren: () => import('./pages/work-order-list/work-order-list.module').then((m) => m.WorkOrderListModule),
    },
    {
        path: 'parts-list',
        canActivate: [AuthGuard],
        component: BaseTemplateComponent,
        data: { roles: [Role.Admin] },
        loadChildren: () => import('./pages/parts-list/parts-list.module').then((m) => m.PartsListModule),
    },
    {
        path: 'purchase-order',
        canActivate: [AuthGuard],
        component: BaseTemplateComponent,
        data: { roles: [Role.Customer] },
        loadChildren: () => import('./pages/purchase-order/purchase-order.module').then((m) => m.PurchaseOrderModule),
    },
    {
        path: 'quotes',
        canActivate: [AuthGuard],
        component: BaseTemplateComponent,
        data: { roles: [Role.Admin] },
        loadChildren: () => import('./pages/quotes/quotes.module').then((m) => m.QuotesModule),
    },
    {
        path: 'suppliers-list',
        canActivate: [AuthGuard],
        component: BaseTemplateComponent,
        data: { roles: [Role.Admin] },
        loadChildren: () => import('./pages/suppliers-list/suppliers-list.module').then((m) => m.SuppliersListModule),
    },
    {
        path: 'user-list',
        component: BaseTemplateComponent,
        data: { roles: [Role.Admin] },
        loadChildren: () => import('./pages/user-list/user-list.module').then((m) => m.UserListModule),
    },
    {
        path: 'profile',
        component: BaseTemplateComponent,
        data: { roles: [Role.Admin] },
        loadChildren: () => import('./pages/profile/profile.module').then((m) => m.ProfileModule),
    },
    {
        path: 'print',
        data: { roles: [Role.Admin, Role.Customer] },
        loadChildren: () => import('./pages/print/print.module').then((m) => m.PrintModule),
    },

    { path: '**', redirectTo: '/404' },
    { path: '404', component: NotFoundComponent },
    { path: '403', component: UnAutorizedComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
