import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderListComponent } from './work-order-list.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { WorkOrderListRoutingModule } from './work-order-list-routing.module';
import { CreateWorkorderComponent } from './create-workorder/create-workorder.component';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
import { RequestConfirmComponent } from './request-confirm/request-confirm.component';



@NgModule({
  declarations: [WorkOrderListComponent, CreateWorkorderComponent, RequestConfirmComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    WorkOrderListRoutingModule,
    MatInputModule,
    MatSelectModule,
    NzInputModule,
    SharedModule,
  ],
  exports: [WorkOrderListComponent]
})
export class WorkOrderListModule { }
