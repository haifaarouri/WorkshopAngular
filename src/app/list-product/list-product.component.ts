import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: String;
  public list:Product[];
  public priceMax:number;
  constructor() {
  }
  ngOnInit(): void {
    this.title = 'MyStore App';
    this.list= [
      {
        id: 12,
        name: 'T-shirt 1',
        description :'nice T-shirt',
        price: 100,
        nbrLike: 23,
        quantity: 3,
        picture:'https://www.exist.com.tn/61575-large_default/t-shirt.jpg'
      },
      {
        id: 13,
        name: 'T-shirt 2',
        description :'nice T-shirt',
        price: 179,
        nbrLike: 0,
        quantity: 0,
        picture:'https://www.exist.com.tn/69177-large_default/t-shirt-de-sport.jpg'
      }
    ]
  }
  incerementLike(product:Product):void{
    let i = this.list.indexOf(product);
    if(i!=-1){
      this.list[i].nbrLike++
      //cnx to  backend side
    }
  }
  buyProduct(product:Product):void{
    let i = this.list.indexOf(product);
    if(i!=-1){
      this.list[i].quantity--
      //cnx to  backend side
    }}
}
