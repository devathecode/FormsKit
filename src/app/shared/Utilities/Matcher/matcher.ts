import {AbstractControl, ValidatorFn} from '@angular/forms';

export default class Validation {
    static match(controlName: string, checkControlName: string): ValidatorFn | any {
        return (controls: AbstractControl) => {
            const control = controls.get(controlName);
            const checkControl = controls.get(checkControlName);
            if (checkControl?.errors && !checkControl.errors['notSame']) {
                return null;
            }
            if (control?.value !== checkControl?.value) {
                controls.get(checkControlName)?.setErrors({notSame: true});
            } else {
                controls.get(checkControlName)?.setErrors(null);
            }
            return;
        };
    }
}
