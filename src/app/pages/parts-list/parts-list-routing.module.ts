import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartsListComponent } from './parts-list.component';
import { AddNewPartsComponent } from './add-new-parts/add-new-parts.component';
import { EditProductsComponent } from './edit-products/edit-products.component';

const routes: Routes = [
  { path: '', component: PartsListComponent },
  { path: 'add-new-parts', component: AddNewPartsComponent },
  { path: 'edit-products', component: EditProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartsListRoutingModule { }
