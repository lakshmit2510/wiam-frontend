import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuotesComponent } from "./quotes.component";
import { QuotesRoutingModule } from "./quotes-routing.module";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { AddQuoteComponent } from "./add-quote/add-quote.component";
import { PartsListComponent } from "./parts-list/parts-list.component";

@NgModule({
  declarations: [QuotesComponent, AddQuoteComponent, PartsListComponent],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [QuotesComponent, PartsListComponent],
})
export class QuotesModule {}
