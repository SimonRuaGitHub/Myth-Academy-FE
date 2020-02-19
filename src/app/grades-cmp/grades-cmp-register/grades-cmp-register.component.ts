import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GradesCrudtInfoService } from '../grades-services/grades.crud-info.service';

@Component({
  selector: 'grades-register',
  templateUrl: './grades-cmp-register.component.html',
  styleUrls: ['./grades-cmp-register.component.css']
})
export class GradesCmpRegisterComponent implements OnInit {

  private formGrade:FormGroup;
  private successfullRegGrade:boolean;
  private failedRegGrade:boolean;

  constructor(private formBuilder:FormBuilder, private gradeCrudService:GradesCrudtInfoService) { }

  ngOnInit() {
     this.formGrade = this.formBuilder.group({
       studid:['',[Validators.required, Validators.pattern("[0-9]+")]],
       crsid:['',[Validators.required, Validators.pattern("[A-Z]{3}\-[0-9]{3}")]],
       value:['',[Validators.required, Validators.pattern("[0-9]")]]
     })
  }

  public saveGrade():void{
     this.gradeCrudService.saveGrade({ studentid: this.formGrade.get("studid").value, 
                                       courseid: this.formGrade.get("crsid").value,
                                       value: this.formGrade.get("value").value   })
                          .subscribe(response => {
                              console.log("Response from endpoint: "+response);

                              if(response == "Saved"){
                                 this.successfullRegGrade = true;
                                 this.failedRegGrade = false;
                              }
                          }, error => {
                             
                             this.failedRegGrade = true;
                             this.successfullRegGrade = false;
                             console.error("Error requesting Saving Grade Service", error)

                          }, () => {
                             console.info("Finished requesting for Saving Grade")
                          });
  }
}
