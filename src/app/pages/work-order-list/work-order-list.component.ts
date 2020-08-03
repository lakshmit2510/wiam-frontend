import { Component, OnInit, OnDestroy } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import QrCode from 'qrcode-reader';
import { subMonths } from 'date-fns';
import moment from 'moment';
import { WorkOrderService } from '../../services/work-order-service/work-order.service';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';
import { PartsService } from '../../services/parts-service/parts.service';
import { environment } from '../../../environments/environment';
import { convertJsonToQueryParams } from '../../utils/query-param.util';

enum StatusClass {
  'Not Delivered' = 'status-not-delivered',
  'Delivered' = 'status-delivered',
  'Cancelled' = 'status-cancelled',
}

@Component({
  selector: 'app-work-order-list',
  templateUrl: './work-order-list.component.html',
  styleUrls: ['./work-order-list.component.less'],
})
export class WorkOrderListComponent implements OnInit, OnDestroy {
  workOrderList: any[];
  partsList: any = [];
  loadingData = false;
  selectedVehicleNo = 'all';
  vehicleNoList = [];
  dateRange = [subMonths(new Date(), 1), new Date()];

  viewRequestId = null;

  isVisible = false;

  userInfo: any = {};

  qrReader = new QrCode();

  partsRequested: any = {};

  requestListColumns = [
    { key: 'RequestFormNo', name: 'Parts Request Form No', width: '200px' },
    { key: 'VehicleNo', name: 'Vehicle No', width: '100px' },
    { key: 'Brand', name: 'Brand', width: '100px' },
    { key: 'Model', name: 'Model', width: '150px' },
    {
      key: 'PartsRequestedDate',
      name: 'Parts Requested Date',
      width: '150px',
    },
    { key: 'PartsIssueDate', name: 'Parts Issue Date', width: '150px' },
    { key: 'TechnicianName', name: 'Technician Name', width: '100px' },
    { key: 'FirstName', name: 'Created By', width: '70px' },
  ];

  ranges1 = { Today: [new Date(), new Date()], 'This Month': [subMonths(new Date(), 1), new Date()] };

  constructor(
    private workOrderService: WorkOrderService,
    private modal: NzModalService,
    private authenticationService: AuthenticationService,
    private partsService: PartsService,
  ) { }

  ngOnInit() {
    this.getList();
    this.userInfo = this.authenticationService.getUserInfo();
    this.qrReader.callback = this.qrCallback;
    this.workOrderService.getAllVNos().subscribe((data: any[]) => {
      this.vehicleNoList = data;
    });
  }
  ngOnDestroy(): void {
    // // Do not forget to unsubscribe the event
    // this.workOrderService.unsubscribe();
  }
  getList() {
    this.loadingData = true;
    let [from, to]: any = this.dateRange;
    if (from) {
      from = moment(from).unix();
    }
    if (to) {
      to = moment(to).unix();
    }

    this.workOrderService
      .getRequestListByDateAndVNo({ from, to, vNo: this.selectedVehicleNo })
      .subscribe((data: any[]) => {
        this.workOrderList = data;
        this.loadingData = false;
      });
  }
  showDeleteConfirm(id: number): void {
    this.modal.confirm({
      nzTitle: 'Are you sure to cancel this request?',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () =>
        this.workOrderService.deleteRequestForm(id).subscribe((res) => {
          this.getList();
        }),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
    });
  }
  showConfirm(id: number): void {
    this.modal.confirm({
      nzTitle: '<i>Success!</i>',
      nzContent: '<b>Your order is successfully deliverd to the Customer</b>',
      nzOnOk: () =>
        this.workOrderService.updateRequestForm(id).subscribe((res) => {
          this.getList();
        }),
    });
  }

  handleView(requestId) {
    this.viewRequestId = requestId;
  }

  handleViewClose() {
    this.viewRequestId = null;
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

  onRowExpanding(data) {
    data.component.collapseAll(-1);
    const { PartsList, QTYRequested } = data.key;
    const partIds = PartsList.split(',');
    const partQty = QTYRequested.split(',');
    partIds.forEach((item, idx) => {
      this.partsRequested[item] = partQty[idx];
    });
    this.partsService.getPartsByCommaId(PartsList).subscribe((partsRes) => {
      this.partsList = partsRes;
    });
  }

  viewForm(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  handleDateChange(result: Date[]): void {
    if (this.dateRange[0] !== result[0] || this.dateRange[1] !== result[1]) {
      this.dateRange = result;
      this.getList();
    }
  }

  handleVNoChange(): void {
    this.getList();
  }

  onExporting(e) {
    e.cancel = true;
    let [from, to]: any = this.dateRange;
    if (from) {
      from = moment(from).unix();
    }
    if (to) {
      to = moment(to).unix();
    }
    const params = { from, to, vNo: this.selectedVehicleNo };
    window.open(`${environment.apiUrl}/export/workOrderList?${convertJsonToQueryParams(params)}`, '_blank');
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift({ location: 'before', template: 'totalGroupCount' });
  }
}
