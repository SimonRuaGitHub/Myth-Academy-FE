import { Component, OnInit } from '@angular/core';
import { CourseServiceHttp } from './courses.service';

@Component({
  selector: 'courses-cmp',
  templateUrl: './courses-cmp.component.html',
  styleUrls: ['./courses-cmp.component.css']
})
export class CoursesCmpComponent implements OnInit { 

  private courseService:CourseServiceHttp;

  constructor(courseService:CourseServiceHttp) { 
    this.courseService = courseService;
  }

  coursesList:any = [{id:"LEE-235",name:"Bruce Lee story", location:"FirstF-301"},{id:"WOZ-006",name:"World of War Z", location:"SecondF-534"}];

  ngOnInit() {
       console.log( this.courseService.getCourses().subscribe(res => console.log(res)) )
  }

}

class Course{
  id: String;
  name: String;
  location: String;
}