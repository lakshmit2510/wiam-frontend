import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DxChartModule, DxPieChartModule } from 'devextreme-angular';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgZorroAntdModule,
    DxChartModule,
    DxPieChartModule,
    SharedModule
  ]
})
export class DashboardModule { }
