import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ScannerDetectionComponent } from './scanner-detection/scanner-detection.component';
import { PartsSelectionComponent } from './parts-selection/parts-selection.component';



@NgModule({
  declarations: [ScannerDetectionComponent, PartsSelectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  exports: [ScannerDetectionComponent, PartsSelectionComponent]
})
export class SharedModule { }
