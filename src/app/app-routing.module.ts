import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error.component';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'products', loadChildren:() => import('./product/product.module').then(m => ProductModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
