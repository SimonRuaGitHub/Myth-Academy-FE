import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsCmpComponent } from './students-cmp/students-cmp.component';

const routes: Routes = [
  {
   path: 'students',
   component: StudentsCmpComponent,
   data: {title: 'List of Mythology Students'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
