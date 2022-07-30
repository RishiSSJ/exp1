import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LimitValidator } from 'src/app/shared/limit.formvalidator';
import { IProduct } from '../product';
import { ProductApiService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  formGroup! : FormGroup;
  errorMessage = "";

  constructor(private fb : FormBuilder, private route : ActivatedRoute, private router : Router, private apiService : ProductApiService) { }

  product! : IProduct;

  ngOnInit(): void {

    this.formGroup = this.fb.group({
      productName : ['', Validators.required],
      productCode : [''],
      price : ['', [Validators.required, LimitValidator.Limit(5000)]],
      description : [''],
      releaseDate : [''],
      starRating : ['', [Validators.required, LimitValidator.Limit(5)]],
      imageUrl : ['']
    });
  }

  saveProduct(){
    console.log("button clicked")
    if(this.formGroup.dirty && this.formGroup.valid){
       const p={...this.product, ...this.formGroup.value}
   
      console.log("Product details: " ,p.productName)
      if(p!=null){
        this.apiService.createProduct(p).subscribe(
          {
            next: () => this.onSaveComplete(),
         error: err=>this.errorMessage=err
           
          }
        )
      }
    }
  }

  onSaveComplete(){
    this.formGroup.reset();
    this.router.navigate(['/products']);    
  }



}
