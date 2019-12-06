import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadingComponent } from './preloading.component';


const routes: Routes = [
  {path:'', component: PreloadingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreloadingRoutingModule { }
