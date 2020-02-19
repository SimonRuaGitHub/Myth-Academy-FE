import { Injectable } from '@angular/core';
import { GradesService } from './grades-service';

@Injectable({
  providedIn: 'root'
})
export class GradesReportInfoService extends GradesService{

public getGrades(stID: string){
  return this.httpClient.get("http://localhost:8080/allGrades/"+stID)
}

public getAllgrades(){
  return this.httpClient.get("http://localhost:8080/allGrades")
}

public getWortsGrades(){
  return this.httpClient.get("http://localhost:8080/worstGrades/studentAndCourse")
}

public getBestGrades(){
  return this.httpClient.get("http://localhost:8080/bestGrades/studentAndCourse")
}

}
