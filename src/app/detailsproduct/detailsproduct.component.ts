import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service'; 
import { Test } from '../model/test';
import { ConsumerProductService } from '../Services/consumer-product.service';

@Component({
  selector: 'app-detailsproduct',
  templateUrl: './detailsproduct.component.html',
  styleUrls: ['./detailsproduct.component.css']
})
export class DetailsproductComponent implements OnInit {
  id!: number;
  product: any; 
  p!:Test
  constructor(private Act: ActivatedRoute, private productService: ProductService ,
     private conP:ConsumerProductService) { }


  ngOnInit(): void {
     this.id = this.Act.snapshot.params['id']
   // this.route.params.subscribe(params => {
    //  this.id = +params['id']; // Obtenir l'ID du produit à partir de l'URL
    //  this.getProductDetails(this.productId); // Appel à la méthode pour obtenir les détails du produit
     
     
      this.conP.getProductById(this.id).subscribe(
        ( data)=>this.p=data
      )
   // });
  }

 // getProductDetails(id: number): void {
    // Utilisez votre service ProductService pour obtenir les détails du produit
   // this.product = this.productService.getProductById(id);
  //}
}
