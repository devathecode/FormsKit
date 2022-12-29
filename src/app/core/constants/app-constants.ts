import { Injectable } from "@angular/core";

@Injectable()
export class AppConstants {
    /**
     * Form Data
     */
    
    public static readonly passwordPattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$';
    public static readonly namePattern = '(^([a-zA-Z]+\\s?)*$)';
    public static readonly messagePattern = '(^(?!\\s)[,`~/;\'<>!#$%+=:.?()"*&@\\w\\s{|}-]*$)';
    public static readonly emailPattern = '(?:[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+)*)@(?:(?:[a' +
        '-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+(?:[a-zA-Z0-9-]*[a-zA-Z]){2,})';
}
