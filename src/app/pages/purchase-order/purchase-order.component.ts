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

  requestListColumns = [
    { key: 'PurchaseOrderNumber', name: 'Purchase Order No.', width: '150px' },
    { key: 'ItemNumber', name: 'Requested Item No.', width: '150px' },
    { key: 'PartName', name: 'Parts Name', width: '100px' },
    { key: 'RequestedQTY', name: 'Requested QTY', width: '150px' },
    { key: 'UnitPrice', name: 'Unit Price', width: '80px' },
    {
      key: 'CreatedOn',
      name: 'Created Date',
      width: '100px',
    },
    { key: 'EstimatedDateOfDelivery', name: 'Estimated Date Of Delivery', width: '200px' },
    { key: 'ReceivedDate', name: 'Received Date', width: '150px' },
    { key: 'Status', name: 'Status', width: '150px' },
  ];

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

  updatePurchaseorder(id: number): void {
    this.modal.confirm({
      nzTitle: 'Update Purchase Order Details',
      nzContent: '<b>Purchase Order Received Date and Status updated successfully </b>',
      nzOkText: 'Yes',
      nzOnOk: () =>
        this.purchaseOrderService.updatePurchaseOrderbyId(id).subscribe((res) => {
          this.getPurchaseordersList();
        }),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
    });
  }
}
