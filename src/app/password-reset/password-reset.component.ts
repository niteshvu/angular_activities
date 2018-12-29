import { PasswordsValidators } from './password.validators';
import { Component } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent  {
  form;
  constructor(fb: FormBuilder){
      this.form  = fb.group({
        oldPassword: ['', Validators.required],
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },{
        Validator: PasswordsValidators.passwordsMustMatch
      })
    }

get oldPassword(){
  return this.form.get('oldPassword');
}
get newPassword(){
  return this.form.get('newPassword');
}
get confirmPassword(){
  return this.form.get('confirmPassword');
}
}
