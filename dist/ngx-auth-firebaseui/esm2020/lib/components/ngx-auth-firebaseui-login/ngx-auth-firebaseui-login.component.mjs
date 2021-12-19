import { Component, EventEmitter, Inject, Input, Output, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthProvider } from '../../services/auth-process.service';
import { NgxAuthFirebaseuiAnimations } from '../../animations';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../../services/auth-process.service";
import * as i2 from "@angular/forms";
const _c0 = function () { return { x: "50px" }; };
const _c1 = function (a1) { return { value: "*", params: a1 }; };
function NgxAuthFirebaseuiLoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "img", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("src", ctx_r0.logoUrl, i0.ɵɵsanitizeUrl);
} }
function NgxAuthFirebaseuiLoginComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.emailErrorRequiredText, " ");
} }
function NgxAuthFirebaseuiLoginComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.emailErrorPatternText, " ");
} }
const _c2 = function () { return { x: "-50px" }; };
function NgxAuthFirebaseuiLoginComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function NgxAuthFirebaseuiLoginComponent_button_20_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onResetPasswordRequested.emit(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(4, _c1, i0.ɵɵpureFunction0(3, _c2)))("color", ctx_r3.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.forgotPasswordText, " ");
} }
const _c3 = function () { return { z: "50px", delay: "50ms", scale: "0.2" }; };
function NgxAuthFirebaseuiLoginComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "span", 21);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c3)));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.orLabelText);
} }
const _c4 = function () { return { value: "100" }; };
const _c5 = function () { return { x: "100px" }; };
const _c6 = function () { return { x: "-100px" }; };
function NgxAuthFirebaseuiLoginComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelementStart(1, "span", 21);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 23);
    i0.ɵɵlistener("click", function NgxAuthFirebaseuiLoginComponent_div_25_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onCreateAccountRequested.emit(); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@animateStagger", i0.ɵɵpureFunction0(6, _c4));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(8, _c1, i0.ɵɵpureFunction0(7, _c5)));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.dontHaveAnAccountText, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(11, _c1, i0.ɵɵpureFunction0(10, _c6)))("color", ctx_r5.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r5.createAccountButtonText);
} }
const _c7 = function () { return { value: "50" }; };
const _c8 = function () { return { duration: "300ms", y: "100px" }; };
export class NgxAuthFirebaseuiLoginComponent {
    constructor(
    // eslint-disable-next-line @typescript-eslint/ban-types
    platformId, authProcess, formBuilder) {
        this.platformId = platformId;
        this.authProcess = authProcess;
        this.formBuilder = formBuilder;
        this.providers = AuthProvider.ALL; //  google, facebook, twitter, github as array or all as one single string
        this.registrationEnabled = true;
        this.resetPasswordEnabled = true;
        // i18n
        this.titleText = 'LOGIN TO YOUR ACCOUNT';
        this.rememberMeText = 'Remember Me';
        this.loginButtonText = 'LOGIN';
        this.orLabelText = 'OR';
        this.forgotPasswordText = 'Forgot Password?';
        this.dontHaveAnAccountText = 'Don\'t have an account?';
        this.createAccountButtonText = 'Create an account';
        // i18n email
        this.emailText = 'Email';
        this.emailErrorRequiredText = 'Email is required';
        this.emailErrorPatternText = 'Please enter a valid email address';
        // i18n password
        this.passwordText = 'Password';
        this.passwordErrorRequiredText = 'Password is required';
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onCreateAccountRequested = new EventEmitter();
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onResetPasswordRequested = new EventEmitter();
        this.onLoginButtonClicked = new EventEmitter();
        this.authProviders = AuthProvider;
        this.authenticationError = false;
        this.onSuccess = authProcess.onSuccessEmitter;
        this.onError = authProcess.onErrorEmitter;
    }
    get color() {
        return this.authenticationError ? 'warn' : 'primary';
    }
    get colorAccent() {
        return this.authenticationError ? 'warn' : 'accent';
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.onErrorSubscription = this.onError.subscribe(() => this.authenticationError = true);
        }
        this.updateAuthSnackbarMessages();
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
    updateAuthSnackbarMessages() {
        this.authProcess.messageOnAuthSuccess = this.messageOnAuthSuccess;
        this.authProcess.messageOnAuthError = this.messageOnAuthError;
    }
    async login() {
        // Emit event for button click
        this.onLoginButtonClicked.emit();
        return await this.authProcess.signInWith(this.authProviders.EmailAndPassword, {
            email: this.loginForm.controls.email.value,
            password: this.loginForm.controls.password.value
        });
    }
}
NgxAuthFirebaseuiLoginComponent.ɵfac = function NgxAuthFirebaseuiLoginComponent_Factory(t) { return new (t || NgxAuthFirebaseuiLoginComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i1.AuthProcessService), i0.ɵɵdirectiveInject(i2.FormBuilder)); };
NgxAuthFirebaseuiLoginComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxAuthFirebaseuiLoginComponent, selectors: [["ngx-auth-firebaseui-login"]], inputs: { logoUrl: "logoUrl", providers: "providers", appearance: "appearance", registrationEnabled: "registrationEnabled", resetPasswordEnabled: "resetPasswordEnabled", messageOnAuthSuccess: "messageOnAuthSuccess", messageOnAuthError: "messageOnAuthError", titleText: "titleText", rememberMeText: "rememberMeText", loginButtonText: "loginButtonText", orLabelText: "orLabelText", forgotPasswordText: "forgotPasswordText", dontHaveAnAccountText: "dontHaveAnAccountText", createAccountButtonText: "createAccountButtonText", emailText: "emailText", emailErrorRequiredText: "emailErrorRequiredText", emailErrorPatternText: "emailErrorPatternText", passwordText: "passwordText", passwordErrorRequiredText: "passwordErrorRequiredText" }, outputs: { onSuccess: "onSuccess", onError: "onError", onCreateAccountRequested: "onCreateAccountRequested", onResetPasswordRequested: "onResetPasswordRequested", onLoginButtonClicked: "onLoginButtonClicked" }, decls: 26, vars: 41, consts: [["fxLayout", "column", "id", "login"], ["fxLayout", "column", "fxLayoutAlign", "center center", "id", "login-form-wrapper"], ["id", "login-form"], ["class", "logo", 4, "ngIf"], [1, "title"], ["name", "loginForm", "novalidate", "", 3, "formGroup"], [3, "appearance"], ["formControlName", "email", "matInput", "", "autocomplete", "username", 3, "placeholder"], ["matSuffix", "", 3, "color"], [4, "ngIf"], ["formControlName", "password", "matInput", "", "type", "password", "autocomplete", "current-password", 3, "placeholder"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-between center", 1, "remember-forgot-password"], ["class", "forgot-password", "mat-button", "", "type", "button", 3, "color", "click", 4, "ngIf"], ["aria-label", "LOG IN", "id", "loginButton", "mat-raised-button", "", 1, "submit-button", 3, "color", "disabled", "click"], ["class", "separator", 4, "ngIf"], ["fxLayoutAlign", "center center", "layout", "column", "theme", "raised", 3, "providers"], ["class", "register", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], [1, "logo"], ["alt", "logo", 3, "src"], ["mat-button", "", "type", "button", 1, "forgot-password", 3, "color", "click"], [1, "separator"], [1, "text"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "register"], ["id", "createAccountButton", "mat-button", "", "type", "button", 3, "color", "click"]], template: function NgxAuthFirebaseuiLoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, NgxAuthFirebaseuiLoginComponent_div_3_Template, 2, 5, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "form", 5);
        i0.ɵɵelementStart(7, "mat-form-field", 6);
        i0.ɵɵelement(8, "input", 7);
        i0.ɵɵelementStart(9, "mat-icon", 8);
        i0.ɵɵtext(10, "email");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(11, NgxAuthFirebaseuiLoginComponent_mat_error_11_Template, 2, 1, "mat-error", 9);
        i0.ɵɵtemplate(12, NgxAuthFirebaseuiLoginComponent_mat_error_12_Template, 2, 1, "mat-error", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-form-field", 6);
        i0.ɵɵelement(14, "input", 10);
        i0.ɵɵelementStart(15, "mat-icon", 8);
        i0.ɵɵtext(16, "lock");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-error");
        i0.ɵɵtext(18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 11);
        i0.ɵɵtemplate(20, NgxAuthFirebaseuiLoginComponent_button_20_Template, 2, 6, "button", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "button", 13);
        i0.ɵɵlistener("click", function NgxAuthFirebaseuiLoginComponent_Template_button_click_21_listener() { return ctx.login(); });
        i0.ɵɵtext(22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(23, NgxAuthFirebaseuiLoginComponent_div_23_Template, 3, 5, "div", 14);
        i0.ɵɵelement(24, "ngx-auth-firebaseui-providers", 15);
        i0.ɵɵtemplate(25, NgxAuthFirebaseuiLoginComponent_div_25_Template, 5, 13, "div", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        let tmp_10_0;
        let tmp_11_0;
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("@animateStagger", i0.ɵɵpureFunction0(25, _c7));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.logoUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(27, _c1, i0.ɵɵpureFunction0(26, _c2)));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.titleText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(30, _c1, i0.ɵɵpureFunction0(29, _c8)))("formGroup", ctx.loginForm);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(33, _c1, i0.ɵɵpureFunction0(32, _c0)))("appearance", ctx.appearance);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("placeholder", ctx.emailText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.color);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", (tmp_10_0 = ctx.loginForm.get("email")) == null ? null : tmp_10_0.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !((tmp_11_0 = ctx.loginForm.get("email")) == null ? null : tmp_11_0.hasError("required")) && ((tmp_11_0 = ctx.loginForm.get("email")) == null ? null : tmp_11_0.hasError("email")));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(36, _c1, i0.ɵɵpureFunction0(35, _c0)))("appearance", ctx.appearance);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("placeholder", ctx.passwordText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.color);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.passwordErrorRequiredText, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(39, _c1, i0.ɵɵpureFunction0(38, _c0)));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resetPasswordEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.colorAccent)("disabled", ctx.loginForm.invalid);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.loginButtonText, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.providers.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("providers", ctx.providers);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.registrationEnabled);
    } }, styles: ["ngx-auth-firebaseui-login #login-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width: 599px){ngx-auth-firebaseui-login #login-form-wrapper{padding:16px}}ngx-auth-firebaseui-login #login-form-wrapper #login-form{width:384px;max-width:384px;padding:32px;text-align:center}@media screen and (max-width: 599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form{padding:24px;width:100%}}ngx-auth-firebaseui-login #login-form-wrapper #login-form .logo{width:150px;height:150px;margin:32px auto}ngx-auth-firebaseui-login #login-form-wrapper #login-form .title{font-size:20px;margin:16px 0 32px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form{width:100%;text-align:left}ngx-auth-firebaseui-login #login-form-wrapper #login-form form mat-form-field{width:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form form mat-checkbox{margin:0}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password{font-size:13px;margin-top:8px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password .remember-me{margin-bottom:16px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password{font-size:13px;font-weight:500;margin-bottom:16px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .submit-button{width:220px;margin:16px auto;display:block}@media screen and (max-width: 599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form form .submit-button{width:90%}}ngx-auth-firebaseui-login #login-form-wrapper #login-form .register{margin:32px auto 24px;font-weight:500}ngx-auth-firebaseui-login #login-form-wrapper #login-form .register .text{margin-right:8px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator{font-size:15px;font-weight:600;margin:24px auto;position:relative;overflow:hidden;width:100px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text{display:inline-flex;position:relative;padding:0 8px;z-index:9999}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:before,ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:after{content:\"\";display:block;width:30px;position:absolute;top:10px;border-top:1px solid}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:before{right:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:after{left:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form button.google-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.apple-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.facebook-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.twitter-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.github-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.microsoft-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.yahoo-raised{width:192px;text-transform:none;color:#fff;font-size:13px;margin-bottom:8px}@media screen and (max-width: 599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form button{width:80%}}\n"], encapsulation: 2, data: { animation: NgxAuthFirebaseuiAnimations } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxAuthFirebaseuiLoginComponent, [{
        type: Component,
        args: [{ selector: 'ngx-auth-firebaseui-login', encapsulation: ViewEncapsulation.None, animations: NgxAuthFirebaseuiAnimations, template: "<div fxLayout=\"column\" id=\"login\">\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" id=\"login-form-wrapper\">\n\n    <div [@animateStagger]=\"{ value: '50' }\" id=\"login-form\">\n\n      <div *ngIf=\"logoUrl\" class=\"logo\">\n        <img [@animate]=\"{ value: '*', params: { x: '50px' } }\" [src]=\"logoUrl\" alt=\"logo\">\n      </div>\n\n      <div [@animate]=\"{ value: '*', params: { x: '-50px' } }\" class=\"title\">{{titleText}}</div>\n\n      <form [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" [formGroup]=\"loginForm\" name=\"loginForm\"\n            novalidate>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"emailText\" formControlName=\"email\" matInput autocomplete=\"username\">\n          <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n          <mat-error *ngIf=\"loginForm.get('email')?.hasError('required')\">\n            {{emailErrorRequiredText}}\n          </mat-error>\n          <mat-error\n            *ngIf=\"!loginForm.get('email')?.hasError('required') &&\n                                loginForm.get('email')?.hasError('email')\">\n            {{emailErrorPatternText}}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"passwordText\" formControlName=\"password\" matInput type=\"password\" autocomplete=\"current-password\">\n          <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n          <mat-error>\n            {{passwordErrorRequiredText}}\n          </mat-error>\n        </mat-form-field>\n\n        <div [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n             class=\"remember-forgot-password\" fxLayout=\"row\"\n             fxLayout.xs=\"column\"\n             fxLayoutAlign=\"space-between center\">\n          <!--          <mat-checkbox class=\"remember-me\" aria-label=\"Remember Me\">-->\n          <!--            {{rememberMeText}}-->\n          <!--          </mat-checkbox>-->\n\n          <button (click)=\"onResetPasswordRequested.emit()\"\n                  *ngIf=\"resetPasswordEnabled\"\n                  [@animate]=\"{ value: '*', params: { x: '-50px' } }\"\n                  [color]=\"color\"\n                  class=\"forgot-password\"\n                  mat-button\n                  type=\"button\">\n            {{forgotPasswordText}}\n          </button>\n        </div>\n\n        <button (click)=\"login()\"\n                [color]=\"colorAccent\"\n                [disabled]=\"loginForm.invalid\"\n                aria-label=\"LOG IN\"\n                class=\"submit-button\"\n                id=\"loginButton\"\n                mat-raised-button>\n          {{loginButtonText}}\n        </button>\n\n      </form>\n\n      <div *ngIf=\"providers.length > 0\"\n           [@animate]=\"{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }\"\n           class=\"separator\">\n        <span class=\"text\">{{orLabelText}}</span>\n      </div>\n\n      <ngx-auth-firebaseui-providers [providers]=\"providers\"\n                                     fxLayoutAlign=\"center center\"\n                                     layout=\"column\"\n                                     theme=\"raised\"></ngx-auth-firebaseui-providers>\n\n      <div *ngIf=\"registrationEnabled\"\n           [@animateStagger]=\"{ value: '100' }\"\n           class=\"register\"\n           fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <span [@animate]=\"{ value: '*', params: { x: '100px' } }\" class=\"text\">\n          {{dontHaveAnAccountText}}\n        </span>\n        <button (click)=\"onCreateAccountRequested.emit()\"\n                [@animate]=\"{ value: '*', params: { x: '-100px' } }\"\n                [color]=\"color\"\n                id=\"createAccountButton\"\n                mat-button\n                type=\"button\">{{createAccountButtonText}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: ["ngx-auth-firebaseui-login #login-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width: 599px){ngx-auth-firebaseui-login #login-form-wrapper{padding:16px}}ngx-auth-firebaseui-login #login-form-wrapper #login-form{width:384px;max-width:384px;padding:32px;text-align:center}@media screen and (max-width: 599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form{padding:24px;width:100%}}ngx-auth-firebaseui-login #login-form-wrapper #login-form .logo{width:150px;height:150px;margin:32px auto}ngx-auth-firebaseui-login #login-form-wrapper #login-form .title{font-size:20px;margin:16px 0 32px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form{width:100%;text-align:left}ngx-auth-firebaseui-login #login-form-wrapper #login-form form mat-form-field{width:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form form mat-checkbox{margin:0}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password{font-size:13px;margin-top:8px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password .remember-me{margin-bottom:16px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password{font-size:13px;font-weight:500;margin-bottom:16px}ngx-auth-firebaseui-login #login-form-wrapper #login-form form .submit-button{width:220px;margin:16px auto;display:block}@media screen and (max-width: 599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form form .submit-button{width:90%}}ngx-auth-firebaseui-login #login-form-wrapper #login-form .register{margin:32px auto 24px;font-weight:500}ngx-auth-firebaseui-login #login-form-wrapper #login-form .register .text{margin-right:8px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator{font-size:15px;font-weight:600;margin:24px auto;position:relative;overflow:hidden;width:100px}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text{display:inline-flex;position:relative;padding:0 8px;z-index:9999}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:before,ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:after{content:\"\";display:block;width:30px;position:absolute;top:10px;border-top:1px solid}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:before{right:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form .separator .text:after{left:100%}ngx-auth-firebaseui-login #login-form-wrapper #login-form button.google-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.apple-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.facebook-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.twitter-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.github-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.microsoft-raised,ngx-auth-firebaseui-login #login-form-wrapper #login-form button.yahoo-raised{width:192px;text-transform:none;color:#fff;font-size:13px;margin-bottom:8px}@media screen and (max-width: 599px){ngx-auth-firebaseui-login #login-form-wrapper #login-form button{width:80%}}\n"] }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.AuthProcessService }, { type: i2.FormBuilder }]; }, { logoUrl: [{
            type: Input
        }], providers: [{
            type: Input
        }], appearance: [{
            type: Input
        }], registrationEnabled: [{
            type: Input
        }], resetPasswordEnabled: [{
            type: Input
        }], messageOnAuthSuccess: [{
            type: Input
        }], messageOnAuthError: [{
            type: Input
        }], titleText: [{
            type: Input
        }], rememberMeText: [{
            type: Input
        }], loginButtonText: [{
            type: Input
        }], orLabelText: [{
            type: Input
        }], forgotPasswordText: [{
            type: Input
        }], dontHaveAnAccountText: [{
            type: Input
        }], createAccountButtonText: [{
            type: Input
        }], emailText: [{
            type: Input
        }], emailErrorRequiredText: [{
            type: Input
        }], emailErrorPatternText: [{
            type: Input
        }], passwordText: [{
            type: Input
        }], passwordErrorRequiredText: [{
            type: Input
        }], onSuccess: [{
            type: Output
        }], onError: [{
            type: Output
        }], onCreateAccountRequested: [{
            type: Output
        }], onResetPasswordRequested: [{
            type: Output
        }], onLoginButtonClicked: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1dGgtZmlyZWJhc2V1aS1sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXV0aC1maXJlYmFzZXVpL3NyYy9saWIvY29tcG9uZW50cy9uZ3gtYXV0aC1maXJlYmFzZXVpLWxvZ2luL25neC1hdXRoLWZpcmViYXNldWktbG9naW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1dGgtZmlyZWJhc2V1aS9zcmMvbGliL2NvbXBvbmVudHMvbmd4LWF1dGgtZmlyZWJhc2V1aS1sb2dpbi9uZ3gtYXV0aC1maXJlYmFzZXVpLWxvZ2luLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQXlCLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBcUIsWUFBWSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFFckYsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7SUNDNUMsK0JBQWtDO0lBQ2hDLDBCQUFtRjtJQUNyRixpQkFBTTs7O0lBREMsZUFBa0Q7SUFBbEQsaUZBQWtELHlDQUFBOzs7SUFXckQsaUNBQWdFO0lBQzlELFlBQ0Y7SUFBQSxpQkFBWTs7O0lBRFYsZUFDRjtJQURFLDhEQUNGOzs7SUFDQSxpQ0FFaUU7SUFDL0QsWUFDRjtJQUFBLGlCQUFZOzs7SUFEVixlQUNGO0lBREUsNkRBQ0Y7Ozs7O0lBbUJBLGtDQU1zQjtJQU5kLGdMQUFTLHNDQUErQixJQUFDO0lBTy9D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QkFBakIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDRyxvQkFBb0I7a0JBQTVCLEtBQUs7WUFDRyxvQkFBb0I7a0JBQTVCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFHRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csdUJBQXVCO2tCQUEvQixLQUFLO1lBR0csU0FBUztrQkFBakIsS0FBSztZQUNHLHNCQUFzQjtrQkFBOUIsS0FBSztZQUNHLHFCQUFxQjtrQkFBN0IsS0FBSztZQUdHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyx5QkFBeUI7a0JBQWpDLEtBQUs7WUFJSSxTQUFTO2tCQUFsQixNQUFNO1lBRUcsT0FBTztrQkFBaEIsTUFBTTtZQUVHLHdCQUF3QjtrQkFBakMsTUFBTTtZQUVHLHdCQUF3QjtrQkFBakMsTUFBTTtZQUVHLG9CQUFvQjtrQkFBN0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBQTEFURk9STV9JRCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0F1dGhQcm9jZXNzU2VydmljZSwgQXV0aFByb3ZpZGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLXByb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge05neEF1dGhGaXJlYmFzZXVpQW5pbWF0aW9uc30gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRBcHBlYXJhbmNlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWF1dGgtZmlyZWJhc2V1aS1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtYXV0aC1maXJlYmFzZXVpLWxvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWF1dGgtZmlyZWJhc2V1aS1sb2dpbi5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBhbmltYXRpb25zOiBOZ3hBdXRoRmlyZWJhc2V1aUFuaW1hdGlvbnNcbn0pXG5leHBvcnQgY2xhc3MgTmd4QXV0aEZpcmViYXNldWlMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbG9nb1VybDogc3RyaW5nO1xuICBASW5wdXQoKSBwcm92aWRlcnM6IHN0cmluZ1tdIHwgc3RyaW5nID0gQXV0aFByb3ZpZGVyLkFMTDsgLy8gIGdvb2dsZSwgZmFjZWJvb2ssIHR3aXR0ZXIsIGdpdGh1YiBhcyBhcnJheSBvciBhbGwgYXMgb25lIHNpbmdsZSBzdHJpbmdcbiAgQElucHV0KCkgYXBwZWFyYW5jZTogTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZTtcbiAgQElucHV0KCkgcmVnaXN0cmF0aW9uRW5hYmxlZCA9IHRydWU7XG4gIEBJbnB1dCgpIHJlc2V0UGFzc3dvcmRFbmFibGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgbWVzc2FnZU9uQXV0aFN1Y2Nlc3M6IHN0cmluZztcbiAgQElucHV0KCkgbWVzc2FnZU9uQXV0aEVycm9yOiBzdHJpbmc7XG5cbiAgLy8gaTE4blxuICBASW5wdXQoKSB0aXRsZVRleHQgPSAnTE9HSU4gVE8gWU9VUiBBQ0NPVU5UJztcbiAgQElucHV0KCkgcmVtZW1iZXJNZVRleHQgPSAnUmVtZW1iZXIgTWUnO1xuICBASW5wdXQoKSBsb2dpbkJ1dHRvblRleHQgPSAnTE9HSU4nO1xuICBASW5wdXQoKSBvckxhYmVsVGV4dCA9ICdPUic7XG4gIEBJbnB1dCgpIGZvcmdvdFBhc3N3b3JkVGV4dCA9ICdGb3Jnb3QgUGFzc3dvcmQ/JztcbiAgQElucHV0KCkgZG9udEhhdmVBbkFjY291bnRUZXh0ID0gJ0RvblxcJ3QgaGF2ZSBhbiBhY2NvdW50Pyc7XG4gIEBJbnB1dCgpIGNyZWF0ZUFjY291bnRCdXR0b25UZXh0ID0gJ0NyZWF0ZSBhbiBhY2NvdW50JztcblxuICAvLyBpMThuIGVtYWlsXG4gIEBJbnB1dCgpIGVtYWlsVGV4dCA9ICdFbWFpbCc7XG4gIEBJbnB1dCgpIGVtYWlsRXJyb3JSZXF1aXJlZFRleHQgPSAnRW1haWwgaXMgcmVxdWlyZWQnO1xuICBASW5wdXQoKSBlbWFpbEVycm9yUGF0dGVyblRleHQgPSAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcyc7XG5cbiAgLy8gaTE4biBwYXNzd29yZFxuICBASW5wdXQoKSBwYXNzd29yZFRleHQgPSAnUGFzc3dvcmQnO1xuICBASW5wdXQoKSBwYXNzd29yZEVycm9yUmVxdWlyZWRUZXh0ID0gJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJztcblxuICAvLyBFdmVudHNcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKSBvblN1Y2Nlc3M6IGFueTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKSBvbkVycm9yOiBhbnk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgb25DcmVhdGVBY2NvdW50UmVxdWVzdGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgb25SZXNldFBhc3N3b3JkUmVxdWVzdGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQE91dHB1dCgpIG9uTG9naW5CdXR0b25DbGlja2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XG4gIGF1dGhQcm92aWRlcnMgPSBBdXRoUHJvdmlkZXI7XG4gIG9uRXJyb3JTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgYXV0aGVudGljYXRpb25FcnJvciA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgcHVibGljIGF1dGhQcm9jZXNzOiBBdXRoUHJvY2Vzc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLm9uU3VjY2VzcyA9IGF1dGhQcm9jZXNzLm9uU3VjY2Vzc0VtaXR0ZXI7XG4gICAgdGhpcy5vbkVycm9yID0gYXV0aFByb2Nlc3Mub25FcnJvckVtaXR0ZXI7XG4gIH1cblxuICBnZXQgY29sb3IoKTogc3RyaW5nIHwgVGhlbWVQYWxldHRlIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGlvbkVycm9yID8gJ3dhcm4nIDogJ3ByaW1hcnknO1xuICB9XG5cbiAgZ2V0IGNvbG9yQWNjZW50KCk6IHN0cmluZyB8IFRoZW1lUGFsZXR0ZSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA/ICd3YXJuJyA6ICdhY2NlbnQnO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5vbkVycm9yU3Vic2NyaXB0aW9uID0gdGhpcy5vbkVycm9yLnN1YnNjcmliZSgoKSA9PiB0aGlzLmF1dGhlbnRpY2F0aW9uRXJyb3IgPSB0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUF1dGhTbmFja2Jhck1lc3NhZ2VzKCk7XG5cbiAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlQXV0aFNuYWNrYmFyTWVzc2FnZXMoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoUHJvY2Vzcy5tZXNzYWdlT25BdXRoU3VjY2VzcyA9IHRoaXMubWVzc2FnZU9uQXV0aFN1Y2Nlc3M7XG4gICAgdGhpcy5hdXRoUHJvY2Vzcy5tZXNzYWdlT25BdXRoRXJyb3IgPSB0aGlzLm1lc3NhZ2VPbkF1dGhFcnJvcjtcbiAgfVxuXG4gIGFzeW5jIGxvZ2luKCkge1xuICAgIC8vIEVtaXQgZXZlbnQgZm9yIGJ1dHRvbiBjbGlja1xuICAgIHRoaXMub25Mb2dpbkJ1dHRvbkNsaWNrZWQuZW1pdCgpO1xuXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYXV0aFByb2Nlc3Muc2lnbkluV2l0aCh0aGlzLmF1dGhQcm92aWRlcnMuRW1haWxBbmRQYXNzd29yZCxcbiAgICAgIHtcbiAgICAgICAgZW1haWw6IHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzLmVtYWlsLnZhbHVlLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5sb2dpbkZvcm0uY29udHJvbHMucGFzc3dvcmQudmFsdWVcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iLCI8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgaWQ9XCJsb2dpblwiPlxuXG4gIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGlkPVwibG9naW4tZm9ybS13cmFwcGVyXCI+XG5cbiAgICA8ZGl2IFtAYW5pbWF0ZVN0YWdnZXJdPVwieyB2YWx1ZTogJzUwJyB9XCIgaWQ9XCJsb2dpbi1mb3JtXCI+XG5cbiAgICAgIDxkaXYgKm5nSWY9XCJsb2dvVXJsXCIgY2xhc3M9XCJsb2dvXCI+XG4gICAgICAgIDxpbWcgW0BhbmltYXRlXT1cInsgdmFsdWU6ICcqJywgcGFyYW1zOiB7IHg6ICc1MHB4JyB9IH1cIiBbc3JjXT1cImxvZ29VcmxcIiBhbHQ9XCJsb2dvXCI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBbQGFuaW1hdGVdPVwieyB2YWx1ZTogJyonLCBwYXJhbXM6IHsgeDogJy01MHB4JyB9IH1cIiBjbGFzcz1cInRpdGxlXCI+e3t0aXRsZVRleHR9fTwvZGl2PlxuXG4gICAgICA8Zm9ybSBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIiBbZm9ybUdyb3VwXT1cImxvZ2luRm9ybVwiIG5hbWU9XCJsb2dpbkZvcm1cIlxuICAgICAgICAgICAgbm92YWxpZGF0ZT5cblxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgW0BhbmltYXRlXT1cInsgdmFsdWU6ICcqJywgcGFyYW1zOiB7IHg6ICc1MHB4JyB9IH1cIiBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCI+XG4gICAgICAgICAgPGlucHV0IFtwbGFjZWhvbGRlcl09XCJlbWFpbFRleHRcIiBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiIG1hdElucHV0IGF1dG9jb21wbGV0ZT1cInVzZXJuYW1lXCI+XG4gICAgICAgICAgPG1hdC1pY29uIFtjb2xvcl09XCJjb2xvclwiIG1hdFN1ZmZpeD5lbWFpbDwvbWF0LWljb24+XG4gICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImxvZ2luRm9ybS5nZXQoJ2VtYWlsJyk/Lmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgICAgICAgICB7e2VtYWlsRXJyb3JSZXF1aXJlZFRleHR9fVxuICAgICAgICAgIDwvbWF0LWVycm9yPlxuICAgICAgICAgIDxtYXQtZXJyb3JcbiAgICAgICAgICAgICpuZ0lmPVwiIWxvZ2luRm9ybS5nZXQoJ2VtYWlsJyk/Lmhhc0Vycm9yKCdyZXF1aXJlZCcpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luRm9ybS5nZXQoJ2VtYWlsJyk/Lmhhc0Vycm9yKCdlbWFpbCcpXCI+XG4gICAgICAgICAgICB7e2VtYWlsRXJyb3JQYXR0ZXJuVGV4dH19XG4gICAgICAgICAgPC9tYXQtZXJyb3I+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIFtAYW5pbWF0ZV09XCJ7IHZhbHVlOiAnKicsIHBhcmFtczogeyB4OiAnNTBweCcgfSB9XCIgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiPlxuICAgICAgICAgIDxpbnB1dCBbcGxhY2Vob2xkZXJdPVwicGFzc3dvcmRUZXh0XCIgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIiBtYXRJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBhdXRvY29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCI+XG4gICAgICAgICAgPG1hdC1pY29uIFtjb2xvcl09XCJjb2xvclwiIG1hdFN1ZmZpeD5sb2NrPC9tYXQtaWNvbj5cbiAgICAgICAgICA8bWF0LWVycm9yPlxuICAgICAgICAgICAge3twYXNzd29yZEVycm9yUmVxdWlyZWRUZXh0fX1cbiAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICA8ZGl2IFtAYW5pbWF0ZV09XCJ7IHZhbHVlOiAnKicsIHBhcmFtczogeyB4OiAnNTBweCcgfSB9XCJcbiAgICAgICAgICAgICBjbGFzcz1cInJlbWVtYmVyLWZvcmdvdC1wYXNzd29yZFwiIGZ4TGF5b3V0PVwicm93XCJcbiAgICAgICAgICAgICBmeExheW91dC54cz1cImNvbHVtblwiXG4gICAgICAgICAgICAgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XG4gICAgICAgICAgPCEtLSAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwicmVtZW1iZXItbWVcIiBhcmlhLWxhYmVsPVwiUmVtZW1iZXIgTWVcIj4tLT5cbiAgICAgICAgICA8IS0tICAgICAgICAgICAge3tyZW1lbWJlck1lVGV4dH19LS0+XG4gICAgICAgICAgPCEtLSAgICAgICAgICA8L21hdC1jaGVja2JveD4tLT5cblxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uUmVzZXRQYXNzd29yZFJlcXVlc3RlZC5lbWl0KClcIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJyZXNldFBhc3N3b3JkRW5hYmxlZFwiXG4gICAgICAgICAgICAgICAgICBbQGFuaW1hdGVdPVwieyB2YWx1ZTogJyonLCBwYXJhbXM6IHsgeDogJy01MHB4JyB9IH1cIlxuICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9yZ290LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIG1hdC1idXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIHt7Zm9yZ290UGFzc3dvcmRUZXh0fX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwibG9naW4oKVwiXG4gICAgICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yQWNjZW50XCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwibG9naW5Gb3JtLmludmFsaWRcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJMT0cgSU5cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgaWQ9XCJsb2dpbkJ1dHRvblwiXG4gICAgICAgICAgICAgICAgbWF0LXJhaXNlZC1idXR0b24+XG4gICAgICAgICAge3tsb2dpbkJ1dHRvblRleHR9fVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8ZGl2ICpuZ0lmPVwicHJvdmlkZXJzLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICBbQGFuaW1hdGVdPVwieyB2YWx1ZTogJyonLCBwYXJhbXM6IHsgejogJzUwcHgnLCBkZWxheTogJzUwbXMnLCBzY2FsZTogJzAuMicgfSB9XCJcbiAgICAgICAgICAgY2xhc3M9XCJzZXBhcmF0b3JcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+e3tvckxhYmVsVGV4dH19PC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxuZ3gtYXV0aC1maXJlYmFzZXVpLXByb3ZpZGVycyBbcHJvdmlkZXJzXT1cInByb3ZpZGVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJyYWlzZWRcIj48L25neC1hdXRoLWZpcmViYXNldWktcHJvdmlkZXJzPlxuXG4gICAgICA8ZGl2ICpuZ0lmPVwicmVnaXN0cmF0aW9uRW5hYmxlZFwiXG4gICAgICAgICAgIFtAYW5pbWF0ZVN0YWdnZXJdPVwieyB2YWx1ZTogJzEwMCcgfVwiXG4gICAgICAgICAgIGNsYXNzPVwicmVnaXN0ZXJcIlxuICAgICAgICAgICBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XG4gICAgICAgIDxzcGFuIFtAYW5pbWF0ZV09XCJ7IHZhbHVlOiAnKicsIHBhcmFtczogeyB4OiAnMTAwcHgnIH0gfVwiIGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgIHt7ZG9udEhhdmVBbkFjY291bnRUZXh0fX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkNyZWF0ZUFjY291bnRSZXF1ZXN0ZWQuZW1pdCgpXCJcbiAgICAgICAgICAgICAgICBbQGFuaW1hdGVdPVwieyB2YWx1ZTogJyonLCBwYXJhbXM6IHsgeDogJy0xMDBweCcgfSB9XCJcbiAgICAgICAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgIGlkPVwiY3JlYXRlQWNjb3VudEJ1dHRvblwiXG4gICAgICAgICAgICAgICAgbWF0LWJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIj57e2NyZWF0ZUFjY291bnRCdXR0b25UZXh0fX08L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19