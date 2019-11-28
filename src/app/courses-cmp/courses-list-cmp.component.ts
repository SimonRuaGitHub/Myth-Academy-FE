import { Component, OnInit } from '@angular/core';
import { CourseServiceHttp } from './courses.service';
import { Course } from './course';

@Component({
  selector: 'courses-list-cmp',
  templateUrl: './courses-list-cmp.component.html',
  styleUrls: ['./courses-list-cmp.component.css']
})
export class CoursesListCmpComponent implements OnInit { 

  private courseService:CourseServiceHttp;
  course: Course;
  coursesList:any = [{id:"LEE-235",name:"Bruce Lee story", location:"FirstF-301"},{id:"WOZ-006",name:"World of War Z", location:"SecondF-534"}];

  constructor(courseService:CourseServiceHttp) { 
    this.courseService = courseService;
  }

  ngOnInit():void {
  this.courseService.getCourses().subscribe(res => {
                                                          console.log(res)
                                                           this.coursesList = res;
                                                            });
  }

  ngAfterViewInit(): void {
    (<any>$('.modal')).modal()
  }

  private setCourse(course: Course):void{
        console.log(course.id);
        this.course = course;
  }

  private async deleteCourse() {
     await this.courseService.deleteCourse(this.course).toPromise();
     this.courseService.getCourses().subscribe((res) => {
                   console.log(res)
                   this.coursesList = res
     });
  }


}

