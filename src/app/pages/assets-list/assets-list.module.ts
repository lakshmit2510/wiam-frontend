import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsListComponent } from './assets-list.component';
import { AssetsListRoutingModule } from './assets-list-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AddNewAssetComponent } from './add-new-asset/add-new-asset.component';



@NgModule({
  declarations: [AssetsListComponent, AddNewAssetComponent],
  imports: [
    CommonModule,
    AssetsListRoutingModule,
    NgZorroAntdModule
  ],
  exports: [AssetsListComponent]
})
export class AssetsListModule { }