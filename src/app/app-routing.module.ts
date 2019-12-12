import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailPage1Component } from './products/product-detail/productdetail-page1/productdetail-page1.component';
import { ProductSummaryComponent } from './products/product-summary/product-summary.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductdetailPage2Component } from './products/product-detail/productdetail-page2/productdetail-page2.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanactivateGuard } from './guards/canactivate.guard';
import { CandeactivateComponent } from './candeactivate/candeactivate.component';
import { DeactivateGuard } from './guards/deactivate.guard';
import { CustompreloadingService } from './services/custompreloading.service';
import { InmemoryComponent } from './inmemory/inmemory.component';
import { TemplatedrivenComponent } from './forms/templatedriven/templatedriven.component';
import { ModeldrivenComponent } from './forms/modeldriven/modeldriven.component';
import { FormArrayComponent } from './forms/form-array/form-array.component';
import { ValuestatusComponent } from './forms/valuestatus/valuestatus.component';
import { NestedformComponent } from './forms/nestedform/nestedform.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // Products
  {
    path: 'products',
    children: [
      { path: '', component: ProductsComponent },
      {
        path: 'product-detail',
        children: [
          { path: '', component: ProductDetailComponent },
          { path: 'product-detail-page1', component: ProductdetailPage1Component },
          { path: 'product-detail-page2', component: ProductdetailPage2Component },
        ]
      },
      { path: 'product-summary', component: ProductSummaryComponent },
    ]
  },
  // students
  {
    path: 'student',
    loadChildren: './student/student.module#StudentModule',
    data: { preload: true }
    // canActivate: [CanactivateGuard]
  },
  //books
  { path: 'books', component: BooksComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [CanactivateGuard] },
  { path: 'candeactivate', component: CandeactivateComponent, canDeactivate: [DeactivateGuard] },
  //loading
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(c => c.CustomersModule) },
  { path: 'persons', loadChildren: () => import('./persons/persons.module').then(c => c.PersonsModule) },
  { path: 'custompreloading', loadChildren: () => import('./preloading/preloading.module').then(c => c.PreloadingModule), data: { preload: true, delay: true } },
  //observables,subscribe and in memory webapi
  { path:'memoryapi', component: InmemoryComponent },
  // forms
  { path:'templatedriven', component: TemplatedrivenComponent },
  { path:'modeldriven', component: ModeldrivenComponent },
  { path:'formarray', component: FormArrayComponent },
  { path:'valuestatus', component: ValuestatusComponent },
  { path:'nestedforms', component: NestedformComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { preloadingStrategy: NoPreloading }
    // { preloadingStrategy: PreloadAllModules }
    { preloadingStrategy: CustompreloadingService }
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
