import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';
import { ProductComponent } from './product/product.component';
import { AppartementComponent } from './appartement/appartement.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  
  { path:'home', component:TestComponent},
  { path:'residence', component:ResidenceComponent},
  { path:'product', component:ProductComponent},
  { path:'addproduct', component:AddproductComponent},
  { path:'login', component:ReactiveFormComponent},
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'apartments/:id', component:AppartementComponent},
  { path:'product/:id', component:DetailsproductComponent},
  { path:'dashboard', component:DashboardComponent},
  { path:'**',component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
