import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerDetectionComponent } from './scanner-detection/scanner-detection.component';



@NgModule({
  declarations: [ScannerDetectionComponent],
  imports: [
    CommonModule
  ],
  exports: [ScannerDetectionComponent]
})
export class SharedModule { }
