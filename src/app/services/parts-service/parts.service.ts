import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class PartsService {
  constructor(private httpClient: HttpClient) {}

  public getAllParts(options?) {
    const cat = options.category ? options.category : "";
    const model = options.model ? options.model : "";
    return this.httpClient.get(
      `${environment.apiUrl}/Parts/getAllParts?category=${cat}&model=${model}`
    );
  }

  public getPartsById(id) {
    return this.httpClient.get(
      `${environment.apiUrl}/Parts/getPartsById/${id}`
    );
  }

  public getPartsByCommaId(id) {
    return this.httpClient.get(
      `${environment.apiUrl}/Parts/getPartsByCommaId?itemNumbers=${id}`
    );
  }

  addNewPartDetails(data) {
    return this.httpClient.post(`${environment.apiUrl}/Parts/addNewPart`, data);
  }

  updatePartDetails(id, data) {
    return this.httpClient.put(
      `${environment.apiUrl}/Parts/updatePartsById/${id}`,
      data
    );
  }
  uploadPartsImage(data) {
    return this.httpClient.post(
      `${environment.apiUrl}/Parts/upload_file`,
      data
    );
  }
}
