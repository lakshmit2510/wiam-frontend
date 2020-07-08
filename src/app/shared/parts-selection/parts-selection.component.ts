import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from "@angular/core";
import { DxDataGridComponent } from "devextreme-angular";
import { PartsService } from "../../services/parts-service/parts.service";

@Component({
  selector: "app-parts-selection",
  templateUrl: "./parts-selection.component.html",
  styleUrls: ["./parts-selection.component.less"],
})
export class PartsSelectionComponent implements OnInit {
  @Input() isVisible = false;

  @Input() selectionType = "single";

  @Output() cancelModal: EventEmitter<any> = new EventEmitter();

  @Output() addItem: EventEmitter<any> = new EventEmitter();

  @ViewChild(DxDataGridComponent, { static: false })
  dataGrid: DxDataGridComponent;

  partsList: any = [];

  setOfCheckedId = new Set<number>();

  partsListColumns = [
    { key: "ItemNumber", name: "Product Number" },
    { key: "PartsName", name: "Product Name" },
    { key: "SKUNo", name: "Location No" },
    { key: "Description", name: "Description" },
    { key: "QTYInHand", name: "QTY In Hand" },
    {
      key: "Manufacturer",
      name: "Manufacturer/Model",
    },
    { key: "VendorName", name: "Vendor Name" },
    { key: "SellingPrice", name: "UnitPrice" },
  ];

  constructor(private partsService: PartsService) {}

  ngOnInit() {
    this.getPartsList();
  }

  getPartsList(): void {
    this.partsService.getAllParts().subscribe((data) => {
      this.partsList = data;
    });
  }

  getSelectedRowsData() {
    return this.dataGrid.instance.getSelectedRowsData();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    // const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    // this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    // this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  handleCancel(): void {
    this.cancelModal.emit();
  }

  handleOk(): void {
    const selectedIdList = this.getSelectedRowsData();
    // const selectedParts = [];
    // selectedIdList.forEach((item) => {
    //   const part = this.partsList.find((pItem) => pItem.PartsID === item);
    //   if (part) {
    //     selectedParts.push(part);
    //   }
    // });

    this.addItem.emit(selectedIdList);
  }
}
