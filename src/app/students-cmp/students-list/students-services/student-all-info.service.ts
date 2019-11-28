import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './../../student'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  public getAllStudentsInfo(){
       return this.http.get("http://127.0.0.1:8080/allStudents");
  }

  public deleteStudentInfo(idStudent: string): any{
        return this.http.get("http://127.0.0.1:8080/deleteStudent/"+idStudent, {responseType: "text"});
  }
}
