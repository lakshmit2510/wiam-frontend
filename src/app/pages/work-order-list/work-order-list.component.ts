import { Component, OnInit, OnDestroy } from "@angular/core";
import { WorkOrderService } from "./work-order.service";

@Component({
  selector: "app-work-order-list",
  templateUrl: "./work-order-list.component.html",
  styleUrls: ["./work-order-list.component.less"],
})
export class WorkOrderListComponent implements OnInit, OnDestroy {
  workOrderList: any[];

  requestListColumns = [
    { key: "RequestFormNo", name: "Parts Request Form No", width: "150px" },
    { key: "VehicleNo", name: "Vehicle No", width: "150px" },
    { key: "PartsList", name: "Parts List", width: "150px" },
    { key: "QTYRequested", name: "QTY Requested", width: "150px" },
    { key: "Model", name: "Model/Make", width: "150px" },
    {
      key: "PartsRequestedDate",
      name: "Parts Requested Date",
      width: "150px",
    },
    { key: "PartsIssueDate", name: "Parts Issue Date", width: "150px" },
    { key: "UserName", name: "Created By", width: "150px" },
    { key: "Status", name: "Status", width: "150px" },
  ];

  constructor(private workOrderService: WorkOrderService) {}

  ngOnInit() {
    this.workOrderService.getAllRequestedList().subscribe((data: any[]) => {
      this.workOrderList = data;
    });
  }
  ngOnDestroy(): void {
    // // Do not forget to unsubscribe the event
    // this.workOrderService.unsubscribe();
  }
}
