import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { products } from '../products';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  
  constructor(
    // private formBuilder: FormBuilder,
    private cartService: CartService
    ){}
    
    newProductForm = new FormGroup({
      name : new FormControl('',[Validators.required,Validators.minLength(5)]),
      price : new FormControl('',[Validators.required]),
      description : new FormControl('',[Validators.required,Validators.minLength(2)])
    }) 
   
    
    share() {
      window.alert('The product has been shared!');
    }
    onNotify(){
      window.alert('you will be notified when a product goes on a sale')
    }
    addProductTo(newProductForm){
      this.cartService.addProductTo(newProductForm.value)
      this.newProductForm.reset(newProductForm);
      console.log()
    }
    ngOnInit() {
      this.cartService.showProducts() 
       
      }
    }
    
  