import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PartsService } from '../../services/parts-service/parts.service';
import { PartModel } from '../../types/part';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.less']
})
export class PartsListComponent implements OnInit {

  partsList: any[];
  dataTable: any;
  scannerVl = null;
  constructor(private partsService: PartsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const category = this.activatedRoute.snapshot.data;
    const type = category ? category.key : '';
    this.partsService.getAllParts(type).subscribe((data: any[]) => {
      this.partsList = data;
      // const table: any = $('#parts-list-table');
      // this.dataTable = table.DataTable();
    });
  }

  handleScan(event) {
    if (!this.scannerVl) {
      this.scannerVl = event.barcode;
      this.partsService.addNewPartDetails(PartModel.create({ partNumber: event.barcode })).subscribe(res => {
        location.reload();
      });
    }
  }

  handleEdit(parts): void {
    this.router.navigate(['/parts-list/edit-products'], { queryParams: { partsID: parts.PartsID } });
  }
}
