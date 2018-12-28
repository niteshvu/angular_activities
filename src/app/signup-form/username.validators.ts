import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'q';

export class UsernameValidators{
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0){
            return {
                cannotContainSpace: true
            };
        }
        
    }

    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value == 'Nitesh'){
                    resolve({
                        shouldBeUnique: true
                    });
                }
                else{
                    resolve(null);
                }
            }, 2000)
        })
    }
}