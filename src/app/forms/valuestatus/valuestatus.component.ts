import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-valuestatus',
  templateUrl: './valuestatus.component.html',
  styleUrls: ['./valuestatus.component.css']
})
export class ValuestatusComponent implements OnInit {

  regForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setForm();

     // valueChanges - based on subscribe
    this.regForm.get('firstName').valueChanges.subscribe(fname => {
      console.log("FirstName value is changing " + fname);
    });

    // this.regForm.valueChanges.subscribe(formData => {
    //   console.log("FirstName value is changing " + formData.firstName);
    //   console.log("lastName value is changing " + formData.lastName);
    //   console.log("email value is changing " + formData.email);
    // });

    // statusChanges - based on subscribe
    // this.regForm.get('firstName').statusChanges.subscribe(fname => {
    //   console.log("FirstName Status " + fname);
    // });

    this.regForm.statusChanges.subscribe(formData => {
      console.log("Registration Form Status " + formData);
    });
  }

  setForm() {
    // with multiple validations
    this.regForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      email: ['', Validators.required]
    })  
  }

  regSubmit(formData: FormGroup) {
    console.log(formData.value);
  }


}
