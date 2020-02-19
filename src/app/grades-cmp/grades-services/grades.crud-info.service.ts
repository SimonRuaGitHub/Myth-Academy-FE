import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grades } from '../grades';
import { Observable } from 'rxjs';
import { GradesService } from './grades-service';


@Injectable({
    providedIn: 'root'
  })
export class GradesCrudtInfoService extends GradesService{
  
    public saveGrade(grade:Grades): Observable<string>{
         console.info("Requesting for save end point: "+grade)
         return this.httpClient.post("http://localhost:8080/saveGrade", grade, {responseType: 'text'})
    }
    
}