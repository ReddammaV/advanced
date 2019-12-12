import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styleUrls: ['./modeldriven.component.css']
})
export class ModeldrivenComponent implements OnInit {
  regForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setForm();   
  }

  setForm() {
    // first method
    // this.regForm = new FormGroup({
    //   firstName : new FormControl(),
    //   lastName : new FormControl(),
    //   email : new FormControl()
    // })

    // second method
    // this.regForm = this.fb.group({
    //   firstName : new FormControl(),
    //   lastName : new FormControl(),
    //   email : new FormControl()
    // })

    // third method
    // this.regForm =  this.fb.group({
    //   id: [],
    //   firstName : [],
    //   lastName : [],
    //   email : []
    // })

    // fourth method
    // Here we're using invented commas for to prevent null value
    // this.regForm = this.fb.group({
    //   id: [],
    //   firstName: [''],
    //   lastName: [''],
    //   email: ['']
    // })

    // // fifth method
    // this.regForm = this.fb.group({
    //   id: [0],
    //   firstName: [''],
    //   lastName: [''],
    //   email: ['velasirireddamma@gmail.com']
    // })

    // with validations
    // this.regForm = this.fb.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', Validators.required]
    // })

    // with multiple validations
    this.regForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      email: ['', Validators.required]
    })  

  }

  regSubmit(formData: FormGroup) {
    // alert("Hello");
    console.log(formData);
    console.log(formData.value);

    // how to get individual value from the form
    console.log(this.regForm.get('firstName').value);
    console.log(this.regForm.get('lastName').value);
    console.log(this.regForm.get('email').value);
    console.log(this.regForm.value);
  }

  // reset
  resetForm() {
    // first method
    // this.regForm.reset();

    // second Method
    // this.regForm.reset({
    //   firstName: 'Reddy',
    //   lastName: '',
    //   email: 'velasirireddamma@gmail.com'
    // });

    // third Method - just print what you need
    this.regForm.reset({
      email: 'velasirireddamma@gmail.com'
    });
  }

  // set value - In setValue we have to must give all the form values
  setValue(){
    this.regForm.setValue({
      firstName: 'Aruna Mohan',
      lastName: 'Velasiri',
      email: 'arunamohan@gmail.com'
    });
  }

  // patch value - In patchValue we dont want to give all the values in the form
  patchValue(){
    this.regForm.patchValue({
      firstName: 'Reddy',
      lastName: '',
      email: 'reddamma@gmail.com'
    });
  }

}
