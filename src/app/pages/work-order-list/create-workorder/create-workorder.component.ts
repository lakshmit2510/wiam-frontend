import { Component, OnInit } from '@angular/core';

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
  workOrderStatusList = [
    { title: 'Open', value: 'open' },
    { title: 'Work In Progress', value: 'inprogress' },
    { title: 'Closed, Completed', value: 'completed' },
    { title: 'Closed, In Completed', value: 'incompleted' }
  ];
  priorityList = [
    { title: 'High', value: 'high' },
    { title: 'Medium', value: 'medium' },
    { title: 'Low', value: 'low' },
  ];

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
    }),
  ];

  constructor() { }

  ngOnInit() { }

  onDateChange(): void { }

  closePartsModal(): void {
    this.selectedRecord = null;
  }

  openPartsModal(idx): void { this.selectedRecord = idx; }

  addNewLine(): void {
    this.listOfData.push(QuoteModel.create({
      item: '',
      description: '',
      quantity: 0,
      unitPrice: 0,
    }));
  }

  handlePartsSelection(parts): void {
    const record = this.listOfData[this.selectedRecord];
    record.item = parts.ItemNumber;
    record.description = parts.Description;
    this.selectedRecord = null;
  }

  removeLine(idx): void {
    this.listOfData.splice(idx, 1);
  }

}
