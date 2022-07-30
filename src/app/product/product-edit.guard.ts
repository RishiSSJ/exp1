import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ReactiveFormComponent } from './reactiveForms/form.component';

@Injectable({
  providedIn: 'root'
})
export class ProductEditGuard implements CanDeactivate<unknown> {

  canDeactivate(
  component: ReactiveFormComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    if(component.formGroup.dirty && component.formSubmitted == false){
      const prodName = component.newProduct.productName || 'New Product'
      return confirm(`Would you like to navigate and loose all changes to the ${prodName}`)
    }
    return true;
  }

}
