import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { QuotesService } from "../../../services/quotes-service/quotes.service";
import { WorkOrderService } from "../../../services/workOrder-service/work-order.service"

interface QuoteInterface {
  item: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

class QuoteModel {
  static create(event: QuoteInterface) {
    return { ...event };
  }
}

@Component({
  selector: "app-create-workorder",
  templateUrl: "./create-workorder.component.html",
  styleUrls: ["./create-workorder.component.less"],
})
export class CreateWorkorderComponent implements OnInit {
  isOpenParts = false;

  inputValue: "";

  date: "";

  totalAmount = 0;

  model = {
    vehicleNo: "",
    vehicleModel: "",
    partsList: "",
    description: "",
    qtyRequested: "",
    serviceType: '',
  };

  listOfData = [
    QuoteModel.create({
      item: "",
      description: "",
      quantity: 0,
      unitPrice: 0,
    }),
  ];

  listOfModels: Array<{ label: string; value: string }> = [];

  constructor(private quotesService: QuotesService, private router: Router, private workOrderService: WorkOrderService) { }

  ngOnInit() {
    const list: Array<{ label: string; value: string }> = [];
    this.workOrderService.getAllmodelsList().subscribe((data: any[]) => {
      // for (let index = 0; index < data.length; index++) {
      //   // list.push({ label: , value:});
      // }

      this.listOfModels = list;
    });
  }

  onDateChange(): void { }

  closePartsModal(): void {
    this.isOpenParts = false;
  }

  openPartsModal(): void {
    this.isOpenParts = true;
  }

  handlePartsSelection(parts): void {
    const partsList = parts.map((item) => ({
      item: item.ItemNumber,
      description: item.Description,
      unitPrice: item.SellingPrice,
      quantity: 1,
    }));
    this.listOfData = [...partsList];

    this.isOpenParts = false;
  }

  removeLine(idx): void {
    this.listOfData.splice(idx, 1);
  }

  savePartsRequestForm(): void {
    this.model.partsList = this.listOfData.map((item) => item.item).join(",");
    this.model.qtyRequested = this.listOfData
      .map((item) => item.quantity)
      .join(",");
    this.quotesService.savePartsRequestForm(this.model).subscribe((res) => {
      this.router.navigate(["/work-order-list"]);
    });
  }
}
