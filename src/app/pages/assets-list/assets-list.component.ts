import { Component, OnInit } from '@angular/core';
import { AssetsService } from './assets.service';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.less']
})
export class AssetsListComponent implements OnInit {
  assetsList: any [];
  dataTable: any;
  constructor(private assetsService: AssetsService) { }

  ngOnInit() {
    this.assetsService.getAllAssets().subscribe((data: any[]) => {
      this.assetsList = data;
      const table: any = $('#assets-list-table');
      this.dataTable = table.DataTable();
    });
  }

}
