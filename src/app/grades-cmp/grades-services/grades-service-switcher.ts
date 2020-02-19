import { GradesReportInfoService } from './grades.report-info.service';
import { Observable } from 'rxjs';
import { SearchingGradesOptions } from './searching-option';
import { resolve } from 'url';

export class GradesServiceSwitcher{

  constructor(private gradesRepServ:GradesReportInfoService){}

  public searchGradesInfo(searchOption?:SearchingGradesOptions): Promise<any>{

        console.log(searchOption)

        console.log(SearchingGradesOptions.Allgrades)
          
        if(searchOption == undefined || Object.values(searchOption)[0] === SearchingGradesOptions.Allgrades){
         console.log("Searching All grades Information "+searchOption)
         return this.gradesRepServ.getAllgrades().toPromise()
        }


        if(Object.values(searchOption)[0] === SearchingGradesOptions.BestGrades){
         console.log("Searching best grades Information")
         return this.gradesRepServ.getBestGrades().toPromise()
        }


        if(Object.values(searchOption)[0] === SearchingGradesOptions.WorstGrades){
         console.log("Searching worst grades Information")
         return this.gradesRepServ.getWortsGrades().toPromise()
        }
         
  }
}