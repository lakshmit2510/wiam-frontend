import { Component, OnInit, OnDestroy } from "@angular/core";
import { WorkOrderService } from "../../services/workOrder-service/work-order.service";
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';

enum StatusClass {
  'Not Delivered' = 'status-not-delivered',
  'Delivered' = 'status-delivered',
  'Cancelled' = 'status-cancelled'
}

@Component({
  selector: "app-work-order-list",
  templateUrl: "./work-order-list.component.html",
  styleUrls: ["./work-order-list.component.less"],
})
export class WorkOrderListComponent implements OnInit, OnDestroy {
  workOrderList: any[];

  requestListColumns = [
    { key: "RequestFormNo", name: "Parts Request Form No", width: "150px" },
    { key: "VehicleNo", name: "Vehicle No dsfsdfsd", width: "150px" },
    { key: "PartsList", name: "Parts List", width: "150px" },
    { key: "QTYRequested", name: "QTY Requested", width: "150px" },
    { key: "Model", name: "Model/Make", width: "150px" },
    {
      key: "PartsRequestedDate",
      name: "Parts Requested Date",
      width: "150px",
    },
    { key: "PartsIssueDate", name: "Parts Issue Date", width: "150px" },
    { key: "FirstName", name: "Created By", width: "150px" },
  ];

  constructor(private workOrderService: WorkOrderService, private modal: NzModalService, private router: Router) { }

  ngOnInit() {
    this.getList();
  }
  ngOnDestroy(): void {
    // // Do not forget to unsubscribe the event
    // this.workOrderService.unsubscribe();
  }
  getList() {
    this.workOrderService.getAllRequestedList().subscribe((data: any[]) => {
      this.workOrderList = data;
    });
  }
  showDeleteConfirm(id: number): void {
    this.modal.confirm({
      nzTitle: 'Are you sure to cancel this request?',
      // nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      // nzOnOk: () => console.log('OK'),
      nzOnOk: () => this.workOrderService.deleteRequestForm(id).subscribe(res => {
        this.getList();
      }),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }
  showConfirm(id: number): void {
    this.modal.confirm({
      nzTitle: '<i>Success!</i>',
      nzContent: '<b>Your order is successfully deliverd to the Customer</b>',
      nzOnOk: () => this.workOrderService.updateRequestForm(id).subscribe(res => {
        this.getList();
      }),
    });
  }

  getStatus(type) {
    return StatusClass[type];
  }

}
