import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../services/suppliers-service/suppliers.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.less']
})
export class SuppliersListComponent implements OnInit {

  suppliersList: any[];
  dataTable: any;
  loadingData = false;

  constructor(private suppliersService: SuppliersService, private modal: NzModalService) { }

  ngOnInit() {
    this.getSuppliersList();
  }

  getSuppliersList() {
    this.loadingData = true;
    this.suppliersService.getAllSuppliers().subscribe((data: any[]) => {
      this.suppliersList = data;
      this.loadingData = false;
    });
  }

  deleteSupplier(id: number): void {
    this.modal.confirm({
      nzTitle: 'Are you sure to delete supplier details?',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () =>
        this.suppliersService.deleteSupplierbyId(id).subscribe((res) => {
          this.getSuppliersList();
        }),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

}
