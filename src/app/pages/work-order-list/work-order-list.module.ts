import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AnQrcodeModule } from 'an-qrcode';
import { WorkOrderListComponent } from './work-order-list.component';
import { WorkOrderListRoutingModule } from './work-order-list-routing.module';
import { CreateWorkorderComponent } from './create-workorder/create-workorder.component';
import { SharedModule } from '../../shared/shared.module';
import { RequestConfirmComponent } from './request-confirm/request-confirm.component';

@NgModule({
  declarations: [
    WorkOrderListComponent,
    CreateWorkorderComponent,
    RequestConfirmComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    WorkOrderListRoutingModule,
    MatInputModule,
    MatSelectModule,
    NzInputModule,
    DxDataGridModule,
    DxTemplateModule,
    SharedModule,
    AnQrcodeModule,
  ],
  exports: [WorkOrderListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WorkOrderListModule { }
