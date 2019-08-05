import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterCmpComponent } from './footer-cmp/footer-cmp.component';
import { StudentsCmpComponent } from './students-cmp/students-cmp.component';
import { StudentsNameComponent } from './students-cmp/students-name/students-name.component';
import { CoursesCmpComponent } from './courses-cmp/courses-cmp.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterCmpComponent,
    StudentsCmpComponent,
    StudentsNameComponent,
    CoursesCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
