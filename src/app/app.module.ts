import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './Services/product.service';
import { AppartementComponent } from './appartement/appartement.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HttpClientModule}  from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component' 

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ResidenceComponent,
    NotFoundComponent,
    DetailsproductComponent,
    ProductComponent,
    AppartementComponent,
    ReactiveFormComponent,
    AddproductComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
