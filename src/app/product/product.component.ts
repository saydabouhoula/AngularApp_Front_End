import { Component } from '@angular/core';
import { Test } from '../model/test';
import { Router } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { CalculService } from '../Services/calcul.service';
import { ConsumerProductService } from '../Services/consumer-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  priceMax!:number;
  products:Test[]=[]
   alert!:number
   quantity!: number ;  
   floatNumber!: number ; 
 // Injectez le service ProductService et le routeur
 constructor(private productService: ProductService, private router: Router, private calcul: CalculService,
   private consP:ConsumerProductService) { }
  
   ngOnInit(){
     this.products=this.productService.products
     this.floatNumber=this.calcul.stat(this.products, 'quantity', 0);
    
  // this.consP.getProduct().subscribe(
   // (data)=>this.listProduct=data
   //  )
   }

   increment(p:number){
    // p.like++;
   this.products[p].like++;
}
buy(p:number){
   this.products[p].quantity--;
}

AddProduct(p:Test){
  this.products.push(p)
}
}
