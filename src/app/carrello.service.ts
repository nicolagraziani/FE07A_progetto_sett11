import { Injectable } from '@angular/core';
import { Product } from './models/product.interface';
@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  carrello: Product[] = [];
  totale = 0;

  constructor() { }

  addToCart(cartItem: Product){
    this.carrello.push(cartItem);
    this.totale += Number(cartItem.price);
    console.log(this.carrello);
  }

  removeItem(cartItem: Product){
    let index = this.carrello.indexOf(cartItem);
    this.carrello.splice (index, 1);
    this.totale -= cartItem.price;
  }

  resetCart() {
    this.carrello = [];
    this.totale = 0;
  }


}
