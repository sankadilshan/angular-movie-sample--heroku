import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title="hello world";
  isActive=true;
  onClick(){
  console.log("button pressed")
} 
enter(){
   console.log("enter pressed");
 }
 button(val){
    console.log(val.target.value);
    console.log(val.type);
 }
  constructor() { }

  ngOnInit() {
  }

}
