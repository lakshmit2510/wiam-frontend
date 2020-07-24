import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PartsListComponent } from "./parts-list.component";
import { AddNewPartsComponent } from "./add-new-parts/add-new-parts.component";
import { PartsListRoutingModule } from "./parts-list-routing.module";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { NzFormModule } from "ng-zorro-antd/form";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { SharedModule } from "../../shared/shared.module";
import { EditProductsComponent } from "./edit-products/edit-products.component";
import { DxDataGridModule, DxTemplateModule } from "devextreme-angular";
import { ViewPartsComponent } from './view-parts/view-parts.component';

@NgModule({
  declarations: [
    PartsListComponent,
    AddNewPartsComponent,
    EditProductsComponent,
    ViewPartsComponent,
  ],
  imports: [
    NzFormModule,
    CommonModule,
    PartsListRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    SharedModule,
    DxDataGridModule,
    DxTemplateModule,
  ],
  exports: [PartsListComponent],
})
export class PartsListModule { }
