import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartsListComponent } from './parts-list.component';
import { AddNewPartsComponent } from './add-new-parts/add-new-parts.component';
import { PartsListRoutingModule } from './parts-list-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzFormModule } from 'ng-zorro-antd/form';
import {
  MatInputModule,
  MatSelectModule
} from '@angular/material';

import { SharedModule } from '../../shared/shared.module';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';


@NgModule({
  declarations: [PartsListComponent, AddNewPartsComponent, EditProductsComponent],
  imports: [
    NzFormModule,
    CommonModule,
    PartsListRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    NzAnchorModule,
    SharedModule,
    NzUploadModule,
  ],
  exports: [PartsListComponent]
})
export class PartsListModule { }
