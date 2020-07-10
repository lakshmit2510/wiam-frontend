import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  constructor(private httpClient: HttpClient) { }

  public getAllRequestedList() {
    return this.httpClient.get(`${environment.apiUrl}/Product_Request_List/getAllRequests`);
  }

  public getAllmodelsList() {
    return this.httpClient.get(`${environment.apiUrl}/Product_Request_List/getAllVehicleModels`);
  }
}
