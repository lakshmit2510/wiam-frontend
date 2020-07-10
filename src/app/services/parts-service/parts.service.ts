import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  constructor(private httpClient: HttpClient) { }

  public getAllParts(category?) {
    const cat = category ? category : '';
    return this.httpClient.get(`${environment.apiUrl}/Parts/getAllParts?category=${cat}`);
  }

  public getPartsById(id) {
    return this.httpClient.get(`${environment.apiUrl}/Parts/getPartsById/${id}`);
  }

  addNewPartDetails(data) {
    return this.httpClient.post(`${environment.apiUrl}/Parts/addNewPart`, data);
  }

  updatePartDetails(id, data) {
    return this.httpClient.put(`${environment.apiUrl}/Parts/updatePartsById/${id}`, data);
  }
  uploadPartsImage(data) {
    return this.httpClient.post(`${environment.apiUrl}/Parts/upload_file`, data);
  }
}
