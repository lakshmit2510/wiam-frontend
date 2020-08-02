import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintRoutingModule } from './print-routing.module';
import { PrintComponent } from './print.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [PrintComponent],
    imports: [CommonModule, PrintRoutingModule, SharedModule],
})
export class PrintModule {}
