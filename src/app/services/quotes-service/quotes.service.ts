import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private httpClient: HttpClient) { }

  public getAllQuotes() {
    return this.httpClient.get(`${environment.apiUrl}/Quotes/getAllQuotes`);
  }

  public savePartsRequestForm(data) {
    return this.httpClient.post(`${environment.apiUrl}/Product_Request_List/saveRequestForm`, data);
  }
}