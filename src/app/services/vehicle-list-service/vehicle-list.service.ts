import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleListService {

  constructor(private httpClient: HttpClient) { }

  public getAllVehicleDetails() {
    return this.httpClient.get(`${environment.apiUrl}/Vehicles_List/getAllVehiclesList`);
  }
}
