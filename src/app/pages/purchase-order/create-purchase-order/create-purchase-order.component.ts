import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseOrderService } from '../../../services/purchaseorder-service/purchase-order.service';

@Component({
  selector: 'app-create-purchase-order',
  templateUrl: './create-purchase-order.component.html',
  styleUrls: ['./create-purchase-order.component.less']
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

  constructor(private purchaseOrderService: PurchaseOrderService, private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    this.purchaseOrderService.addNewPurchaseOrder(this.model).subscribe(res => {
      this.router.navigate(['/purchase-order']);
    });
  }

}
