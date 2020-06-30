import { Component, OnInit } from '@angular/core';

interface QuoteInterface {
  item: string;
  description: string;
  quantity: number;
  unitPrice: number;
  disc: number;
  taxRate: number;
  amount: number;
}

class QuoteModel {
  static create(event: QuoteInterface) {
    return { ...event };
  }
}



@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.less'],
})
export class AddQuoteComponent implements OnInit {

  selectedRecord = null;

  inputValue: '';

  date: '';

  totalAmount = 0;

  listOfData = [
    QuoteModel.create({
      item: '',
      description: '',
      quantity: 0,
      unitPrice: 0,
      disc: 0,
      taxRate: 0,
      amount: 0
    }),
  ];

  constructor() { }

  ngOnInit() { }

  onDateChange(): void { }

  closePartsModal(): void {
    this.selectedRecord = null;
  }

  openPartsModal(idx): void { this.selectedRecord = idx; }

  handlePartsSelection(parts): void {
    const record = this.listOfData[this.selectedRecord];
    record.item = parts.ItemNumber;
    record.description = parts.Description;
    this.selectedRecord = null;
  }

  addNewLine(): void {
    this.listOfData.push(QuoteModel.create({
      item: '',
      description: '',
      quantity: 0,
      unitPrice: 0,
      disc: 0,
      taxRate: 0,
      amount: 0
    }));
  }

  removeLine(idx): void {
    this.listOfData.splice(idx, 1);
  }

  calculateAmount(idx): void {
    const record = this.listOfData[idx];
    const itemsPrice = record.quantity * record.unitPrice;
    const discountPrice = (record.disc / 100) * itemsPrice;

    let totalAmount = itemsPrice;
    if (discountPrice) {
      totalAmount = totalAmount - discountPrice;
    }
    const taxRate = (record.taxRate / 100) * totalAmount;
    if (taxRate) {
      totalAmount = totalAmount + taxRate;
    }

    record.amount = parseFloat(totalAmount.toFixed(2));

    this.totalAmount = this.listOfData.reduce((a, b) => a + (b.amount || 0), 0);
  }
}
