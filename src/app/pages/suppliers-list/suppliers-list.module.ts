import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersListComponent } from './suppliers-list.component';
import { supplierListRoutingModule } from './suppliers-list-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { AddNewSupplierComponent } from './add-new-supplier/add-new-supplier.component';


@NgModule({
  declarations: [SuppliersListComponent, AddNewSupplierComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    supplierListRoutingModule,
    FormsModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class SuppliersListModule { }
