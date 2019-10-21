import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './courses-cmp.component'

@Injectable({ providedIn: 'root' })
export class CourseServiceHttp{

    constructor(private http: HttpClient){}

    public getCourses(){
       return this.http.get("http://127.0.0.1:8080/findAllCourses");
    }
}