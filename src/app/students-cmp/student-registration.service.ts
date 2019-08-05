import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationService {

  constructor(private http: HttpClient){}

  public registerStudent(student:Student){
         return this.http.post("http://localhost:8080/saveStudent", student, {responseType: 'text'});
  }

}
