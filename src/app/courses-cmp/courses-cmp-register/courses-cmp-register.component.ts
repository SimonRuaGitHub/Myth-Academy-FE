import { Component, OnInit } from '@angular/core';
import { CourseServiceHttp } from '../courses.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Course } from '../course';

@Component({
  selector: 'app-courses-cmp-register',
  templateUrl: './courses-cmp-register.component.html',
  styleUrls: ['./courses-cmp-register.component.css']
})
export class CoursesCmpRegisterComponent implements OnInit {

  private formCourse:FormGroup;
  private course:Course;
  private successfullRegistration:boolean;

  constructor(private coursesService:CourseServiceHttp, private formBuilder:FormBuilder) { }

  ngOnInit() {
       this.formCourse = this.formBuilder.group({
              id: ['',[Validators.required]],
              name: ['',[Validators.required, Validators.pattern('(^[A-Za-z ]*$)')]],
              location: ['', [Validators.required]]
       });
  }

  registerCourse():void{
    this.course = this.formCourse.value;
    console.log("Course: "+this.course.id + " "+this.course.name);
    
    this.coursesService.registerCourse(this.course).subscribe(response => {
        console.log(response)
        if(response == "Saved"){
           this.successfullRegistration = true;
        }
    })
  }

  get id(){
    return this.formCourse.get("id");
  }

  get name(){
    return this.formCourse.get("name");
  }

  get location(){
    return this.formCourse.get("location");
  }

}
