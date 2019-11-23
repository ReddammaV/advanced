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

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductSummaryComponent,
    ProductdetailPage1Component,
    ProductdetailPage2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
