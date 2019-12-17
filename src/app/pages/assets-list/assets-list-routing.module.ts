import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetsListComponent } from './assets-list.component';
import {AddNewAssetComponent} from './add-new-asset/add-new-asset.component';

const routes: Routes = [
  { path: '', component: AssetsListComponent },
  { path: 'add-new-asset', component:  AddNewAssetComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsListRoutingModule { }
