import { GradesReportInfoService } from './grades.report-info.service';
import { Observable } from 'rxjs';
import { SearchingGradesOptions } from './searching-option';
import { resolve } from 'url';

export class GradesServiceSwitcher{

  constructor(private gradesRepServ:GradesReportInfoService){}

  public searchGradesInfo(searchOption?:SearchingGradesOptions): Observable<any>{

        console.log(searchOption)

        console.log(SearchingGradesOptions.Allgrades);
          
        if(searchOption == undefined || searchOption === SearchingGradesOptions.Allgrades){
         console.log("Searching All grades Information "+searchOption)
         return this.gradesRepServ.getAllgrades()
        }


        if(searchOption === SearchingGradesOptions.BestGrades){
         console.log("Searching best grades Information")
         return this.gradesRepServ.getBestGrades()
        }


        if(searchOption === SearchingGradesOptions.WorstGrades){
         console.log("Searching worst grades Information")
         return this.gradesRepServ.getWortsGrades()
        }
         
  }
}