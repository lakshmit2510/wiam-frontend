import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { PartsService } from '../../services/parts-service/parts.service';

@Component({
    selector: 'app-parts-selection',
    templateUrl: './parts-selection.component.html',
    styleUrls: ['./parts-selection.component.less'],
})
export class PartsSelectionComponent implements OnInit {
    @Input() isVisible = false;

    @Input() selectionType = 'single';

    @Input() selectedModel = null;

    @Input() selectedRows = [];

    @Output() cancelModal: EventEmitter<any> = new EventEmitter();

    @Output() addItem: EventEmitter<any> = new EventEmitter();

    @ViewChild(DxDataGridComponent)
    dataGrid: DxDataGridComponent;

    partsList: any = [];

    setOfCheckedId = new Set<number>();

    partsListColumns = [
        { key: 'ItemNumber', name: 'Product No', width: '100px' },
        { key: 'PartsName', name: 'Product Name', width: '150px' },
        { key: 'SKUNo', name: 'Location', width: '70px' },
        { key: 'Description', name: 'Description', width: '200px' },
        { key: 'QTYInHand', name: 'QTY', width: '50px' },
        {
            key: 'Model',
            name: 'Model',
            width: '150px',
        },
        // { key: 'VendorName', name: 'Vendor Name' },
        { key: 'SellingPrice', name: 'UnitPrice', width: '100px' },
    ];

    constructor(private partsService: PartsService) {}

    ngOnInit() {
        this.getPartsList();
    }

    getPartsList(): void {
        // const options: any = {};
        // if (this.selectedModel) {
        //   options.model = this.selectedModel;
        // }
        const category = '';
        this.partsService.getAllParts({ category }).subscribe((data) => {
            this.partsList = data;
        });
    }

    getSelectedRowsData() {
        return this.dataGrid.instance.getSelectedRowsData();
    }

    onItemChecked(id: number, checked: boolean): void {
        this.updateCheckedSet(id, checked);
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        // const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
        // this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        // this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }

    updateCheckedSet(id: number, checked: boolean): void {
        if (checked) {
            this.setOfCheckedId.add(id);
        } else {
            this.setOfCheckedId.delete(id);
        }
    }

    handleCancel(): void {
        this.cancelModal.emit();
    }

    handleOk(): void {
        const selectedIdList = this.getSelectedRowsData();
        // const selectedParts = [];
        // selectedIdList.forEach((item) => {
        //   const part = this.partsList.find((pItem) => pItem.PartsID === item);
        //   if (part) {
        //     selectedParts.push(part);
        //   }
        // });

        this.addItem.emit(selectedIdList);
    }

    onCellPrepared(e: any) {
        if (e.rowType === 'data' && e.column.command === 'select') {
            const QTYInHand = parseInt(e.data.QTYInHand, 10);
            if (!QTYInHand || QTYInHand === 0) {
                const instance = e.cellElement.querySelector('.dx-select-checkbox .dx-checkbox-container');
                instance.style.display = 'none';
                // e.cellElement.off();
            }
        }
    }
}
