import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation.component';
import { ErrorComponent } from './error.component';
import { ProductModule } from './product/product.module';
import { RxjsDemoComponent } from './shared/rxjsDemo/rxjs-demo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,    
    GalleryComponent,
    HomeComponent,
    RxjsDemoComponent,       
    NavigationComponent,
    ErrorComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
