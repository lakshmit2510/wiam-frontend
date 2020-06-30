import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorkOrderService } from './work-order.service';

@Component({
  selector: 'app-work-order-list',
  templateUrl: './work-order-list.component.html',
  styleUrls: ['./work-order-list.component.less']
})
export class WorkOrderListComponent implements OnInit, OnDestroy {
  workOrderList: any [];

  constructor(private workOrderService: WorkOrderService) { }

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
