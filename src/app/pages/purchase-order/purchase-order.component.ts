import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../../services/purchaseorder-service/purchase-order.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.less']
})
export class PurchaseOrderComponent implements OnInit {

  purchaseOrdersList: any[];
  loadingData = false;

  constructor(private purchaseOrderService: PurchaseOrderService, private modal: NzModalService) { }

  ngOnInit() {
    this.getPurchaseordersList();
  }

  getPurchaseordersList() {
    this.loadingData = true;
    this.purchaseOrderService.getAllPurchaseOrders().subscribe((data: any[]) => {
      this.purchaseOrdersList = data;
      this.loadingData = false;
    });
  }

  deletePurchaseorder(id: number): void {
    this.modal.confirm({
      nzTitle: 'Are you sure to delete purchase order details?',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () =>
        this.purchaseOrderService.deletePurchaseOrderbyId(id).subscribe((res) => {
          this.getPurchaseordersList();
        }),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
    });
  }
}
