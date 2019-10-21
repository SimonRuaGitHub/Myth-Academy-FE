import { Component, OnInit } from '@angular/core';
import { StudentAllInfoService } from '../student-all-info.service';
import { Student } from './../../student'

@Component({
  selector: 'app-students-cmp-list',
  templateUrl: './students-cmp-list.component.html',
  styleUrls: ['./students-cmp-list.component.css']
})
export class StudentsCmpListComponent implements OnInit {

  private studentsList:any;
  
  constructor(private studentService:StudentAllInfoService) { }

  ngOnInit() {
     this.studentService.getAllStudentsInfo().subscribe(res => {this.studentsList = res});
  }

}
