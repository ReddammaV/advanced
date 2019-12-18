import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NumericCharactersvalidator, Emailvalidator } from 'src/app/models/emailvalidator';

@Component({
  selector: 'app-conditionalvalidator',
  templateUrl: './conditionalvalidator.component.html',
  styleUrls: ['./conditionalvalidator.component.css']
})
export class ConditionalvalidatorComponent implements OnInit {

  regForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setForm();   
  }

  setForm() {
    // with multiple validations
    this.regForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      subscribe: [false],
      // email: ['', Validators.compose([Validators.required, Emailvalidator.validEmail])],
      email: [''],
      mobile: ['', Validators.compose([Validators.required, NumericCharactersvalidator.validNumericCharacters])]
    })  

    // for conditional validation start
    this.regForm.get('subscribe').valueChanges.subscribe(checkedValue => {
      const email = this.regForm.get('email');
      if(checkedValue){
        // email.setValidators(Validators.required);
        email.setValidators(Validators.compose([Validators.required, Emailvalidator.validEmail]));
      } else {
        email.clearValidators();
      }
      email.updateValueAndValidity();
    })
    // for conditional validation end
    
  }

  regSubmit(formData: FormGroup) {
    console.log(formData.value);
    this.regForm.reset();
  }

}
