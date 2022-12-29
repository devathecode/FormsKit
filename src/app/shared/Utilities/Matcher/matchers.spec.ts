import { FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from "@shared/Utilities/matcher";
import { AppConstants } from "@core/constants/app-constants";

describe('[Unit] MatchFieldValidator', () => {

  describe(`validFieldMatch('Email') parameter field name`, () => {
    const matchFieldValidator = Validation.match(
      'controlName',
      'confirmControlName',
    );
    const form = new FormGroup({
      controlName: new FormControl('', Validators.compose([
        Validators.pattern(AppConstants.emailPattern),
        Validators.required,
      ])),
      confirmControlName: new FormControl('', Validators.compose([
        Validators.pattern(AppConstants.emailPattern),
        Validators.required,
      ])),
    }, {
      validators: [
        matchFieldValidator
      ]
    });
    const controlName = form.get('controlName');
    const confirmControlName = form.get('confirmControlName');

    it(`should set control error as { confirmFieldRequired: 'Confirm Email is required.' } when value are not same`, () => {
      controlName?.setValue('email@gmail.com');
      confirmControlName?.setValue('emaill@gmail.com');
      const expectedValue = {
        notSame: true,
      };
      expect(confirmControlName?.errors).toEqual(expectedValue);
    });
  });
});
