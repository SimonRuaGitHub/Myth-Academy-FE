import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentAllInfoService {

  constructor(private http: HttpClient) {}

  public getAllStudentsInfo(){
       return this.http.get("http://127.0.0.1:8080/allStudents");
  }
}
