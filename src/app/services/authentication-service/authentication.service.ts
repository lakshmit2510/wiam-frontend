import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  redirectUrl: string;
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }
  public userlogin(data) {
    return this.httpClient
      .post<any>(`${environment.apiUrl}/Users/login`, data)
      .pipe(
        map((data) => {
          if (data.status === 'ok') {
            this.setToken(data.token);
            this.getLoggedInName.emit(true);
          }
          return data;
        })
      );
  }

  public userregistration(name, email, pwd) {
    return this.httpClient
      .post<any>(`${environment.apiUrl}/Users/register`, { name, email, pwd })
      .pipe(
        map((Users) => {
          return Users;
        })
      );
  }

  // token
  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }
  getToken() {
    return sessionStorage.getItem('token');
  }
  deleteToken() {
    sessionStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true;
    }
    return false;
  }

  getUserInfo() {
    const token = this.getToken();
    if (token) { return JSON.parse(atob(token)); }
    return null;
  }
}
