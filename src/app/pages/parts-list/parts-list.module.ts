import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartsListComponent } from './parts-list.component';
import { AddNewPartsComponent } from './add-new-parts/add-new-parts.component';
import { PartsListRoutingModule } from './parts-list-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import {
  MatInputModule,
  MatSelectModule
} from '@angular/material';



@NgModule({
  declarations: [PartsListComponent, AddNewPartsComponent],
  imports: [
    CommonModule,
    PartsListRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    NzAnchorModule,
  ],
  exports: [PartsListComponent]
})
export class PartsListModule { }
