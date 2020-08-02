import { Component, OnInit, Input } from '@angular/core';
import { WorkOrderService } from '../../services/work-order-service/work-order.service';

@Component({
    selector: 'app-work-order-view-modal',
    templateUrl: './work-order-view-modal.component.html',
    styleUrls: ['./work-order-view-modal.component.less'],
})
export class WorkOrderViewModalComponent implements OnInit {
    @Input() requestId = null;

    orderDetails: any = {};

    partsRequested: any = {};

    partsList: any = [];

    constructor(private workOrderService: WorkOrderService) {}

    ngOnInit() {
        this.workOrderService.getWorOrderAndParts(this.requestId).subscribe((data) => {
            const { orderDetails, partsRequested, partsList } = data;
            this.orderDetails = orderDetails;
            this.partsRequested = partsRequested;
            this.partsList = partsList;
        });
    }
}
