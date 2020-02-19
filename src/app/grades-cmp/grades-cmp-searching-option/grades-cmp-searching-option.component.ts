import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchingGradesOptions } from '../grades-services/searching-option';

@Component({
  selector: 'grades-cmp-searching-option',
  templateUrl: './grades-cmp-searching-option.component.html',
  styleUrls: ['./grades-cmp-searching-option.component.css']
})
export class GradesCmpSearchingOptionComponent implements AfterViewInit{

  private searchOptForm:FormGroup;
  private searchGradeOptions:String[];
  @Output() private emitterSelectedOpt: EventEmitter<SearchingGradesOptions> = new EventEmitter();

  constructor(){
    this.searchGradeOptions = Object.values(SearchingGradesOptions);
    this.searchOptForm = new FormGroup({searchOption: new FormControl(SearchingGradesOptions.Allgrades)});
    this.searchOptForm.valueChanges.subscribe(selOpt => {
                                                          this.emitterSelectedOpt.emit(selOpt)
                                                        })
  }

  ngAfterViewInit(): void {
    (<any>$('select')).formSelect();  
  }
}