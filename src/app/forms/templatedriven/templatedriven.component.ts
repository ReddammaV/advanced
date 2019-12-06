import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  regSubmit(formData: NgForm){
    // alert("Hello");
    console.log(formData);    
    console.log(formData.value);    
  }

}
