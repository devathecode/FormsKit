import { Injectable } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "@shared/shared.module";
import { ToastrModule } from "ngx-toastr";
import { CookieModule, CookieService } from "ngx-cookie";
import { StorageService } from "../services/storage.service";
import { CoreModule } from "@core/core.module";
import { TranslateModule, TranslatePipe, TranslateService } from "@ngx-translate/core";
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from "ng-recaptcha";
import { DataService } from "@data/services/data.service";
import { CommonModule } from "@angular/common";
import { RegisterFormDataModel, RegistrationAPIResponseModel } from "@data/schema/register.model";
import { AppConstants } from "@core/constants/app-constants";
import { LayoutModule } from "@layout/layout.module";

@Injectable()
export class AppTestingConstants {

  public static readonly mockSuccessRegistrationResponse: RegistrationAPIResponseModel = {
    created: "2022-02-08T18:21:49+05:30",
    email: "abhinav@yopmail.com",
    firstName: "Abhinav",
    id: 1,
    lastName: "Sharma"
  };
  public static readonly mockUserDetails = {
    "address": "milton ave, syracuse, ny 13209, usa",
    "calKing": 7,
    "city": "Syracuse",
    "created": "2022-02-08T18:21:49+05:30",
    "email": "abhinav@yopmail.com",
    "firstName": "Abhinav",
    "full": 4,
    "id": 1,
    "king": 1,
    "lastName": "Sharma",
    "optIn": true,
    "phone": "9845321162",
    "purchaseStore": "MACYS",
    "queen": 1,
    "state": "Austrelia",
    "suspended": false,
    "twin": 1,
    "twinXL": 2,
    "unitNo": "22A",
    "zipcode": "1399"
  }
  public static readonly mockRegistrationFormData: RegisterFormDataModel = {
    firstName: 'firstname',
    lastName: 'lastname',
    email: 'email@email.com',
    confirmEmail: 'email@email.com',
    chooseReward: 'paypal',
    isAgree: false,
    recaptcha: 'string'
  }

  public static readonly errorMessage = 'Something went wrong, Please try again later.'
  public static readonly TestBedConfigurationImports = [
    BrowserModule,
    FormsModule,
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    RouterTestingModule,
    HttpClientTestingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    ToastrModule.forRoot(),
    CookieModule.withOptions(),
    TranslateModule.forRoot(),
  ];

  public static readonly TestBedConfigurationProviders = [
    StorageService,
    TranslateService,
    DataService,
    TranslatePipe,
    CookieService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: AppConstants.recaptchaSiteKey,
      } as RecaptchaSettings,
    }
  ];
}
