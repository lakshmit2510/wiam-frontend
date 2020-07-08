import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../../services/suppliers-service/suppliers.service';

@Component({
  selector: 'app-add-new-supplier',
  templateUrl: './add-new-supplier.component.html',
  styleUrls: ['./add-new-supplier.component.less']
})
export class AddNewSupplierComponent implements OnInit {
  model = {
    supplierName: '',
    primaryEmail: '',
    contactNumber: '',
    websiteName: '',
    country: ''
  };
  constructor(private suppliersService: SuppliersService) { }

  ngOnInit() {
  }
  submitForm() {
    this.suppliersService.addNewSupplier(this.model).subscribe(res => {
      console.log(res);
    });
  }
}
