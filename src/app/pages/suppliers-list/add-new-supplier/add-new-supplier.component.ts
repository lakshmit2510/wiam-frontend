import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../../services/suppliers-service/suppliers.service';
import { Router } from '@angular/router';

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
  constructor(private suppliersService: SuppliersService, private router: Router) { }

  ngOnInit() {
  }
  submitForm() {
    this.suppliersService.addNewSupplier(this.model).subscribe(res => {
      console.log(res);
      this.router.navigate(['/suppliers-list']);
    });
  }
}
