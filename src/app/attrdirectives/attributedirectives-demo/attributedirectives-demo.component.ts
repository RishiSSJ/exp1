import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from 'src/app/product/product';
import { ProductRepository } from 'src/app/product/product-repository';

@Component({
  selector: 'app-attributedirectives-demo',
  templateUrl: './attributedirectives-demo.component.html',
  styleUrls: ['./attributedirectives-demo.component.css']
})
export class AttributedirectivesDemoComponent {

  repo : ProductRepository;

  products : IProduct[];

  constructor() { 
    this.repo = new ProductRepository();
    this.products = this.repo.getProducts();
  }
  newProduct = new Product();

  addProduct(p : IProduct){
    this.repo.addProduct(p);
  }

  submitForm(){
    this.addProduct(this.newProduct);
  }

}
