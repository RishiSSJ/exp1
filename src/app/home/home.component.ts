import { Component, OnInit, ViewChild } from '@angular/core';
import { GalleryComponent } from '../shared/gallery/gallery.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(GalleryComponent)
  gallery! : GalleryComponent;

  constructor() { }

  ngOnInit(): void {
  }

  addNewPicture(){
    this.gallery.pictures.unshift(this.gallery.generateImage());
  }

  removeFirstPicture(){
    this.gallery.pictures.shift();
  }

}
