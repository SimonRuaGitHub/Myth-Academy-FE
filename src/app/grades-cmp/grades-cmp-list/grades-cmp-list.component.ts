import { Component, OnInit } from '@angular/core';
import { GradesServiceSwitcher } from '../grades-services/grades-service-switcher';
import { Observable } from 'rxjs';
import { SearchingGradesOptions } from '../grades-services/searching-option';
import { GradesCrudtInfoService } from '../grades-services/grades.crud-info.service';

@Component({
  selector: 'grades-list',
  templateUrl: './grades-cmp-list.component.html',
  styleUrls: ['./grades-cmp-list.component.css'],
  providers: [GradesServiceSwitcher]
})
export class GradesCmpListComponent implements OnInit {

  private gradesSwticher: GradesServiceSwitcher;
  private gradesCollection: any;

  constructor(gradesSwticher: GradesServiceSwitcher) { 
    this.gradesSwticher = gradesSwticher
  }

  ngOnInit():void {
     this.fetchGradesInfo()
  }

   async fetchGradesInfo(searchingOption?:SearchingGradesOptions){
      console.log(searchingOption)

   await this.gradesSwticher.searchGradesInfo(searchingOption).then(gradesInfo => this.gradesCollection = gradesInfo);
  }

}
