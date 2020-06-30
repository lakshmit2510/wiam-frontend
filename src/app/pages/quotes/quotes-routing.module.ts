import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';

const routes: Routes = [
  { path: '', component: QuotesComponent },
  { path: 'add-quote', component: AddQuoteComponent },
  // { path: 'create-purchase-order', component: CreatePurchaseOrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
