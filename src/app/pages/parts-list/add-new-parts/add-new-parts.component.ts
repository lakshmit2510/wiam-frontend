import { Component, OnInit } from '@angular/core';

import { PartsService } from '../../../services/parts-service/parts.service';
import { PartModel, PartInterface } from '../../../types/part';


@Component({
  selector: 'app-add-new-parts',
  templateUrl: './add-new-parts.component.html',
  styleUrls: ['./add-new-parts.component.less']
})
export class AddNewPartsComponent implements OnInit {

  model: PartInterface = {
    partName: '',
    partDescription: '',
    partNumber: null,
    quantityInHand: null,
    manufaturingDate: '',
    expiryDate: '',
    productCategory: '',
    location: '',
    partCostPrice: null,
    partSellingPrice: null,
    vendorName: '',
    Model: '',
    Manufacturer: '',
  };

  constructor(private partsService: PartsService) { }

  ngOnInit() {
  }

  submitForm() {
    this.partsService.addNewPartDetails(PartModel.create(this.model)).subscribe(res => {
      console.log(res);
    });
  }
}
