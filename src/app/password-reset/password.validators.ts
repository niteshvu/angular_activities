import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'q';

export class PasswordsValidators{
    static passwordsMustMatch(control: AbstractControl): ValidationErrors | null{
        let newPassword = control.get('newPassword');
        console.log(newPassword.value)
        let confirmPassword = control.get('confirmPassword');
        //console.log(confirmPassword);

        if(newPassword.value !== confirmPassword.value){
            return {
                passwordsMustMatch: true
            };
        }
        return null;
    }
}