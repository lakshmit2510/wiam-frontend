import { Component, OnInit } from '@angular/core';
import { PartsService } from './parts.service';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.less']
})
export class PartsListComponent implements OnInit {

  partsList: any [];
  dataTable: any;
  constructor(private partsService: PartsService) { }

  ngOnInit() {
    this.partsService.getAllParts().subscribe((data: any[]) => {
      this.partsList = data;
      const table: any = $('#parts-list-table');
      this.dataTable = table.DataTable();
    });
  }

}
