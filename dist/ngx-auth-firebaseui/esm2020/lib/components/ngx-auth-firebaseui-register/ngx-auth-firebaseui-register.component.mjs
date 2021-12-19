import { Component, EventEmitter, forwardRef, Inject, Input, Output, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgxAuthFirebaseuiAnimations } from '../../animations';
import { isPlatformBrowser } from '@angular/common';
import { NgxAuthFirebaseUIConfigToken } from '../../tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../services/auth-process.service";
import * as i3 from "@angular/flex-layout/flex";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/icon";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/checkbox";
const _c0 = function () { return { x: "50px" }; };
const _c1 = function (a1) { return { value: "*", params: a1 }; };
function NgxAuthFirebaseuiRegisterComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "img", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("src", ctx_r0.logoUrl, i0.ɵɵsanitizeUrl);
} }
function NgxAuthFirebaseuiRegisterComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.emailErrorRequiredText, " ");
} }
function NgxAuthFirebaseuiRegisterComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.emailErrorPatternText, " ");
} }
function NgxAuthFirebaseuiRegisterComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.passwordErrorRequiredText, " ");
} }
function NgxAuthFirebaseuiRegisterComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.passwordErrorMinLengthText, " ");
} }
function NgxAuthFirebaseuiRegisterComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.passwordErrorMaxLengthText, " ");
} }
function NgxAuthFirebaseuiRegisterComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.passwordConfirmationErrorRequiredText, " ");
} }
function NgxAuthFirebaseuiRegisterComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.passwordErrorMatchText, " ");
} }
function NgxAuthFirebaseuiRegisterComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "mat-checkbox", 19);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "a", 20);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("aria-label", ctx_r8.termsAndConditionsText);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.termsAndConditionsText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("href", ctx_r8.tosUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.termsAndConditionsLinkText, " ");
} }
function NgxAuthFirebaseuiRegisterComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "mat-checkbox", 21);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "a", 20);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("aria-label", ctx_r9.privacyPolicyText);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r9.privacyPolicyText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("href", ctx_r9.privacyPolicyUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.privacyPolicyLinkText, " ");
} }
const _c2 = function () { return { value: "50" }; };
const _c3 = function () { return { x: "-50px" }; };
const _c4 = function () { return { duration: "300ms", y: "100px" }; };
const _c5 = function () { return { x: "100px" }; };
const _c6 = function () { return { x: "-100px" }; };
export const confirmPasswordValidator = (control) => {
    if (!control.parent || !control) {
        return null;
    }
    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return null;
    }
    if (passwordConfirm.value === '') {
        return null;
    }
    if (password.value === passwordConfirm.value) {
        return null;
    }
    return { passwordsNotMatching: true };
};
export class NgxAuthFirebaseuiRegisterComponent {
    // eslint-disable-next-line @typescript-eslint/ban-types
    constructor(platformId, config, formBuilder, authProcess) {
        // Configure the layout
        this.platformId = platformId;
        this.config = config;
        this.formBuilder = formBuilder;
        this.authProcess = authProcess;
        // i18n common
        this.titleText = 'CREATE AN ACCOUNT';
        this.termsAndConditionsText = 'I read and accept the';
        this.termsAndConditionsLinkText = 'terms and conditions';
        this.privacyPolicyText = 'I read and accept the';
        this.privacyPolicyLinkText = 'privacy policy';
        this.createAccountButtonText = 'CREATE AN ACCOUNT';
        this.alreadyHaveAccountText = 'Already have an account?';
        this.loginButtonText = 'LOGIN';
        // i18n name
        this.nameText = 'Name';
        this.nameErrorRequiredText = 'Name is required';
        // i18n email
        this.emailText = 'Email';
        this.emailErrorRequiredText = 'Email is required';
        this.emailErrorPatternText = 'Please enter a valid email address';
        // i18n password
        this.passwordText = 'Password';
        this.passwordErrorRequiredText = 'Password is required';
        this.passwordConfirmationText = 'Password Confirmation';
        this.passwordConfirmationErrorRequiredText = 'Password confirmation is required';
        this.passwordErrorMatchText = 'Password must match';
        this.passwordErrorMinLengthText = "The password is too short!";
        this.passwordErrorMaxLengthText = "The password is too long!";
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onLoginRequested = new EventEmitter();
        this.onCreateAccountButtonClicked = new EventEmitter();
        this.authenticationError = false;
        // Set the private defaults
        this.unsubscribeAll = new Subject();
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
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required,
                    Validators.minLength(this.config.passwordMinLength),
                    Validators.maxLength(this.config.passwordMaxLength)]],
            passwordConfirm: ['', [Validators.required, confirmPasswordValidator]],
            tos: [''],
            privacyPolicy: ['']
        });
        // If tos or privacy policy url set, ensure that the two form items are required
        if (this.tosUrl) {
            this.registerForm.controls.tos.setValidators(Validators.requiredTrue);
        }
        if (this.privacyPolicyUrl) {
            this.registerForm.controls.privacyPolicy.setValidators(Validators.requiredTrue);
        }
        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.registerForm
            .controls
            .password
            .valueChanges.pipe(takeUntil(this.unsubscribeAll))
            .subscribe(() => {
            this.registerForm.controls.passwordConfirm.updateValueAndValidity();
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
    async createAccount() {
        // Emit the create account clicked event.
        this.onCreateAccountButtonClicked.emit();
        return await this.authProcess.signUp(this.registerForm.controls.name.value, {
            email: this.registerForm.controls.email.value,
            password: this.registerForm.controls.password.value
        });
    }
}
NgxAuthFirebaseuiRegisterComponent.ɵfac = function NgxAuthFirebaseuiRegisterComponent_Factory(t) { return new (t || NgxAuthFirebaseuiRegisterComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(forwardRef(() => NgxAuthFirebaseUIConfigToken)), i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthProcessService)); };
NgxAuthFirebaseuiRegisterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxAuthFirebaseuiRegisterComponent, selectors: [["ngx-auth-firebaseui-register"]], inputs: { logoUrl: "logoUrl", appearance: "appearance", tosUrl: "tosUrl", privacyPolicyUrl: "privacyPolicyUrl", titleText: "titleText", termsAndConditionsText: "termsAndConditionsText", termsAndConditionsLinkText: "termsAndConditionsLinkText", privacyPolicyText: "privacyPolicyText", privacyPolicyLinkText: "privacyPolicyLinkText", createAccountButtonText: "createAccountButtonText", alreadyHaveAccountText: "alreadyHaveAccountText", loginButtonText: "loginButtonText", nameText: "nameText", nameErrorRequiredText: "nameErrorRequiredText", emailText: "emailText", emailErrorRequiredText: "emailErrorRequiredText", emailErrorPatternText: "emailErrorPatternText", passwordText: "passwordText", passwordErrorRequiredText: "passwordErrorRequiredText", passwordConfirmationText: "passwordConfirmationText", passwordConfirmationErrorRequiredText: "passwordConfirmationErrorRequiredText", passwordErrorMatchText: "passwordErrorMatchText", passwordErrorMinLengthText: "passwordErrorMinLengthText", passwordErrorMaxLengthText: "passwordErrorMaxLengthText" }, outputs: { onSuccess: "onSuccess", onError: "onError", onLoginRequested: "onLoginRequested", onCreateAccountButtonClicked: "onCreateAccountButtonClicked" }, decls: 41, vars: 69, consts: [["fxLayout", "column", "id", "register"], ["fxLayout", "column", "fxLayoutAlign", "center center", "id", "register-form-wrapper"], ["id", "register-form"], ["class", "logo", 4, "ngIf"], [1, "title"], ["name", "registerForm", "novalidate", "", 3, "formGroup"], [3, "appearance"], ["formControlName", "name", "matInput", "", 3, "placeholder"], ["matSuffix", "", 3, "color"], ["formControlName", "email", "matInput", "", "autocomplete", "username", 3, "placeholder"], [4, "ngIf"], ["formControlName", "password", "matInput", "", "type", "password", "autocomplete", "new-password", 3, "placeholder"], ["formControlName", "passwordConfirm", "matInput", "", "type", "password", "autocomplete", "new-password", 3, "placeholder"], ["aria-label", "CREATE AN ACCOUNT", "id", "createAccountButton", "mat-raised-button", "", 1, "submit-button", 3, "color", "disabled", "click"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "register"], [1, "text"], ["id", "loginButton", "mat-button", "", "type", "button", 3, "color", "click"], [1, "logo"], ["alt", "logo", 3, "src"], ["formControlName", "tos", "required", "", 3, "aria-label"], ["target", "_blank", 3, "href"], ["formControlName", "privacyPolicy", "required", "", 3, "aria-label"]], template: function NgxAuthFirebaseuiRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, NgxAuthFirebaseuiRegisterComponent_div_3_Template, 2, 5, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "form", 5);
        i0.ɵɵelementStart(7, "mat-form-field", 6);
        i0.ɵɵelement(8, "input", 7);
        i0.ɵɵelementStart(9, "mat-icon", 8);
        i0.ɵɵtext(10, "person");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-error");
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-form-field", 6);
        i0.ɵɵelement(14, "input", 9);
        i0.ɵɵelementStart(15, "mat-icon", 8);
        i0.ɵɵtext(16, "email");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(17, NgxAuthFirebaseuiRegisterComponent_mat_error_17_Template, 2, 1, "mat-error", 10);
        i0.ɵɵtemplate(18, NgxAuthFirebaseuiRegisterComponent_mat_error_18_Template, 2, 1, "mat-error", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "mat-form-field", 6);
        i0.ɵɵelement(20, "input", 11);
        i0.ɵɵelementStart(21, "mat-icon", 8);
        i0.ɵɵtext(22, "lock");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(23, NgxAuthFirebaseuiRegisterComponent_mat_error_23_Template, 2, 1, "mat-error", 10);
        i0.ɵɵtemplate(24, NgxAuthFirebaseuiRegisterComponent_mat_error_24_Template, 2, 1, "mat-error", 10);
        i0.ɵɵtemplate(25, NgxAuthFirebaseuiRegisterComponent_mat_error_25_Template, 2, 1, "mat-error", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "mat-form-field", 6);
        i0.ɵɵelement(27, "input", 12);
        i0.ɵɵelementStart(28, "mat-icon", 8);
        i0.ɵɵtext(29, "lock");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(30, NgxAuthFirebaseuiRegisterComponent_mat_error_30_Template, 2, 1, "mat-error", 10);
        i0.ɵɵtemplate(31, NgxAuthFirebaseuiRegisterComponent_mat_error_31_Template, 2, 1, "mat-error", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(32, NgxAuthFirebaseuiRegisterComponent_div_32_Template, 6, 4, "div", 10);
        i0.ɵɵtemplate(33, NgxAuthFirebaseuiRegisterComponent_div_33_Template, 6, 4, "div", 10);
        i0.ɵɵelementStart(34, "button", 13);
        i0.ɵɵlistener("click", function NgxAuthFirebaseuiRegisterComponent_Template_button_click_34_listener() { return ctx.createAccount(); });
        i0.ɵɵtext(35);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "div", 14);
        i0.ɵɵelementStart(37, "span", 15);
        i0.ɵɵtext(38);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "button", 16);
        i0.ɵɵlistener("click", function NgxAuthFirebaseuiRegisterComponent_Template_button_click_39_listener() { return ctx.onLoginRequested.emit(); });
        i0.ɵɵtext(40);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        let tmp_15_0;
        let tmp_16_0;
        let tmp_21_0;
        let tmp_22_0;
        let tmp_23_0;
        let tmp_28_0;
        let tmp_29_0;
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("@animateStagger", i0.ɵɵpureFunction0(41, _c2));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.logoUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(43, _c1, i0.ɵɵpureFunction0(42, _c3)));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.titleText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(46, _c1, i0.ɵɵpureFunction0(45, _c4)))("formGroup", ctx.registerForm);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(49, _c1, i0.ɵɵpureFunction0(48, _c0)))("appearance", ctx.appearance);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("placeholder", ctx.nameText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.color);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.nameErrorRequiredText, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(52, _c1, i0.ɵɵpureFunction0(51, _c0)))("appearance", ctx.appearance);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("placeholder", ctx.emailText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.color);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", (tmp_15_0 = ctx.registerForm.get("email")) == null ? null : tmp_15_0.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (tmp_16_0 = ctx.registerForm.get("email")) == null ? null : tmp_16_0.hasError("email"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(55, _c1, i0.ɵɵpureFunction0(54, _c0)))("appearance", ctx.appearance);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("placeholder", ctx.passwordText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.color);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", (tmp_21_0 = ctx.registerForm.get("password")) == null ? null : tmp_21_0.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (tmp_22_0 = ctx.registerForm.get("password")) == null ? null : tmp_22_0.hasError("minlength"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (tmp_23_0 = ctx.registerForm.get("password")) == null ? null : tmp_23_0.hasError("maxlength"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(58, _c1, i0.ɵɵpureFunction0(57, _c0)))("appearance", ctx.appearance);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("placeholder", ctx.passwordConfirmationText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.color);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", (tmp_28_0 = ctx.registerForm.get("passwordConfirm")) == null ? null : tmp_28_0.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !((tmp_29_0 = ctx.registerForm.get("passwordConfirm")) == null ? null : tmp_29_0.hasError("required")) && ((tmp_29_0 = ctx.registerForm.get("passwordConfirm")) == null ? null : tmp_29_0.hasError("passwordsNotMatching")));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.tosUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.privacyPolicyUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.colorAccent)("disabled", ctx.registerForm.invalid);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.createAccountButtonText, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(61, _c1, i0.ɵɵpureFunction0(60, _c4)));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(64, _c1, i0.ɵɵpureFunction0(63, _c5)));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.alreadyHaveAccountText, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(67, _c1, i0.ɵɵpureFunction0(66, _c6)))("color", ctx.colorAccent);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.loginButtonText, " ");
    } }, directives: [i3.DefaultLayoutDirective, i3.DefaultLayoutAlignDirective, i4.NgIf, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.MatFormField, i1.DefaultValueAccessor, i6.MatInput, i1.NgControlStatus, i1.FormControlName, i7.MatIcon, i5.MatSuffix, i5.MatError, i8.MatButton, i9.MatCheckbox, i9.MatCheckboxRequiredValidator, i1.RequiredValidator], styles: ["ngx-auth-firebaseui-register #register{width:100%;background-size:cover}ngx-auth-firebaseui-register #register #register-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width: 599px){ngx-auth-firebaseui-register #register #register-form-wrapper{padding:16px}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form{width:384px;max-width:384px;padding:32px;text-align:center}@media screen and (max-width: 599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form{padding:24px;width:100%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .logo{width:128px;margin:32px auto}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .title{font-size:20px;margin:16px 0 32px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form{width:100%;text-align:left}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form mat-form-field{width:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form mat-checkbox{margin:0}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .terms{margin:16px 0 32px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .terms a{font-size:16px;margin-left:4px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .submit-button{width:220px;margin:16px auto;display:block}@media screen and (max-width: 599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .submit-button{width:90%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .register{margin:32px auto 24px;font-weight:500}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .register .text{margin-right:8px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator{font-size:15px;font-weight:600;margin:24px auto;position:relative;overflow:hidden;width:100px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text{display:inline-flex;position:relative;padding:0 8px;z-index:9999}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:before,ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:after{content:\"\";display:block;width:30px;position:absolute;top:10px;border-top:1px solid}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:before{right:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:after{left:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.google,ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.facebook{width:192px;text-transform:none;color:#fff;font-size:13px}@media screen and (max-width: 599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button{width:80%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.google{background-color:#d73d32;margin-bottom:8px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.facebook{background-color:#3f5c9a}ngx-auth-firebaseui-register ::ng-deep .mat-checkbox-label{display:flex;flex-wrap:wrap}\n"], encapsulation: 2, data: { animation: NgxAuthFirebaseuiAnimations } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxAuthFirebaseuiRegisterComponent, [{
        type: Component,
        args: [{ selector: 'ngx-auth-firebaseui-register', encapsulation: ViewEncapsulation.None, animations: NgxAuthFirebaseuiAnimations, template: "<div fxLayout=\"column\" id=\"register\">\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" id=\"register-form-wrapper\">\n\n    <div [@animateStagger]=\"{ value: '50' }\" id=\"register-form\">\n\n      <div *ngIf=\"logoUrl\" class=\"logo\">\n        <img [@animate]=\"{ value: '*', params: { x: '50px' } }\" [src]=\"logoUrl\" alt=\"logo\">\n      </div>\n\n      <div [@animate]=\"{ value: '*', params: { x: '-50px' } }\" class=\"title\">{{titleText}}</div>\n\n      <form [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" [formGroup]=\"registerForm\" name=\"registerForm\"\n            novalidate>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"nameText\" formControlName=\"name\" matInput/>\n          <mat-icon [color]=\"color\" matSuffix>person</mat-icon>\n          <mat-error>\n            {{nameErrorRequiredText}}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"emailText\" formControlName=\"email\" matInput autocomplete=\"username\"/>\n          <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n          <mat-error *ngIf=\"registerForm.get('email')?.hasError('required')\">\n            {{emailErrorRequiredText}}\n          </mat-error>\n          <mat-error *ngIf=\"registerForm.get('email')?.hasError('email')\">\n            {{emailErrorPatternText}}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"passwordText\" formControlName=\"password\" matInput type=\"password\" autocomplete=\"new-password\"/>\n          <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n          <mat-error  *ngIf=\"registerForm.get('password')?.hasError('required')\">\n            {{passwordErrorRequiredText}}\n          </mat-error>\n          <mat-error  *ngIf=\"registerForm.get('password')?.hasError('minlength')\">\n            {{ passwordErrorMinLengthText }}\n          </mat-error>\n          <mat-error  *ngIf=\"registerForm.get('password')?.hasError('maxlength')\">\n            {{ passwordErrorMaxLengthText }}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\" [appearance]=\"appearance\">\n          <input [placeholder]=\"passwordConfirmationText\" formControlName=\"passwordConfirm\" matInput type=\"password\" autocomplete=\"new-password\"/>\n          <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n          <mat-error *ngIf=\"registerForm.get('passwordConfirm')?.hasError('required')\">\n            {{passwordConfirmationErrorRequiredText}}\n          </mat-error>\n          <mat-error\n            *ngIf=\"\n              !registerForm.get('passwordConfirm')?.hasError('required') &&\n              registerForm.get('passwordConfirm')?.hasError('passwordsNotMatching')\n            \">\n            {{passwordErrorMatchText}}\n          </mat-error>\n        </mat-form-field>\n\n        <div *ngIf=\"this.tosUrl\">\n          <mat-checkbox aria-label=\"{{termsAndConditionsText}}\" formControlName=\"tos\" required>\n            <span>{{termsAndConditionsText}}</span>\n            <a target=\"_blank\" [href]=\"this.tosUrl\">\n                {{termsAndConditionsLinkText}}\n            </a>\n          </mat-checkbox>\n        </div>\n\n        <div *ngIf=\"this.privacyPolicyUrl\">\n          <mat-checkbox aria-label=\"{{privacyPolicyText}}\" formControlName=\"privacyPolicy\" required>\n            <span>{{privacyPolicyText}}</span>\n            <a target=\"_blank\" [href]=\"this.privacyPolicyUrl\">\n                {{privacyPolicyLinkText}}\n            </a>\n          </mat-checkbox>\n        </div>\n\n        <button (click)=\"createAccount()\"\n                [color]=\"colorAccent\"\n                [disabled]=\"registerForm.invalid\"\n                aria-label=\"CREATE AN ACCOUNT\"\n                class=\"submit-button\"\n                id=\"createAccountButton\"\n                mat-raised-button>\n          {{createAccountButtonText}}\n        </button>\n      </form>\n\n      <div [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" class=\"register\" fxLayout=\"column\"\n           fxLayoutAlign=\"center center\">\n        <span [@animate]=\"{ value: '*', params: { x: '100px' } }\" class=\"text\">\n          {{alreadyHaveAccountText}}\n        </span>\n        <button (click)=\"onLoginRequested.emit()\"\n                [@animate]=\"{ value: '*', params: { x: '-100px' } }\"\n                [color]=\"colorAccent\"\n                id=\"loginButton\"\n                mat-button\n                type=\"button\">\n          {{loginButtonText}}\n        </button>\n      </div>\n\n    </div>\n  </div>\n</div>\n", styles: ["ngx-auth-firebaseui-register #register{width:100%;background-size:cover}ngx-auth-firebaseui-register #register #register-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width: 599px){ngx-auth-firebaseui-register #register #register-form-wrapper{padding:16px}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form{width:384px;max-width:384px;padding:32px;text-align:center}@media screen and (max-width: 599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form{padding:24px;width:100%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .logo{width:128px;margin:32px auto}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .title{font-size:20px;margin:16px 0 32px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form{width:100%;text-align:left}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form mat-form-field{width:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form mat-checkbox{margin:0}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .terms{margin:16px 0 32px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .terms a{font-size:16px;margin-left:4px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .submit-button{width:220px;margin:16px auto;display:block}@media screen and (max-width: 599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form form .submit-button{width:90%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .register{margin:32px auto 24px;font-weight:500}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .register .text{margin-right:8px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator{font-size:15px;font-weight:600;margin:24px auto;position:relative;overflow:hidden;width:100px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text{display:inline-flex;position:relative;padding:0 8px;z-index:9999}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:before,ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:after{content:\"\";display:block;width:30px;position:absolute;top:10px;border-top:1px solid}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:before{right:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form .separator .text:after{left:100%}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.google,ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.facebook{width:192px;text-transform:none;color:#fff;font-size:13px}@media screen and (max-width: 599px){ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button{width:80%}}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.google{background-color:#d73d32;margin-bottom:8px}ngx-auth-firebaseui-register #register #register-form-wrapper #register-form button.facebook{background-color:#3f5c9a}ngx-auth-firebaseui-register ::ng-deep .mat-checkbox-label{display:flex;flex-wrap:wrap}\n"] }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => NgxAuthFirebaseUIConfigToken)]
            }] }, { type: i1.FormBuilder }, { type: i2.AuthProcessService }]; }, { logoUrl: [{
            type: Input
        }], appearance: [{
            type: Input
        }], tosUrl: [{
            type: Input
        }], privacyPolicyUrl: [{
            type: Input
        }], titleText: [{
            type: Input
        }], termsAndConditionsText: [{
            type: Input
        }], termsAndConditionsLinkText: [{
            type: Input
        }], privacyPolicyText: [{
            type: Input
        }], privacyPolicyLinkText: [{
            type: Input
        }], createAccountButtonText: [{
            type: Input
        }], alreadyHaveAccountText: [{
            type: Input
        }], loginButtonText: [{
            type: Input
        }], nameText: [{
            type: Input
        }], nameErrorRequiredText: [{
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
        }], passwordConfirmationText: [{
            type: Input
        }], passwordConfirmationErrorRequiredText: [{
            type: Input
        }], passwordErrorMatchText: [{
            type: Input
        }], passwordErrorMinLengthText: [{
            type: Input
        }], passwordErrorMaxLengthText: [{
            type: Input
        }], onSuccess: [{
            type: Output
        }], onError: [{
            type: Output
        }], onLoginRequested: [{
            type: Output
        }], onCreateAccountButtonClicked: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1dGgtZmlyZWJhc2V1aS1yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXV0aC1maXJlYmFzZXVpL3NyYy9saWIvY29tcG9uZW50cy9uZ3gtYXV0aC1maXJlYmFzZXVpLXJlZ2lzdGVyL25neC1hdXRoLWZpcmViYXNldWktcmVnaXN0ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1dGgtZmlyZWJhc2V1aS9zcmMvbGliL2NvbXBvbmVudHMvbmd4LWF1dGgtZmlyZWJhc2V1aS1yZWdpc3Rlci9uZ3gtYXV0aC1maXJlYmFzZXVpLXJlZ2lzdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVJLE9BQU8sRUFBeUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEgsT0FBTyxFQUFDLE9BQU8sRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFekMsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFN0QsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFHbEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7Ozs7OztJQ0p0RCwrQkFBa0M7SUFDaEMsMEJBQW1GO0lBQ3JGLGlCQUFNOzs7SUFEQyxlQUFrRDtJQUFsRCxpRkFBa0QseUNBQUE7OztJQW1CckQsaUNBQW1FO0lBQ2pFLFlBQ0Y7SUFBQSxpQkFBWTs7O0lBRFYsZUFDRjtJQURFLDhEQUNGOzs7SUFDQSxpQ0FBZ0U7SUFDOUQsWUFDRjtJQUFBLGlCQUFZOzs7SUFEVixlQUNGO0lBREUsNkRBQ0Y7OztJQU1BLGlDQUF1RTtJQUNyRSxZQUNGO0lBQUEsaUJBQVk7OztJQURWLGVBQ0Y7SUFERSxpRUFDRjs7O0lBQ0EsaUNBQXdFO0lBQ3RFLFlBQ0Y7SUFBQSxpQkFBWTs7O0lBRFYsZUFDRjtJQURFLGtFQUNGOzs7SUFDQSxpQ0FBd0U7SUFDdEUsWUFDRjtJQUFBLGlCQUFZOzs7SUFEVixlQUNGO0lBREUsa0VBQ0Y7OztJQU1BLGlDQUE2RTtJQUMzRSxZQUNGO0lBQUEsaUJBQVk7OztJQURWLGVBQ0Y7SUFERSw2RUFDRjs7O0lBQ0EsaUNBSUk7SUFDRixZQUNGO0lBQUEsaUJBQVk7OztJQURWLGVBQ0Y7SUFERSw4REFDRjs7O0lBR0YsMkJBQXlCO0lBQ3ZCLHdDQUFxRjtJQUNuRiw0QkFBTTtJQUFBLFlBQTBCO0lBQUEsaUJBQU87SUFDdkMsNkJBQXdDO0lBQ3BDLFlBQ0o7SUFBQSxpQkFBSTtJQUNOLGlCQUFlO0lBQ2pCLGlCQUFNOzs7SUFOVSxlQUF1QztJQUF2QyxxRUFBdUM7SUFDN0MsZUFBMEI7SUFBMUIsbURBQTBCO0lBQ2IsZUFBb0I7SUFBcEIsc0RBQW9CO0lBQ25DLGVBQ0o7SUFESSxrRUFDSjs7O0lBSUosMkJBQW1DO0lBQ2pDLHdDQUEwRjtJQUN4Riw0QkFBTTtJQUFBLFlBQXFCO0lBQUEsaUJBQU87SUFDbEMsNkJBQWtEO0lBQzlDLFlBQ0o7SUFBQSxpQkFBSTtJQUNOLGlCQUFlO0lBQ2pCLGlCQUFNOzs7SUFOVSxlQUFrQztJQUFsQyxnRUFBa0M7SUFDeEMsZUFBcUI7SUFBckIsOENBQXFCO0lBQ1IsZUFBOEI7SUFBOUIsZ0VBQThCO0lBQzdDLGVBQ0o7SUFESSw2REFDSjs7Ozs7OztBRGhFWixNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBZ0IsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3pHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQy9CLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRTlELElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxlQUFlLEVBQUU7UUFDakMsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksZUFBZSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7UUFDaEMsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksUUFBUSxDQUFDLEtBQUssS0FBSyxlQUFlLENBQUMsS0FBSyxFQUFFO1FBQzVDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsSUFBSSxFQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDO0FBU0YsTUFBTSxPQUFPLGtDQUFrQztJQW9EN0Msd0RBQXdEO0lBQ3hELFlBQytCLFVBQWtCLEVBRXhDLE1BQStCLEVBQzlCLFdBQXdCLEVBQ3pCLFdBQStCO1FBRXRDLHVCQUF1QjtRQU5NLGVBQVUsR0FBVixVQUFVLENBQVE7UUFFeEMsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDekIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBbkR4QyxjQUFjO1FBQ0wsY0FBUyxHQUFHLG1CQUFtQixDQUFDO1FBQ2hDLDJCQUFzQixHQUFHLHVCQUF1QixDQUFDO1FBQ2pELCtCQUEwQixHQUFHLHNCQUFzQixDQUFDO1FBQ3BELHNCQUFpQixHQUFHLHVCQUF1QixDQUFDO1FBQzVDLDBCQUFxQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLDRCQUF1QixHQUFHLG1CQUFtQixDQUFDO1FBQzlDLDJCQUFzQixHQUFHLDBCQUEwQixDQUFDO1FBQ3BELG9CQUFlLEdBQUcsT0FBTyxDQUFDO1FBRW5DLFlBQVk7UUFDSCxhQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ2xCLDBCQUFxQixHQUFHLGtCQUFrQixDQUFDO1FBRXBELGFBQWE7UUFDSixjQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLDJCQUFzQixHQUFHLG1CQUFtQixDQUFDO1FBQzdDLDBCQUFxQixHQUFHLG9DQUFvQyxDQUFDO1FBRXRFLGdCQUFnQjtRQUNQLGlCQUFZLEdBQUcsVUFBVSxDQUFDO1FBQzFCLDhCQUF5QixHQUFHLHNCQUFzQixDQUFDO1FBQ25ELDZCQUF3QixHQUFHLHVCQUF1QixDQUFDO1FBQ25ELDBDQUFxQyxHQUFHLG1DQUFtQyxDQUFDO1FBQzVFLDJCQUFzQixHQUFHLHFCQUFxQixDQUFDO1FBQy9DLCtCQUEwQixHQUFHLDRCQUE0QixDQUFDO1FBQzFELCtCQUEwQixHQUFHLDJCQUEyQixDQUFDO1FBT2xFLCtEQUErRDtRQUNyRCxxQkFBZ0IsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUVoRSxpQ0FBNEIsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUloRix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFlMUIsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3RELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUMxRjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDekMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDL0IsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVE7b0JBQ3BCLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztvQkFDbkQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUNwRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLHdCQUF3QixDQUFDLENBQUM7WUFDdEUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1QsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ3BCLENBQUMsQ0FBQztRQUVILGdGQUFnRjtRQUNoRixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RTtRQUVELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2pGO1FBRUQscURBQXFEO1FBQ3JELG9DQUFvQztRQUNwQyxJQUFJLENBQUMsWUFBWTthQUNkLFFBQVE7YUFDUixRQUFRO2FBQ1IsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ2pELFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDVCxxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYTtRQUNqQix5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksRUFBRSxDQUFDO1FBR3pDLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDckM7WUFDRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDN0MsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1NBQ3BELENBQ0YsQ0FBQztJQUNKLENBQUM7O29IQXBJVSxrQ0FBa0MsdUJBc0RuQyxXQUFXLHdCQUNYLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztxRkF2RDdDLGtDQUFrQztRQzNDL0MsOEJBQXFDO1FBRW5DLDhCQUFnRjtRQUU5RSw4QkFBNEQ7UUFFMUQsbUZBRU07UUFFTiw4QkFBdUU7UUFBQSxZQUFhO1FBQUEsaUJBQU07UUFFMUYsK0JBQ2lCO1FBRWYseUNBQTZGO1FBQzNGLDJCQUFpRTtRQUNqRSxtQ0FBb0M7UUFBQSx1QkFBTTtRQUFBLGlCQUFXO1FBQ3JELGtDQUFXO1FBQ1QsYUFDRjtRQUFBLGlCQUFZO1FBQ2QsaUJBQWlCO1FBRWpCLDBDQUE2RjtRQUMzRiw0QkFBMkY7UUFDM0Ysb0NBQW9DO1FBQUEsc0JBQUs7UUFBQSxpQkFBVztRQUNwRCxrR0FFWTtRQUNaLGtHQUVZO1FBQ2QsaUJBQWlCO1FBRWpCLDBDQUE2RjtRQUMzRiw2QkFBcUg7UUFDckgsb0NBQW9DO1FBQUEscUJBQUk7UUFBQSxpQkFBVztRQUNuRCxrR0FFWTtRQUNaLGtHQUVZO1FBQ1osa0dBRVk7UUFDZCxpQkFBaUI7UUFFakIsMENBQTZGO1FBQzNGLDZCQUF3STtRQUN4SSxvQ0FBb0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFXO1FBQ25ELGtHQUVZO1FBQ1osa0dBTVk7UUFDZCxpQkFBaUI7UUFFakIsc0ZBT007UUFFTixzRkFPTTtRQUVOLG1DQU0wQjtRQU5sQixnSEFBUyxtQkFBZSxJQUFDO1FBTy9CLGFBQ0Y7UUFBQSxpQkFBUztRQUNYLGlCQUFPO1FBRVAsZ0NBQ21DO1FBQ2pDLGlDQUF1RTtRQUNyRSxhQUNGO1FBQUEsaUJBQU87UUFDUCxtQ0FLc0I7UUFMZCxnSEFBUywyQkFBdUIsSUFBQztRQU12QyxhQUNGO1FBQUEsaUJBQVM7UUFDWCxpQkFBTTtRQUVSLGlCQUFNO1FBQ1IsaUJBQU07UUFDUixpQkFBTTs7Ozs7Ozs7O1FBekdHLGVBQW1DO1FBQW5DLDZEQUFtQztRQUVoQyxlQUFhO1FBQWIsa0NBQWE7UUFJZCxlQUFtRDtRQUFuRCxtRkFBbUQ7UUFBZSxlQUFhO1FBQWIsbUNBQWE7UUFFOUUsZUFBNEQ7UUFBNUQsbUZBQTRELCtCQUFBO1FBR2hELGVBQWtEO1FBQWxELG1GQUFrRCw4QkFBQTtRQUN6RCxlQUF3QjtRQUF4QiwwQ0FBd0I7UUFDckIsZUFBZTtRQUFmLGlDQUFlO1FBRXZCLGVBQ0Y7UUFERSwwREFDRjtRQUdjLGVBQWtEO1FBQWxELG1GQUFrRCw4QkFBQTtRQUN6RCxlQUF5QjtRQUF6QiwyQ0FBeUI7UUFDdEIsZUFBZTtRQUFmLGlDQUFlO1FBQ2IsZUFBcUQ7UUFBckQsZ0hBQXFEO1FBR3JELGVBQWtEO1FBQWxELDZHQUFrRDtRQUtoRCxlQUFrRDtRQUFsRCxtRkFBa0QsOEJBQUE7UUFDekQsZUFBNEI7UUFBNUIsOENBQTRCO1FBQ3pCLGVBQWU7UUFBZixpQ0FBZTtRQUNaLGVBQXdEO1FBQXhELG1IQUF3RDtRQUd4RCxlQUF5RDtRQUF6RCxvSEFBeUQ7UUFHekQsZUFBeUQ7UUFBekQsb0hBQXlEO1FBS3hELGVBQWtEO1FBQWxELG1GQUFrRCw4QkFBQTtRQUN6RCxlQUF3QztRQUF4QywwREFBd0M7UUFDckMsZUFBZTtRQUFmLGlDQUFlO1FBQ2IsZUFBK0Q7UUFBL0QsMEhBQStEO1FBSXhFLGVBR0M7UUFIRCxrUEFHQztRQUtBLGVBQWlCO1FBQWpCLGlDQUFpQjtRQVNqQixlQUEyQjtRQUEzQiwyQ0FBMkI7UUFVekIsZUFBcUI7UUFBckIsdUNBQXFCLHNDQUFBO1FBTTNCLGVBQ0Y7UUFERSw0REFDRjtRQUdHLGVBQTREO1FBQTVELG1GQUE0RDtRQUV6RCxlQUFtRDtRQUFuRCxtRkFBbUQ7UUFDdkQsZUFDRjtRQURFLDJEQUNGO1FBRVEsZUFBb0Q7UUFBcEQsbUZBQW9ELDBCQUFBO1FBSzFELGVBQ0Y7UUFERSxvREFDRjtrd0hEL0RNLDJCQUEyQjt1RkFFNUIsa0NBQWtDO2NBUDlDLFNBQVM7MkJBQ0UsOEJBQThCLGlCQUd6QixpQkFBaUIsQ0FBQyxJQUFJLGNBQ3pCLDJCQUEyQjtzQ0F3REksTUFBTTtzQkFBOUMsTUFBTTt1QkFBQyxXQUFXOztzQkFDbEIsTUFBTTt1QkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsNEJBQTRCLENBQUM7bUZBckQvQyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBR0csU0FBUztrQkFBakIsS0FBSztZQUNHLHNCQUFzQjtrQkFBOUIsS0FBSztZQUNHLDBCQUEwQjtrQkFBbEMsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLHFCQUFxQjtrQkFBN0IsS0FBSztZQUNHLHVCQUF1QjtrQkFBL0IsS0FBSztZQUNHLHNCQUFzQjtrQkFBOUIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFHRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBR0csU0FBUztrQkFBakIsS0FBSztZQUNHLHNCQUFzQjtrQkFBOUIsS0FBSztZQUNHLHFCQUFxQjtrQkFBN0IsS0FBSztZQUdHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyx5QkFBeUI7a0JBQWpDLEtBQUs7WUFDRyx3QkFBd0I7a0JBQWhDLEtBQUs7WUFDRyxxQ0FBcUM7a0JBQTdDLEtBQUs7WUFDRyxzQkFBc0I7a0JBQTlCLEtBQUs7WUFDRywwQkFBMEI7a0JBQWxDLEtBQUs7WUFDRywwQkFBMEI7a0JBQWxDLEtBQUs7WUFJSSxTQUFTO2tCQUFsQixNQUFNO1lBRUcsT0FBTztrQkFBaEIsTUFBTTtZQUVHLGdCQUFnQjtrQkFBekIsTUFBTTtZQUVHLDRCQUE0QjtrQkFBckMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFBMQVRGT1JNX0lELCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbCwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7U3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7Tmd4QXV0aEZpcmViYXNldWlBbmltYXRpb25zfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcbmltcG9ydCB7QXV0aFByb2Nlc3NTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLXByb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRBcHBlYXJhbmNlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE5neEF1dGhGaXJlYmFzZVVJQ29uZmlnVG9rZW4gfSBmcm9tICcuLi8uLi90b2tlbnMnO1xuaW1wb3J0IHsgTmd4QXV0aEZpcmViYXNlVUlDb25maWcgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpcm1QYXNzd29yZFZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICBpZiAoIWNvbnRyb2wucGFyZW50IHx8ICFjb250cm9sKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBwYXNzd29yZCA9IGNvbnRyb2wucGFyZW50LmdldCgncGFzc3dvcmQnKTtcbiAgY29uc3QgcGFzc3dvcmRDb25maXJtID0gY29udHJvbC5wYXJlbnQuZ2V0KCdwYXNzd29yZENvbmZpcm0nKTtcblxuICBpZiAoIXBhc3N3b3JkIHx8ICFwYXNzd29yZENvbmZpcm0pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChwYXNzd29yZENvbmZpcm0udmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAocGFzc3dvcmQudmFsdWUgPT09IHBhc3N3b3JkQ29uZmlybS52YWx1ZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtwYXNzd29yZHNOb3RNYXRjaGluZzogdHJ1ZX07XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtYXV0aC1maXJlYmFzZXVpLXJlZ2lzdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1hdXRoLWZpcmViYXNldWktcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtYXV0aC1maXJlYmFzZXVpLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGFuaW1hdGlvbnM6IE5neEF1dGhGaXJlYmFzZXVpQW5pbWF0aW9uc1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hBdXRoRmlyZWJhc2V1aVJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIGxvZ29Vcmw6IHN0cmluZztcbiAgQElucHV0KCkgYXBwZWFyYW5jZTogTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZTtcbiAgQElucHV0KCkgdG9zVXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByaXZhY3lQb2xpY3lVcmw6IHN0cmluZztcblxuICAvLyBpMThuIGNvbW1vblxuICBASW5wdXQoKSB0aXRsZVRleHQgPSAnQ1JFQVRFIEFOIEFDQ09VTlQnO1xuICBASW5wdXQoKSB0ZXJtc0FuZENvbmRpdGlvbnNUZXh0ID0gJ0kgcmVhZCBhbmQgYWNjZXB0IHRoZSc7XG4gIEBJbnB1dCgpIHRlcm1zQW5kQ29uZGl0aW9uc0xpbmtUZXh0ID0gJ3Rlcm1zIGFuZCBjb25kaXRpb25zJztcbiAgQElucHV0KCkgcHJpdmFjeVBvbGljeVRleHQgPSAnSSByZWFkIGFuZCBhY2NlcHQgdGhlJztcbiAgQElucHV0KCkgcHJpdmFjeVBvbGljeUxpbmtUZXh0ID0gJ3ByaXZhY3kgcG9saWN5JztcbiAgQElucHV0KCkgY3JlYXRlQWNjb3VudEJ1dHRvblRleHQgPSAnQ1JFQVRFIEFOIEFDQ09VTlQnO1xuICBASW5wdXQoKSBhbHJlYWR5SGF2ZUFjY291bnRUZXh0ID0gJ0FscmVhZHkgaGF2ZSBhbiBhY2NvdW50Pyc7XG4gIEBJbnB1dCgpIGxvZ2luQnV0dG9uVGV4dCA9ICdMT0dJTic7XG5cbiAgLy8gaTE4biBuYW1lXG4gIEBJbnB1dCgpIG5hbWVUZXh0ID0gJ05hbWUnO1xuICBASW5wdXQoKSBuYW1lRXJyb3JSZXF1aXJlZFRleHQgPSAnTmFtZSBpcyByZXF1aXJlZCc7XG5cbiAgLy8gaTE4biBlbWFpbFxuICBASW5wdXQoKSBlbWFpbFRleHQgPSAnRW1haWwnO1xuICBASW5wdXQoKSBlbWFpbEVycm9yUmVxdWlyZWRUZXh0ID0gJ0VtYWlsIGlzIHJlcXVpcmVkJztcbiAgQElucHV0KCkgZW1haWxFcnJvclBhdHRlcm5UZXh0ID0gJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnO1xuXG4gIC8vIGkxOG4gcGFzc3dvcmRcbiAgQElucHV0KCkgcGFzc3dvcmRUZXh0ID0gJ1Bhc3N3b3JkJztcbiAgQElucHV0KCkgcGFzc3dvcmRFcnJvclJlcXVpcmVkVGV4dCA9ICdQYXNzd29yZCBpcyByZXF1aXJlZCc7XG4gIEBJbnB1dCgpIHBhc3N3b3JkQ29uZmlybWF0aW9uVGV4dCA9ICdQYXNzd29yZCBDb25maXJtYXRpb24nO1xuICBASW5wdXQoKSBwYXNzd29yZENvbmZpcm1hdGlvbkVycm9yUmVxdWlyZWRUZXh0ID0gJ1Bhc3N3b3JkIGNvbmZpcm1hdGlvbiBpcyByZXF1aXJlZCc7XG4gIEBJbnB1dCgpIHBhc3N3b3JkRXJyb3JNYXRjaFRleHQgPSAnUGFzc3dvcmQgbXVzdCBtYXRjaCc7IFxuICBASW5wdXQoKSBwYXNzd29yZEVycm9yTWluTGVuZ3RoVGV4dCA9IFwiVGhlIHBhc3N3b3JkIGlzIHRvbyBzaG9ydCFcIjtcbiAgQElucHV0KCkgcGFzc3dvcmRFcnJvck1heExlbmd0aFRleHQgPSBcIlRoZSBwYXNzd29yZCBpcyB0b28gbG9uZyFcIjtcblxuICAvLyBFdmVudHNcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKSBvblN1Y2Nlc3M6IGFueTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKSBvbkVycm9yOiBhbnk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgb25Mb2dpblJlcXVlc3RlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBPdXRwdXQoKSBvbkNyZWF0ZUFjY291bnRCdXR0b25DbGlja2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcmVnaXN0ZXJGb3JtOiBGb3JtR3JvdXA7XG4gIG9uRXJyb3JTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgYXV0aGVudGljYXRpb25FcnJvciA9IGZhbHNlO1xuXG4gIC8vIFByaXZhdGVcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUFsbDogU3ViamVjdDxhbnk+O1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZ1Rva2VuKSlcbiAgICBwdWJsaWMgY29uZmlnOiBOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZyxcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwdWJsaWMgYXV0aFByb2Nlc3M6IEF1dGhQcm9jZXNzU2VydmljZVxuICApIHtcbiAgICAvLyBDb25maWd1cmUgdGhlIGxheW91dFxuXG4gICAgLy8gU2V0IHRoZSBwcml2YXRlIGRlZmF1bHRzXG4gICAgdGhpcy51bnN1YnNjcmliZUFsbCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgdGhpcy5vblN1Y2Nlc3MgPSBhdXRoUHJvY2Vzcy5vblN1Y2Nlc3NFbWl0dGVyO1xuICAgIHRoaXMub25FcnJvciA9IGF1dGhQcm9jZXNzLm9uRXJyb3JFbWl0dGVyO1xuICB9XG5cbiAgZ2V0IGNvbG9yKCk6IHN0cmluZyB8IFRoZW1lUGFsZXR0ZSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA/ICd3YXJuJyA6ICdwcmltYXJ5JztcbiAgfVxuXG4gIGdldCBjb2xvckFjY2VudCgpOiBzdHJpbmcgfCBUaGVtZVBhbGV0dGUge1xuICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0aW9uRXJyb3IgPyAnd2FybicgOiAnYWNjZW50JztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLm9uRXJyb3JTdWJzY3JpcHRpb24gPSB0aGlzLm9uRXJyb3Iuc3Vic2NyaWJlKCgpID0+IHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA9IHRydWUpO1xuICAgIH1cbiAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXV0sXG4gICAgICBwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKHRoaXMuY29uZmlnLnBhc3N3b3JkTWluTGVuZ3RoKSwgXG4gICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCh0aGlzLmNvbmZpZy5wYXNzd29yZE1heExlbmd0aCldXSxcbiAgICAgIHBhc3N3b3JkQ29uZmlybTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgY29uZmlybVBhc3N3b3JkVmFsaWRhdG9yXV0sXG4gICAgICB0b3M6IFsnJ10sXG4gICAgICBwcml2YWN5UG9saWN5OiBbJyddXG4gICAgfSk7XG5cbiAgICAvLyBJZiB0b3Mgb3IgcHJpdmFjeSBwb2xpY3kgdXJsIHNldCwgZW5zdXJlIHRoYXQgdGhlIHR3byBmb3JtIGl0ZW1zIGFyZSByZXF1aXJlZFxuICAgIGlmICh0aGlzLnRvc1VybCkge1xuICAgICAgdGhpcy5yZWdpc3RlckZvcm0uY29udHJvbHMudG9zLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZFRydWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByaXZhY3lQb2xpY3lVcmwpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJGb3JtLmNvbnRyb2xzLnByaXZhY3lQb2xpY3kuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSB2YWxpZGl0eSBvZiB0aGUgJ3Bhc3N3b3JkQ29uZmlybScgZmllbGRcbiAgICAvLyB3aGVuIHRoZSAncGFzc3dvcmQnIGZpZWxkIGNoYW5nZXNcbiAgICB0aGlzLnJlZ2lzdGVyRm9ybVxuICAgICAgLmNvbnRyb2xzXG4gICAgICAucGFzc3dvcmRcbiAgICAgIC52YWx1ZUNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZUFsbCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckZvcm0uY29udHJvbHMucGFzc3dvcmRDb25maXJtLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGRlc3Ryb3lcbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIFVuc3Vic2NyaWJlIGZyb20gYWxsIHN1YnNjcmlwdGlvbnNcbiAgICB0aGlzLnVuc3Vic2NyaWJlQWxsLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlQWxsLmNvbXBsZXRlKCk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVBY2NvdW50KCkge1xuICAgIC8vIEVtaXQgdGhlIGNyZWF0ZSBhY2NvdW50IGNsaWNrZWQgZXZlbnQuXG4gICAgdGhpcy5vbkNyZWF0ZUFjY291bnRCdXR0b25DbGlja2VkLmVtaXQoKTtcblxuXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYXV0aFByb2Nlc3Muc2lnblVwKFxuICAgICAgdGhpcy5yZWdpc3RlckZvcm0uY29udHJvbHMubmFtZS52YWx1ZSxcbiAgICAgIHtcbiAgICAgICAgZW1haWw6IHRoaXMucmVnaXN0ZXJGb3JtLmNvbnRyb2xzLmVtYWlsLnZhbHVlLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5yZWdpc3RlckZvcm0uY29udHJvbHMucGFzc3dvcmQudmFsdWVcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iLCI8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgaWQ9XCJyZWdpc3RlclwiPlxuXG4gIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGlkPVwicmVnaXN0ZXItZm9ybS13cmFwcGVyXCI+XG5cbiAgICA8ZGl2IFtAYW5pbWF0ZVN0YWdnZXJdPVwieyB2YWx1ZTogJzUwJyB9XCIgaWQ9XCJyZWdpc3Rlci1mb3JtXCI+XG5cbiAgICAgIDxkaXYgKm5nSWY9XCJsb2dvVXJsXCIgY2xhc3M9XCJsb2dvXCI+XG4gICAgICAgIDxpbWcgW0BhbmltYXRlXT1cInsgdmFsdWU6ICcqJywgcGFyYW1zOiB7IHg6ICc1MHB4JyB9IH1cIiBbc3JjXT1cImxvZ29VcmxcIiBhbHQ9XCJsb2dvXCI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBbQGFuaW1hdGVdPVwieyB2YWx1ZTogJyonLCBwYXJhbXM6IHsgeDogJy01MHB4JyB9IH1cIiBjbGFzcz1cInRpdGxlXCI+e3t0aXRsZVRleHR9fTwvZGl2PlxuXG4gICAgICA8Zm9ybSBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIiBbZm9ybUdyb3VwXT1cInJlZ2lzdGVyRm9ybVwiIG5hbWU9XCJyZWdpc3RlckZvcm1cIlxuICAgICAgICAgICAgbm92YWxpZGF0ZT5cblxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgW0BhbmltYXRlXT1cInsgdmFsdWU6ICcqJywgcGFyYW1zOiB7IHg6ICc1MHB4JyB9IH1cIiBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCI+XG4gICAgICAgICAgPGlucHV0IFtwbGFjZWhvbGRlcl09XCJuYW1lVGV4dFwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIiBtYXRJbnB1dC8+XG4gICAgICAgICAgPG1hdC1pY29uIFtjb2xvcl09XCJjb2xvclwiIG1hdFN1ZmZpeD5wZXJzb248L21hdC1pY29uPlxuICAgICAgICAgIDxtYXQtZXJyb3I+XG4gICAgICAgICAgICB7e25hbWVFcnJvclJlcXVpcmVkVGV4dH19XG4gICAgICAgICAgPC9tYXQtZXJyb3I+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIFtAYW5pbWF0ZV09XCJ7IHZhbHVlOiAnKicsIHBhcmFtczogeyB4OiAnNTBweCcgfSB9XCIgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiPlxuICAgICAgICAgIDxpbnB1dCBbcGxhY2Vob2xkZXJdPVwiZW1haWxUZXh0XCIgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIiBtYXRJbnB1dCBhdXRvY29tcGxldGU9XCJ1c2VybmFtZVwiLz5cbiAgICAgICAgICA8bWF0LWljb24gW2NvbG9yXT1cImNvbG9yXCIgbWF0U3VmZml4PmVtYWlsPC9tYXQtaWNvbj5cbiAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwicmVnaXN0ZXJGb3JtLmdldCgnZW1haWwnKT8uaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAgICAgICAgICAgIHt7ZW1haWxFcnJvclJlcXVpcmVkVGV4dH19XG4gICAgICAgICAgPC9tYXQtZXJyb3I+XG4gICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInJlZ2lzdGVyRm9ybS5nZXQoJ2VtYWlsJyk/Lmhhc0Vycm9yKCdlbWFpbCcpXCI+XG4gICAgICAgICAgICB7e2VtYWlsRXJyb3JQYXR0ZXJuVGV4dH19XG4gICAgICAgICAgPC9tYXQtZXJyb3I+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIFtAYW5pbWF0ZV09XCJ7IHZhbHVlOiAnKicsIHBhcmFtczogeyB4OiAnNTBweCcgfSB9XCIgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiPlxuICAgICAgICAgIDxpbnB1dCBbcGxhY2Vob2xkZXJdPVwicGFzc3dvcmRUZXh0XCIgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIiBtYXRJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBhdXRvY29tcGxldGU9XCJuZXctcGFzc3dvcmRcIi8+XG4gICAgICAgICAgPG1hdC1pY29uIFtjb2xvcl09XCJjb2xvclwiIG1hdFN1ZmZpeD5sb2NrPC9tYXQtaWNvbj5cbiAgICAgICAgICA8bWF0LWVycm9yICAqbmdJZj1cInJlZ2lzdGVyRm9ybS5nZXQoJ3Bhc3N3b3JkJyk/Lmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgICAgICAgICB7e3Bhc3N3b3JkRXJyb3JSZXF1aXJlZFRleHR9fVxuICAgICAgICAgIDwvbWF0LWVycm9yPlxuICAgICAgICAgIDxtYXQtZXJyb3IgICpuZ0lmPVwicmVnaXN0ZXJGb3JtLmdldCgncGFzc3dvcmQnKT8uaGFzRXJyb3IoJ21pbmxlbmd0aCcpXCI+XG4gICAgICAgICAgICB7eyBwYXNzd29yZEVycm9yTWluTGVuZ3RoVGV4dCB9fVxuICAgICAgICAgIDwvbWF0LWVycm9yPlxuICAgICAgICAgIDxtYXQtZXJyb3IgICpuZ0lmPVwicmVnaXN0ZXJGb3JtLmdldCgncGFzc3dvcmQnKT8uaGFzRXJyb3IoJ21heGxlbmd0aCcpXCI+XG4gICAgICAgICAgICB7eyBwYXNzd29yZEVycm9yTWF4TGVuZ3RoVGV4dCB9fVxuICAgICAgICAgIDwvbWF0LWVycm9yPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBbQGFuaW1hdGVdPVwieyB2YWx1ZTogJyonLCBwYXJhbXM6IHsgeDogJzUwcHgnIH0gfVwiIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIj5cbiAgICAgICAgICA8aW5wdXQgW3BsYWNlaG9sZGVyXT1cInBhc3N3b3JkQ29uZmlybWF0aW9uVGV4dFwiIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkQ29uZmlybVwiIG1hdElucHV0IHR5cGU9XCJwYXNzd29yZFwiIGF1dG9jb21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiLz5cbiAgICAgICAgICA8bWF0LWljb24gW2NvbG9yXT1cImNvbG9yXCIgbWF0U3VmZml4PmxvY2s8L21hdC1pY29uPlxuICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJyZWdpc3RlckZvcm0uZ2V0KCdwYXNzd29yZENvbmZpcm0nKT8uaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAgICAgICAgICAgIHt7cGFzc3dvcmRDb25maXJtYXRpb25FcnJvclJlcXVpcmVkVGV4dH19XG4gICAgICAgICAgPC9tYXQtZXJyb3I+XG4gICAgICAgICAgPG1hdC1lcnJvclxuICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgIXJlZ2lzdGVyRm9ybS5nZXQoJ3Bhc3N3b3JkQ29uZmlybScpPy5oYXNFcnJvcigncmVxdWlyZWQnKSAmJlxuICAgICAgICAgICAgICByZWdpc3RlckZvcm0uZ2V0KCdwYXNzd29yZENvbmZpcm0nKT8uaGFzRXJyb3IoJ3Bhc3N3b3Jkc05vdE1hdGNoaW5nJylcbiAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAge3twYXNzd29yZEVycm9yTWF0Y2hUZXh0fX1cbiAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICA8ZGl2ICpuZ0lmPVwidGhpcy50b3NVcmxcIj5cbiAgICAgICAgICA8bWF0LWNoZWNrYm94IGFyaWEtbGFiZWw9XCJ7e3Rlcm1zQW5kQ29uZGl0aW9uc1RleHR9fVwiIGZvcm1Db250cm9sTmFtZT1cInRvc1wiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPHNwYW4+e3t0ZXJtc0FuZENvbmRpdGlvbnNUZXh0fX08L3NwYW4+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBbaHJlZl09XCJ0aGlzLnRvc1VybFwiPlxuICAgICAgICAgICAgICAgIHt7dGVybXNBbmRDb25kaXRpb25zTGlua1RleHR9fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2ICpuZ0lmPVwidGhpcy5wcml2YWN5UG9saWN5VXJsXCI+XG4gICAgICAgICAgPG1hdC1jaGVja2JveCBhcmlhLWxhYmVsPVwie3twcml2YWN5UG9saWN5VGV4dH19XCIgZm9ybUNvbnRyb2xOYW1lPVwicHJpdmFjeVBvbGljeVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPHNwYW4+e3twcml2YWN5UG9saWN5VGV4dH19PC9zcGFuPlxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgW2hyZWZdPVwidGhpcy5wcml2YWN5UG9saWN5VXJsXCI+XG4gICAgICAgICAgICAgICAge3twcml2YWN5UG9saWN5TGlua1RleHR9fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjcmVhdGVBY2NvdW50KClcIlxuICAgICAgICAgICAgICAgIFtjb2xvcl09XCJjb2xvckFjY2VudFwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cInJlZ2lzdGVyRm9ybS5pbnZhbGlkXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ1JFQVRFIEFOIEFDQ09VTlRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjcmVhdGVBY2NvdW50QnV0dG9uXCJcbiAgICAgICAgICAgICAgICBtYXQtcmFpc2VkLWJ1dHRvbj5cbiAgICAgICAgICB7e2NyZWF0ZUFjY291bnRCdXR0b25UZXh0fX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxkaXYgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCIgY2xhc3M9XCJyZWdpc3RlclwiIGZ4TGF5b3V0PVwiY29sdW1uXCJcbiAgICAgICAgICAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cbiAgICAgICAgPHNwYW4gW0BhbmltYXRlXT1cInsgdmFsdWU6ICcqJywgcGFyYW1zOiB7IHg6ICcxMDBweCcgfSB9XCIgY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAge3thbHJlYWR5SGF2ZUFjY291bnRUZXh0fX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkxvZ2luUmVxdWVzdGVkLmVtaXQoKVwiXG4gICAgICAgICAgICAgICAgW0BhbmltYXRlXT1cInsgdmFsdWU6ICcqJywgcGFyYW1zOiB7IHg6ICctMTAwcHgnIH0gfVwiXG4gICAgICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yQWNjZW50XCJcbiAgICAgICAgICAgICAgICBpZD1cImxvZ2luQnV0dG9uXCJcbiAgICAgICAgICAgICAgICBtYXQtYnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgIHt7bG9naW5CdXR0b25UZXh0fX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19