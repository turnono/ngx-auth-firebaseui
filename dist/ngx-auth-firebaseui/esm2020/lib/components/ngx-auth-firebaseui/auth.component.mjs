import { isPlatformBrowser } from "@angular/common";
import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Inject, Input, Output, PLATFORM_ID, ViewChild, } from "@angular/core";
import { FormControl, FormGroup, Validators, } from "@angular/forms";
// ANGULAR MATERIAL
import { MatTabGroup } from "@angular/material/tabs";
// Third PARTY
import { MatPasswordStrengthComponent } from "@angular-material-extensions/password-strength";
import { LegalityDialogComponent } from "..";
import { AuthProvider, } from "../../services/auth-process.service";
import { NgxAuthFirebaseuiAnimations } from "../../animations";
import { NgxAuthFirebaseUIConfigToken } from "../../tokens";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/compat/auth";
import * as i2 from "../../services/auth-process.service";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/router";
function AuthComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "ngx-auth-firebaseui-email-confirmation", 5);
    i0.ɵɵlistener("signOut", function AuthComponent_ng_container_0_div_1_Template_ngx_auth_firebaseui_email_confirmation_signOut_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.signOut(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r3 = i0.ɵɵnextContext().ngIf;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("email", user_r3.email)("goBackURL", ctx_r4.goBackURL)("messageOnEmailConfirmationSuccess", ctx_r4.messageOnEmailConfirmationSuccess)("sendNewVerificationEmailText", ctx_r4.sendNewVerificationEmailText)("signOutText", ctx_r4.signOutText)("template", ctx_r4.verifyEmailTemplate)("verifyEmailConfirmationText", ctx_r4.verifyEmailConfirmationText)("verifyEmailGoBackText", ctx_r4.verifyEmailGoBackText)("verifyEmailTitleText", ctx_r4.verifyEmailTitleText);
} }
function AuthComponent_ng_container_0_ng_template_2_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 15);
} if (rf & 2) {
    const user_r3 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵproperty("src", user_r3 == null ? null : user_r3.photoURL, i0.ɵɵsanitizeUrl);
} }
function AuthComponent_ng_container_0_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 16);
    i0.ɵɵtext(1, "account_circle");
    i0.ɵɵelementEnd();
} }
function AuthComponent_ng_container_0_ng_template_2_mat_progress_bar_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-progress-bar", 17);
} }
function AuthComponent_ng_container_0_ng_template_2_a_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("routerLink", ctx_r14.goBackURL);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r14.verifyEmailGoBackText);
} }
function AuthComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, AuthComponent_ng_container_0_ng_template_2_img_1_Template, 1, 1, "img", 7);
    i0.ɵɵtemplate(2, AuthComponent_ng_container_0_ng_template_2_ng_template_2_Template, 2, 0, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(4, "div", 9);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 10);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 11);
    i0.ɵɵtemplate(9, AuthComponent_ng_container_0_ng_template_2_mat_progress_bar_9_Template, 1, 0, "mat-progress-bar", 12);
    i0.ɵɵtemplate(10, AuthComponent_ng_container_0_ng_template_2_a_10_Template, 2, 2, "a", 13);
    i0.ɵɵelementStart(11, "button", 14);
    i0.ɵɵlistener("click", function AuthComponent_ng_container_0_ng_template_2_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.signOut(); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r11 = i0.ɵɵreference(3);
    const user_r3 = i0.ɵɵnextContext().ngIf;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", user_r3 == null ? null : user_r3.photoURL)("ngIfElse", _r11);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(user_r3 == null ? null : user_r3.displayName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r3 == null ? null : user_r3.email);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r6.isLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.verifyEmailGoBackText);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.signOutText);
} }
function AuthComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AuthComponent_ng_container_0_div_1_Template, 2, 9, "div", 2);
    i0.ɵɵtemplate(2, AuthComponent_ng_container_0_ng_template_2_Template, 13, 7, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const user_r3 = ctx.ngIf;
    const _r5 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.config.enableEmailVerification !== false && (ctx_r0.config.guardProtectedRoutesUntilEmailIsVerified && !user_r3.emailVerified || ctx_r0.authProcess.emailConfirmationSent && !user_r3.emailVerified))("ngIfElse", _r5);
} }
function AuthComponent_ng_template_2_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r19.emailErrorRequiredText, " ");
} }
function AuthComponent_ng_template_2_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.emailErrorPatternText, " ");
} }
function AuthComponent_ng_template_2_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.passwordErrorRequiredText, " ");
} }
function AuthComponent_ng_template_2_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r23.passwordErrorMinLengthText, " ");
} }
function AuthComponent_ng_template_2_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r24.passwordErrorMaxLengthText, " ");
} }
const _c0 = function () { return { x: "-50px" }; };
const _c1 = function (a1) { return { value: "*", params: a1 }; };
function AuthComponent_ng_template_2_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 37);
    i0.ɵɵlistener("click", function AuthComponent_ng_template_2_button_32_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.createForgotPasswordTab(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(4, _c1, i0.ɵɵpureFunction0(3, _c0)))("color", ctx_r25.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r25.forgotPasswordButtonText, " ");
} }
const _c2 = function () { return { z: "50px", delay: "50ms", scale: "0.2" }; };
function AuthComponent_ng_template_2_mat_card_footer_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-card-footer");
    i0.ɵɵelement(1, "mat-progress-bar", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(2, _c1, i0.ɵɵpureFunction0(1, _c2)));
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r32.nameErrorRequiredText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r33.nameErrorMinLengthText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r34.nameErrorMaxLengthText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r35.emailErrorRequiredText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r36.emailErrorPatternText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error", 48);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r38.passwordErrorRequiredText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error", 48);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r39.passwordErrorMinLengthText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error", 48);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r40.passwordErrorMaxLengthText, " ");
} }
const _c3 = function () { return { x: "-100px" }; };
function AuthComponent_ng_template_2_mat_tab_34_button_44_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function AuthComponent_ng_template_2_mat_tab_34_button_44_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(3); return ctx_r44.processLegalSignUP(ctx_r44.authProvider.ANONYMOUS); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "fingerprint");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(4, _c1, i0.ɵɵpureFunction0(3, _c3)))("color", ctx_r42.color);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r42.guestButtonText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_34_mat_card_footer_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-card-footer");
    i0.ɵɵelement(1, "mat-progress-bar", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(2, _c1, i0.ɵɵpureFunction0(1, _c2)));
} }
const _c4 = function () { return { value: "50" }; };
const _c5 = function () { return { x: "50px" }; };
const _c6 = function () { return { x: "100px" }; };
function AuthComponent_ng_template_2_mat_tab_34_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tab", 20);
    i0.ɵɵelementStart(1, "mat-card");
    i0.ɵɵelementStart(2, "mat-card-title");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-card-content", 22);
    i0.ɵɵelementStart(5, "form", 21);
    i0.ɵɵlistener("ngSubmit", function AuthComponent_ng_template_2_mat_tab_34_Template_form_ngSubmit_5_listener() { i0.ɵɵrestoreView(_r47); const ctx_r46 = i0.ɵɵnextContext(2); return ctx_r46.signUpFormGroup.valid && ctx_r46.processLegalSignUP(ctx_r46.authProvider.EmailAndPassword); });
    i0.ɵɵelementStart(6, "div", 22);
    i0.ɵɵelementStart(7, "mat-form-field", 23);
    i0.ɵɵelementStart(8, "mat-label");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "input", 38);
    i0.ɵɵelementStart(11, "mat-icon", 25);
    i0.ɵɵtext(12, "person");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "mat-hint", 30);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, AuthComponent_ng_template_2_mat_tab_34_mat_error_15_Template, 2, 1, "mat-error", 26);
    i0.ɵɵtemplate(16, AuthComponent_ng_template_2_mat_tab_34_mat_error_16_Template, 2, 1, "mat-error", 26);
    i0.ɵɵtemplate(17, AuthComponent_ng_template_2_mat_tab_34_mat_error_17_Template, 2, 1, "mat-error", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "mat-form-field", 23);
    i0.ɵɵelementStart(19, "mat-label");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "input", 39);
    i0.ɵɵelementStart(22, "mat-icon", 25);
    i0.ɵɵtext(23, "email");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(24, AuthComponent_ng_template_2_mat_tab_34_mat_error_24_Template, 2, 1, "mat-error", 26);
    i0.ɵɵtemplate(25, AuthComponent_ng_template_2_mat_tab_34_mat_error_25_Template, 2, 1, "mat-error", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 40);
    i0.ɵɵelementStart(27, "mat-form-field", 23);
    i0.ɵɵelementStart(28, "mat-label");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(30, "input", 41);
    i0.ɵɵelement(31, "mat-pass-toggle-visibility", 28, 42);
    i0.ɵɵelementStart(33, "mat-icon", 25);
    i0.ɵɵtext(34, "lock");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "mat-hint", 30);
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(37, AuthComponent_ng_template_2_mat_tab_34_mat_error_37_Template, 2, 1, "mat-error", 43);
    i0.ɵɵtemplate(38, AuthComponent_ng_template_2_mat_tab_34_mat_error_38_Template, 2, 1, "mat-error", 43);
    i0.ɵɵtemplate(39, AuthComponent_ng_template_2_mat_tab_34_mat_error_39_Template, 2, 1, "mat-error", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(40, "mat-password-strength", 44, 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "button", 46);
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(44, AuthComponent_ng_template_2_mat_tab_34_button_44_Template, 4, 6, "button", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(45, AuthComponent_ng_template_2_mat_tab_34_mat_card_footer_45_Template, 2, 4, "mat-card-footer", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r37 = i0.ɵɵreference(32);
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("label", ctx_r27.registerTabText);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r27.registerCardTitleText);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("@animateStagger", i0.ɵɵpureFunction0(52, _c4))("formGroup", ctx_r27.signUpFormGroup);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(54, _c1, i0.ɵɵpureFunction0(53, _c5)))("appearance", ctx_r27.appearance);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r27.nameText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControl", ctx_r27.sigUpNameFormControl)("maxlength", ctx_r27.config.nameMaxLength)("minlength", ctx_r27.config.nameMinLength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", ctx_r27.color);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", ctx_r27.signUpFormGroup.value.name == null ? null : ctx_r27.signUpFormGroup.value.name.length, " / ", ctx_r27.config.nameMaxLength, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.sigUpNameFormControl.hasError("required"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.sigUpNameFormControl.hasError("minlength"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.sigUpNameFormControl.hasError("maxlength"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(57, _c1, i0.ɵɵpureFunction0(56, _c5)))("appearance", ctx_r27.appearance);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r27.emailText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControl", ctx_r27.sigUpEmailFormControl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", ctx_r27.color);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r27.sigUpEmailFormControl.hasError("required"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.sigUpEmailFormControl.hasError("pattern"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(60, _c1, i0.ɵɵpureFunction0(59, _c5)))("appearance", ctx_r27.appearance);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r27.passwordText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControl", ctx_r27.sigUpPasswordFormControl)("maxlength", ctx_r27.max)("minlength", ctx_r27.min)("type", _r37.type);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("color", ctx_r27.color);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", ctx_r27.signUpFormGroup.value.password == null ? null : ctx_r27.signUpFormGroup.value.password.length, " / ", ctx_r27.max, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.sigUpPasswordFormControl.hasError("required"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.sigUpPasswordFormControl.hasError("minlength"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.sigUpPasswordFormControl.hasError("maxlength"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("customValidator", ctx_r27.customValidator)("enableDigitRule", ctx_r27.enableDigitRule)("enableLengthRule", ctx_r27.enableLengthRule)("enableLowerCaseLetterRule", ctx_r27.enableLowerCaseLetterRule)("enableSpecialCharRule", ctx_r27.enableSpecialCharRule)("enableUpperCaseLetterRule", ctx_r27.enableUpperCaseLetterRule)("externalError", ctx_r27.sigUpPasswordFormControl.dirty)("max", ctx_r27.max)("min", ctx_r27.min)("password", ctx_r27.signUpFormGroup.value.password);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(63, _c1, i0.ɵɵpureFunction0(62, _c6)))("color", ctx_r27.color)("disabled", ctx_r27.signUpFormGroup.invalid);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r27.registerButtonText, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.guestEnabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.isLoading);
} }
function AuthComponent_ng_template_2_mat_tab_35_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 56);
    i0.ɵɵlistener("click", function AuthComponent_ng_template_2_mat_tab_35_ng_template_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r54); const ctx_r53 = i0.ɵɵnextContext(3); return ctx_r53.passwordResetWished = false; });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r48 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r48.resetPasswordTabText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_35_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r49 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r49.resetPasswordErrorRequiredText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_35_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r50 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r50.resetPasswordErrorPatternText, " ");
} }
function AuthComponent_ng_template_2_mat_tab_35_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r51 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r51.resetPasswordInstructionsText);
} }
function AuthComponent_ng_template_2_mat_tab_35_mat_progress_bar_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-progress-bar", 17);
} }
const _c7 = function () { return { duration: "300ms", y: "100px" }; };
function AuthComponent_ng_template_2_mat_tab_35_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tab", 50);
    i0.ɵɵtemplate(1, AuthComponent_ng_template_2_mat_tab_35_ng_template_1_Template, 4, 1, "ng-template", 51);
    i0.ɵɵelementStart(2, "form", 21);
    i0.ɵɵlistener("ngSubmit", function AuthComponent_ng_template_2_mat_tab_35_Template_form_ngSubmit_2_listener() { i0.ɵɵrestoreView(_r56); const ctx_r55 = i0.ɵɵnextContext(2); return ctx_r55.resetPasswordFormGroup.valid && ctx_r55.resetPassword(); });
    i0.ɵɵelementStart(3, "mat-card", 52);
    i0.ɵɵelementStart(4, "mat-card-content");
    i0.ɵɵelementStart(5, "mat-form-field", 53);
    i0.ɵɵelementStart(6, "mat-label");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "input", 54);
    i0.ɵɵelementStart(9, "mat-icon", 25);
    i0.ɵɵtext(10, "email");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, AuthComponent_ng_template_2_mat_tab_35_mat_error_11_Template, 2, 1, "mat-error", 26);
    i0.ɵɵtemplate(12, AuthComponent_ng_template_2_mat_tab_35_mat_error_12_Template, 2, 1, "mat-error", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, AuthComponent_ng_template_2_mat_tab_35_p_13_Template, 2, 1, "p", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "mat-card-actions", 32);
    i0.ɵɵtemplate(15, AuthComponent_ng_template_2_mat_tab_35_mat_progress_bar_15_Template, 1, 0, "mat-progress-bar", 12);
    i0.ɵɵelementStart(16, "button", 55);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("@animateStagger", i0.ɵɵpureFunction0(14, _c4))("formGroup", ctx_r28.resetPasswordFormGroup);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(16, _c1, i0.ɵɵpureFunction0(15, _c7)))("appearance", ctx_r28.appearance);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r28.resetPasswordInputText, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("title", ctx_r28.resetPasswordInputText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", ctx_r28.color);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r28.resetPasswordEmailFormControl.hasError("required"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r28.resetPasswordEmailFormControl.hasError("pattern"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r28.passReset);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r28.isLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(19, _c1, i0.ɵɵpureFunction0(18, _c5)))("color", ctx_r28.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r28.resetPasswordActionButtonText, " ");
} }
function AuthComponent_ng_template_2_ngx_auth_firebaseui_providers_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-auth-firebaseui-providers", 57);
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("providers", ctx_r29.providers)("theme", ctx_r29.providersTheme)("tosUrl", ctx_r29.tosUrl)("privacyPolicyUrl", ctx_r29.privacyPolicyUrl);
} }
function AuthComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tab-group", 19);
    i0.ɵɵlistener("selectedTabChange", function AuthComponent_ng_template_2_Template_mat_tab_group_selectedTabChange_0_listener($event) { i0.ɵɵrestoreView(_r58); const ctx_r57 = i0.ɵɵnextContext(); return ctx_r57.onTabChange($event); });
    i0.ɵɵelementStart(1, "mat-tab", 20);
    i0.ɵɵelementStart(2, "mat-card");
    i0.ɵɵelementStart(3, "mat-card-title");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-card-content");
    i0.ɵɵelementStart(6, "form", 21);
    i0.ɵɵlistener("ngSubmit", function AuthComponent_ng_template_2_Template_form_ngSubmit_6_listener() { i0.ɵɵrestoreView(_r58); const ctx_r59 = i0.ɵɵnextContext(); return ctx_r59.signIn(); });
    i0.ɵɵelementStart(7, "div", 22);
    i0.ɵɵelementStart(8, "mat-form-field", 23);
    i0.ɵɵelementStart(9, "mat-label");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "input", 24);
    i0.ɵɵelementStart(12, "mat-icon", 25);
    i0.ɵɵtext(13, "email");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, AuthComponent_ng_template_2_mat_error_14_Template, 2, 1, "mat-error", 26);
    i0.ɵɵtemplate(15, AuthComponent_ng_template_2_mat_error_15_Template, 2, 1, "mat-error", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "mat-form-field", 23);
    i0.ɵɵelementStart(17, "mat-label");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(19, "input", 27);
    i0.ɵɵelement(20, "mat-pass-toggle-visibility", 28, 29);
    i0.ɵɵelementStart(22, "mat-icon", 25);
    i0.ɵɵtext(23, "lock");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-hint", 30);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(26, AuthComponent_ng_template_2_mat_error_26_Template, 2, 1, "mat-error", 26);
    i0.ɵɵtemplate(27, AuthComponent_ng_template_2_mat_error_27_Template, 2, 1, "mat-error", 26);
    i0.ɵɵtemplate(28, AuthComponent_ng_template_2_mat_error_28_Template, 2, 1, "mat-error", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 31);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 32);
    i0.ɵɵtemplate(32, AuthComponent_ng_template_2_button_32_Template, 2, 6, "button", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(33, AuthComponent_ng_template_2_mat_card_footer_33_Template, 2, 4, "mat-card-footer", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(34, AuthComponent_ng_template_2_mat_tab_34_Template, 46, 65, "mat-tab", 34);
    i0.ɵɵtemplate(35, AuthComponent_ng_template_2_mat_tab_35_Template, 18, 21, "mat-tab", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(36, "mat-divider");
    i0.ɵɵtemplate(37, AuthComponent_ng_template_2_ngx_auth_firebaseui_providers_37_Template, 1, 4, "ngx-auth-firebaseui-providers", 36);
} if (rf & 2) {
    const _r21 = i0.ɵɵreference(21);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r2.color)("selectedIndex", ctx_r2.tabIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", ctx_r2.signInTabText);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.signInCardTitleText);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("@animateStagger", i0.ɵɵpureFunction0(33, _c4))("formGroup", ctx_r2.signInFormGroup);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(35, _c1, i0.ɵɵpureFunction0(34, _c7)))("appearance", ctx_r2.appearance);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.emailText);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("color", ctx_r2.color);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.signInEmailFormControl.hasError("required"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.signInEmailFormControl.hasError("pattern"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(38, _c1, i0.ɵɵpureFunction0(37, _c7)))("appearance", ctx_r2.appearance);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.passwordText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("maxlength", ctx_r2.max)("minlength", ctx_r2.min)("type", _r21 == null ? null : _r21.type);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("color", ctx_r2.color);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", ctx_r2.signInFormGroup.value.password.length, " / ", ctx_r2.max, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.sigInPasswordFormControl.hasError("required"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.sigInPasswordFormControl.hasError("minlength"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.sigInPasswordFormControl.hasError("maxlength"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(41, _c1, i0.ɵɵpureFunction0(40, _c5)))("color", ctx_r2.color)("disabled", ctx_r2.signInFormGroup.invalid);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.loginButtonText, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.resetPasswordEnabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.isLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.registrationEnabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.passwordResetWished);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.tabIndex !== 2);
} }
export const EMAIL_REGEX = new RegExp([
    '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)',
    '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
    "[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+",
    "[a-zA-Z]{2,}))$",
].join(""));
// eslint-disable-next-line max-len
export const PHONE_NUMBER_REGEX = new RegExp([
    "^[+]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\.]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]{4,12}$",
].join(""));
export class AuthComponent {
    constructor(
    // eslint-disable-next-line @typescript-eslint/ban-types
    platformId, config, auth, authProcess, dialog, activatedRoute, changeDetectorRef) {
        this.platformId = platformId;
        this.config = config;
        this.auth = auth;
        this.authProcess = authProcess;
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.changeDetectorRef = changeDetectorRef;
        //  google, facebook, twitter, github as array or all as one single string
        this.providers = AuthProvider.ALL;
        this.registrationEnabled = true;
        this.resetPasswordEnabled = true;
        this.guestEnabled = true;
        this.selectedTabChange = new EventEmitter();
        // Password strength api
        this.enableLengthRule = true;
        this.enableLowerCaseLetterRule = true;
        this.enableUpperCaseLetterRule = true;
        this.enableDigitRule = true;
        this.enableSpecialCharRule = true;
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onStrengthChanged = new EventEmitter();
        this.signOutText = "Sign out";
        // Customize the text
        // Reset Password Tab
        this.resetPasswordTabText = "Reset e-mail address to password";
        this.resetPasswordInputText = "Reset e-mail address to password";
        this.resetPasswordErrorRequiredText = "E-mail is required to reset the password!";
        this.resetPasswordErrorPatternText = "Please enter a valid e-mail address";
        this.resetPasswordActionButtonText = "Reset";
        this.resetPasswordInstructionsText = "Reset requested. Check your e-mail instructions.";
        // SignIn Tab
        this.signInTabText = "Sign in";
        this.signInCardTitleText = "Signing in";
        this.loginButtonText = "Log In";
        this.forgotPasswordButtonText = "Forgot Password ?";
        // Common
        this.nameText = "Name";
        this.nameErrorRequiredText = "Name is required";
        this.nameErrorMinLengthText = "The name is too short!";
        this.nameErrorMaxLengthText = "The name is too long!";
        this.emailText = "E-mail";
        this.emailErrorRequiredText = "E-mail is required";
        this.emailErrorPatternText = "Please enter a valid e-mail address";
        this.passwordText = "Password";
        this.passwordErrorRequiredText = "Password is required";
        this.passwordErrorMinLengthText = "The password is too short!";
        this.passwordErrorMaxLengthText = "The password is too long!";
        // Register Tab
        this.registerTabText = "Register";
        this.registerCardTitleText = "Registration";
        this.registerButtonText = "Register";
        this.guestButtonText = "continue as guest";
        // email confirmation component
        this.emailConfirmationTitle = "Confirm your e-mail address!";
        // eslint-disable-next-line max-len
        this.emailConfirmationText = `A confirmation e-mail has been sent to you. Check your inbox and click on the link "Confirm my e-mail" to confirm your e-mail address.`;
        this.authProvider = AuthProvider;
        this.authenticationError = false;
        this.passReset = false;
        this.authProviders = AuthProvider;
        this.onSuccess = authProcess.onSuccessEmitter;
        this.onError = authProcess.onErrorEmitter;
    }
    get color() {
        return this.authenticationError ? "warn" : "primary";
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.onErrorSubscription = this.onError.subscribe(() => (this.authenticationError = true));
        }
        this.min =
            this.min != null
                ? Math.max(this.min, this.config.passwordMinLength)
                : this.config.passwordMinLength;
        this.max =
            this.max != null
                ? Math.min(this.max, this.config.passwordMaxLength)
                : this.config.passwordMaxLength;
        this.goBackURL = this.chooseBackUrl();
        this.updateAuthSnackbarMessages();
        // auth form's initialization
        this._initSignInFormGroupBuilder();
        this._initSignUpFormGroupBuilder();
        this._initResetPasswordFormGroupBuilder();
    }
    ngAfterViewInit() {
        if (this.passwordStrength) {
            this.passwordStrength.onStrengthChanged.subscribe((strength) => {
                this.onStrengthChanged.emit(strength);
            });
        }
    }
    ngOnChanges(changes) {
        if (changes.messageOnAuthSuccess || changes.messageOnAuthError) {
            this.updateAuthSnackbarMessages();
        }
        if (changes.min) {
            this.min =
                this.min != null
                    ? Math.max(this.min, this.config.passwordMinLength)
                    : this.config.passwordMinLength;
        }
        if (changes.max) {
            this.max =
                this.max != null
                    ? Math.min(this.max, this.config.passwordMaxLength)
                    : this.config.passwordMaxLength;
        }
        if (changes.goBackURL) {
            this.goBackURL = this.chooseBackUrl();
        }
    }
    ngOnDestroy() {
        if (this.onErrorSubscription) {
            this.onErrorSubscription.unsubscribe();
        }
    }
    onTabChange(event) {
        this.selectedTabChange.emit(event);
        this.tabIndex = event.index;
    }
    async signOut() {
        try {
            this.isLoading = true;
            this.changeDetectorRef.markForCheck();
            await this.authProcess.signOut();
        }
        finally {
            this.isLoading = false;
            this.tabIndex = 0;
            this.changeDetectorRef.markForCheck();
        }
    }
    async signIn() {
        if (!this.signInFormGroup.valid) {
            return;
        }
        try {
            this.isLoading = true;
            this.changeDetectorRef.markForCheck();
            await this.authProcess.signInWith(this.authProviders.EmailAndPassword, {
                email: this.signInFormGroup.value.email,
                password: this.signInFormGroup.value.password,
            });
        }
        finally {
            this.isLoading = false;
            this.changeDetectorRef.markForCheck();
        }
    }
    updateAuthSnackbarMessages() {
        this.authProcess.messageOnAuthSuccess = this.messageOnAuthSuccess;
        this.authProcess.messageOnAuthError = this.messageOnAuthError;
    }
    createForgotPasswordTab() {
        this.passwordResetWished = true;
        this.tabIndex = 2;
        this.changeDetectorRef.markForCheck();
    }
    processLegalSignUP(authProvider) {
        if (this.tosUrl || this.privacyPolicyUrl) {
            const params = {
                tosUrl: this.tosUrl,
                privacyPolicyUrl: this.privacyPolicyUrl,
                authProvider,
            };
            this.dialogRef = this.dialog.open(LegalityDialogComponent, {
                data: params,
            });
            this.dialogRef.afterClosed().subscribe((result) => {
                if (result && result.checked) {
                    this._afterSignUpMiddleware(result.authProvider).then(() => this.signUpFormGroup.reset());
                }
                this.dialogRef = null;
            });
        }
        else {
            this._afterSignUpMiddleware(authProvider).then(() => this.signUpFormGroup.reset());
        }
    }
    async signUp() {
        try {
            this.isLoading = true;
            this.changeDetectorRef.markForCheck();
            return await this.authProcess.signUp(this.signUpFormGroup.value.name, {
                email: this.signUpFormGroup.value.email,
                password: this.signUpFormGroup.value.password,
            });
        }
        finally {
            this.isLoading = false;
            this.changeDetectorRef.markForCheck();
        }
    }
    async signUpAnonymously() {
        try {
            this.isLoading = true;
            this.changeDetectorRef.markForCheck();
            await this.authProcess.signInWith(this.authProvider.ANONYMOUS);
        }
        finally {
            this.isLoading = false;
            this.changeDetectorRef.markForCheck();
        }
    }
    resetPassword() {
        this.authProcess
            .resetPassword(this.resetPasswordEmailFormControl.value)
            .then(() => {
            this.passReset = true;
            // this.tabIndex = 2;
            this.changeDetectorRef.markForCheck();
        });
    }
    chooseBackUrl() {
        return (this.activatedRoute.snapshot.queryParams.redirectUrl ||
            this.goBackURL ||
            "/");
    }
    _initSignInFormGroupBuilder() {
        this.signInFormGroup = new FormGroup({});
        this.signInFormGroup.registerControl("email", (this.signInEmailFormControl = new FormControl("", [
            Validators.required,
            Validators.pattern(EMAIL_REGEX),
        ])));
        this.signInFormGroup.registerControl("password", (this.sigInPasswordFormControl = new FormControl("", [
            Validators.required,
            Validators.minLength(this.min),
            Validators.maxLength(this.max),
        ])));
    }
    _initSignUpFormGroupBuilder() {
        this.signUpFormGroup = new FormGroup({
            name: this.sigUpNameFormControl = new FormControl("", [
                Validators.required,
                Validators.minLength(this.config.nameMinLength),
                Validators.maxLength(this.config.nameMaxLength),
            ]),
            email: this.sigUpEmailFormControl = new FormControl("", [
                Validators.required,
                Validators.pattern(EMAIL_REGEX),
            ]),
            password: this.sigUpPasswordFormControl = new FormControl("", [
                Validators.required,
                Validators.minLength(this.min),
                Validators.maxLength(this.max),
            ]),
        });
    }
    _initResetPasswordFormGroupBuilder() {
        this.resetPasswordFormGroup = new FormGroup({
            email: this.resetPasswordEmailFormControl = new FormControl("", [
                Validators.required,
                Validators.pattern(EMAIL_REGEX),
            ]),
        });
    }
    _afterSignUpMiddleware(authProvider) {
        if (authProvider === this.authProvider.ANONYMOUS) {
            return this.signUpAnonymously();
        }
        return this.signUp();
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(forwardRef(() => NgxAuthFirebaseUIConfigToken)), i0.ɵɵdirectiveInject(i1.AngularFireAuth), i0.ɵɵdirectiveInject(i2.AuthProcessService), i0.ɵɵdirectiveInject(i3.MatDialog), i0.ɵɵdirectiveInject(i4.ActivatedRoute), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
AuthComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthComponent, selectors: [["ngx-auth-firebaseui"]], viewQuery: function AuthComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatTabGroup, 5);
        i0.ɵɵviewQuery(MatPasswordStrengthComponent, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.matTabGroup = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.passwordStrength = _t.first);
    } }, inputs: { providers: "providers", providersTheme: "providersTheme", appearance: "appearance", tabIndex: "tabIndex", registrationEnabled: "registrationEnabled", resetPasswordEnabled: "resetPasswordEnabled", guestEnabled: "guestEnabled", tosUrl: "tosUrl", privacyPolicyUrl: "privacyPolicyUrl", goBackURL: "goBackURL", messageOnAuthSuccess: "messageOnAuthSuccess", messageOnAuthError: "messageOnAuthError", messageOnEmailConfirmationSuccess: "messageOnEmailConfirmationSuccess", enableLengthRule: "enableLengthRule", enableLowerCaseLetterRule: "enableLowerCaseLetterRule", enableUpperCaseLetterRule: "enableUpperCaseLetterRule", enableDigitRule: "enableDigitRule", enableSpecialCharRule: "enableSpecialCharRule", min: "min", max: "max", customValidator: "customValidator", verifyEmailTemplate: "verifyEmailTemplate", verifyEmailTitleText: "verifyEmailTitleText", verifyEmailConfirmationText: "verifyEmailConfirmationText", verifyEmailGoBackText: "verifyEmailGoBackText", sendNewVerificationEmailText: "sendNewVerificationEmailText", signOutText: "signOutText", resetPasswordTabText: "resetPasswordTabText", resetPasswordInputText: "resetPasswordInputText", resetPasswordErrorRequiredText: "resetPasswordErrorRequiredText", resetPasswordErrorPatternText: "resetPasswordErrorPatternText", resetPasswordActionButtonText: "resetPasswordActionButtonText", resetPasswordInstructionsText: "resetPasswordInstructionsText", signInTabText: "signInTabText", signInCardTitleText: "signInCardTitleText", loginButtonText: "loginButtonText", forgotPasswordButtonText: "forgotPasswordButtonText", nameText: "nameText", nameErrorRequiredText: "nameErrorRequiredText", nameErrorMinLengthText: "nameErrorMinLengthText", nameErrorMaxLengthText: "nameErrorMaxLengthText", emailText: "emailText", emailErrorRequiredText: "emailErrorRequiredText", emailErrorPatternText: "emailErrorPatternText", passwordText: "passwordText", passwordErrorRequiredText: "passwordErrorRequiredText", passwordErrorMinLengthText: "passwordErrorMinLengthText", passwordErrorMaxLengthText: "passwordErrorMaxLengthText", registerTabText: "registerTabText", registerCardTitleText: "registerCardTitleText", registerButtonText: "registerButtonText", guestButtonText: "guestButtonText", emailConfirmationTitle: "emailConfirmationTitle", emailConfirmationText: "emailConfirmationText" }, outputs: { onSuccess: "onSuccess", onError: "onError", selectedTabChange: "selectedTabChange", onStrengthChanged: "onStrengthChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["showForm", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf", "ngIfElse"], ["signedInUser", ""], ["fxLayout", "row", "fxLayoutAlign", "center center"], [3, "email", "goBackURL", "messageOnEmailConfirmationSuccess", "sendNewVerificationEmailText", "signOutText", "template", "verifyEmailConfirmationText", "verifyEmailGoBackText", "verifyEmailTitleText", "signOut"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "signed-in-container"], ["class", "account-circle", 3, "src", 4, "ngIf", "ngIfElse"], ["noPhoto", ""], [1, "user-display-name", "mat-title"], [1, "user-email", "mat-body-2"], [1, "actions"], ["mode", "indeterminate", 4, "ngIf"], ["class", "go-back-button action-button", "color", "primary", "mat-stroked-button", "", 3, "routerLink", 4, "ngIf"], ["color", "warn", "mat-stroked-button", "", 1, "sign-out-button", "action-button", 3, "click"], [1, "account-circle", 3, "src"], [1, "account-circle"], ["mode", "indeterminate"], ["color", "primary", "mat-stroked-button", "", 1, "go-back-button", "action-button", 3, "routerLink"], [3, "color", "selectedIndex", "selectedTabChange"], [3, "label"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutAlign", "center"], [3, "appearance"], ["formControlName", "email", "matInput", "", "required", "", "autocomplete", "username"], ["matSuffix", "", 3, "color"], [4, "ngIf"], ["formControlName", "password", "autocomplete", "current-password", "matInput", "", "required", "", 3, "maxlength", "minlength", "type"], ["matSuffix", ""], ["togglePass", ""], ["align", "end", "aria-live", "polite"], ["mat-raised-button", "", "type", "submit", 1, "space-top", 2, "margin-top", "20px", 3, "color", "disabled"], ["fxLayoutAlign", "center"], ["class", "space-top", "mat-button", "", 3, "color", "click", 4, "ngIf"], [3, "label", 4, "ngIf"], ["class", "reset-password-tab", 4, "ngIf"], [3, "providers", "theme", "tosUrl", "privacyPolicyUrl", 4, "ngIf"], ["mat-button", "", 1, "space-top", 3, "color", "click"], ["matInput", "", "required", "", 3, "formControl", "maxlength", "minlength"], ["matInput", "", "required", "", "type", "email", "autocomplete", "username", 3, "formControl"], ["fxLayout", "column"], ["matInput", "", "name", "password", "autocomplete", "new-password", "required", "", 3, "formControl", "maxlength", "minlength", "type"], ["toggle", ""], ["class", "cut-text", 4, "ngIf"], [3, "customValidator", "enableDigitRule", "enableLengthRule", "enableLowerCaseLetterRule", "enableSpecialCharRule", "enableUpperCaseLetterRule", "externalError", "max", "min", "password"], ["passwordStrength", ""], ["mat-raised-button", "", "type", "submit", 2, "margin-top", "20px", 3, "color", "disabled"], ["mat-button", "", "style", "margin-top: 20px", 3, "color", "click", 4, "ngIf"], [1, "cut-text"], ["mat-button", "", 2, "margin-top", "20px", 3, "color", "click"], [1, "reset-password-tab"], ["mat-tab-label", ""], [1, "reset-password-card"], [1, "full-width", 3, "appearance"], ["formControlName", "email", "matInput", "", "required", "", 3, "title"], ["mat-raised-button", "", "type", "submit", 3, "color"], ["mat-icon-button", "", 1, "reset-password-tab__close-button", 3, "click"], [3, "providers", "theme", "tosUrl", "privacyPolicyUrl"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AuthComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, AuthComponent_ng_template_2_Template, 38, 43, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.authProcess.user$))("ngIfElse", _r1);
    } }, styles: [".mat-card[_ngcontent-%COMP%]{margin:2rem}.space-top[_ngcontent-%COMP%]{margin-top:.5rem}.full-width[_ngcontent-%COMP%]{width:100%}.cut-text[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.signed-in-container[_ngcontent-%COMP%]   .account-circle[_ngcontent-%COMP%]{font-size:12rem;width:12rem;height:12rem}.signed-in-container[_ngcontent-%COMP%]   img.account-circle[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;border-radius:50%}.signed-in-container[_ngcontent-%COMP%]   .sign-out-button[_ngcontent-%COMP%]{margin-top:2rem}.signed-in-container[_ngcontent-%COMP%]   .user-display-name[_ngcontent-%COMP%]{margin-top:1rem}.signed-in-container[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%]{margin-top:-1rem}.signed-in-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{margin-top:2rem}.signed-in-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%], .signed-in-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{width:100%}.signed-in-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]{margin-top:1rem}.reset-password-tab[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{margin-bottom:1rem}.reset-password-tab__close-button[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.reset-password-tab__close-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;position:relative;top:-1px}"], data: { animation: NgxAuthFirebaseuiAnimations }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthComponent, [{
        type: Component,
        args: [{ selector: "ngx-auth-firebaseui", animations: NgxAuthFirebaseuiAnimations, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"authProcess.user$ | async as user; else showForm\">\n\n  <!-- This component will be shown when:\n    - we just sent a verification mail (notably after sign up)\n    - we arrived from the guard after trying to access a protected route even though we are connected\n    - config.enableEmailVerification is undefined, null or true\n  -->\n  <div\n    *ngIf=\"(config.enableEmailVerification !== false) && (\n     (config.guardProtectedRoutesUntilEmailIsVerified && !user.emailVerified) || (authProcess.emailConfirmationSent && !user.emailVerified)\n     ); else signedInUser\"\n    fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <ngx-auth-firebaseui-email-confirmation\n      (signOut)=\"signOut()\"\n      [email]=\"user.email\"\n      [goBackURL]=\"goBackURL\"\n      [messageOnEmailConfirmationSuccess]=\"messageOnEmailConfirmationSuccess\"\n      [sendNewVerificationEmailText]=\"sendNewVerificationEmailText\"\n      [signOutText]=\"signOutText\"\n      [template]=\"verifyEmailTemplate\"\n      [verifyEmailConfirmationText]=\"verifyEmailConfirmationText\"\n      [verifyEmailGoBackText]=\"verifyEmailGoBackText\"\n      [verifyEmailTitleText]=\"verifyEmailTitleText\">\n    </ngx-auth-firebaseui-email-confirmation>\n  </div>\n\n  <ng-template #signedInUser>\n    <div class=\"signed-in-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <img *ngIf=\"user?.photoURL; else noPhoto\" [src]=\"user?.photoURL\" class=\"account-circle\">\n      <ng-template #noPhoto>\n        <mat-icon class=\"account-circle\">account_circle</mat-icon>\n      </ng-template>\n      <div class=\"user-display-name mat-title\">{{ user?.displayName }}</div>\n      <div class=\"user-email mat-body-2\">{{ user?.email }}</div>\n      <div class=\"actions\">\n        <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n        <a *ngIf=\"verifyEmailGoBackText\" [routerLink]=\"goBackURL\" class=\"go-back-button action-button\" color=\"primary\"\n           mat-stroked-button>{{ verifyEmailGoBackText }}</a>\n        <button (click)=\"signOut()\" class=\"sign-out-button action-button\" color=\"warn\"\n                mat-stroked-button>{{ signOutText }}</button>\n      </div>\n    </div>\n  </ng-template>\n\n</ng-container>\n\n<ng-template #showForm>\n  <mat-tab-group (selectedTabChange)=\"onTabChange($event)\" [color]=\"color\" [selectedIndex]=\"tabIndex\">\n    <!--Sign in tab-->\n    <mat-tab [label]=\"signInTabText\">\n      <mat-card>\n        <mat-card-title>{{signInCardTitleText}}</mat-card-title>\n        <mat-card-content>\n          <form (ngSubmit)=\"signIn()\"\n                [@animateStagger]=\"{ value: '50' }\"\n                [formGroup]=\"signInFormGroup\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n              <mat-form-field [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                              [appearance]=\"appearance\">\n                <mat-label>{{emailText}}</mat-label>\n                <input formControlName=\"email\"\n                       matInput\n                       required\n                       autocomplete=\"username\">\n                <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n                <mat-error *ngIf=\"signInEmailFormControl.hasError('required')\">\n                  {{emailErrorRequiredText}}\n                </mat-error>\n                <mat-error *ngIf=\"signInEmailFormControl.hasError('pattern')\">\n                  {{emailErrorPatternText}}\n                </mat-error>\n              </mat-form-field>\n\n              <mat-form-field [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n                              [appearance]=\"appearance\">\n                <mat-label>{{passwordText}}</mat-label>\n                <input [maxlength]=\"max\" [minlength]=\"min\" [type]=\"togglePass?.type\" formControlName=\"password\"\n                       autocomplete=\"current-password\" matInput\n                       required/>\n                <mat-pass-toggle-visibility #togglePass matSuffix></mat-pass-toggle-visibility>\n                <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n                <mat-hint align=\"end\" aria-live=\"polite\"> {{ signInFormGroup.value.password.length }}\n                  / {{ max }} </mat-hint>\n                <mat-error *ngIf=\"sigInPasswordFormControl.hasError('required')\">\n                  {{passwordErrorRequiredText}}\n                </mat-error>\n                <mat-error *ngIf=\"sigInPasswordFormControl.hasError('minlength')\">\n                  {{ passwordErrorMinLengthText }}\n                </mat-error>\n                <mat-error *ngIf=\"sigInPasswordFormControl.hasError('maxlength')\">\n                  {{ passwordErrorMaxLengthText }}\n                </mat-error>\n              </mat-form-field>\n\n              <button [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                      [color]=\"color\"\n                      [disabled]=\"signInFormGroup.invalid\"\n                      class=\"space-top\"\n                      mat-raised-button\n                      style=\"margin-top: 20px\"\n                      type=\"submit\">\n                {{loginButtonText}}\n              </button>\n\n            </div>\n          </form>\n\n          <div fxLayoutAlign=\"center\">\n            <button (click)=\"createForgotPasswordTab()\"\n                    *ngIf=\"resetPasswordEnabled\"\n                    [@animate]=\"{ value: '*', params: { x: '-50px' } }\"\n                    [color]=\"color\"\n                    class=\"space-top\"\n                    mat-button>\n              {{forgotPasswordButtonText}}\n            </button>\n          </div>\n\n        </mat-card-content>\n        <mat-card-footer *ngIf=\"isLoading\">\n          <mat-progress-bar [@animate]=\"{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }\"\n                            mode=\"indeterminate\"></mat-progress-bar>\n        </mat-card-footer>\n      </mat-card>\n    </mat-tab>\n\n    <!--tab register-->\n    <mat-tab *ngIf=\"registrationEnabled\" [label]=\"registerTabText\">\n      <mat-card>\n        <mat-card-title>{{registerCardTitleText}}</mat-card-title>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n          <form (ngSubmit)=\"signUpFormGroup.valid &&\n            processLegalSignUP(authProvider.EmailAndPassword)\"\n                [@animateStagger]=\"{ value: '50' }\" [formGroup]=\"signUpFormGroup\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n              <!--name-->\n              <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                              [appearance]=\"appearance\">\n                <!--labels will work only with @angular/material@6.2.0 -->\n                <mat-label>{{nameText}}</mat-label>\n                <input\n                  [formControl]=\"sigUpNameFormControl\"\n                  [maxlength]=\"config.nameMaxLength\"\n                  [minlength]=\"config.nameMinLength\"\n                  matInput\n                  required\n                />\n                <mat-icon [color]=\"color\" matSuffix>person</mat-icon>\n                <mat-hint align=\"end\" aria-live=\"polite\"> {{ signUpFormGroup.value.name?.length }}\n                  / {{ config.nameMaxLength }} </mat-hint>\n                <mat-error *ngIf=\"sigUpNameFormControl.hasError('required')\">\n                  {{nameErrorRequiredText}}\n                </mat-error>\n                <mat-error *ngIf=\"sigUpNameFormControl.hasError('minlength')\">\n                  {{nameErrorMinLengthText}}\n                </mat-error>\n                <mat-error *ngIf=\"sigUpNameFormControl.hasError('maxlength')\">\n                  {{nameErrorMaxLengthText}}\n                </mat-error>\n              </mat-form-field>\n\n              <!--email-->\n              <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                              [appearance]=\"appearance\">\n                <mat-label>{{emailText}}</mat-label>\n                <input [formControl]=\"sigUpEmailFormControl\"\n                       matInput\n                       required\n                       type=\"email\"\n                       autocomplete=\"username\">\n                <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n                <mat-error *ngIf=\"sigUpEmailFormControl.hasError('required')\">\n                  {{emailErrorRequiredText}}\n                </mat-error>\n                <mat-error *ngIf=\"sigUpEmailFormControl.hasError('pattern')\">\n                  {{emailErrorPatternText}}\n                </mat-error>\n              </mat-form-field>\n\n              <!--password-->\n              <div fxLayout=\"column\">\n                <mat-form-field [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                                [appearance]=\"appearance\">\n                  <mat-label>{{passwordText}}</mat-label>\n                  <input\n                    [formControl]=\"sigUpPasswordFormControl\"\n                    [maxlength]=\"max\"\n                    [minlength]=\"min\"\n                    [type]=\"toggle.type\"\n                    matInput\n                    name=\"password\"\n                    autocomplete=\"new-password\"\n                    required\n                  />\n                  <mat-pass-toggle-visibility #toggle matSuffix></mat-pass-toggle-visibility>\n\n                  <mat-icon [color]=\"color\" matSuffix>lock</mat-icon>\n\n                  <mat-hint align=\"end\" aria-live=\"polite\">\n                    {{signUpFormGroup.value.password?.length}} / {{ max }}\n                  </mat-hint>\n\n                  <mat-error *ngIf=\"sigUpPasswordFormControl.hasError('required')\" class=\"cut-text\">\n                    {{passwordErrorRequiredText}}\n                  </mat-error>\n\n                  <mat-error *ngIf=\"sigUpPasswordFormControl.hasError('minlength')\" class=\"cut-text\">\n                    {{ passwordErrorMinLengthText }}\n                  </mat-error>\n                  <mat-error *ngIf=\"sigUpPasswordFormControl.hasError('maxlength')\" class=\"cut-text\">\n                    {{ passwordErrorMaxLengthText }}\n                  </mat-error>\n\n                </mat-form-field>\n\n                <mat-password-strength #passwordStrength\n                                       [customValidator]=\"customValidator\"\n                                       [enableDigitRule]=\"enableDigitRule\"\n                                       [enableLengthRule]=\"enableLengthRule\"\n                                       [enableLowerCaseLetterRule]=\"enableLowerCaseLetterRule\"\n                                       [enableSpecialCharRule]=\"enableSpecialCharRule\"\n                                       [enableUpperCaseLetterRule]=\"enableUpperCaseLetterRule\"\n                                       [externalError]=\"sigUpPasswordFormControl.dirty\"\n                                       [max]=\"max\"\n                                       [min]=\"min\"\n                                       [password]=\"signUpFormGroup.value.password\">\n                </mat-password-strength>\n\n              </div>\n\n              <button [@animate]=\"{ value: '*', params: { x: '100px' } }\"\n                      [color]=\"color\"\n                      [disabled]=\"signUpFormGroup.invalid\"\n                      mat-raised-button\n                      style=\"margin-top: 20px\"\n                      type=\"submit\">\n                {{registerButtonText}}\n              </button>\n\n            </div>\n          </form>\n\n          <button (click)=\"processLegalSignUP(authProvider.ANONYMOUS)\"\n                  *ngIf=\"guestEnabled\"\n                  [@animate]=\"{ value: '*', params: { x: '-100px' } }\"\n                  [color]=\"color\"\n                  mat-button\n                  style=\"margin-top: 20px\">\n            <mat-icon>fingerprint</mat-icon>\n            {{guestButtonText}}\n          </button>\n\n        </mat-card-content>\n\n        <mat-card-footer *ngIf=\"isLoading\">\n          <mat-progress-bar [@animate]=\"{ value: '*', params: { z: '50px', delay: '50ms', scale: '0.2' } }\"\n                            mode=\"indeterminate\"></mat-progress-bar>\n        </mat-card-footer>\n\n      </mat-card>\n    </mat-tab>\n\n    <!--Reset password tab-->\n    <mat-tab *ngIf=\"passwordResetWished\" class=\"reset-password-tab\">\n      <ng-template mat-tab-label>\n        <button (click)=\"passwordResetWished = false\" class=\"reset-password-tab__close-button\" mat-icon-button>\n          {{ resetPasswordTabText }}\n          <mat-icon>close</mat-icon>\n        </button>\n      </ng-template>\n      <form (ngSubmit)=\"resetPasswordFormGroup.valid && resetPassword()\"\n            [@animateStagger]=\"{ value: '50' }\"\n            [formGroup]=\"resetPasswordFormGroup\">\n        <mat-card class=\"reset-password-card\">\n          <mat-card-content>\n            <mat-form-field [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\" [appearance]=\"appearance\"\n                            class=\"full-width\">\n              <mat-label> {{ resetPasswordInputText }} </mat-label>\n              <input [title]=\"resetPasswordInputText\"\n                     formControlName=\"email\"\n                     matInput\n                     required>\n              <mat-icon [color]=\"color\" matSuffix>email</mat-icon>\n              <mat-error *ngIf=\"resetPasswordEmailFormControl.hasError('required')\">\n                {{resetPasswordErrorRequiredText}}\n              </mat-error>\n              <mat-error *ngIf=\"resetPasswordEmailFormControl.hasError('pattern')\">\n                {{resetPasswordErrorPatternText}}\n              </mat-error>\n            </mat-form-field>\n            <p *ngIf=\"passReset\">{{resetPasswordInstructionsText}}</p>\n          </mat-card-content>\n          <mat-card-actions fxLayoutAlign=\"center\">\n            <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n            <button [@animate]=\"{ value: '*', params: { x: '50px' } }\"\n                    [color]=\"color\"\n                    mat-raised-button\n                    type=\"submit\">\n              {{resetPasswordActionButtonText}}\n            </button>\n          </mat-card-actions>\n        </mat-card>\n      </form>\n    </mat-tab>\n\n  </mat-tab-group>\n  <mat-divider></mat-divider>\n  <ngx-auth-firebaseui-providers *ngIf=\"tabIndex !== 2\"\n                                 [providers]=\"providers\"\n                                 [theme]=\"providersTheme\"\n                                 [tosUrl]=\"tosUrl\"\n                                 [privacyPolicyUrl]=\"privacyPolicyUrl\">\n  </ngx-auth-firebaseui-providers>\n</ng-template>\n", styles: [".mat-card{margin:2rem}.space-top{margin-top:.5rem}.full-width{width:100%}.cut-text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.signed-in-container .account-circle{font-size:12rem;width:12rem;height:12rem}.signed-in-container img.account-circle{-o-object-fit:cover;object-fit:cover;border-radius:50%}.signed-in-container .sign-out-button{margin-top:2rem}.signed-in-container .user-display-name{margin-top:1rem}.signed-in-container .user-email{margin-top:-1rem}.signed-in-container .actions{margin-top:2rem}.signed-in-container .actions .action-button,.signed-in-container .actions mat-progress-bar{width:100%}.signed-in-container .actions .action-button{margin-top:1rem}.reset-password-tab mat-progress-bar{margin-bottom:1rem}.reset-password-tab__close-button{width:100%;display:flex;justify-content:space-between;align-items:center}.reset-password-tab__close-button mat-icon{font-size:18px;position:relative;top:-1px}\n"] }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => NgxAuthFirebaseUIConfigToken)]
            }] }, { type: i1.AngularFireAuth }, { type: i2.AuthProcessService }, { type: i3.MatDialog }, { type: i4.ActivatedRoute }, { type: i0.ChangeDetectorRef }]; }, { matTabGroup: [{
            type: ViewChild,
            args: [MatTabGroup, { static: false }]
        }], passwordStrength: [{
            type: ViewChild,
            args: [MatPasswordStrengthComponent, { static: false }]
        }], providers: [{
            type: Input
        }], providersTheme: [{
            type: Input
        }], appearance: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], registrationEnabled: [{
            type: Input
        }], resetPasswordEnabled: [{
            type: Input
        }], guestEnabled: [{
            type: Input
        }], tosUrl: [{
            type: Input
        }], privacyPolicyUrl: [{
            type: Input
        }], goBackURL: [{
            type: Input
        }], messageOnAuthSuccess: [{
            type: Input
        }], messageOnAuthError: [{
            type: Input
        }], messageOnEmailConfirmationSuccess: [{
            type: Input
        }], onSuccess: [{
            type: Output
        }], onError: [{
            type: Output
        }], selectedTabChange: [{
            type: Output
        }], enableLengthRule: [{
            type: Input
        }], enableLowerCaseLetterRule: [{
            type: Input
        }], enableUpperCaseLetterRule: [{
            type: Input
        }], enableDigitRule: [{
            type: Input
        }], enableSpecialCharRule: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], customValidator: [{
            type: Input
        }], onStrengthChanged: [{
            type: Output
        }], verifyEmailTemplate: [{
            type: Input
        }], verifyEmailTitleText: [{
            type: Input
        }], verifyEmailConfirmationText: [{
            type: Input
        }], verifyEmailGoBackText: [{
            type: Input
        }], sendNewVerificationEmailText: [{
            type: Input
        }], signOutText: [{
            type: Input
        }], resetPasswordTabText: [{
            type: Input
        }], resetPasswordInputText: [{
            type: Input
        }], resetPasswordErrorRequiredText: [{
            type: Input
        }], resetPasswordErrorPatternText: [{
            type: Input
        }], resetPasswordActionButtonText: [{
            type: Input
        }], resetPasswordInstructionsText: [{
            type: Input
        }], signInTabText: [{
            type: Input
        }], signInCardTitleText: [{
            type: Input
        }], loginButtonText: [{
            type: Input
        }], forgotPasswordButtonText: [{
            type: Input
        }], nameText: [{
            type: Input
        }], nameErrorRequiredText: [{
            type: Input
        }], nameErrorMinLengthText: [{
            type: Input
        }], nameErrorMaxLengthText: [{
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
        }], passwordErrorMinLengthText: [{
            type: Input
        }], passwordErrorMaxLengthText: [{
            type: Input
        }], registerTabText: [{
            type: Input
        }], registerCardTitleText: [{
            type: Input
        }], registerButtonText: [{
            type: Input
        }], guestButtonText: [{
            type: Input
        }], emailConfirmationTitle: [{
            type: Input
        }], emailConfirmationText: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXV0aC1maXJlYmFzZXVpL3NyYy9saWIvY29tcG9uZW50cy9uZ3gtYXV0aC1maXJlYmFzZXVpL2F1dGguY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1dGgtZmlyZWJhc2V1aS9zcmMvbGliL2NvbXBvbmVudHMvbmd4LWF1dGgtZmlyZWJhc2V1aS9hdXRoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFJTCxNQUFNLEVBQ04sV0FBVyxFQUdYLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFDVCxVQUFVLEdBQ1gsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixtQkFBbUI7QUFDbkIsT0FBTyxFQUFxQixXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVF4RSxjQUFjO0FBQ2QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFLOUYsT0FBTyxFQUFFLHVCQUF1QixFQUFTLE1BQU0sSUFBSSxDQUFDO0FBTXBELE9BQU8sRUFFTCxZQUFZLEdBQ2IsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7O0lDOUMxRCw4QkFJK0M7SUFDN0MsaUVBVWdEO0lBVDlDLDhNQUFXLGdCQUFTLElBQUM7SUFVdkIsaUJBQXlDO0lBQzNDLGlC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QUE5QixLQUFLO1lBQ0csOEJBQThCO2tCQUF0QyxLQUFLO1lBRUcsNkJBQTZCO2tCQUFyQyxLQUFLO1lBRUcsNkJBQTZCO2tCQUFyQyxLQUFLO1lBQ0csNkJBQTZCO2tCQUFyQyxLQUFLO1lBSUcsYUFBYTtrQkFBckIsS0FBSztZQUNHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyx3QkFBd0I7a0JBQWhDLEtBQUs7WUFHRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csc0JBQXNCO2tCQUE5QixLQUFLO1lBQ0csc0JBQXNCO2tCQUE5QixLQUFLO1lBRUcsU0FBUztrQkFBakIsS0FBSztZQUNHLHNCQUFzQjtrQkFBOUIsS0FBSztZQUNHLHFCQUFxQjtrQkFBN0IsS0FBSztZQUVHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyx5QkFBeUI7a0JBQWpDLEtBQUs7WUFDRywwQkFBMEI7a0JBQWxDLEtBQUs7WUFDRywwQkFBMEI7a0JBQWxDLEtBQUs7WUFHRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUdHLHNCQUFzQjtrQkFBOUIsS0FBSztZQUdOLHFCQUFxQjtrQkFEcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBQTEFURk9STV9JRCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gQU5HVUxBUiBNQVRFUklBTFxuaW1wb3J0IHsgTWF0VGFiQ2hhbmdlRXZlbnQsIE1hdFRhYkdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3RhYnNcIjtcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCB7IE1hdEZvcm1GaWVsZEFwcGVhcmFuY2UgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZFwiO1xuXG4vLyBBTkdVTEFSIEZJUkVcbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aCB9IGZyb20gXCJAYW5ndWxhci9maXJlL2NvbXBhdC9hdXRoXCI7XG5cbi8vIFRoaXJkIFBBUlRZXG5pbXBvcnQgeyBNYXRQYXNzd29yZFN0cmVuZ3RoQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvcGFzc3dvcmQtc3RyZW5ndGhcIjtcblxuLy8gUlhKU1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgTGVnYWxpdHlEaWFsb2dDb21wb25lbnQsIFRoZW1lIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQge1xuICBMZWdhbGl0eURpYWxvZ1BhcmFtcyxcbiAgTGVnYWxpdHlEaWFsb2dSZXN1bHQsXG4gIE5neEF1dGhGaXJlYmFzZVVJQ29uZmlnLFxufSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHtcbiAgQXV0aFByb2Nlc3NTZXJ2aWNlLFxuICBBdXRoUHJvdmlkZXIsXG59IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLXByb2Nlc3Muc2VydmljZVwiO1xuaW1wb3J0IHsgTmd4QXV0aEZpcmViYXNldWlBbmltYXRpb25zIH0gZnJvbSBcIi4uLy4uL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IE5neEF1dGhGaXJlYmFzZVVJQ29uZmlnVG9rZW4gfSBmcm9tIFwiLi4vLi4vdG9rZW5zXCI7XG5cbmV4cG9ydCBjb25zdCBFTUFJTF9SRUdFWCA9IG5ldyBSZWdFeHAoXG4gIFtcbiAgICAnXigoW148PigpW1xcXFxdXFxcXC4sOzpcXFxcc0BcIl0rKFxcXFwuW148PigpXFxcXFtcXFxcXVxcXFwuLDs6XFxcXHNAXCJdKykqKScsXG4gICAgJ3woXCIuK1wiKSlAKChcXFxcW1swLTldezEsM31cXFxcLlswLTldezEsM31cXFxcLlswLTldezEsM31cXFxcLicsXG4gICAgXCJbMC05XXsxLDN9XSl8KChbYS16QS1aXFxcXC0wLTldK1xcXFwuKStcIixcbiAgICBcIlthLXpBLVpdezIsfSkpJFwiLFxuICBdLmpvaW4oXCJcIilcbik7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5leHBvcnQgY29uc3QgUEhPTkVfTlVNQkVSX1JFR0VYID0gbmV3IFJlZ0V4cChcbiAgW1xuICAgIFwiXlsrXXswLDF9WyhdezAsMX1bMC05XXsxLDR9WyldezAsMX1bLVxcXFxzXFxcXC5dezAsMX1bKF17MCwxfVswLTldezEsNH1bKV17MCwxfVstXFxcXHNcXFxcLi8wLTldezQsMTJ9JFwiLFxuICBdLmpvaW4oXCJcIilcbik7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJuZ3gtYXV0aC1maXJlYmFzZXVpXCIsXG4gIHRlbXBsYXRlVXJsOiBcImF1dGguY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJhdXRoLmNvbXBvbmVudC5zY3NzXCJdLFxuICBhbmltYXRpb25zOiBOZ3hBdXRoRmlyZWJhc2V1aUFuaW1hdGlvbnMsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoTWF0VGFiR3JvdXAsIHsgc3RhdGljOiBmYWxzZSB9KSBtYXRUYWJHcm91cDogTWF0VGFiR3JvdXA7XG4gIEBWaWV3Q2hpbGQoTWF0UGFzc3dvcmRTdHJlbmd0aENvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHBhc3N3b3JkU3RyZW5ndGg6IE1hdFBhc3N3b3JkU3RyZW5ndGhDb21wb25lbnQ7XG5cbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICAvLyAgZ29vZ2xlLCBmYWNlYm9vaywgdHdpdHRlciwgZ2l0aHViIGFzIGFycmF5IG9yIGFsbCBhcyBvbmUgc2luZ2xlIHN0cmluZ1xuICBASW5wdXQoKSBwcm92aWRlcnM6IEF1dGhQcm92aWRlcltdIHwgQXV0aFByb3ZpZGVyID0gQXV0aFByb3ZpZGVyLkFMTDtcbiAgQElucHV0KCkgcHJvdmlkZXJzVGhlbWU6IFRoZW1lOyAvLyBDbGFzc2ljLCBTdHJva2VkLCBldGMuXG5cbiAgQElucHV0KCkgYXBwZWFyYW5jZTogTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZTtcbiAgQElucHV0KCkgdGFiSW5kZXg6IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgpIHJlZ2lzdHJhdGlvbkVuYWJsZWQgPSB0cnVlO1xuICBASW5wdXQoKSByZXNldFBhc3N3b3JkRW5hYmxlZCA9IHRydWU7XG4gIEBJbnB1dCgpIGd1ZXN0RW5hYmxlZCA9IHRydWU7XG4gIEBJbnB1dCgpIHRvc1VybDogc3RyaW5nO1xuICBASW5wdXQoKSBwcml2YWN5UG9saWN5VXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGdvQmFja1VSTDogc3RyaW5nO1xuICBASW5wdXQoKSBtZXNzYWdlT25BdXRoU3VjY2Vzczogc3RyaW5nO1xuICBASW5wdXQoKSBtZXNzYWdlT25BdXRoRXJyb3I6IHN0cmluZztcbiAgQElucHV0KCkgbWVzc2FnZU9uRW1haWxDb25maXJtYXRpb25TdWNjZXNzOiBzdHJpbmc7XG5cbiAgLy8gRXZlbnRzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgb25TdWNjZXNzOiBhbnk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgb25FcnJvcjogYW55O1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRUYWJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxcbiAgICBNYXRUYWJDaGFuZ2VFdmVudFxuICA+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIFBhc3N3b3JkIHN0cmVuZ3RoIGFwaVxuICBASW5wdXQoKSBlbmFibGVMZW5ndGhSdWxlID0gdHJ1ZTtcbiAgQElucHV0KCkgZW5hYmxlTG93ZXJDYXNlTGV0dGVyUnVsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGVuYWJsZVVwcGVyQ2FzZUxldHRlclJ1bGUgPSB0cnVlO1xuICBASW5wdXQoKSBlbmFibGVEaWdpdFJ1bGUgPSB0cnVlO1xuICBASW5wdXQoKSBlbmFibGVTcGVjaWFsQ2hhclJ1bGUgPSB0cnVlO1xuICBASW5wdXQoKSBtaW46IG51bWJlcjtcbiAgQElucHV0KCkgbWF4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGN1c3RvbVZhbGlkYXRvcjogUmVnRXhwO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uU3RyZW5ndGhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBWZXJpZnkgZW1haWwgdGVtcGxhdGUgdG8gdXNlIGluIHBsYWNlIG9mIGRlZmF1bHQgdGVtcGxhdGUuXG4gIC8vIFNlZSBlbWFpbC1jb25maXJtYXRpb24gY29tcG9uZW50XG4gIEBJbnB1dCgpIHZlcmlmeUVtYWlsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gaTE4biB0cmFuc2xhdGlvbnMgdG8gdXNlIGluIGRlZmF1bHQgdGVtcGxhdGUgZm9yIGVtYWlsIHZlcmlmaWNhdGlvbi5cbiAgLy8gU2VlIGVtYWlsLWNvbmZpcm1hdGlvbiBjb21wb25lbnRcbiAgQElucHV0KCkgdmVyaWZ5RW1haWxUaXRsZVRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgdmVyaWZ5RW1haWxDb25maXJtYXRpb25UZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZlcmlmeUVtYWlsR29CYWNrVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBzZW5kTmV3VmVyaWZpY2F0aW9uRW1haWxUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpZ25PdXRUZXh0ID0gXCJTaWduIG91dFwiO1xuXG4gIC8vIEN1c3RvbWl6ZSB0aGUgdGV4dFxuICAvLyBSZXNldCBQYXNzd29yZCBUYWJcbiAgQElucHV0KCkgcmVzZXRQYXNzd29yZFRhYlRleHQgPSBcIlJlc2V0IGUtbWFpbCBhZGRyZXNzIHRvIHBhc3N3b3JkXCI7XG4gIEBJbnB1dCgpIHJlc2V0UGFzc3dvcmRJbnB1dFRleHQgPSBcIlJlc2V0IGUtbWFpbCBhZGRyZXNzIHRvIHBhc3N3b3JkXCI7XG4gIEBJbnB1dCgpIHJlc2V0UGFzc3dvcmRFcnJvclJlcXVpcmVkVGV4dCA9XG4gICAgXCJFLW1haWwgaXMgcmVxdWlyZWQgdG8gcmVzZXQgdGhlIHBhc3N3b3JkIVwiO1xuICBASW5wdXQoKSByZXNldFBhc3N3b3JkRXJyb3JQYXR0ZXJuVGV4dCA9XG4gICAgXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlLW1haWwgYWRkcmVzc1wiO1xuICBASW5wdXQoKSByZXNldFBhc3N3b3JkQWN0aW9uQnV0dG9uVGV4dCA9IFwiUmVzZXRcIjtcbiAgQElucHV0KCkgcmVzZXRQYXNzd29yZEluc3RydWN0aW9uc1RleHQgPVxuICAgIFwiUmVzZXQgcmVxdWVzdGVkLiBDaGVjayB5b3VyIGUtbWFpbCBpbnN0cnVjdGlvbnMuXCI7XG5cbiAgLy8gU2lnbkluIFRhYlxuICBASW5wdXQoKSBzaWduSW5UYWJUZXh0ID0gXCJTaWduIGluXCI7XG4gIEBJbnB1dCgpIHNpZ25JbkNhcmRUaXRsZVRleHQgPSBcIlNpZ25pbmcgaW5cIjtcbiAgQElucHV0KCkgbG9naW5CdXR0b25UZXh0ID0gXCJMb2cgSW5cIjtcbiAgQElucHV0KCkgZm9yZ290UGFzc3dvcmRCdXR0b25UZXh0ID0gXCJGb3Jnb3QgUGFzc3dvcmQgP1wiO1xuXG4gIC8vIENvbW1vblxuICBASW5wdXQoKSBuYW1lVGV4dCA9IFwiTmFtZVwiO1xuICBASW5wdXQoKSBuYW1lRXJyb3JSZXF1aXJlZFRleHQgPSBcIk5hbWUgaXMgcmVxdWlyZWRcIjtcbiAgQElucHV0KCkgbmFtZUVycm9yTWluTGVuZ3RoVGV4dCA9IFwiVGhlIG5hbWUgaXMgdG9vIHNob3J0IVwiO1xuICBASW5wdXQoKSBuYW1lRXJyb3JNYXhMZW5ndGhUZXh0ID0gXCJUaGUgbmFtZSBpcyB0b28gbG9uZyFcIjtcblxuICBASW5wdXQoKSBlbWFpbFRleHQgPSBcIkUtbWFpbFwiO1xuICBASW5wdXQoKSBlbWFpbEVycm9yUmVxdWlyZWRUZXh0ID0gXCJFLW1haWwgaXMgcmVxdWlyZWRcIjtcbiAgQElucHV0KCkgZW1haWxFcnJvclBhdHRlcm5UZXh0ID0gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlLW1haWwgYWRkcmVzc1wiO1xuXG4gIEBJbnB1dCgpIHBhc3N3b3JkVGV4dCA9IFwiUGFzc3dvcmRcIjtcbiAgQElucHV0KCkgcGFzc3dvcmRFcnJvclJlcXVpcmVkVGV4dCA9IFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIjtcbiAgQElucHV0KCkgcGFzc3dvcmRFcnJvck1pbkxlbmd0aFRleHQgPSBcIlRoZSBwYXNzd29yZCBpcyB0b28gc2hvcnQhXCI7XG4gIEBJbnB1dCgpIHBhc3N3b3JkRXJyb3JNYXhMZW5ndGhUZXh0ID0gXCJUaGUgcGFzc3dvcmQgaXMgdG9vIGxvbmchXCI7XG5cbiAgLy8gUmVnaXN0ZXIgVGFiXG4gIEBJbnB1dCgpIHJlZ2lzdGVyVGFiVGV4dCA9IFwiUmVnaXN0ZXJcIjtcbiAgQElucHV0KCkgcmVnaXN0ZXJDYXJkVGl0bGVUZXh0ID0gXCJSZWdpc3RyYXRpb25cIjtcbiAgQElucHV0KCkgcmVnaXN0ZXJCdXR0b25UZXh0ID0gXCJSZWdpc3RlclwiO1xuICBASW5wdXQoKSBndWVzdEJ1dHRvblRleHQgPSBcImNvbnRpbnVlIGFzIGd1ZXN0XCI7XG5cbiAgLy8gZW1haWwgY29uZmlybWF0aW9uIGNvbXBvbmVudFxuICBASW5wdXQoKSBlbWFpbENvbmZpcm1hdGlvblRpdGxlID0gXCJDb25maXJtIHlvdXIgZS1tYWlsIGFkZHJlc3MhXCI7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gIEBJbnB1dCgpXG4gIGVtYWlsQ29uZmlybWF0aW9uVGV4dCA9IGBBIGNvbmZpcm1hdGlvbiBlLW1haWwgaGFzIGJlZW4gc2VudCB0byB5b3UuIENoZWNrIHlvdXIgaW5ib3ggYW5kIGNsaWNrIG9uIHRoZSBsaW5rIFwiQ29uZmlybSBteSBlLW1haWxcIiB0byBjb25maXJtIHlvdXIgZS1tYWlsIGFkZHJlc3MuYDtcblxuICBhdXRoUHJvdmlkZXIgPSBBdXRoUHJvdmlkZXI7XG4gIHBhc3N3b3JkUmVzZXRXaXNoZWQ6IGJvb2xlYW47XG5cbiAgcHVibGljIHNpZ25JbkZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBwdWJsaWMgc2lnblVwRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyByZXNldFBhc3N3b3JkRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG5cbiAgb25FcnJvclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBhdXRoZW50aWNhdGlvbkVycm9yID0gZmFsc2U7XG5cbiAgcGFzc1Jlc2V0ID0gZmFsc2U7XG4gIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPExlZ2FsaXR5RGlhbG9nQ29tcG9uZW50PjtcblxuICBhdXRoUHJvdmlkZXJzID0gQXV0aFByb3ZpZGVyO1xuXG4gIHNpZ25JbkVtYWlsRm9ybUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcbiAgc2lnSW5QYXNzd29yZEZvcm1Db250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG5cbiAgc2lnVXBOYW1lRm9ybUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcbiAgc2lnVXBFbWFpbEZvcm1Db250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG4gIHNpZ1VwUGFzc3dvcmRGb3JtQ29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuICBzaWdVcFBhc3N3b3JkQ29uZmlybWF0aW9uRm9ybUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcbiAgcmVzZXRQYXNzd29yZEVtYWlsRm9ybUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZ1Rva2VuKSlcbiAgICBwdWJsaWMgY29uZmlnOiBOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZyxcbiAgICBwdWJsaWMgYXV0aDogQW5ndWxhckZpcmVBdXRoLFxuICAgIHB1YmxpYyBhdXRoUHJvY2VzczogQXV0aFByb2Nlc3NTZXJ2aWNlLFxuICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICB0aGlzLm9uU3VjY2VzcyA9IGF1dGhQcm9jZXNzLm9uU3VjY2Vzc0VtaXR0ZXI7XG4gICAgdGhpcy5vbkVycm9yID0gYXV0aFByb2Nlc3Mub25FcnJvckVtaXR0ZXI7XG4gIH1cblxuICBnZXQgY29sb3IoKTogc3RyaW5nIHwgVGhlbWVQYWxldHRlIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGlvbkVycm9yID8gXCJ3YXJuXCIgOiBcInByaW1hcnlcIjtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5vbkVycm9yU3Vic2NyaXB0aW9uID0gdGhpcy5vbkVycm9yLnN1YnNjcmliZShcbiAgICAgICAgKCkgPT4gKHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA9IHRydWUpXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLm1pbiA9XG4gICAgICB0aGlzLm1pbiAhPSBudWxsXG4gICAgICAgID8gTWF0aC5tYXgodGhpcy5taW4sIHRoaXMuY29uZmlnLnBhc3N3b3JkTWluTGVuZ3RoKVxuICAgICAgICA6IHRoaXMuY29uZmlnLnBhc3N3b3JkTWluTGVuZ3RoO1xuICAgIHRoaXMubWF4ID1cbiAgICAgIHRoaXMubWF4ICE9IG51bGxcbiAgICAgICAgPyBNYXRoLm1pbih0aGlzLm1heCwgdGhpcy5jb25maWcucGFzc3dvcmRNYXhMZW5ndGgpXG4gICAgICAgIDogdGhpcy5jb25maWcucGFzc3dvcmRNYXhMZW5ndGg7XG5cbiAgICB0aGlzLmdvQmFja1VSTCA9IHRoaXMuY2hvb3NlQmFja1VybCgpO1xuXG4gICAgdGhpcy51cGRhdGVBdXRoU25hY2tiYXJNZXNzYWdlcygpO1xuICAgIC8vIGF1dGggZm9ybSdzIGluaXRpYWxpemF0aW9uXG4gICAgdGhpcy5faW5pdFNpZ25JbkZvcm1Hcm91cEJ1aWxkZXIoKTtcbiAgICB0aGlzLl9pbml0U2lnblVwRm9ybUdyb3VwQnVpbGRlcigpO1xuICAgIHRoaXMuX2luaXRSZXNldFBhc3N3b3JkRm9ybUdyb3VwQnVpbGRlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhc3N3b3JkU3RyZW5ndGgpIHtcbiAgICAgIHRoaXMucGFzc3dvcmRTdHJlbmd0aC5vblN0cmVuZ3RoQ2hhbmdlZC5zdWJzY3JpYmUoKHN0cmVuZ3RoOiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy5vblN0cmVuZ3RoQ2hhbmdlZC5lbWl0KHN0cmVuZ3RoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5tZXNzYWdlT25BdXRoU3VjY2VzcyB8fCBjaGFuZ2VzLm1lc3NhZ2VPbkF1dGhFcnJvcikge1xuICAgICAgdGhpcy51cGRhdGVBdXRoU25hY2tiYXJNZXNzYWdlcygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5taW4pIHtcbiAgICAgIHRoaXMubWluID1cbiAgICAgICAgdGhpcy5taW4gIT0gbnVsbFxuICAgICAgICAgID8gTWF0aC5tYXgodGhpcy5taW4sIHRoaXMuY29uZmlnLnBhc3N3b3JkTWluTGVuZ3RoKVxuICAgICAgICAgIDogdGhpcy5jb25maWcucGFzc3dvcmRNaW5MZW5ndGg7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm1heCkge1xuICAgICAgdGhpcy5tYXggPVxuICAgICAgICB0aGlzLm1heCAhPSBudWxsXG4gICAgICAgICAgPyBNYXRoLm1pbih0aGlzLm1heCwgdGhpcy5jb25maWcucGFzc3dvcmRNYXhMZW5ndGgpXG4gICAgICAgICAgOiB0aGlzLmNvbmZpZy5wYXNzd29yZE1heExlbmd0aDtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZ29CYWNrVVJMKSB7XG4gICAgICB0aGlzLmdvQmFja1VSTCA9IHRoaXMuY2hvb3NlQmFja1VybCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9uRXJyb3JTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMub25FcnJvclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uVGFiQ2hhbmdlKGV2ZW50OiBNYXRUYWJDaGFuZ2VFdmVudCkge1xuICAgIHRoaXMuc2VsZWN0ZWRUYWJDaGFuZ2UuZW1pdChldmVudCk7XG4gICAgdGhpcy50YWJJbmRleCA9IGV2ZW50LmluZGV4O1xuICB9XG5cbiAgYXN5bmMgc2lnbk91dCgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIGF3YWl0IHRoaXMuYXV0aFByb2Nlc3Muc2lnbk91dCgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy50YWJJbmRleCA9IDA7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHNpZ25JbigpIHtcbiAgICBpZiAoIXRoaXMuc2lnbkluRm9ybUdyb3VwLnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgYXdhaXQgdGhpcy5hdXRoUHJvY2Vzcy5zaWduSW5XaXRoKHRoaXMuYXV0aFByb3ZpZGVycy5FbWFpbEFuZFBhc3N3b3JkLCB7XG4gICAgICAgIGVtYWlsOiB0aGlzLnNpZ25JbkZvcm1Hcm91cC52YWx1ZS5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc2lnbkluRm9ybUdyb3VwLnZhbHVlLnBhc3N3b3JkLFxuICAgICAgfSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUF1dGhTbmFja2Jhck1lc3NhZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFByb2Nlc3MubWVzc2FnZU9uQXV0aFN1Y2Nlc3MgPSB0aGlzLm1lc3NhZ2VPbkF1dGhTdWNjZXNzO1xuICAgIHRoaXMuYXV0aFByb2Nlc3MubWVzc2FnZU9uQXV0aEVycm9yID0gdGhpcy5tZXNzYWdlT25BdXRoRXJyb3I7XG4gIH1cblxuICBjcmVhdGVGb3Jnb3RQYXNzd29yZFRhYigpIHtcbiAgICB0aGlzLnBhc3N3b3JkUmVzZXRXaXNoZWQgPSB0cnVlO1xuICAgIHRoaXMudGFiSW5kZXggPSAyO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcm9jZXNzTGVnYWxTaWduVVAoYXV0aFByb3ZpZGVyPzogQXV0aFByb3ZpZGVyKSB7XG4gICAgaWYgKHRoaXMudG9zVXJsIHx8IHRoaXMucHJpdmFjeVBvbGljeVVybCkge1xuICAgICAgY29uc3QgcGFyYW1zOiBMZWdhbGl0eURpYWxvZ1BhcmFtcyA9IHtcbiAgICAgICAgdG9zVXJsOiB0aGlzLnRvc1VybCxcbiAgICAgICAgcHJpdmFjeVBvbGljeVVybDogdGhpcy5wcml2YWN5UG9saWN5VXJsLFxuICAgICAgICBhdXRoUHJvdmlkZXIsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTGVnYWxpdHlEaWFsb2dDb21wb25lbnQsIHtcbiAgICAgICAgZGF0YTogcGFyYW1zLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0OiBMZWdhbGl0eURpYWxvZ1Jlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy5fYWZ0ZXJTaWduVXBNaWRkbGV3YXJlKHJlc3VsdC5hdXRoUHJvdmlkZXIpLnRoZW4oKCkgPT5cbiAgICAgICAgICAgIHRoaXMuc2lnblVwRm9ybUdyb3VwLnJlc2V0KClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZnRlclNpZ25VcE1pZGRsZXdhcmUoYXV0aFByb3ZpZGVyKS50aGVuKCgpID0+XG4gICAgICAgIHRoaXMuc2lnblVwRm9ybUdyb3VwLnJlc2V0KClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2lnblVwKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYXV0aFByb2Nlc3Muc2lnblVwKHRoaXMuc2lnblVwRm9ybUdyb3VwLnZhbHVlLm5hbWUsIHtcbiAgICAgICAgZW1haWw6IHRoaXMuc2lnblVwRm9ybUdyb3VwLnZhbHVlLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5zaWduVXBGb3JtR3JvdXAudmFsdWUucGFzc3dvcmQsXG4gICAgICB9KTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2lnblVwQW5vbnltb3VzbHkoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICBhd2FpdCB0aGlzLmF1dGhQcm9jZXNzLnNpZ25JbldpdGgodGhpcy5hdXRoUHJvdmlkZXIuQU5PTllNT1VTKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRQYXNzd29yZCgpIHtcbiAgICB0aGlzLmF1dGhQcm9jZXNzXG4gICAgICAucmVzZXRQYXNzd29yZCh0aGlzLnJlc2V0UGFzc3dvcmRFbWFpbEZvcm1Db250cm9sLnZhbHVlKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnBhc3NSZXNldCA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMudGFiSW5kZXggPSAyO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNob29zZUJhY2tVcmwoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucXVlcnlQYXJhbXMucmVkaXJlY3RVcmwgfHxcbiAgICAgIHRoaXMuZ29CYWNrVVJMIHx8XG4gICAgICBcIi9cIlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0U2lnbkluRm9ybUdyb3VwQnVpbGRlcigpIHtcbiAgICB0aGlzLnNpZ25JbkZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAgIHRoaXMuc2lnbkluRm9ybUdyb3VwLnJlZ2lzdGVyQ29udHJvbChcbiAgICAgIFwiZW1haWxcIixcbiAgICAgICh0aGlzLnNpZ25JbkVtYWlsRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1xuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICBWYWxpZGF0b3JzLnBhdHRlcm4oRU1BSUxfUkVHRVgpLFxuICAgICAgXSkpXG4gICAgKTtcbiAgICB0aGlzLnNpZ25JbkZvcm1Hcm91cC5yZWdpc3RlckNvbnRyb2woXG4gICAgICBcInBhc3N3b3JkXCIsXG4gICAgICAodGhpcy5zaWdJblBhc3N3b3JkRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1xuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCh0aGlzLm1pbiksXG4gICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKHRoaXMubWF4KSxcbiAgICAgIF0pKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0U2lnblVwRm9ybUdyb3VwQnVpbGRlcigpIHtcbiAgICB0aGlzLnNpZ25VcEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgbmFtZTogdGhpcy5zaWdVcE5hbWVGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKHRoaXMuY29uZmlnLm5hbWVNaW5MZW5ndGgpLFxuICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCh0aGlzLmNvbmZpZy5uYW1lTWF4TGVuZ3RoKSxcbiAgICAgIF0pLFxuICAgICAgZW1haWw6IHRoaXMuc2lnVXBFbWFpbEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFtcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuKEVNQUlMX1JFR0VYKSxcbiAgICAgIF0pLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMuc2lnVXBQYXNzd29yZEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFtcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgodGhpcy5taW4pLFxuICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCh0aGlzLm1heCksXG4gICAgICBdKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRSZXNldFBhc3N3b3JkRm9ybUdyb3VwQnVpbGRlcigpIHtcbiAgICB0aGlzLnJlc2V0UGFzc3dvcmRGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIGVtYWlsOiB0aGlzLnJlc2V0UGFzc3dvcmRFbWFpbEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFtcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuKEVNQUlMX1JFR0VYKSxcbiAgICAgIF0pLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWZ0ZXJTaWduVXBNaWRkbGV3YXJlKGF1dGhQcm92aWRlcj86IEF1dGhQcm92aWRlcikge1xuICAgIGlmIChhdXRoUHJvdmlkZXIgPT09IHRoaXMuYXV0aFByb3ZpZGVyLkFOT05ZTU9VUykge1xuICAgICAgcmV0dXJuIHRoaXMuc2lnblVwQW5vbnltb3VzbHkoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2lnblVwKCk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJhdXRoUHJvY2Vzcy51c2VyJCB8IGFzeW5jIGFzIHVzZXI7IGVsc2Ugc2hvd0Zvcm1cIj5cblxuICA8IS0tIFRoaXMgY29tcG9uZW50IHdpbGwgYmUgc2hvd24gd2hlbjpcbiAgICAtIHdlIGp1c3Qgc2VudCBhIHZlcmlmaWNhdGlvbiBtYWlsIChub3RhYmx5IGFmdGVyIHNpZ24gdXApXG4gICAgLSB3ZSBhcnJpdmVkIGZyb20gdGhlIGd1YXJkIGFmdGVyIHRyeWluZyB0byBhY2Nlc3MgYSBwcm90ZWN0ZWQgcm91dGUgZXZlbiB0aG91Z2ggd2UgYXJlIGNvbm5lY3RlZFxuICAgIC0gY29uZmlnLmVuYWJsZUVtYWlsVmVyaWZpY2F0aW9uIGlzIHVuZGVmaW5lZCwgbnVsbCBvciB0cnVlXG4gIC0tPlxuICA8ZGl2XG4gICAgKm5nSWY9XCIoY29uZmlnLmVuYWJsZUVtYWlsVmVyaWZpY2F0aW9uICE9PSBmYWxzZSkgJiYgKFxuICAgICAoY29uZmlnLmd1YXJkUHJvdGVjdGVkUm91dGVzVW50aWxFbWFpbElzVmVyaWZpZWQgJiYgIXVzZXIuZW1haWxWZXJpZmllZCkgfHwgKGF1dGhQcm9jZXNzLmVtYWlsQ29uZmlybWF0aW9uU2VudCAmJiAhdXNlci5lbWFpbFZlcmlmaWVkKVxuICAgICApOyBlbHNlIHNpZ25lZEluVXNlclwiXG4gICAgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxuICAgIDxuZ3gtYXV0aC1maXJlYmFzZXVpLWVtYWlsLWNvbmZpcm1hdGlvblxuICAgICAgKHNpZ25PdXQpPVwic2lnbk91dCgpXCJcbiAgICAgIFtlbWFpbF09XCJ1c2VyLmVtYWlsXCJcbiAgICAgIFtnb0JhY2tVUkxdPVwiZ29CYWNrVVJMXCJcbiAgICAgIFttZXNzYWdlT25FbWFpbENvbmZpcm1hdGlvblN1Y2Nlc3NdPVwibWVzc2FnZU9uRW1haWxDb25maXJtYXRpb25TdWNjZXNzXCJcbiAgICAgIFtzZW5kTmV3VmVyaWZpY2F0aW9uRW1haWxUZXh0XT1cInNlbmROZXdWZXJpZmljYXRpb25FbWFpbFRleHRcIlxuICAgICAgW3NpZ25PdXRUZXh0XT1cInNpZ25PdXRUZXh0XCJcbiAgICAgIFt0ZW1wbGF0ZV09XCJ2ZXJpZnlFbWFpbFRlbXBsYXRlXCJcbiAgICAgIFt2ZXJpZnlFbWFpbENvbmZpcm1hdGlvblRleHRdPVwidmVyaWZ5RW1haWxDb25maXJtYXRpb25UZXh0XCJcbiAgICAgIFt2ZXJpZnlFbWFpbEdvQmFja1RleHRdPVwidmVyaWZ5RW1haWxHb0JhY2tUZXh0XCJcbiAgICAgIFt2ZXJpZnlFbWFpbFRpdGxlVGV4dF09XCJ2ZXJpZnlFbWFpbFRpdGxlVGV4dFwiPlxuICAgIDwvbmd4LWF1dGgtZmlyZWJhc2V1aS1lbWFpbC1jb25maXJtYXRpb24+XG4gIDwvZGl2PlxuXG4gIDxuZy10ZW1wbGF0ZSAjc2lnbmVkSW5Vc2VyPlxuICAgIDxkaXYgY2xhc3M9XCJzaWduZWQtaW4tY29udGFpbmVyXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxuICAgICAgPGltZyAqbmdJZj1cInVzZXI/LnBob3RvVVJMOyBlbHNlIG5vUGhvdG9cIiBbc3JjXT1cInVzZXI/LnBob3RvVVJMXCIgY2xhc3M9XCJhY2NvdW50LWNpcmNsZVwiPlxuICAgICAgPG5nLXRlbXBsYXRlICNub1Bob3RvPlxuICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJhY2NvdW50LWNpcmNsZVwiPmFjY291bnRfY2lyY2xlPC9tYXQtaWNvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwidXNlci1kaXNwbGF5LW5hbWUgbWF0LXRpdGxlXCI+e3sgdXNlcj8uZGlzcGxheU5hbWUgfX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWVtYWlsIG1hdC1ib2R5LTJcIj57eyB1c2VyPy5lbWFpbCB9fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cbiAgICAgICAgPG1hdC1wcm9ncmVzcy1iYXIgKm5nSWY9XCJpc0xvYWRpbmdcIiBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbiAgICAgICAgPGEgKm5nSWY9XCJ2ZXJpZnlFbWFpbEdvQmFja1RleHRcIiBbcm91dGVyTGlua109XCJnb0JhY2tVUkxcIiBjbGFzcz1cImdvLWJhY2stYnV0dG9uIGFjdGlvbi1idXR0b25cIiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICBtYXQtc3Ryb2tlZC1idXR0b24+e3sgdmVyaWZ5RW1haWxHb0JhY2tUZXh0IH19PC9hPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJzaWduT3V0KClcIiBjbGFzcz1cInNpZ24tb3V0LWJ1dHRvbiBhY3Rpb24tYnV0dG9uXCIgY29sb3I9XCJ3YXJuXCJcbiAgICAgICAgICAgICAgICBtYXQtc3Ryb2tlZC1idXR0b24+e3sgc2lnbk91dFRleHQgfX08L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuXG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNzaG93Rm9ybT5cbiAgPG1hdC10YWItZ3JvdXAgKHNlbGVjdGVkVGFiQ2hhbmdlKT1cIm9uVGFiQ2hhbmdlKCRldmVudClcIiBbY29sb3JdPVwiY29sb3JcIiBbc2VsZWN0ZWRJbmRleF09XCJ0YWJJbmRleFwiPlxuICAgIDwhLS1TaWduIGluIHRhYi0tPlxuICAgIDxtYXQtdGFiIFtsYWJlbF09XCJzaWduSW5UYWJUZXh0XCI+XG4gICAgICA8bWF0LWNhcmQ+XG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT57e3NpZ25JbkNhcmRUaXRsZVRleHR9fTwvbWF0LWNhcmQtdGl0bGU+XG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxuICAgICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJzaWduSW4oKVwiXG4gICAgICAgICAgICAgICAgW0BhbmltYXRlU3RhZ2dlcl09XCJ7IHZhbHVlOiAnNTAnIH1cIlxuICAgICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwic2lnbkluRm9ybUdyb3VwXCI+XG4gICAgICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPnt7ZW1haWxUZXh0fX08L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJ1c2VybmFtZVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBbY29sb3JdPVwiY29sb3JcIiBtYXRTdWZmaXg+ZW1haWw8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJzaWduSW5FbWFpbEZvcm1Db250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgICAgICAgICAgICAgICB7e2VtYWlsRXJyb3JSZXF1aXJlZFRleHR9fVxuICAgICAgICAgICAgICAgIDwvbWF0LWVycm9yPlxuICAgICAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJzaWduSW5FbWFpbEZvcm1Db250cm9sLmhhc0Vycm9yKCdwYXR0ZXJuJylcIj5cbiAgICAgICAgICAgICAgICAgIHt7ZW1haWxFcnJvclBhdHRlcm5UZXh0fX1cbiAgICAgICAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPnt7cGFzc3dvcmRUZXh0fX08L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgW21heGxlbmd0aF09XCJtYXhcIiBbbWlubGVuZ3RoXT1cIm1pblwiIFt0eXBlXT1cInRvZ2dsZVBhc3M/LnR5cGVcIiBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIiBtYXRJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZC8+XG4gICAgICAgICAgICAgICAgPG1hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5ICN0b2dnbGVQYXNzIG1hdFN1ZmZpeD48L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5PlxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBbY29sb3JdPVwiY29sb3JcIiBtYXRTdWZmaXg+bG9jazwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPG1hdC1oaW50IGFsaWduPVwiZW5kXCIgYXJpYS1saXZlPVwicG9saXRlXCI+IHt7IHNpZ25JbkZvcm1Hcm91cC52YWx1ZS5wYXNzd29yZC5sZW5ndGggfX1cbiAgICAgICAgICAgICAgICAgIC8ge3sgbWF4IH19IDwvbWF0LWhpbnQ+XG4gICAgICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInNpZ0luUGFzc3dvcmRGb3JtQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICAgICAgICAgICAgICAgICAge3twYXNzd29yZEVycm9yUmVxdWlyZWRUZXh0fX1cbiAgICAgICAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwic2lnSW5QYXNzd29yZEZvcm1Db250cm9sLmhhc0Vycm9yKCdtaW5sZW5ndGgnKVwiPlxuICAgICAgICAgICAgICAgICAge3sgcGFzc3dvcmRFcnJvck1pbkxlbmd0aFRleHQgfX1cbiAgICAgICAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwic2lnSW5QYXNzd29yZEZvcm1Db250cm9sLmhhc0Vycm9yKCdtYXhsZW5ndGgnKVwiPlxuICAgICAgICAgICAgICAgICAge3sgcGFzc3dvcmRFcnJvck1heExlbmd0aFRleHQgfX1cbiAgICAgICAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgICAgICA8YnV0dG9uIFtAYW5pbWF0ZV09XCJ7IHZhbHVlOiAnKicsIHBhcmFtczogeyB4OiAnNTBweCcgfSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJzaWduSW5Gb3JtR3JvdXAuaW52YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzcGFjZS10b3BcIlxuICAgICAgICAgICAgICAgICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAge3tsb2dpbkJ1dHRvblRleHR9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjcmVhdGVGb3Jnb3RQYXNzd29yZFRhYigpXCJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJyZXNldFBhc3N3b3JkRW5hYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgIFtAYW5pbWF0ZV09XCJ7IHZhbHVlOiAnKicsIHBhcmFtczogeyB4OiAnLTUwcHgnIH0gfVwiXG4gICAgICAgICAgICAgICAgICAgIFtjb2xvcl09XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3BhY2UtdG9wXCJcbiAgICAgICAgICAgICAgICAgICAgbWF0LWJ1dHRvbj5cbiAgICAgICAgICAgICAge3tmb3Jnb3RQYXNzd29yZEJ1dHRvblRleHR9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxuICAgICAgICA8bWF0LWNhcmQtZm9vdGVyICpuZ0lmPVwiaXNMb2FkaW5nXCI+XG4gICAgICAgICAgPG1hdC1wcm9ncmVzcy1iYXIgW0BhbmltYXRlXT1cInsgdmFsdWU6ICcqJywgcGFyYW1zOiB7IHo6ICc1MHB4JywgZGVsYXk6ICc1MG1zJywgc2NhbGU6ICcwLjInIH0gfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImluZGV0ZXJtaW5hdGVcIj48L21hdC1wcm9ncmVzcy1iYXI+XG4gICAgICAgIDwvbWF0LWNhcmQtZm9vdGVyPlxuICAgICAgPC9tYXQtY2FyZD5cbiAgICA8L21hdC10YWI+XG5cbiAgICA8IS0tdGFiIHJlZ2lzdGVyLS0+XG4gICAgPG1hdC10YWIgKm5nSWY9XCJyZWdpc3RyYXRpb25FbmFibGVkXCIgW2xhYmVsXT1cInJlZ2lzdGVyVGFiVGV4dFwiPlxuICAgICAgPG1hdC1jYXJkPlxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+e3tyZWdpc3RlckNhcmRUaXRsZVRleHR9fTwvbWF0LWNhcmQtdGl0bGU+XG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJzaWduVXBGb3JtR3JvdXAudmFsaWQgJiZcbiAgICAgICAgICAgIHByb2Nlc3NMZWdhbFNpZ25VUChhdXRoUHJvdmlkZXIuRW1haWxBbmRQYXNzd29yZClcIlxuICAgICAgICAgICAgICAgIFtAYW5pbWF0ZVN0YWdnZXJdPVwieyB2YWx1ZTogJzUwJyB9XCIgW2Zvcm1Hcm91cF09XCJzaWduVXBGb3JtR3JvdXBcIj5cbiAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDwhLS1uYW1lLS0+XG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBbQGFuaW1hdGVdPVwieyB2YWx1ZTogJyonLCBwYXJhbXM6IHsgeDogJzUwcHgnIH0gfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCI+XG4gICAgICAgICAgICAgICAgPCEtLWxhYmVscyB3aWxsIHdvcmsgb25seSB3aXRoIEBhbmd1bGFyL21hdGVyaWFsQDYuMi4wIC0tPlxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tuYW1lVGV4dH19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwic2lnVXBOYW1lRm9ybUNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgW21heGxlbmd0aF09XCJjb25maWcubmFtZU1heExlbmd0aFwiXG4gICAgICAgICAgICAgICAgICBbbWlubGVuZ3RoXT1cImNvbmZpZy5uYW1lTWluTGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG1hdC1pY29uIFtjb2xvcl09XCJjb2xvclwiIG1hdFN1ZmZpeD5wZXJzb248L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDxtYXQtaGludCBhbGlnbj1cImVuZFwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPiB7eyBzaWduVXBGb3JtR3JvdXAudmFsdWUubmFtZT8ubGVuZ3RoIH19XG4gICAgICAgICAgICAgICAgICAvIHt7IGNvbmZpZy5uYW1lTWF4TGVuZ3RoIH19IDwvbWF0LWhpbnQ+XG4gICAgICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInNpZ1VwTmFtZUZvcm1Db250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgICAgICAgICAgICAgICB7e25hbWVFcnJvclJlcXVpcmVkVGV4dH19XG4gICAgICAgICAgICAgICAgPC9tYXQtZXJyb3I+XG4gICAgICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInNpZ1VwTmFtZUZvcm1Db250cm9sLmhhc0Vycm9yKCdtaW5sZW5ndGgnKVwiPlxuICAgICAgICAgICAgICAgICAge3tuYW1lRXJyb3JNaW5MZW5ndGhUZXh0fX1cbiAgICAgICAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwic2lnVXBOYW1lRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ21heGxlbmd0aCcpXCI+XG4gICAgICAgICAgICAgICAgICB7e25hbWVFcnJvck1heExlbmd0aFRleHR9fVxuICAgICAgICAgICAgICAgIDwvbWF0LWVycm9yPlxuICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgIDwhLS1lbWFpbC0tPlxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgW0BhbmltYXRlXT1cInsgdmFsdWU6ICcqJywgcGFyYW1zOiB7IHg6ICc1MHB4JyB9IH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tlbWFpbFRleHR9fTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBbZm9ybUNvbnRyb2xdPVwic2lnVXBFbWFpbEZvcm1Db250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwidXNlcm5hbWVcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWljb24gW2NvbG9yXT1cImNvbG9yXCIgbWF0U3VmZml4PmVtYWlsPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwic2lnVXBFbWFpbEZvcm1Db250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgICAgICAgICAgICAgICB7e2VtYWlsRXJyb3JSZXF1aXJlZFRleHR9fVxuICAgICAgICAgICAgICAgIDwvbWF0LWVycm9yPlxuICAgICAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJzaWdVcEVtYWlsRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3BhdHRlcm4nKVwiPlxuICAgICAgICAgICAgICAgICAge3tlbWFpbEVycm9yUGF0dGVyblRleHR9fVxuICAgICAgICAgICAgICAgIDwvbWF0LWVycm9yPlxuICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgIDwhLS1wYXNzd29yZC0tPlxuICAgICAgICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIFtAYW5pbWF0ZV09XCJ7IHZhbHVlOiAnKicsIHBhcmFtczogeyB4OiAnNTBweCcgfSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD57e3Bhc3N3b3JkVGV4dH19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cInNpZ1VwUGFzc3dvcmRGb3JtQ29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIFttYXhsZW5ndGhdPVwibWF4XCJcbiAgICAgICAgICAgICAgICAgICAgW21pbmxlbmd0aF09XCJtaW5cIlxuICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJ0b2dnbGUudHlwZVwiXG4gICAgICAgICAgICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPG1hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5ICN0b2dnbGUgbWF0U3VmZml4PjwvbWF0LXBhc3MtdG9nZ2xlLXZpc2liaWxpdHk+XG5cbiAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBbY29sb3JdPVwiY29sb3JcIiBtYXRTdWZmaXg+bG9jazwvbWF0LWljb24+XG5cbiAgICAgICAgICAgICAgICAgIDxtYXQtaGludCBhbGlnbj1cImVuZFwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7e3NpZ25VcEZvcm1Hcm91cC52YWx1ZS5wYXNzd29yZD8ubGVuZ3RofX0gLyB7eyBtYXggfX1cbiAgICAgICAgICAgICAgICAgIDwvbWF0LWhpbnQ+XG5cbiAgICAgICAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJzaWdVcFBhc3N3b3JkRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIiBjbGFzcz1cImN1dC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7cGFzc3dvcmRFcnJvclJlcXVpcmVkVGV4dH19XG4gICAgICAgICAgICAgICAgICA8L21hdC1lcnJvcj5cblxuICAgICAgICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInNpZ1VwUGFzc3dvcmRGb3JtQ29udHJvbC5oYXNFcnJvcignbWlubGVuZ3RoJylcIiBjbGFzcz1cImN1dC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHBhc3N3b3JkRXJyb3JNaW5MZW5ndGhUZXh0IH19XG4gICAgICAgICAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJzaWdVcFBhc3N3b3JkRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ21heGxlbmd0aCcpXCIgY2xhc3M9XCJjdXQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBwYXNzd29yZEVycm9yTWF4TGVuZ3RoVGV4dCB9fVxuICAgICAgICAgICAgICAgICAgPC9tYXQtZXJyb3I+XG5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgICAgPG1hdC1wYXNzd29yZC1zdHJlbmd0aCAjcGFzc3dvcmRTdHJlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2N1c3RvbVZhbGlkYXRvcl09XCJjdXN0b21WYWxpZGF0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2VuYWJsZURpZ2l0UnVsZV09XCJlbmFibGVEaWdpdFJ1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2VuYWJsZUxlbmd0aFJ1bGVdPVwiZW5hYmxlTGVuZ3RoUnVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZW5hYmxlTG93ZXJDYXNlTGV0dGVyUnVsZV09XCJlbmFibGVMb3dlckNhc2VMZXR0ZXJSdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtlbmFibGVTcGVjaWFsQ2hhclJ1bGVdPVwiZW5hYmxlU3BlY2lhbENoYXJSdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtlbmFibGVVcHBlckNhc2VMZXR0ZXJSdWxlXT1cImVuYWJsZVVwcGVyQ2FzZUxldHRlclJ1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2V4dGVybmFsRXJyb3JdPVwic2lnVXBQYXNzd29yZEZvcm1Db250cm9sLmRpcnR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttaW5dPVwibWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwYXNzd29yZF09XCJzaWduVXBGb3JtR3JvdXAudmFsdWUucGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICA8L21hdC1wYXNzd29yZC1zdHJlbmd0aD5cblxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8YnV0dG9uIFtAYW5pbWF0ZV09XCJ7IHZhbHVlOiAnKicsIHBhcmFtczogeyB4OiAnMTAwcHgnIH0gfVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwic2lnblVwRm9ybUdyb3VwLmludmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAge3tyZWdpc3RlckJ1dHRvblRleHR9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5BTk9OWU1PVVMpXCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZ3Vlc3RFbmFibGVkXCJcbiAgICAgICAgICAgICAgICAgIFtAYW5pbWF0ZV09XCJ7IHZhbHVlOiAnKicsIHBhcmFtczogeyB4OiAnLTEwMHB4JyB9IH1cIlxuICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgIG1hdC1idXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLXRvcDogMjBweFwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPmZpbmdlcnByaW50PC9tYXQtaWNvbj5cbiAgICAgICAgICAgIHt7Z3Vlc3RCdXR0b25UZXh0fX1cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XG5cbiAgICAgICAgPG1hdC1jYXJkLWZvb3RlciAqbmdJZj1cImlzTG9hZGluZ1wiPlxuICAgICAgICAgIDxtYXQtcHJvZ3Jlc3MtYmFyIFtAYW5pbWF0ZV09XCJ7IHZhbHVlOiAnKicsIHBhcmFtczogeyB6OiAnNTBweCcsIGRlbGF5OiAnNTBtcycsIHNjYWxlOiAnMC4yJyB9IH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJpbmRldGVybWluYXRlXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxuICAgICAgICA8L21hdC1jYXJkLWZvb3Rlcj5cblxuICAgICAgPC9tYXQtY2FyZD5cbiAgICA8L21hdC10YWI+XG5cbiAgICA8IS0tUmVzZXQgcGFzc3dvcmQgdGFiLS0+XG4gICAgPG1hdC10YWIgKm5nSWY9XCJwYXNzd29yZFJlc2V0V2lzaGVkXCIgY2xhc3M9XCJyZXNldC1wYXNzd29yZC10YWJcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJwYXNzd29yZFJlc2V0V2lzaGVkID0gZmFsc2VcIiBjbGFzcz1cInJlc2V0LXBhc3N3b3JkLXRhYl9fY2xvc2UtYnV0dG9uXCIgbWF0LWljb24tYnV0dG9uPlxuICAgICAgICAgIHt7IHJlc2V0UGFzc3dvcmRUYWJUZXh0IH19XG4gICAgICAgICAgPG1hdC1pY29uPmNsb3NlPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPGZvcm0gKG5nU3VibWl0KT1cInJlc2V0UGFzc3dvcmRGb3JtR3JvdXAudmFsaWQgJiYgcmVzZXRQYXNzd29yZCgpXCJcbiAgICAgICAgICAgIFtAYW5pbWF0ZVN0YWdnZXJdPVwieyB2YWx1ZTogJzUwJyB9XCJcbiAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwicmVzZXRQYXNzd29yZEZvcm1Hcm91cFwiPlxuICAgICAgICA8bWF0LWNhcmQgY2xhc3M9XCJyZXNldC1wYXNzd29yZC1jYXJkXCI+XG4gICAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCIgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICAgIDxtYXQtbGFiZWw+IHt7IHJlc2V0UGFzc3dvcmRJbnB1dFRleHQgfX0gPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBbdGl0bGVdPVwicmVzZXRQYXNzd29yZElucHV0VGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgIDxtYXQtaWNvbiBbY29sb3JdPVwiY29sb3JcIiBtYXRTdWZmaXg+ZW1haWw8L21hdC1pY29uPlxuICAgICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwicmVzZXRQYXNzd29yZEVtYWlsRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAgICAgICAgICAgICAgICB7e3Jlc2V0UGFzc3dvcmRFcnJvclJlcXVpcmVkVGV4dH19XG4gICAgICAgICAgICAgIDwvbWF0LWVycm9yPlxuICAgICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwicmVzZXRQYXNzd29yZEVtYWlsRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3BhdHRlcm4nKVwiPlxuICAgICAgICAgICAgICAgIHt7cmVzZXRQYXNzd29yZEVycm9yUGF0dGVyblRleHR9fVxuICAgICAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8cCAqbmdJZj1cInBhc3NSZXNldFwiPnt7cmVzZXRQYXNzd29yZEluc3RydWN0aW9uc1RleHR9fTwvcD5cbiAgICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgPG1hdC1wcm9ncmVzcy1iYXIgKm5nSWY9XCJpc0xvYWRpbmdcIiBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbiAgICAgICAgICAgIDxidXR0b24gW0BhbmltYXRlXT1cInsgdmFsdWU6ICcqJywgcGFyYW1zOiB7IHg6ICc1MHB4JyB9IH1cIlxuICAgICAgICAgICAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIHt7cmVzZXRQYXNzd29yZEFjdGlvbkJ1dHRvblRleHR9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxuICAgICAgICA8L21hdC1jYXJkPlxuICAgICAgPC9mb3JtPlxuICAgIDwvbWF0LXRhYj5cblxuICA8L21hdC10YWItZ3JvdXA+XG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuICA8bmd4LWF1dGgtZmlyZWJhc2V1aS1wcm92aWRlcnMgKm5nSWY9XCJ0YWJJbmRleCAhPT0gMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcHJvdmlkZXJzXT1cInByb3ZpZGVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGhlbWVdPVwicHJvdmlkZXJzVGhlbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Rvc1VybF09XCJ0b3NVcmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ByaXZhY3lQb2xpY3lVcmxdPVwicHJpdmFjeVBvbGljeVVybFwiPlxuICA8L25neC1hdXRoLWZpcmViYXNldWktcHJvdmlkZXJzPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==