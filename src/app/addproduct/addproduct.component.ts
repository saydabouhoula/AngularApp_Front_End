import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../Services/product.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerProductService } from '../Services/consumer-product.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
        constructor( private productService: ProductService,private router: Router, private conP:ConsumerProductService  ){}

AddForm!:FormGroup
  ngOnInit(){
    this.AddForm = new FormGroup({
      id:new FormGroup('',[Validators.required,Validators.minLength(6)]),
      title:new FormGroup('',[Validators.required,Validators.pattern('[0-9]+')]),
      quantity:new FormGroup('',Validators.required),
      price:new FormGroup('',Validators.required),
      like:new FormGroup('',Validators.required)

    })
  }
  save(){
      this.productService.AddProduct(this.AddForm.value)
      this.router.navigateByUrl('/product');
      // naviger lorsqu'on a ajouter un produit je veux vers liste  des produits 

    //  this.conP.AddProduct(this.AddForm.value).subscribe(
     //   ()=>this.router.navigateByUrl('/product')
     // )
  }
}
