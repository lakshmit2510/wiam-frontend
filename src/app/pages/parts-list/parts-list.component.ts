import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PartsService } from '../../services/parts-service/parts.service';
import { PartModel } from '../../types/part';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

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
  isVisible = false;
  viewPartID = null;
  requestListColumns = [
    { key: 'PartsName', name: 'Product Name', width: '200px' },
    { key: 'ItemNumber', name: 'Part No.', width: '150px' },
    { key: 'SKUNo', name: 'Location', width: '100px' },
    { key: 'Description', name: 'Description', width: '200px' },
    { key: 'Category', name: 'Product Category', width: '150px' },
    {
      key: 'QTYInHand',
      name: 'Quantity',
      width: '100px',
    },
    { key: 'Units', name: 'Units', width: '80px' },
    { key: 'Model', name: 'Model', width: '200px' },
    // { key: 'ManufacturingDate', name: 'Product Manufacturing Date',width: '200px' },
    // { key: 'ExpiryDate', name: 'Product Expiry Date', width: '100px' },
    // { key: 'VendorName', name: 'Vendor Name', width: '100px' },
    // { key: 'CostPrice', name: 'Product Cost Price', width: '100px' },
    // { key: 'SellingPrice', name: 'Product Selling Price', width: '100px' },

  ];

  constructor(private partsService: PartsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const options: any = {};
    const category = this.activatedRoute.snapshot.data;
    options.category = category ? category.key : '';
    this.loadingData = true;
    this.subscription = this.partsService.getAllParts(options).subscribe((data: any[]) => {
      this.partsList = data;
      this.loadingData = false;
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

  viewPart(PartsID): void {
    this.viewPartID = PartsID;
    this.isVisible = true;

  }

  handleVisibleChange(val) {
    this.isVisible = val;
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
    return `${environment.apiUrl}/uploads/${file}`;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
