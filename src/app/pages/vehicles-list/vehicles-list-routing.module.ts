import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesListComponent } from './vehicles-list.component';
import { AddNewVehicleComponent } from './add-new-vehicle/add-new-vehicle.component';


const routes: Routes = [
  { path: '', component: VehiclesListComponent },
  { path: 'add-new-vehicle', component: AddNewVehicleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesListRoutingModule { }
