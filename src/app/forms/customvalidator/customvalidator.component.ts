import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { NumericCharactersvalidator, Emailvalidator } from '../../models/emailvalidator';

@Component({
  selector: 'app-customvalidator',
  templateUrl: './customvalidator.component.html',
  styleUrls: ['./customvalidator.component.css']
})
export class CustomvalidatorComponent implements OnInit {
  regForm: FormGroup;

  formError = {
    'fname': '',
    'email': '',
    'mobile':''
  }

  validationMsg = {
    'fname': {
      'required': 'first name is required !!',
      'minlength': 'Min length is 5',
      'maxlength': 'Max length is 10'
    },
    'email': {
      'required': 'Email is required !!',
      'minlength': 'Min length is 5',
      'validEmail': 'Email is not a proper format'
    },
    'mobile': {
      'required': 'Mobile is required !!',
      'validNumericCharacters': 'Allow Numeric Characters Only'
    }
  }

  constructor(private _fb: FormBuilder) {
    this.setFormState();
  }

  setFormState() {
    this.regForm = this._fb.group({
      //fname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])),
      // email: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.email])),
      // email: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5),
      // Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),

      fname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5),
      Emailvalidator.validEmail])),
      mobile: new FormControl('', Validators.compose([Validators.required, NumericCharactersvalidator.validNumericCharacters])),


    });

    this.regForm.valueChanges.subscribe(fdata => this.onValueChanges(fdata));
  }

  ngOnInit() {

  }

  onValueChanges(fdata: any) {
    if (!this.regForm) { return }
    for (let field of Object.keys(this.formError)) {
      this.formError[field] = "";
      let control = this.regForm.get(field);
      if (control && control.dirty && !control.valid) {
        let msg = this.validationMsg[field];
        for (let key of Object.keys(control.errors)) {
          this.formError[field] += msg[key] + '  ';
        }
      }
    }
  }

  regSubmit(formdata: NgForm) {
    console.log(formdata.value);
  }

  ResetForm() {
    this.regForm.reset();
  }
}
