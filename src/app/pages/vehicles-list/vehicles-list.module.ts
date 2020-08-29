import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesListRoutingModule } from './vehicles-list-routing.module';
import { VehiclesListComponent } from './vehicles-list.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { AddNewVehicleComponent } from './add-new-vehicle/add-new-vehicle.component';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  declarations: [VehiclesListComponent, AddNewVehicleComponent],
  imports: [
    CommonModule,
    VehiclesListRoutingModule,
    NgZorroAntdModule,
    DxDataGridModule,
    DxTemplateModule,
    NzFormModule

  ]
})
export class VehiclesListModule { }
