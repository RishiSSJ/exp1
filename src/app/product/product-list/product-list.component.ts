import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct, Product } from '../product';
import { ProductRepository } from '../product-repository';
import { ProductApiService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  pageTitle:string='Product List';
  imgWidth = 50;
  imgMargin = 3;
  //repo:ProductRepository;
  products!:IProduct[];
  errorMessage : string = "";
  sub! : Subscription;

  constructor(private apiService : ProductApiService) {
    // this.repo= new ProductRepository();
    // this.products = this.repo.getProducts();
  }

  ngOnInit(){
    this.sub = this.apiService.getProducts().subscribe({
      next: pdt => this.products = pdt,
      error: err => this.errorMessage = err
    })
  }

  showImage=false;
  toggleImage(){
    this.showImage = !this.showImage;
  }

  // getProduct(id : number){
  //   return this.repo.getProduct(id);
  // }

  // getProductById(id:number){
    // let pdt=new Product();
    // pdt=this.getProduct(id) as Product;
    // return pdt;
  // }

  // getClasses(id : number) : string{
    // let product =  this.getProductById(id);
    // return "p-2 " + ((product.price ?? 0 ) < 100 ? "bg-info" : "bg-success" );
  // } 
  
  // getClassMap(id : number) : Object{
    // let product = this.getProduct(id) as Product;
    // return {
    //   // "text-center bg-warning" : product?.productName == "Thyme",
    //   // "bg-info" : (product?.price ?? 0) > 100
    // /}
  // }

  // fontSizeWithUnits : string = "30px";
  // fontSizeWithoutUnits : string = "30";

  // getStylesMap(id : number){
  //   let product = this.getProduct(id) as Product;
  //   return{
  //     fontSize : "40px",
  //     "margin.px" : 100,
  //     color : (product?.price ?? 0) > 100 ? "red" : "green"
  //   }
  // }

  selectedProduct : string | undefined;

  getSelected(product : Product) : boolean{
    return product.productName == this.selectedProduct;
  }

  message : string = "";
  onRatingClicked(msg : string){
    this.message = msg;
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}