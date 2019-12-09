import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private httpClient: HttpClient) { }

  public getAllSuppliers() {
    return this.httpClient.get(`${environment.apiUrl}/Suppliers/getAllSuppliers`);
  }
}
