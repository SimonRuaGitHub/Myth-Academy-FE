import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-students-name',
  templateUrl: './students-name.component.html',
  styleUrls: ['./students-name.component.css']
})
export class StudentsNameComponent implements OnInit {
  @Input() nameOfList: string;

  constructor() { }

  ngOnInit() {
  }

}
