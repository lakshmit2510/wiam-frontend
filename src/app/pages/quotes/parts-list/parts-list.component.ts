import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PartsService } from '../../parts-list/parts.service';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.less']
})
export class PartsListComponent implements OnInit {

  @Input() isVisible = false;

  @Output() cancelModal: EventEmitter<any> = new EventEmitter();

  @Output() addItem: EventEmitter<any> = new EventEmitter();

  partsList: any = [];

  selectedPart: any = {};

  constructor(private partsService: PartsService) { }

  ngOnInit() {
    this.getPartsList();
  }

  getPartsList(): void {
    this.partsService.getAllParts().subscribe(data => {
      this.partsList = data;
    });
  }

  handleCancel(): void {
    this.cancelModal.emit();
  }

  handleOk(): void {
    this.addItem.emit(this.selectedPart);
  }
}
