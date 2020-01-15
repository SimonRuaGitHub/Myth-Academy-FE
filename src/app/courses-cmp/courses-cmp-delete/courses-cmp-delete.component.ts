import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../course';
import { CourseServiceHttp } from '../courses.service';

@Component({
  selector: 'courses-cmp-delete',
  templateUrl: './courses-cmp-delete.component.html',
  styleUrls: ['./courses-cmp-delete.component.css']
})
export class CoursesCmpDeleteComponent implements OnInit  {

  @Input() course: Course = {id:'', name:'', location: ''};
  @Output() newCoursesList: EventEmitter<any> = new EventEmitter();

  constructor(private courseService:CourseServiceHttp){}
  
  ngOnInit():void {
    (<any>$('.modal')).modal()
  }

  public async deleteCourse() {
    console.log("deleting course")
    await this.courseService.deleteCourse(this.course).toPromise()
    this.courseService.getCourses().subscribe((res) => {
                  console.log(res.toLocaleString())
                  this.newCoursesList.emit(res)
    });
 }

}
