import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PartsService } from '../../services/parts-service/parts.service';


@Component({
  selector: 'app-parts-selection',
  templateUrl: './parts-selection.component.html',
  styleUrls: ['./parts-selection.component.less']
})
export class PartsSelectionComponent implements OnInit {

  @Input() isVisible = false;

  @Input() selectionType = 'single';

  @Output() cancelModal: EventEmitter<any> = new EventEmitter();

  @Output() addItem: EventEmitter<any> = new EventEmitter();

  partsList: any = [];

  setOfCheckedId = new Set<number>();

  constructor(private partsService: PartsService) { }

  ngOnInit() {
    this.getPartsList();
  }

  getPartsList(): void {
    this.partsService.getAllParts().subscribe(data => {
      this.partsList = data;
    });
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
    const selectedIdList = [...this.setOfCheckedId];
    const selectedParts = [];
    selectedIdList.forEach(item => {
      const part = this.partsList.find(pItem => pItem.PartsID === item);
      if (part) {
        selectedParts.push(part);
      }
    });

    this.addItem.emit(selectedParts);
  }

}
