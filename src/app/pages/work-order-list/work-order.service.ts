import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  constructor(private httpClient: HttpClient) { }

  public getAllWorkOrders() {
    return this.httpClient.get(`${environment.apiUrl}/WorkOrders/getAllWorkOrders`);
  }
}
