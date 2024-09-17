import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
title : string = "About"
count : number = 0 ;
incrementValue(){
this.count = this.count + 1 ;
}
decrementValue(){
  this.count = this.count - 1 ;
}
reset() {
  this.count = 0
}
}
