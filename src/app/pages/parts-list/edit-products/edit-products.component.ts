import { Component, OnInit } from '@angular/core';
import { PartsService } from '../parts.service';
import { PartModel, PartInterface } from '../../../types/part';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.less']
})
export class EditProductsComponent implements OnInit {

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
  };
  constructor(private partsService: PartsService) { }

  ngOnInit() {
  }

  submitForm() {
    // this.partsService.addNewPartDetails(PartModel.create(this.model)).subscribe(res => {
    //   console.log(res);
    // });
  }
}
