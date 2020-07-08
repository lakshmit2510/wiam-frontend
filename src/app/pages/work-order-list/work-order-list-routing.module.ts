import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkOrderListComponent } from './work-order-list.component';
import { CreateWorkorderComponent } from './create-workorder/create-workorder.component';
import { RequestConfirmComponent } from './request-confirm/request-confirm.component';

const routes: Routes = [
  { path: '', component: WorkOrderListComponent },
  { path: 'create-workorder', component: CreateWorkorderComponent },
  { path: 'confirmation-page', component: RequestConfirmComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkOrderListRoutingModule { }
