import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Modules
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CustomersModule } from './customers/customers.module';

//services
import { BookService } from './services/book.service';

//class
import { Webapi } from './data/webapi';

//components
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductSummaryComponent } from './products/product-summary/product-summary.component';
import { ProductdetailPage1Component } from './products/product-detail/productdetail-page1/productdetail-page1.component';
import { ProductdetailPage2Component } from './products/product-detail/productdetail-page2/productdetail-page2.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { CandeactivateComponent } from './candeactivate/candeactivate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InmemoryComponent } from './inmemory/inmemory.component';
import { TemplatedrivenComponent } from './forms/templatedriven/templatedriven.component';
import { ModeldrivenComponent } from './forms/modeldriven/modeldriven.component';

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
    BookDetailComponent,
    CandeactivateComponent,
    DashboardComponent,
    InmemoryComponent,
    TemplatedrivenComponent,
    ModeldrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CustomersModule is eager module that's why we're defining here
    CustomersModule, 
    HttpClientModule,
    InMemoryWebApiModule,
    InMemoryWebApiModule.forRoot(Webapi),
    FormsModule


  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
