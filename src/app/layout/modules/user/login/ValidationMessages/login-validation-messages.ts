export class LoginValidationMessages {
    static errorMessages = {
        email: [
            {type: 'required', message: 'Please enter your email'},
            {type: 'pattern', message: 'Please enter a valid email'},
            {type: 'isExist', message: 'Email address already exist'},
            {type: 'notSame', message: 'The confirmation email must match your email address.'}
        ],
        password: [
            {type: 'required', message: 'Password is required'},
            {type: 'pattern', message: 'Please enter a strong password'},
            {type: 'notSame', message: 'Confirm password and password must be same.'}
        ]
    };
}
