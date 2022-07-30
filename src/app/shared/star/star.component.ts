import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input()
  rating! : number;
  cropWidth : number = 75;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.cropWidth = this.rating * 75/5;

  }

  @Output()
  ratingClicked : EventEmitter<string> = new EventEmitter();

  onClick() : void{
    console.log("Event emitted with rating clicked");
    this.ratingClicked.emit(`The rating you clicked is ${this.rating}`);
  }
}
