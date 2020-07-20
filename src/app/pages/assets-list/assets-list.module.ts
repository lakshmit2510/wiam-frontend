import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AssetsListComponent } from "./assets-list.component";
import { AssetsListRoutingModule } from "./assets-list-routing.module";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { AddNewAssetComponent } from "./add-new-asset/add-new-asset.component";
import { FormsModule } from "@angular/forms";
import { NzAnchorModule } from "ng-zorro-antd/anchor";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [AssetsListComponent, AddNewAssetComponent],
  imports: [
    CommonModule,
    AssetsListRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    NzAnchorModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [AssetsListComponent],
})
export class AssetsListModule {}
