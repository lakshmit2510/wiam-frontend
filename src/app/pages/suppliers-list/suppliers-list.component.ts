import { Component, OnInit } from '@angular/core';
import {SuppliersService} from './suppliers.service';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.less']
})
export class SuppliersListComponent implements OnInit {

  suppliersList: any [];
  dataTable: any;
  constructor(private suppliersService: SuppliersService) { }

  ngOnInit() {
    this.suppliersService.getAllSuppliers().subscribe((data: any[]) => {
      this.suppliersList = data;
      const table: any = $('#suppliers-list-table');
      this.dataTable = table.DataTable();
    });
  }

}
