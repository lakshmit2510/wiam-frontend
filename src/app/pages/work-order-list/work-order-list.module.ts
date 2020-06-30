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
import { QuotesModule } from '../quotes/quotes.module';



@NgModule({
  declarations: [WorkOrderListComponent, CreateWorkorderComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    WorkOrderListRoutingModule,
    MatInputModule,
    MatSelectModule,
    NzInputModule,
    QuotesModule,
  ],
  exports: [WorkOrderListComponent]
})
export class WorkOrderListModule { }
