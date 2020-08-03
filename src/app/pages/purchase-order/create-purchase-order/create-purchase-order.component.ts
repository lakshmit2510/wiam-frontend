import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseOrderService } from '../../../services/purchaseorder-service/purchase-order.service';
import { PartsService } from '../../../services/parts-service/parts.service';

@Component({
    selector: 'app-create-purchase-order',
    templateUrl: './create-purchase-order.component.html',
    styleUrls: ['./create-purchase-order.component.less'],
})
export class CreatePurchaseOrderComponent implements OnInit {
    model = {
        purchaseOrderNumber: '',
        partsName: '',
        partsNo: '',
        QTYToBuy: '',
        unitPrice: '',
        vendorName: '',
        estimatedDateOfDelivery: '',
    };

    selectedPart: any = {};
    partsList: any = [];

    constructor(
        private purchaseOrderService: PurchaseOrderService,
        private router: Router,
        private partsService: PartsService,
    ) {}

    ngOnInit() {
        const category = '';
        this.partsService.getAllParts(category).subscribe((data) => {
            this.partsList = data;
        });
    }

    submitForm() {
        this.purchaseOrderService.addNewPurchaseOrder(this.model).subscribe(() => {
            this.router.navigate(['/purchase-order']);
        });
    }

    handlePartsNoChange() {
        this.selectedPart = this.partsList.find((item) => {
            if (item.PartsID === this.model.partsNo) {
                return true;
            }
        });

        this.model.partsName = this.selectedPart.PartsName;
    }
}
