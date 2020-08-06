import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkOrderListComponent } from './work-order-list.component';
import { CreateWorkorderComponent } from './create-workorder/create-workorder.component';
import { RequestConfirmComponent } from './request-confirm/request-confirm.component';
import { EditWorkorderComponent } from './edit-workorder/edit-workorder.component';

const routes: Routes = [
  { path: '', component: WorkOrderListComponent, data: { key: 'Not Delivered' } },
  { path: 'create-workorder', component: CreateWorkorderComponent },
  { path: 'confirmation-page', component: RequestConfirmComponent },
  { path: 'edit-workorder', component: EditWorkorderComponent },
  { path: 'delivered-orders', component: WorkOrderListComponent, data: { key: 'Delivered' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkOrderListRoutingModule { }
