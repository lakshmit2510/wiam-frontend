import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PurchaseOrderComponent } from "./purchase-order.component";
import { PurchaseOrderRoutingModule } from "./purchase-order-routing.module";
import { CreatePurchaseOrderComponent } from "./create-purchase-order/create-purchase-order.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [PurchaseOrderComponent, CreatePurchaseOrderComponent],
  imports: [
    CommonModule,
    PurchaseOrderRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [PurchaseOrderComponent],
})
export class PurchaseOrderModule {}
