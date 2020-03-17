import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { products } from './products';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  products = products;

  addProductTo(newProductForm){
      this.products.push(newProductForm)
      //  console.log(this.FormProduct);
  }
  showProducts(){
    return this.products;
  }
  
  

  addToCart(product){
    this.items.push(product)
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items =[];
    return this.items;
  }
  getShippingPrices(){
    return this.http.get('/assets/shipping.json')
  }
 
  constructor( 
    private http: HttpClient
  ) { }
}
