import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { STUDENTS_ARRAY } from './mock-students';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { StudentRegistrationService } from './student-registration.service';

@Component({
  selector: 'app-students-cmp',
  templateUrl: './students-cmp.component.html',
  styleUrls: ['./students-cmp.component.css']
})
export class StudentsCmpComponent implements OnInit{

  studentsArr = STUDENTS_ARRAY;
  nameOfList: string;
  private studentRegistration:StudentRegistrationService;
  private formStudent: FormGroup;
  private successfullRegistration: boolean;

  constructor(studentRegistration:StudentRegistrationService, private fb: FormBuilder){
              this.studentRegistration = studentRegistration;
  }

  ngOnInit(){
      this.formStudent = this.fb.group({
              id: ['',[Validators.required, Validators.pattern('^[0-9]*$')]],
              firstName: ['', [Validators.required, Validators.pattern('(^[A-Za-z ]*$)')]],
              lastName: ['', [Validators.required, Validators.pattern('(^[A-Za-z ]*$)')]]
      });

      this.formStudent.valueChanges.subscribe(console.log)
  }

  student: Student ={
       firstName: '',id: '', lastName: ''
  };

  registerStudentWithForm():void{

      this.student = this.formStudent.value;
      console.log("Student Full Name: "+this.student.firstName + " "+this.student.lastName);
      this.studentRegistration.registerStudent(this.student).subscribe(res =>{ 
                                 console.log(res) 
                                 if(res == "Saved"){
                                    this.successfullRegistration = true;
                                 }
      });
      
  }

  onNameList(name:string):void {
      this.nameOfList = name;
  }

  get id() { 
    return this.formStudent.get("id");
   }

  get firstName() {
    return this.formStudent.get("firstName");
  }

  get lastName(){
      return this.formStudent.get("lastName")
  }
}
