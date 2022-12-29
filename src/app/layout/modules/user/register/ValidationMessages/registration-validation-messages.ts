export class RegistrationValidationMessages {
  static errorMessages = {
    email: [
      {type: 'required', message: 'Please enter your email'},
      {type: 'pattern', message: 'Please enter a valid email'},
      {type: 'isExist', message: 'Email address already exist'},
      {type: 'notSame', message: 'The confirmation email must match your email address.'}
    ],
    chooseReward: [
      {type: 'required', message: 'Please select a reward type'}
    ],
    firstName: [
      {type: 'required', message: 'Please enter your first name'},
      {type: 'pattern', message: 'Please enter a valid name'},
      {type: 'maxlength', message: 'Maximum of 128 characters are allowed'},
    ],
    lastName: [
      {type: 'required', message: 'Please enter your last name'},
      {type: 'pattern', message: 'Please enter a valid name'},
      {type: 'maxlength', message: 'Maximum of 128 characters are allowed'},
    ],
    password: [
      {type: 'required', message: 'Password is required'},
      {type: 'notSame', message: 'Confirm password and password must be same.'},
      {
        type: 'pattern',
        message: 'Please enter a valid password'
      }
    ],
    phone: [
      {type: 'required', message: 'Please enter your phone number'},
      {type: 'maxlength', message: 'Please enter 10 digit phone number'},
      {type: 'pattern', message: 'Please enter a valid phone number'},
    ],
    address: [
      {type: 'required', message: 'Please enter your address'},
    ],
    state: [
      {type: 'required', message: 'Please enter valid state'}
    ],
    city: [
      {type: 'required', message: 'Please enter valid city'}
    ],
    zipCode: [
      {type: 'required', message: 'Please enter valid zipcode'}
    ],
    purchaseFrom: [
      {type: 'required', message: 'Please select the purchase address'}
    ],
    productDetails: [
      {type: 'required', message: 'This field cannot be empty'}
    ],
    isAgree: [
      {type: 'required', message: 'Please agree with the above'},
    ],
    recaptcha: [
      {type: 'required', message: 'Please check the captcha'},
    ]
  };
}
