import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course'

@Injectable({ providedIn: 'root' })
export class CourseServiceHttp{
n
    constructor(private http: HttpClient){}

    public getCourses(){
       return this.http.get("http://127.0.0.1:8080/findAllCourses");
    }

    public deleteCourse(course: Course){
        return this.http.post("http://localhost:8080/deleteCourse", course, {responseType: "text"});
    }

    public registerCourse(course: Course){
        return this.http.post("http://localhost:8080/saveCourse", course, {responseType: "text"})
    }
}