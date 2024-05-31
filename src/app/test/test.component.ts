import { Component } from '@angular/core';
import { Test } from '../model/test';
import { Residence } from '../model/Residence';
import { Apartment } from '../model/Apartment';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
 color:string="skyblue";
 color1:string="";
 title:string="Welcome 4BI2";
 priceMax!:number;
 
favoriteApp: Apartment[] = [];

 listProduct:Test[]=[
  {id:1,title:"Iphone 12",price:1000,quantity:10,like:0},
  {id:2,title:"Iphone 13",price:1500,quantity:20,like:0},
  {id:3,title:"Iphone 14",price:2000,quantity:5,like:0},
 ]
 
 listResidences:Residence[]=[
   {id:1,name: "El fel",address:"Borj Cedria",image:"../../assets/images/R1.jpeg"},
   {id:2,name: "El yasmine",address:"Ezzahra",image:"../../assets/images/R2.jpg"},
   {id:3,name: "El Arij",address:"Rades",image:"../../assets/images/R3.jpg"},
   {id:4,name: "El Anber",address:"Manzah 5",image:"../../assets/images/R4.jpg"}
   ];
 

   listApartments:Apartment[]=[
    {id:1,appartNum:1,floorNum:0,surface:100,terrace:"oui",surfaceTerrace:20,category:"S+1",description:"AppartementS+1",residence:this.listResidences[0] },
    {id:2,appartNum:2,floorNum:0,surface:130,terrace:"non",surfaceTerrace:0,category:"S+2",description:"AppartementS+2",residence:this.listResidences[0] },
    {id:3,appartNum:3,floorNum:0,surface:150,terrace:"oui",surfaceTerrace:30,category:"S+3",description:"AppartementS+3",residence:this.listResidences[1] }
  ];
   
  
      

 ngOnInit(){
  console.log('priceMax');
 }

 msg(){
  alert("welcome 4BI2");
 }

 increment(p:number){
     // p.like++;
    this.listProduct[p].like++;
 }
 buy(p:number){
    this.listProduct[p].quantity--;
 }
 
 show(residence: Residence) {
  this.listApartments = this.listApartments.filter(apartment => apartment.residence.id === residence.id);
  
}
add(residence: Residence){
 const Apartmentadd = this.listApartments.filter(apartment => apartment.residence.id === residence.id);
  this.favoriteApp.push(...Apartmentadd);
}
}
