import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StudentService } from '../students-services/student-all-info.service';
import { Student } from './../../student'

@Component({
  selector: 'app-students-cmp-list',
  templateUrl: './students-cmp-list.component.html',
  styleUrls: ['./students-cmp-list.component.css']
})
export class StudentsCmpListComponent implements OnInit, AfterViewInit {

  private studentsList:any;
  private st: Student;
  
  constructor(private studentService:StudentService) { }

  ngOnInit() {
     this.studentService.getAllStudentsInfo().subscribe(res => {this.studentsList = res});
  }

  ngAfterViewInit(): void {
    (<any>$('.modal')).modal()
  }

  setStudentInfo(student: Student): void{
       this.st = student;
  }

  //Use other components for these
  async deleteStudent() {
      console.log("Id del estudiante: "+this.st.id);
      await this.studentService.deleteStudentInfo(this.st.id).toPromise();
      this.studentService.getAllStudentsInfo().subscribe(res => { console.log(res)
                                                                  this.studentsList = res
                                                      });
  }

  editStudent(id: String):void{

  } //

}
