import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkOrderService } from '../../../services/workOrder-service/work-order.service';
import { PartsService } from '../../../services/parts-service/parts.service';
import { PrintService } from '../../../services/print-service/print.service';


@Component({
  selector: 'app-request-confirm',
  templateUrl: './request-confirm.component.html',
  styleUrls: ['./request-confirm.component.less']
})
export class RequestConfirmComponent implements OnInit {

  orderDetails: any = {};

  partsRequested: any = {};

  partsList: any = [];



  constructor(
    private workOrderService: WorkOrderService,
    private partsService: PartsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private printService: PrintService) { }

  ngOnInit() {
    const { workOrderId } = this.activatedRoute.snapshot.queryParams;
    if (!workOrderId) { return false; }

    this.workOrderService.getWorkOrderListById(workOrderId).subscribe(res => {
      this.orderDetails = res[0];
      const partIds = this.orderDetails.PartsList.split(',');
      const partQty = this.orderDetails.QTYRequested.split(',');
      partIds.forEach((item, idx) => {
        this.partsRequested[item] = partQty[idx];
      });
      this.partsService.getPartsByCommaId(this.orderDetails.PartsList).subscribe(partsRes => {
        this.partsList = partsRes;
      });
    });
  }

  handleNextResults() {
    this.router.navigate(['/work-order-list']);
  }

  handlePrint() {
    this.printService.printDocument('requestPrint');
  }
}
