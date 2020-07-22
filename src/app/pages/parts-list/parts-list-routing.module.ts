import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PartsListComponent } from "./parts-list.component";
import { AddNewPartsComponent } from "./add-new-parts/add-new-parts.component";
import { EditProductsComponent } from "./edit-products/edit-products.component";

const routes: Routes = [
  { path: "", component: PartsListComponent, data: { key: "" } },
  { path: "add-new-parts", component: AddNewPartsComponent },
  { path: "edit-products", component: EditProductsComponent },
  // { path: "totalProductsList", component: PartsListComponent, data: {key: ""} },
  { path: "category-a", component: PartsListComponent, data: { key: "High Value Stock" } },
  { path: "category-b", component: PartsListComponent, data: { key: "Normal Stock" } },
  { path: "category-c", component: PartsListComponent, data: { key: "Dead Stock" } },
  // { path: "category-d", component: PartsListComponent, data: { key: "Normal Stock" } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartsListRoutingModule { }
