import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  
  constructor(private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //Capture the id parameter from the route
      let id = route.url[1].path;

      //Check if it is a number
      var idParam = Number(id);
      
      //If not a number or less than 1 open an alert box and navigate to list page
      if(isNaN(idParam) || idParam < 1){
        alert("Invalid Product Id")
        this.router.navigate(['/products'])
        return false;
      }

    return true;
  }
  
}
