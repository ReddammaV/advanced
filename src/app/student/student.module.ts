import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentSummaryComponent } from './student-summary/student-summary.component';


@NgModule({
  declarations: [StudentComponent, StudentDetailComponent, StudentSummaryComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { 
  constructor() {
    console.log("Student Module - Preloading")
  }
}
