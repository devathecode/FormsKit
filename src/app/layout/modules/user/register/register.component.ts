import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppConstants } from "../../../../core/constants/app-constants";
import { RegistrationValidationMessages } from "./ValidationMessages/registration-validation-messages";
import Validation from "../../../../shared/Utilities/Matcher/matcher";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registrationForm!: FormGroup;
    registrationValidationMessages = RegistrationValidationMessages;
    viewPassword = false;
    viewConfirmPassword = false;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.registrationForm = this.formBuilder.group({
            email: ['', Validators.compose([
                Validators.pattern(AppConstants.emailPattern),
                Validators.required,
            ])],
            password: ['', Validators.compose([
                Validators.pattern(AppConstants.passwordPattern),
                Validators.required
            ])],
            confirmPassword: ['', Validators.compose([
                Validators.pattern(AppConstants.passwordPattern),
                Validators.required
            ])],
        }, {
            validators: [
                Validation.match('password', 'confirmPassword')
            ]
        })
    }

    onSubmit() {
        console.log('form values', this.registrationForm.value);
    }

    handleViewPassword(clicked: string){
        if(clicked === 'password'){
            this.viewPassword = !this.viewPassword
        }
        if(clicked === 'confirmPassword'){
            this.viewConfirmPassword = !this.viewConfirmPassword
        }
    }
}
