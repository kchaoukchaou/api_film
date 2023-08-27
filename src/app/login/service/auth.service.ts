import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from "../../classes/user";


@Injectable({ providedIn: 'root' })
export class AuthService {
  public baseUrl = "127.0.0.1:8000";
  private loggedUserSubject: BehaviorSubject<String>;
  public loggedInUser: Observable<any>;
  private getLoggedUser : any;
  private tokenValue: string|null = '';
  constructor(private httpClient: HttpClient) {
      this.tokenValue = JSON.parse(localStorage.getItem('loggedInUser')) ;
    //  this.getLoggedUser = JSON.parse(localStorage.getItem('loggedInUser'));
      this.loggedUserSubject = new BehaviorSubject(this.tokenValue);
      this.loggedInUser = this.loggedUserSubject.asObservable();
  }

  loginUser(emailAddress: string, password: string) {
    return this.httpClient.post<any>(`${this.baseUrl}/`, { emailAddress, password })
      .pipe(map(response=> {
        localStorage.setItem('loggedInUser', JSON.stringify(response));
        this.loggedUserSubject.next(response);
        console.log(response);
        return response;
      }));
  }

  logoutUser() {
    localStorage.removeItem('loggedInUser');
    this.loggedUserSubject.next(null);
  }
  public get loggedInUserValue(){
    return this.loggedUserSubject.value;
  }
}
