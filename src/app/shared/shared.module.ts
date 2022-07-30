import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { PaAttrDirective } from '../attrdirectives/attr.directive';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PaAttrDirective,
    StarComponent,    
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    CommonModule,
    FormsModule,
    PaAttrDirective,
    StarComponent,    
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
