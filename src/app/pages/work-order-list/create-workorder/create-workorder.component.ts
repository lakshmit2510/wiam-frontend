import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QuotesService } from '../../../services/quotes-service/quotes.service';
import { WorkOrderService } from '../../../services/work-order-service/work-order.service';

interface QuoteInterface {
    item: string;
    description: string;
    quantity: number;
    unitPrice: number;
}

class QuoteModel {
    static create(event: QuoteInterface) {
        return { ...event };
    }
}

@Component({
    selector: 'app-create-workorder',
    templateUrl: './create-workorder.component.html',
    styleUrls: ['./create-workorder.component.less'],
})
export class CreateWorkorderComponent implements OnInit {
    isOpenParts = false;

    inputValue: '';

    date: '';

    totalAmount = 0;

    selectedRows = [];

    brandOptionList = [];

    modelOptionList = [];

    brandTagOptions = [];

    modelTagOptions = [];

    model = {
        vehicleNo: '',
        vehicleModel: '',
        partsList: '',
        description: '',
        qtyRequested: '',
        serviceType: '',
        technicianName: '',
        brand: '',
    };

    listOfData = [];

    listOfModels: Array<{ Model: string; PartsID: string }> = [];

    constructor(
        private quotesService: QuotesService,
        private router: Router,
        private workOrderService: WorkOrderService,
    ) {}

    ngOnInit() {
        this.workOrderService.getAllRequestedList().subscribe((data: any[]) => {
            data.forEach((item) => {
                const isBrandExists = this.brandOptionList.find((bItem) => bItem.value === item.Brand);
                const isModelExists = this.modelOptionList.find((mItem) => mItem.value === item.Model);
                if (item.Brand && item.Brand !== '' && !isBrandExists) {
                    this.brandOptionList.push({ label: item.Brand, value: item.Brand });
                }
                if (item.Model && item.Model !== '' && !isModelExists) {
                    this.modelOptionList.push({ label: item.Model, value: item.Model });
                }
            });
        });
    }

    onDateChange(): void {}

    closePartsModal(): void {
        this.isOpenParts = false;
    }

    openPartsModal(): void {
        this.isOpenParts = true;
    }

    handlePartsSelection(parts): void {
        const partsList = parts
            .map((item) => {
                if (item.QTYInHand && parseInt(item.QTYInHand, 10) > 0) {
                    return {
                        partId: item.PartsID,
                        itemNumber: item.ItemNumber,
                        description: item.Description,
                        unitPrice: item.SellingPrice,
                        quantity: 1,
                        quantityInHand: item.QTYInHand,
                    };
                }
            })
            .filter((item) => item);
        this.listOfData = [...partsList];
        this.selectedRows = partsList.map((item) => item.partId);

        this.isOpenParts = false;
    }

    handleBrandChange(val) {
        this.brandTagOptions = val.length > 0 ? [val[val.length - 1]] : [];
    }

    handleModelChange(val) {
        this.modelTagOptions = val.length > 0 ? [val[val.length - 1]] : [];
    }

    removeLine(idx): void {
        this.listOfData.splice(idx, 1);
    }

    savePartsRequestForm(): void {
        this.model.partsList = this.listOfData.map((item) => item.partId).join(',');
        this.model.qtyRequested = this.listOfData.map((item) => item.quantity).join(',');
        this.model.brand = this.brandTagOptions[0];
        this.model.vehicleModel = this.modelTagOptions[0];
        this.quotesService.savePartsRequestForm(this.model).subscribe((res: any) => {
            this.router.navigate(['/work-order-list/confirmation-page'], {
                queryParams: { workOrderId: res.insertId },
            });
        });
    }
}
