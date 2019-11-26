import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailPage1Component } from './products/product-detail/productdetail-page1/productdetail-page1.component';
import { ProductSummaryComponent } from './products/product-summary/product-summary.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductdetailPage2Component } from './products/product-detail/productdetail-page2/productdetail-page2.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';


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
    path: '',
    loadChildren: './student/student.module#StudentModule',
  },
  //books
  { path: 'books', component:BooksComponent },
  { path: 'book-detail/:id', component:BookDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
