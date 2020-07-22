import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PartsService } from '../../services/parts-service/parts.service';
import { PartModel } from '../../types/part';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-parts-list',
    templateUrl: './parts-list.component.html',
    styleUrls: ['./parts-list.component.less'],
})
export class PartsListComponent implements OnInit, OnDestroy {
    sortName = '';
    sortValue = '';
    partsList: any[];
    dataTable: any;
    loadingData = false;
    scannerVl = null;
    subscription: Subscription;

    requestListColumns = [
        { key: 'PartsName', name: 'Product Name', width: '200px' },
        { key: 'ItemNumber', name: 'Product part No.', width: '150px' },
        { key: 'SKUNo', name: 'Location', width: '100px' },
        { key: 'Description', name: 'Description', width: '200px' },
        { key: 'Category', name: 'Product Category', width: '150px' },
        {
            key: 'QTYInHand',
            name: 'Quantity In Hand',
            width: '200px',
        },
        {
            key: 'ManufacturingDate',
            name: 'Product Manufacturing Date',
            width: '200px',
        },
        { key: 'ExpiryDate', name: 'Product Expiry Date', width: '100px' },
        { key: 'VendorName', name: 'Vendor Name', width: '100px' },
        { key: 'CostPrice', name: 'Product Cost Price', width: '100px' },
        { key: 'SellingPrice', name: 'Product Selling Price', width: '100px' },
    ];

    constructor(private partsService: PartsService, private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        const category = this.activatedRoute.snapshot.data;
        const type = category ? category.key : '';
        this.loadingData = true;
        this.subscription = this.partsService.getAllParts(type).subscribe((data: any[]) => {
            this.partsList = data;
            this.loadingData = false;
            // const table: any = $('#parts-list-table');
            // this.dataTable = table.DataTable();
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    handleScan(event) {
        if (!this.scannerVl) {
            this.scannerVl = event.barcode;
            this.partsService.addNewPartDetails(PartModel.create({ partNumber: event.barcode })).subscribe((res) => {
                location.reload();
            });
        }
    }

    handleEdit(PartsID): void {
        this.router.navigate(['/parts-list/edit-products'], {
            queryParams: { partsID: PartsID },
        });
    }
    sortData(sort: { key: string; value: string }) {
        this.sortName = sort.key;
        this.sortValue = sort.value;
        this.search();
    }

    search(): void {
        if (this.sortName && this.sortValue) {
            const sortList = [...this.partsList].sort((a, b) =>
                this.sortValue === 'ascend'
                    ? a[this.sortName] > b[this.sortName]
                        ? 1
                        : -1
                    : b[this.sortName] > a[this.sortName]
                    ? 1
                    : -1,
            );
            this.partsList = sortList;
        }
    }

    getImage(file) {
        return `http://localhost:8888/wiam-backend/uploads/${file}`;
    }
}
