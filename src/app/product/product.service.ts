import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private productUrl = 'api/products'

  constructor(private http:HttpClient) { }

  //http get url : api/product
  getProducts() : Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).
    pipe(tap(data => console.log("All products ")));
  }

  //http get : api/products/2
  getProduct(id : number) : Observable<IProduct>{
    const url = `${this.productUrl}/${id}`
    return this.http.get<IProduct>(url).
    pipe(tap(data => console.log("Product "+ JSON.stringify(data))),
    catchError(this.handleError));
  }

  //http put = api/product/:1 -to update a product
  updateProduct(product:IProduct){
    const url =`${this.productUrl}/${product.id}}` ;
    const headers=new HttpHeaders({'Content-Type' : 'application/json'});
    return this.http.put<IProduct>(url,product,{headers})
    .pipe(tap(data=>console.log("Update Product "+ product.id)),map(() => product),
    catchError(this.handleError))
  }

  //http post - api/products
  createProduct(product : IProduct){
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.http.post<IProduct>(this.productUrl, product, {headers}).
    pipe(tap(data => console.log("Created Product "+ JSON.stringify(data))),
    catchError(this.handleError));
  }

  //http delete - api/controller/1
  deleteProduct(id:number){
    const headers=new HttpHeaders({'Content-Type' : 'application/json'}) ;
    const url=`${this.productUrl}/${id}`
    return this.http.delete<IProduct>(url,{headers})
    .pipe(tap(data=>console.log("Deleted Product "+ JSON.stringify(data))),
    catchError(this.handleError)
    )
  }
  // deleteProduct(id:number){
  //   const url=`${this.productUrl}/${id}`;
  //   const headers = new HttpHeaders({'Content-Type' : 'application/json'});
  //   return this.http.delete<IProduct>(url, {headers})
  //   .pipe(tap(data=>console.log("Delete Product "+ JSON.stringify(data))),
  //   catchError(this.handleError))
  // }

  //Helper method for ERROR Handling
  private handleError(err : any){
    let errorMessage : string;
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured ${err.error.message}`;
    }
    else{
      errorMessage = `Back end returned with status code ${err.status} : ${err.error.message}`;
    }
    return throwError(() => errorMessage);
  }
}
