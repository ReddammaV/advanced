import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentSummaryComponent } from './student-summary/student-summary.component';


const routes: Routes = [
  {
    path: 'student',
    children: [
      {path: '', component: StudentComponent},
      {path: 'student-detail', component: StudentDetailComponent},
      {path: 'student-summary', component: StudentSummaryComponent},
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
