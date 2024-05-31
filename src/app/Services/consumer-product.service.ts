import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../model/test';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {

  constructor(private http:HttpClient) { }

  getProduct (){
    return this.http.get<Test[]>('http://localhost:3000/products')
  }
  getProductById(id:number){
    return this.http.get<Test>('http://localhost:3000/products'+'/'+id)
  }
  postProduct(product: Test){
    return this.http.post<Test>('http://localhost:3000/products', product)
  }
}
