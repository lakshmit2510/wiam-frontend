import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuotesService } from '../../../services/quotes-service/quotes.service';
import { WorkOrderService } from '../../../services/work-order-service/work-order.service';
import { PartModel } from '../../../types/part';

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
  selector: 'app-edit-workorder',
  templateUrl: './edit-workorder.component.html',
  styleUrls: ['./edit-workorder.component.less']
})
export class EditWorkorderComponent implements OnInit {
  isOpenParts = false;

  inputValue: '';

  date: '';

  totalAmount = 0;

  selectedRows = [];

  brandOptionList = [];

  modelOptionList = [];

  brandTagOptions = [];

  modelTagOptions = [];

  model = {
    vehicleNo: '',
    vehicleModel: '',
    partsList: '',
    description: '',
    qtyRequested: '',
    serviceType: '',
    technicianName: '',
    brand: '',
  };

  listOfData = [];

  orderDetails: any = {};

  partsRequested: any = {};

  partsList: any = [];

  listOfModels: Array<{ Model: string; PartsID: string }> = [];

  constructor(
    private quotesService: QuotesService,
    private router: Router,
    private workOrderService: WorkOrderService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getFormDetailsById();
    this.workOrderService.getAllRequestedList().subscribe((data: any[]) => {
      data.forEach((item) => {
        const isBrandExists = this.brandOptionList.find((bItem) => bItem.value === item.Brand);
        const isModelExists = this.modelOptionList.find((mItem) => mItem.value === item.Model);
        if (item.Brand && item.Brand !== '' && !isBrandExists) {
          this.brandOptionList.push({ label: item.Brand, value: item.Brand });
        }
        if (item.Model && item.Model !== '' && !isModelExists) {
          this.modelOptionList.push({ label: item.Model, value: item.Model });
        }
      });
    });
  }

  getFormDetailsById() {
    const { requestId } = this.activatedRoute.snapshot.queryParams;
    this.workOrderService.getWorOrderAndParts(requestId).subscribe((data) => {
      const { orderDetails, partsRequested, partsList } = data;
      this.orderDetails = orderDetails;
      this.partsRequested = partsRequested;
      this.partsList = partsList;
      this.model = PartModel.mapFormValues(orderDetails);
      this.brandTagOptions = [this.model.brand];
      this.modelTagOptions = [this.model.vehicleModel];
      this.handlePartsSelection(partsList);
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
    const partsList = parts
      .map((item) => {
        if (item.QTYInHand && parseInt(item.QTYInHand, 10) > 0) {
          return {
            partId: item.PartsID,
            itemNumber: item.ItemNumber,
            description: item.Description,
            unitPrice: item.SellingPrice,
            quantity: this.partsRequested[item.PartsID] ? this.partsRequested[item.PartsID] : 1,
            quantityInHand: item.QTYInHand,
          };
        }
      })
      .filter((item) => item);
    this.listOfData = [...partsList];
    this.selectedRows = partsList.map((item) => item.partId);

    this.isOpenParts = false;
  }

  handleBrandChange(val) {
    this.brandTagOptions = val.length > 0 ? [val[val.length - 1]] : [];
  }

  handleModelChange(val) {
    this.modelTagOptions = val.length > 0 ? [val[val.length - 1]] : [];
  }

  removeLine(idx): void {
    this.listOfData.splice(idx, 1);
  }

  savePartsRequestForm(): void {
    // this.model.partsList = this.listOfData.map((item) => item.partId).join(',');
    // this.model.qtyRequested = this.listOfData.map((item) => item.quantity).join(',');
    // this.model.brand = this.brandTagOptions[0];
    // this.model.vehicleModel = this.modelTagOptions[0];
    // this.quotesService.savePartsRequestForm(this.model).subscribe((res: any) => {
    //   this.router.navigate(['/work-order-list/confirmation-page'], {
    //     queryParams: { workOrderId: res.insertId },
    //   });
    // });
  }

}
