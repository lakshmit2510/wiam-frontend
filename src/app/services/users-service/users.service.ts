import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  public getAllUsers() {
    return this.httpClient.get(`${environment.apiUrl}/Users/getAllUsersList`);
  }

  public registerUser(data) {
    return this.httpClient.post(`${environment.apiUrl}/Users/addNewUser`, data);
  }
}
