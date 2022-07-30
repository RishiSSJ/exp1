import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorComponent } from 'src/app/error.component';
import { IProduct } from '../product';
import { ProductRepository } from '../product-repository';
import { ProductApiService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  imgWidth = "300";
  imgMargin = "2";
  sub! : Subscription;

  pId = 0;
  product! : IProduct | undefined;
  errorMessage = "";

  constructor(private route : ActivatedRoute, private apiServices : ProductApiService, private repo : ProductRepository, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.pId =Number(id);
      console.log("id:",this.pId)
      this.product = this.repo.getProduct(this.pId);
      console.log(this.product?.productName);
    }

  }
  
  getProduct(id : number){
    this.sub = this.apiServices.getProduct(id).subscribe({
      next: data => this.product = data,
      error: err => this.errorMessage = err
    })
  }

  onBack(){
    this.router.navigate(['/products']);
  }

  onEdit(){
    this.router.navigate(['/products/'+ this.pId +'/edit'])
  }

  onDestroy(){
    this.sub.unsubscribe();
  }

}
