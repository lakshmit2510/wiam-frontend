import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuppliersListComponent } from "./suppliers-list.component";
import { SupplierListRoutingModule } from "./suppliers-list-routing.module";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { NzFormModule } from "ng-zorro-antd/form";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { AddNewSupplierComponent } from "./add-new-supplier/add-new-supplier.component";

@NgModule({
  declarations: [SuppliersListComponent, AddNewSupplierComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SupplierListRoutingModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    NzFormModule,
  ],
})
export class SuppliersListModule {}
