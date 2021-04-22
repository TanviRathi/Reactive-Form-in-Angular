import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Step 2:Define form model in component class
// FormControl class is used for individual elements
// FormGroup class is used to rrepresent the entire form.
// FormGroup class can also be used to group different form controls.
// FormBuilder is an alternative to create FormGroups and FormControls
// Validation rules are set in component class
export class AppComponent {

  constructor(private fb: FormBuilder){}

  registrationForm = this.fb.group({
    userName: new FormControl(null, [Validators.required]),
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });
  // registrationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });
 // this method is used to set different form control values
  // tslint:disable-next-line: typedef
  // setValue & patchValue are used to fill form values from an API or service
  // setValue is used to set values to all the form controls and patchValue is used when values are to be set for few of the form controls.
  // tslint:disable-next-line: typedef
  LoadApiData(){
    this.registrationForm.patchValue({
      userName: 'Tanvi',
      password: 'test',
      confirmPassword: 'test',
    });
  }
  // tslint:disable-next-line: typedef
  get userName() { console.log(this.registrationForm.get('userName')); return this.registrationForm.get('userName'); }
}
