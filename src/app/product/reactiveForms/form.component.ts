import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { IProduct, Product } from "../product";
import { ProductRepository } from "../product-repository";
import { ProductApiService } from "../product.service";
import { ProductFormGroup } from "./form.models";

@Component({
    selector: 'app-product-edit-form',
    templateUrl: 'form.component.html'
})

export class ReactiveFormComponent{

    sub$! : Subscription;
    errorMessage! : string;
    constructor(private apiService : ProductApiService, private route : ActivatedRoute, private router : Router, private repo : ProductRepository){ }
    formGroup = new ProductFormGroup();
    newProduct = new Product();
    product! : IProduct;

    pId! : number;

    ngOnInit(){
        //Read the product id from the route parameter and pass it to the getProduct
        this.sub$ = this.route.paramMap.subscribe((param : any) => {     
            const id = Number(param.get('id'));
            this.getProduct(id)   
        })
    }

    getProduct(id : number){
        this.sub$ = this.apiService.getProduct(id).subscribe({
            next: (data : IProduct) => this.displayProduct(data),
            error: err => this.errorMessage = err
        })
    }

    displayProduct(pdt : IProduct){
        this.product = pdt;
        if (this.product?.id! > 0){
            //update the data on the form
            this.formGroup.patchValue({
                productName : this.product.productName,
                productCode : this.product.productCode,
                price : this.product.price,
                starRating : this.product.starRating,
            })

        }
    }

    updateProduct(){
        console.log("Button clicked to update")
        this.formSubmitted = true;
        if(this.formGroup.dirty && this.formGroup.valid){
            const pdt = {...this.product, ...this.formGroup.value}
            console.log("Product : "+ pdt.name + "star rating : " + pdt.starRating)
            //Call the services updateproduct to update the data fetched from the form
            this.apiService.updateProduct(pdt).subscribe({
                next: () => this.onUpdateComplete(),
                error: err => this.errorMessage = err
            })
        }
    }

    onUpdateComplete(){
        this.formGroup.reset();
        this.router.navigate(['/products']);
    }

    formSubmitted : boolean = false;

    addProduct(p : Product){
        this.repo.addProduct(p);
    }

    get jsonProduct(){
        return JSON.stringify(this.newProduct)
    }

    submitForm(){
        //Object.keys(this.formGroup.controls).forEach((c : any) => Object.values(this.newProduct)[c] = this.formGroup.controls[c].value);
        Object.assign(this.newProduct, this.formGroup.value);
        //Object.keys(this.formGroup.controls).forEach(c => ((this.newProduct[c as keyof Product]) as any) = this.formGroup.controls[c].value);
        this.formSubmitted = true;
        if(this.formGroup.valid){
            this.addProduct(this.newProduct);
            console.log(this.newProduct);
        }
        else{
            this.errorMessage;
        }
    }

    onDelete(){
        console.log("pId " + this.pId);        
        if(this.pId == 0)
        {
            this.onUpdateComplete();
        }
        else {
            if(confirm(`Do you want to delete the product : ${this.product.productName}`))
            {
                this.apiService.deleteProduct(this.pId).subscribe(
                    {
                        next:() => this.onUpdateComplete(),
                        error: err => this.errorMessage=err
                    }
                )
            }
        }       
    }

    // onDelete(){
    //     if(this.product.id == 0){
    //         this.onUpdateComplete();
    //     }
    //     else{
    //         if(confirm(`Do you want to delete the product : ${this.product.productName}`)){
    //             this.apiService.deleteProduct(this.pId).subscribe({
    //                 next : () => this.onUpdateComplete(),
    //                 error: err => this.errorMessage = err
    //             })
    //         }
    //     }
    // }
}