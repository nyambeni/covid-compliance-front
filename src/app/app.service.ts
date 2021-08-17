import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient: HttpClient) { }

  user_screening = "http://localhost:3000/screening";
  userStud = "http://localhost:3000/user/student";
  userStaff = "http://localhost:3000/user/staff";

  getClient() : Observable<any> {
    return this.httpClient.get(this.user_screening); 
  }

  getStud() : Observable<any> {
    return this.httpClient.get(this.userStud);
  }

  getStaff() : Observable<any> {
    return this.httpClient.get(this.userStaff);
  }

  screening(screening : any) : Observable<any> {
    return this.httpClient.post<any>(this.user_screening, screening, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    }); 
  }
}
