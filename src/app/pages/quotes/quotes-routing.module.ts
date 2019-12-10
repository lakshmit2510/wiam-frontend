import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes.component';

const routes: Routes = [
  { path: '', component: QuotesComponent },
  // { path: 'create-purchase-order', component: CreatePurchaseOrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
