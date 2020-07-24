import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  constructor(private httpClient: HttpClient) { }

  public getAllPurchaseOrders() {
    return this.httpClient.get(`${environment.apiUrl}/PurchaseOrders/getAllPurchaseorders`);
  }

  addNewPurchaseOrder(data) {
    return this.httpClient.post(`${environment.apiUrl}/PurchaseOrders/addNewPurchaseorder`, data);
  }

  deletePurchaseOrderbyId(id) {
    return this.httpClient.put(`${environment.apiUrl}/PurchaseOrders/deletePurchaseorderById/${id}`, {});
  }
}
