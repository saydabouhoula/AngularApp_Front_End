import { Injectable } from '@angular/core';
import { Test } from '../model/test';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Test[] = [
    {id:1,title:"Iphone 12",price:1000,quantity:10,like:0},
    {id:2,title:"Iphone 13",price:1500,quantity:20,like:0},
    {id:3,title:"Iphone 14",price:2000,quantity:5,like:0},
  ];

  constructor() { }

  AddProduct(p:Test){
    this.products.push(p)
  }
}
