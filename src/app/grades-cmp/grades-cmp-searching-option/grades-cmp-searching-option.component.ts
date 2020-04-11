import { Component, AfterViewInit, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchingGradesOptions } from '../grades-services/searching-option';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'grades-cmp-searching-option',
  templateUrl: './grades-cmp-searching-option.component.html',
  styleUrls: ['./grades-cmp-searching-option.component.css']
})
export class GradesCmpSearchingOptionComponent implements AfterViewInit,OnInit{

  private searchOptForm:FormGroup
  private searchGradeOptions:String[]
  @Output() private emitterSelectedOpt: EventEmitter<SearchingGradesOptions> = new EventEmitter()

  constructor(){
    this.searchGradeOptions = Object.values(SearchingGradesOptions)
  }

  ngOnInit(): void {
    this.searchOptForm = new FormGroup({
                                        searchOption: new FormControl(SearchingGradesOptions.Allgrades),
                                        searchField: new FormControl({value:'', disabled:true}, Validators.required) 
                                        })
    this.searchOptForm.get("searchOption").valueChanges.subscribe(this.routeToGradesSearching)
  }

  ngAfterViewInit(): void {
    (<any>$('select')).formSelect()
  }

  private static isSearchingByField(opt):boolean{

      let validate:boolean = (opt == SearchingGradesOptions.ByCourse || opt == SearchingGradesOptions.ByStudent);

      return validate
  }

  private routeToGradesSearching = (opt) => {

      console.log("selected searching option: ",opt)

      if(GradesCmpSearchingOptionComponent.isSearchingByField(opt))
            this.searchOptForm.get("searchField").enable()
      else{
            this.searchOptForm.get("searchField").disable()
            this.emitterSelectedOpt.emit(opt)
      }
  }
}