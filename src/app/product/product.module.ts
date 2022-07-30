import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form-component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AttributedirectivesDemoComponent } from '../attrdirectives/attributedirectives-demo/attributedirectives-demo.component';
import { ReactiveFormComponent } from './reactiveForms/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductEditGuard } from './product-edit.guard';
import { SharedModule } from '../shared/shared.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductDataService } from './product-data.service';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent,
    AttributedirectivesDemoComponent,
    ProductDetailsComponent,
    ReactiveFormComponent,
    ProductAddComponent
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(ProductDataService),
    RouterModule.forChild([
      {path: 'products', component : ProductListComponent},
      {path: 'products/0/add', component : ProductAddComponent},
      {path: 'products/:id', canActivate:[ProductDetailGuard], component : ProductDetailsComponent},
      {path: 'products/:id/edit', canDeactivate: [ProductEditGuard], component : ReactiveFormComponent}
    ]),    
  ]
})
export class ProductModule { }
