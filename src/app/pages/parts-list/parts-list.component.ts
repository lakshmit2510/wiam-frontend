import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PartsService } from "../../services/parts-service/parts.service";
import { PartModel } from "../../types/part";
import { Subscription } from "rxjs";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-parts-list",
  templateUrl: "./parts-list.component.html",
  styleUrls: ["./parts-list.component.less"],
})
export class PartsListComponent implements OnInit, OnDestroy {
  sortName = "";
  sortValue = "";
  partsList: any[];
  dataTable: any;
  scannerVl = null;
  subscription: Subscription;

  requestListColumns = [
    { key: "PartsName", name: "Product Name", width: "150px" },
    { key: "ItemNumber", name: "Part No.", width: "150px" },
    { key: "SKUNo", name: "Location", width: "150px" },
    { key: "Description", name: "Description", width: "200px" },
    { key: "Category", name: "Product Category", width: "200px" },
    {
      key: "QTYInHand",
      name: "Quantity In Hand",
      width: "150px"
    },
    { key: "Model", name: "Model", width: "250px" },
    // { key: "ManufacturingDate", name: "Product Manufacturing Date", width: "150px" },
    // { key: "ExpiryDate", name: "Product Expiry Date", width: "100px" },
    // { key: "VendorName", name: "Vendor Name", width: "100px" },
    // { key: "CostPrice", name: "Product Cost Price", width: "100px" },
    // { key: "SellingPrice", name: "Product Selling Price", width: "100px" },
  ];

  allowSearch: boolean;
  columnChooserModes: any;
  constructor(
    private partsService: PartsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.allowSearch = true;
    this.columnChooserModes = [{
      key: "dragAndDrop",
      name: "Drag and drop"
    }, {
      key: "select",
      name: "Select"
    }];
  }

  ngOnInit() {
    const options: any = {};
    const category = this.activatedRoute.snapshot.data;
    options.category = category ? category.key : "";
    this.subscription = this.partsService.getAllParts(options).subscribe((data: any[]) => {
      this.partsList = data;
      // const table: any = $("#parts-list-table");
      // this.dataTable = table.DataTable();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleScan(event) {
    if (!this.scannerVl) {
      this.scannerVl = event.barcode;
      this.partsService
        .addNewPartDetails(PartModel.create({ partNumber: event.barcode }))
        .subscribe((res) => {
          location.reload();
        });
    }
  }

  handleEdit(PartsID): void {
    this.router.navigate(["/parts-list/edit-products"], { queryParams: { partsID: PartsID } });
  }
  sortData(sort: { key: string; value: string }) {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  search(): void {
    if (this.sortName && this.sortValue) {
      const sortList = [...this.partsList].sort((a, b) =>
        this.sortValue === "ascend"
          ? a[this.sortName] > b[this.sortName]
            ? 1
            : -1
          : b[this.sortName] > a[this.sortName]
            ? 1
            : -1
      );
      this.partsList = sortList;
    }
  }

  getImage(file) {
    return `${environment.apiUrl}/uploads/${file}`;
  }
}
