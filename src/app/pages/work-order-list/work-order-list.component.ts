import { Component, OnInit, OnDestroy } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import QrCode from 'qrcode-reader';
import { exportDataGrid } from 'devextreme/excel_exporter';
import * as ExcelJS from 'exceljs/dist/exceljs.min.js';
import { saveAs } from 'file-saver';
import { subMonths } from 'date-fns';
import moment from 'moment';
import { WorkOrderService } from '../../services/work-order-service/work-order.service';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';
import { PartsService } from '../../services/parts-service/parts.service';

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
        { key: 'VehicleNo', name: 'Vehicle No', width: '150px' },
        { key: 'Brand', name: 'Brand', width: '150px' },
        { key: 'Model', name: 'Model', width: '100px' },
        {
            key: 'PartsRequestedDate',
            name: 'Parts Requested Date',
            width: '150px',
        },
        { key: 'PartsIssueDate', name: 'Parts Issue Date', width: '150px' },
        { key: 'TechnicianName', name: 'Technician Name', width: '150px' },
        { key: 'FirstName', name: 'Created By', width: '150px' },
    ];

    ranges1 = { Today: [new Date(), new Date()], 'This Month': [subMonths(new Date(), 1), new Date()] };

    constructor(
        private workOrderService: WorkOrderService,
        private modal: NzModalService,
        private authenticationService: AuthenticationService,
        private partsService: PartsService,
    ) {}

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
        const from = moment(this.dateRange[0]);
        const to = moment(this.dateRange[1]);
        this.workOrderService
            .getRequestListByDateAndVNo({ from: from.unix(), to: to.unix(), vNo: this.selectedVehicleNo })
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
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Main sheet');
        exportDataGrid({
            component: e.component,
            worksheet: worksheet,
        }).then(function () {
            workbook.xlsx.writeBuffer().then((buffer) => {
                saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
            });
        });
        e.cancel = true;
    }

    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift({ location: 'before', template: 'totalGroupCount' });
    }
}
