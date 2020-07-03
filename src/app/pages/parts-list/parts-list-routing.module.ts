import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartsListComponent } from './parts-list.component';
import { AddNewPartsComponent } from './add-new-parts/add-new-parts.component';
import { EditProductsComponent } from './edit-products/edit-products.component';

const routes: Routes = [
  { path: '', component: PartsListComponent },
  { path: 'add-new-parts', component: AddNewPartsComponent },
  { path: 'edit-products', component: EditProductsComponent },
  { path: 'category-a', component: PartsListComponent, data: { key: 'Rare Stock' } },
  { path: 'category-b', component: PartsListComponent, data: { key: 'category-b' } },
  { path: 'category-c', component: PartsListComponent, data: { key: 'category-c' } },
  { path: 'category-d', component: PartsListComponent, data: { key: 'category-d' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartsListRoutingModule { }
