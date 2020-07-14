import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersListComponent } from './suppliers-list.component';
import { AddNewSupplierComponent } from './add-new-supplier/add-new-supplier.component';

const routes: Routes = [
  { path: '', component: SuppliersListComponent },
  { path: 'add-new-supplier', component: AddNewSupplierComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierListRoutingModule { }
