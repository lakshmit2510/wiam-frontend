import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  constructor(private httpClient: HttpClient) { }

  public getAllParts() {
    return this.httpClient.get(`${environment.apiUrl}/Parts/getAllParts`);
  }
  addNewPartDetails(data) {
    return this.httpClient.post(`${environment.apiUrl}/Parts/addNewPart`, data);
  }
}
