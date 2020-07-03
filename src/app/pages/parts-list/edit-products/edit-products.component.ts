import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    Manufacturer: '',
    Model: ''
  };
  constructor(private partsService: PartsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getPartsById();
  }

  getPartsById(): void {
    const { partsID } = this.activatedRoute.snapshot.queryParams;

    this.partsService.getPartsById(partsID).subscribe(res => {
      this.model = PartModel.mapValues(res[0]);
    });
  }
  submitForm() {
    const { partsID } = this.activatedRoute.snapshot.queryParams;
    this.partsService.updatePartDetails(partsID, PartModel.create(this.model)).subscribe(res => {
      console.log(res);
    });
  }
}
