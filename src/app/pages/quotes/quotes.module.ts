import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes.component';
import { QuotesRoutingModule} from './quotes-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatSelectModule
} from '@angular/material';



@NgModule({
  declarations: [QuotesComponent],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,

  ],
  exports: [QuotesComponent]
})
export class QuotesModule { }
