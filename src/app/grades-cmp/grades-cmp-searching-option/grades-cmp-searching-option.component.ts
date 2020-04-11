import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchingGradesOptions } from '../grades-services/searching-option';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'grades-cmp-searching-option',
  templateUrl: './grades-cmp-searching-option.component.html',
  styleUrls: ['./grades-cmp-searching-option.component.css']
})
export class GradesCmpSearchingOptionComponent implements AfterViewInit{

  private searchOptForm:FormGroup;
  private searchGradeOptions:String[];
  @Output() private static emitterSelectedOpt: EventEmitter<SearchingGradesOptions> = new EventEmitter();

  constructor(){
    this.searchGradeOptions = Object.values(SearchingGradesOptions);
    this.searchOptForm = new FormGroup({searchOption: new FormControl(SearchingGradesOptions.Allgrades)});
    this.searchOptForm.get("searchOption").valueChanges.pipe(filter(GradesCmpSearchingOptionComponent.isSearchingByField))
                                                       .subscribe(GradesCmpSearchingOptionComponent.routingToGradesSearching)
  }

  ngAfterViewInit(): void {
    (<any>$('select')).formSelect();  
  }

  private static isSearchingByField(opt):boolean{

      let validate:boolean = !(opt == SearchingGradesOptions.ByCourse || opt == SearchingGradesOptions.ByStudent);

      return validate;
  }

  private static routingToGradesSearching(opt){
      console.log("selected option: ",opt)
      GradesCmpSearchingOptionComponent.emitterSelectedOpt.emit(opt)
  }
}