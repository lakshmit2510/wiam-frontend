import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DxDataGridModule } from 'devextreme-angular';
import { AnQrcodeModule } from 'an-qrcode';
import { ScannerDetectionComponent } from './scanner-detection/scanner-detection.component';
import { PartsSelectionComponent } from './parts-selection/parts-selection.component';
import { WorkOrderViewModalComponent } from './work-order-view-modal/work-order-view-modal.component';

@NgModule({
    declarations: [ScannerDetectionComponent, PartsSelectionComponent, WorkOrderViewModalComponent],
    imports: [CommonModule, RouterModule, FormsModule, NgZorroAntdModule, DxDataGridModule, AnQrcodeModule],
    exports: [ScannerDetectionComponent, PartsSelectionComponent, WorkOrderViewModalComponent],
})
export class SharedModule {}
