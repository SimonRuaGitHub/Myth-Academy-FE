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
import { CoursesListCmpComponent } from './courses-cmp/courses-list-cmp.component';
import { PageNotFound } from './error-cmp/page-not-found';
import { StudentsCmpListComponent } from './students-cmp/students-list/students-cmp-list/students-cmp-list.component';
import * as $ from 'jquery';
import { WelcomeCmpComponent } from './welcome-cmp/welcome-cmp.component';

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
    CoursesListCmpComponent,
    PageNotFound,
    StudentsCmpListComponent,
    WelcomeCmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'students', component: StudentsCmpComponent},
      {path:'courses', component: CoursesListCmpComponent},
      {path:'', component: WelcomeCmpComponent},
      {path:'students-list', component: StudentsCmpListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
