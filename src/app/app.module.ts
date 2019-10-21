import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { FooterCmpComponent } from './footer-cmp/footer-cmp.component';
import { StudentsCmpComponent } from './students-cmp/students-cmp.component';
import { StudentsNameComponent } from './students-cmp/students-name/students-name.component';
import { CoursesCmpComponent } from './courses-cmp/courses-cmp.component';
import { PageNotFound } from './error-cmp/page-not-found';
import { StudentsCmpListComponent } from './students-cmp/students-list/students-cmp-list/students-cmp-list.component';
import * as $ from 'jquery';

const appRoutes = [
  { path:'students', component: StudentsCmpComponent},
  { path:'page-not-found', component: PageNotFound}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterCmpComponent,
    StudentsCmpComponent,
    StudentsNameComponent,
    CoursesCmpComponent,
    PageNotFound,
    StudentsCmpListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'students', component: StudentsCmpComponent},
      {path:'courses', component: CoursesCmpComponent},
      {path:'', component: PageNotFound},
      {path:'students-list', component: StudentsCmpListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
