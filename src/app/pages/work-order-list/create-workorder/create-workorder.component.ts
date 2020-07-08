import { Component, OnInit } from '@angular/core';

import { QuotesService } from '../../../services/quotes-service/quotes.service';

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
  selector: 'app-create-workorder',
  templateUrl: './create-workorder.component.html',
  styleUrls: ['./create-workorder.component.less']
})
export class CreateWorkorderComponent implements OnInit {

  isOpenParts = false;

  inputValue: '';

  date: '';

  totalAmount = 0;

  model = {
    vehicleNo: '',
    vehicleModel: '',
    partsList: '',
    description: '',
    qtyRequested: ''
  };

  listOfData = [
    QuoteModel.create({
      item: '',
      description: '',
      quantity: 0,
      unitPrice: 0,
    }),
  ];

  constructor(private quotesService: QuotesService) { }

  ngOnInit() { }

  onDateChange(): void { }

  closePartsModal(): void {
    this.isOpenParts = false;
  }

  openPartsModal(): void { this.isOpenParts = true; }

  // addNewLine(): void {
  //   this.listOfData.push(QuoteModel.create({
  //     item: '',
  //     description: '',
  //     quantity: 0,
  //     unitPrice: 0,
  //   }));
  // }

  handlePartsSelection(parts): void {
    const partsList = parts.map(item => ({ item: item.ItemNumber, description: item.Description, unitPrice: item.SellingPrice }));
    this.listOfData = [...partsList];
    this.model.partsList = partsList.map(item => item.item).join(',');
    // this.model.partsList = partsList.map(item => item.item).join(',');
    this.isOpenParts = false;
  }

  removeLine(idx): void {
    this.listOfData.splice(idx, 1);
  }

  savePartsRequestForm(): void {
    this.quotesService.savePartsRequestForm(this.model).subscribe(res => {
      console.log(res);
    });
  }

}
