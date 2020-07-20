import { Component, OnInit, OnDestroy } from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal";
import QrCode from "qrcode-reader";
import { WorkOrderService } from "../../services/workOrder-service/work-order.service";
import { AuthenticationService } from "../../services/authentication-service/authentication.service";

enum StatusClass {
  "Not Delivered" = "status-not-delivered",
  "Delivered" = "status-delivered",
  "Cancelled" = "status-cancelled",
}

@Component({
  selector: "app-work-order-list",
  templateUrl: "./work-order-list.component.html",
  styleUrls: ["./work-order-list.component.less"],
})
export class WorkOrderListComponent implements OnInit, OnDestroy {
  workOrderList: any[];

  userInfo: any = {};

  qrReader = new QrCode();

  requestListColumns = [
    { key: "RequestFormNo", name: "Parts Request Form No", width: "150px" },
    { key: "VehicleNo", name: "Vehicle No", width: "150px" },
    { key: "PartsList", name: "Parts List", width: "150px" },
    { key: "QTYRequested", name: "QTY Requested", width: "150px" },
    { key: "ModelName", name: "Model/Make", width: "150px" },
    {
      key: "PartsRequestedDate",
      name: "Parts Requested Date",
      width: "150px",
    },
    { key: "PartsIssueDate", name: "Parts Issue Date", width: "150px" },
    { key: "TechnicianName", name: "Technician Name", width: "150px" },
    { key: "FirstName", name: "Created By", width: "150px" },
  ];

  constructor(
    private workOrderService: WorkOrderService,
    private modal: NzModalService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getList();
    this.userInfo = this.authenticationService.getUserInfo();
    this.qrReader.callback = this.qrCallback;
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
      nzTitle: "Are you sure to cancel this request?",
      // nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: "Yes",
      nzOkType: "danger",
      // nzOnOk: () => console.log('OK'),
      nzOnOk: () =>
        this.workOrderService.deleteRequestForm(id).subscribe((res) => {
          this.getList();
        }),
      nzCancelText: "No",
      nzOnCancel: () => console.log("Cancel"),
    });
  }
  showConfirm(id: number): void {
    this.modal.confirm({
      nzTitle: "<i>Success!</i>",
      nzContent: "<b>Your order is successfully deliverd to the Customer</b>",
      nzOnOk: () =>
        this.workOrderService.updateRequestForm(id).subscribe((res) => {
          this.getList();
        }),
    });
  }

  getStatus(type) {
    return StatusClass[type];
  }

  qrCallback(error, result) {
    if (error) {
      console.log(error);
      return;
    }
    console.log(result);
  }
}
