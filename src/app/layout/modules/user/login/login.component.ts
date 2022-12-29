import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppConstants } from "../../../../core/constants/app-constants";
import { LoginValidationMessages } from "./ValidationMessages/login-validation-messages";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    loginValidationMessages = LoginValidationMessages;
    viewPassword = false;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.compose([
                Validators.pattern(AppConstants.emailPattern),
                Validators.required,
            ])],
            password: ['', Validators.compose([
                Validators.pattern(AppConstants.passwordPattern),
                Validators.required
            ])]
        })
    }

    onSubmit() {
        console.log('form values', this.loginForm.value);
    }

    handleViewPassword() {
        this.viewPassword = !this.viewPassword;
    }
}
