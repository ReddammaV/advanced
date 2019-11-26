import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductSummaryComponent } from './products/product-summary/product-summary.component';
import { ProductdetailPage1Component } from './products/product-detail/productdetail-page1/productdetail-page1.component';
import { ProductdetailPage2Component } from './products/product-detail/productdetail-page2/productdetail-page2.component';
import { HomeComponent } from './home/home.component';
import { StudentModule } from './student/student.module';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductSummaryComponent,
    ProductdetailPage1Component,
    ProductdetailPage2Component,
    HomeComponent,
    BooksComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
