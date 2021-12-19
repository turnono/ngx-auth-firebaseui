import { Component, EventEmitter, forwardRef, Inject, Input, Output, } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from "..";
import { NgxAuthFirebaseUIConfigToken } from "../../tokens";
import { map, take } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/compat/auth";
import * as i2 from "../../services/auth-process.service";
import * as i3 from "../../services/firestore-sync.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/card";
import * as i6 from "@angular/flex-layout/flex";
import * as i7 from "@angular/material/icon";
import * as i8 from "@angular/material/tooltip";
import * as i9 from "@angular/forms";
import * as i10 from "@angular/material/button";
import * as i11 from "@angular/material/form-field";
import * as i12 from "@angular/material/input";
function UserComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function UserComponent_ng_template_2_mat_card_0_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 10);
} if (rf & 2) {
    const photoUrl_r18 = ctx.ngIf;
    i0.ɵɵproperty("src", photoUrl_r18, i0.ɵɵsanitizeUrl);
} }
function UserComponent_ng_template_2_mat_card_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 11);
    i0.ɵɵtext(1, " verified_user ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("matTooltip", ctx_r10.emailVerifiedText);
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 12);
    i0.ɵɵtext(1, " warning ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("matTooltip", ctx_r12.emailNotVerifiedText);
} }
function UserComponent_ng_template_2_mat_card_0_mat_card_content_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-card-content");
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r19.nameErrorRequiredText, " ");
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", ctx_r20.emailErrorRequiredText, " ", ctx_r20.updateEmailFormControl.value, " ");
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", ctx_r21.emailErrorPatternText, " ", ctx_r21.updateEmailFormControl.value, " ");
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_form_field_22_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r23.phoneErrorPatternText, " ");
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_form_field_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 16);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 23);
    i0.ɵɵelementStart(4, "mat-icon", 18);
    i0.ɵɵtext(5, "phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-hint", 19);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_form_field_22_mat_error_8_Template, 2, 1, "mat-error", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("appearance", ctx_r22.appearance);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r22.phoneText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControl", ctx_r22.updatePhoneNumberFormControl)("placeholder", ctx_r22.phoneText);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.phoneHintText, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r22.updatePhoneNumberFormControl.hasError("pattern"));
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 13);
    i0.ɵɵlistener("submit", function UserComponent_ng_template_2_mat_card_0_ng_template_10_Template_form_submit_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.save(); });
    i0.ɵɵelementStart(1, "mat-card-content", 4);
    i0.ɵɵelementStart(2, "div", 14);
    i0.ɵɵelementStart(3, "button", 15);
    i0.ɵɵlistener("click", function UserComponent_ng_template_2_mat_card_0_ng_template_10_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(3); return ctx_r26.changeEditMode(); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-form-field", 16);
    i0.ɵɵelementStart(6, "mat-label");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "input", 17);
    i0.ɵɵelementStart(9, "mat-icon", 18);
    i0.ɵɵtext(10, "person");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-hint", 19);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_error_13_Template, 2, 1, "mat-error", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "mat-form-field", 16);
    i0.ɵɵelementStart(15, "mat-label");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "input", 17);
    i0.ɵɵelementStart(18, "mat-icon", 18);
    i0.ɵɵtext(19, "email");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(20, UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_error_20_Template, 2, 2, "mat-error", 3);
    i0.ɵɵtemplate(21, UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_error_21_Template, 2, 2, "mat-error", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(22, UserComponent_ng_template_2_mat_card_0_ng_template_10_mat_form_field_22_Template, 9, 6, "mat-form-field", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "mat-card-actions", 21);
    i0.ɵɵelementStart(24, "button", 22);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("formGroup", ctx_r15.updateFormGroup);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.cancelButtonText, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("appearance", ctx_r15.appearance);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r15.nameText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControl", ctx_r15.updateNameFormControl)("placeholder", ctx_r15.nameText);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" ", ctx_r15.updateNameFormControl.value == null ? null : ctx_r15.updateNameFormControl.value.length, " / ", ctx_r15.config.nameMaxLength, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.updateNameFormControl.hasError("required"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("appearance", ctx_r15.appearance);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r15.emailText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControl", ctx_r15.updateEmailFormControl)("placeholder", ctx_r15.emailText);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r15.updateEmailFormControl.hasError("required"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.updateEmailFormControl.hasError("pattern"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", false);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.saveChangesButtonText, " ");
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_12_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function UserComponent_ng_template_2_mat_card_0_ng_template_12_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(4); return ctx_r31.changeEditMode(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r27.editButtonText, " ");
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_12_mat_form_field_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 16);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 25);
    i0.ɵɵelementStart(4, "mat-icon", 26);
    i0.ɵɵtext(5, "phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r6 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("appearance", ctx_r28.appearance);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r28.phoneText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", !ctx_r28.editMode)("value", user_r6.phoneNumber)("placeholder", ctx_r28.phoneText);
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_12_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function UserComponent_ng_template_2_mat_card_0_ng_template_12_button_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(4); return ctx_r34.signOut(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r29.signoutButtonText);
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_12_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function UserComponent_ng_template_2_mat_card_0_ng_template_12_button_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(4); return ctx_r36.deleteAccount(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r30.deleteAccountButtonText);
} }
function UserComponent_ng_template_2_mat_card_0_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, UserComponent_ng_template_2_mat_card_0_ng_template_12_button_1_Template, 2, 1, "button", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "mat-form-field", 16);
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 25);
    i0.ɵɵelementStart(6, "mat-icon", 26);
    i0.ɵɵtext(7, "person");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-form-field", 16);
    i0.ɵɵelementStart(9, "mat-label");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "input", 25);
    i0.ɵɵelementStart(12, "mat-icon", 26);
    i0.ɵɵtext(13, "email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, UserComponent_ng_template_2_mat_card_0_ng_template_12_mat_form_field_14_Template, 6, 5, "mat-form-field", 20);
    i0.ɵɵelementStart(15, "mat-card-actions", 21);
    i0.ɵɵtemplate(16, UserComponent_ng_template_2_mat_card_0_ng_template_12_button_16_Template, 2, 1, "button", 27);
    i0.ɵɵtemplate(17, UserComponent_ng_template_2_mat_card_0_ng_template_12_button_17_Template, 2, 1, "button", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r6 = i0.ɵɵnextContext().ngIf;
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r17.canEditAccount);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("appearance", ctx_r17.appearance);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r17.nameText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", !ctx_r17.editMode)("value", user_r6.displayName)("placeholder", ctx_r17.nameText);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("appearance", ctx_r17.appearance);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r17.emailText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", !ctx_r17.editMode)("value", user_r6.email)("placeholder", ctx_r17.emailText);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", false);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r17.canLogout);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r17.canDeleteAccount);
} }
function UserComponent_ng_template_2_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-card");
    i0.ɵɵelementStart(1, "mat-card-header", 4);
    i0.ɵɵtemplate(2, UserComponent_ng_template_2_mat_card_0_img_2_Template, 1, 1, "img", 5);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵtemplate(4, UserComponent_ng_template_2_mat_card_0_div_4_Template, 1, 0, "div", 0);
    i0.ɵɵtemplate(5, UserComponent_ng_template_2_mat_card_0_ng_template_5_Template, 2, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(7, UserComponent_ng_template_2_mat_card_0_ng_template_7_Template, 2, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, UserComponent_ng_template_2_mat_card_0_mat_card_content_9_Template, 1, 0, "mat-card-content", 0);
    i0.ɵɵtemplate(10, UserComponent_ng_template_2_mat_card_0_ng_template_10_Template, 26, 17, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(12, UserComponent_ng_template_2_mat_card_0_ng_template_12_Template, 18, 14, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r6 = ctx.ngIf;
    const _r9 = i0.ɵɵreference(6);
    const _r11 = i0.ɵɵreference(8);
    const _r14 = i0.ɵɵreference(11);
    const _r16 = i0.ɵɵreference(13);
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 7, ctx_r5.authProcess == null ? null : ctx_r5.authProcess.getUserPhotoUrl()));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", user_r6.emailVerified)("ngIfThen", _r9)("ngIfElse", _r11);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r5.editMode)("ngIfThen", _r14)("ngIfElse", _r16);
} }
function UserComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, UserComponent_ng_template_2_mat_card_0_Template, 14, 9, "mat-card", 3);
    i0.ɵɵpipe(1, "async");
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx_r2.auth.user));
} }
function UserComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-card", 32);
    i0.ɵɵelementStart(1, "mat-card-content", 33);
    i0.ɵɵelementStart(2, "mat-icon", 34);
    i0.ɵɵtext(3, "warning");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r4.notLoggedInText);
} }
export class UserComponent {
    constructor(auth, authProcess, fireStoreService, config) {
        this.auth = auth;
        this.authProcess = authProcess;
        this.fireStoreService = fireStoreService;
        this.config = config;
        this.canLogout = true;
        this.canEditAccount = true;
        this.canDeleteAccount = true;
        // i18n commons
        this.notLoggedInText = "You are not logged in!";
        this.emailVerifiedText = "email is verified";
        this.emailNotVerifiedText = "email is not verified";
        this.cancelButtonText = "cancel";
        this.saveChangesButtonText = "Save changes";
        this.editButtonText = "edit";
        this.signoutButtonText = "Sign out";
        this.deleteAccountButtonText = "Delete account";
        //i18n name
        this.nameText = "Name";
        this.nameErrorRequiredText = "Name is required";
        // i18n email
        this.emailText = "Email";
        this.emailErrorRequiredText = "Email is required";
        this.emailErrorPatternText = "Please enter a valid email address";
        // i18n phone
        this.phoneText = "Phone number";
        this.phoneHintText = `
    The phone number is international. Therefore, it should start with a + sign or 00,
    followed by the country code, - and national number e.g: +49-12345678 or 0041-1234567890

      NOTE : the phone number must be a valid phone credential !!`;
        this.phoneErrorPatternText = "Please enter a valid phone number";
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onSignOut = new EventEmitter();
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onAccountEdited = new EventEmitter();
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onAccountDeleted = new EventEmitter();
    }
    changeEditMode() {
        if (this.editMode) {
            this.reset();
            this.editMode = false;
        }
        else {
            this.initUpdateFormGroup().subscribe((updateFormGroup) => {
                this.updateFormGroup = updateFormGroup;
                this.editMode = true;
            });
        }
    }
    reset() {
        this.updateFormGroup.reset();
        this.updateFormGroup.disable();
        this.updateFormGroup = null;
    }
    async save() {
        if (this.updateFormGroup.dirty) {
            this.editMode = false;
            const user = this.authProcess.user;
            // ngx-auth-firebaseui-user.updateProfile()
            // ngx-auth-firebaseui-user.updateEmail()
            // console.log('form = ', this.updateFormGroup);
            const snackBarMsg = [];
            try {
                if (this.updateNameFormControl.dirty) {
                    await user.updateProfile({
                        displayName: this.updateNameFormControl.value,
                    });
                    snackBarMsg.push(`your name has been updated to ${user.displayName}`);
                }
                if (this.updateEmailFormControl.dirty) {
                    await user.updateEmail(this.updateEmailFormControl.value);
                    snackBarMsg.push(`your email has been updated to ${user.email}`);
                }
                if (this.updatePhoneNumberFormControl.dirty) {
                    await user.updatePhoneNumber(this.updatePhoneNumberFormControl.value);
                    console.log("phone number = ", this.updatePhoneNumberFormControl.value);
                    snackBarMsg.push(`your phone number has been updated to ${user.phoneNumber}`);
                }
                if (this.config.enableFirestoreSync) {
                    await this.fireStoreService.updateUserData(this.authProcess.parseUserInfo(user));
                }
            }
            catch (error) {
                this.authProcess.showToast(error && error.message ? error.message : error);
                console.error(error);
            }
            if (snackBarMsg.length > 0) {
                this.authProcess.showToast(snackBarMsg.join("\\n"));
            }
            this.onAccountEdited.emit(); // emit event if the form was dirty
            this.updateFormGroup.reset();
        }
    }
    signOut() {
        this.auth
            .signOut()
            .then(() => this.onSignOut.emit())
            .catch((e) => console.error("An error happened while signing out!", e));
    }
    /**
     * Delete the account of the current firebase ngx-auth-firebaseui-user
     *
     * On Success, emit the <onAccountDeleted> event and toast a msg!#
     * Otherwise, log the and toast and error msg!
     *
     */
    async deleteAccount() {
        try {
            const user = this.authProcess.user;
            // await this.authProcess.deleteAccount();
            await this.authProcess.user.delete();
            // if (this.config.enableFirestoreSync) {
            await this.fireStoreService.deleteUserData(user.uid);
            // }
            this.onAccountDeleted.emit();
            this.editMode = false;
            console.log("Your account has been successfully deleted!");
            this.authProcess.showToast("Your account has been successfully deleted!");
        }
        catch (error) {
            console.log("Error while delete user account", error);
            this.authProcess.showToast(`Error occurred while deleting your account: ${error.message}`);
        }
    }
    initUpdateFormGroup() {
        return this.authProcess.user$.pipe(take(1), map((currentUser) => {
            const updateFormGroup = new FormGroup({
                name: this.updateNameFormControl = new FormControl({ value: currentUser.displayName, disabled: this.editMode }, [
                    Validators.required,
                    Validators.minLength(this.config.nameMinLength),
                    Validators.maxLength(this.config.nameMaxLength),
                ]),
                email: this.updateEmailFormControl = new FormControl({ value: currentUser.email, disabled: this.editMode }, [Validators.required, Validators.pattern(EMAIL_REGEX)]),
                phoneNumber: this.updatePhoneNumberFormControl = new FormControl({ value: currentUser.phoneNumber, disabled: this.editMode }, [Validators.pattern(PHONE_NUMBER_REGEX)]),
            });
            updateFormGroup.enable();
            return updateFormGroup;
        }));
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(i0.ɵɵdirectiveInject(i1.AngularFireAuth), i0.ɵɵdirectiveInject(i2.AuthProcessService), i0.ɵɵdirectiveInject(i3.FirestoreSyncService), i0.ɵɵdirectiveInject(forwardRef(() => NgxAuthFirebaseUIConfigToken))); };
UserComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserComponent, selectors: [["ngx-auth-firebaseui-user"]], inputs: { editMode: "editMode", canLogout: "canLogout", canEditAccount: "canEditAccount", canDeleteAccount: "canDeleteAccount", appearance: "appearance", notLoggedInText: "notLoggedInText", emailVerifiedText: "emailVerifiedText", emailNotVerifiedText: "emailNotVerifiedText", cancelButtonText: "cancelButtonText", saveChangesButtonText: "saveChangesButtonText", editButtonText: "editButtonText", signoutButtonText: "signoutButtonText", deleteAccountButtonText: "deleteAccountButtonText", nameText: "nameText", nameErrorRequiredText: "nameErrorRequiredText", emailText: "emailText", emailErrorRequiredText: "emailErrorRequiredText", emailErrorPatternText: "emailErrorPatternText", phoneText: "phoneText", phoneHintText: "phoneHintText", phoneErrorPatternText: "phoneErrorPatternText" }, outputs: { onSignOut: "onSignOut", onAccountEdited: "onAccountEdited", onAccountDeleted: "onAccountDeleted" }, decls: 6, vars: 5, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["authenticated", ""], ["none", ""], [4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["mat-card-avatar", "", 3, "src", 4, "ngIf"], ["emailVerified", ""], ["emailNotVerified", ""], ["edit", ""], ["readonly", ""], ["mat-card-avatar", "", 3, "src"], ["color", "primary", "matTooltipPosition", "after", 3, "matTooltip"], ["color", "warn", "matTooltipPosition", "after", 3, "matTooltip"], [3, "formGroup", "submit"], ["fxLayoutAlign", "center"], ["color", "warn", "mat-raised-button", "", 1, "edit-button", 3, "click"], [1, "full-width", 3, "appearance"], ["matInput", "", 3, "formControl", "placeholder"], ["matSuffix", ""], ["align", "end", "aria-live", "polite"], ["class", "full-width", 3, "appearance", 4, "ngIf"], ["fxLayout", "column"], ["color", "primary", "mat-button", "", "type", "submit"], ["matInput", "", "type", "tel", 3, "formControl", "placeholder"], ["class", "edit-button", "color", "primary", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["matInput", "", 3, "disabled", "value", "placeholder"], ["color", "primary", "matSuffix", ""], ["color", "primary", "mat-button", "", 3, "click", 4, "ngIf"], ["color", "warn", "mat-button", "", 3, "click", 4, "ngIf"], ["color", "primary", "mat-raised-button", "", 1, "edit-button", 3, "click"], ["color", "primary", "mat-button", "", 3, "click"], ["color", "warn", "mat-button", "", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "none-card"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["color", "accent"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, UserComponent_div_0_Template, 1, 0, "div", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, UserComponent_ng_template_2_Template, 2, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, UserComponent_ng_template_4_Template, 6, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        const _r3 = i0.ɵɵreference(5);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 3, ctx.auth.authState))("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [i4.NgIf, i5.MatCard, i5.MatCardHeader, i6.DefaultLayoutDirective, i6.DefaultLayoutAlignDirective, i5.MatCardAvatar, i7.MatIcon, i8.MatTooltip, i5.MatCardContent, i9.ɵNgNoValidate, i9.NgControlStatusGroup, i9.FormGroupDirective, i10.MatButton, i11.MatFormField, i11.MatLabel, i12.MatInput, i9.DefaultValueAccessor, i9.NgControlStatus, i9.FormControlDirective, i11.MatSuffix, i11.MatHint, i5.MatCardActions, i11.MatError], pipes: [i4.AsyncPipe], styles: [".edit-button[_ngcontent-%COMP%]{margin:1rem}.full-width[_ngcontent-%COMP%]{width:100%}.cut-text[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.none-card[_ngcontent-%COMP%]{min-height:430px}.none-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;text-align:center;color:#0000008a}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserComponent, [{
        type: Component,
        args: [{ selector: "ngx-auth-firebaseui-user", template: "<div *ngIf=\"auth.authState| async; then authenticated else none\">\n\n</div>\n\n<ng-template #authenticated>\n  <mat-card *ngIf=\"auth.user | async as user\">\n    <!--<form [formGroup]=\"updateFormGroup\" >-->\n    <!--card header-->\n    <mat-card-header fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n      <img *ngIf=\"authProcess?.getUserPhotoUrl() | async as photoUrl\" [src]=\"photoUrl\" mat-card-avatar>\n\n      <div *ngIf=\"user.emailVerified; then emailVerified else emailNotVerified\"></div>\n      <ng-template #emailVerified>\n        <mat-icon color=\"primary\"\n                  [matTooltip]=\"emailVerifiedText\"\n                  matTooltipPosition=\"after\">\n          verified_user\n        </mat-icon>\n      </ng-template>\n      <ng-template #emailNotVerified>\n        <mat-icon color=\"warn\"\n                  [matTooltip]=\"emailNotVerifiedText\"\n                  matTooltipPosition=\"after\">\n          warning\n        </mat-icon>\n      </ng-template>\n\n    </mat-card-header>\n\n    <!--card content-->\n    <mat-card-content *ngIf=\"editMode; then edit else readonly\">\n    </mat-card-content>\n\n    <ng-template #edit>\n      <form (submit)=\"save()\" [formGroup]=\"updateFormGroup\">\n\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div fxLayoutAlign=\"center\">\n            <button (click)=\"changeEditMode()\" class=\"edit-button\" color=\"warn\"\n                    mat-raised-button>\n              {{cancelButtonText}}\n            </button>\n          </div>\n\n          <!--name-->\n          <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n            <mat-label>{{nameText}}</mat-label>\n            <input [formControl]=\"updateNameFormControl\"\n                   matInput\n                   [placeholder]=\"nameText\">\n            <mat-icon matSuffix>person</mat-icon>\n            <mat-hint align=\"end\" aria-live=\"polite\"> {{ updateNameFormControl.value?.length }}\n              / {{ config.nameMaxLength }} </mat-hint>\n            <mat-error *ngIf=\"updateNameFormControl.hasError('required')\">\n              {{nameErrorRequiredText}}\n            </mat-error>\n          </mat-form-field>\n\n          <!--email-->\n          <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n            <mat-label>{{emailText}}</mat-label>\n            <input [formControl]=\"updateEmailFormControl\"\n                   matInput\n                   [placeholder]=\"emailText\">\n            <mat-icon matSuffix>email</mat-icon>\n            <mat-error *ngIf=\"updateEmailFormControl.hasError('required')\">\n              {{emailErrorRequiredText}} {{updateEmailFormControl.value}}\n            </mat-error>\n            <mat-error *ngIf=\"updateEmailFormControl.hasError('pattern')\">\n              {{emailErrorPatternText}} {{updateEmailFormControl.value}}\n            </mat-error>\n          </mat-form-field>\n\n          <!--phone number-->\n          <mat-form-field *ngIf=\"false\" [appearance]=\"appearance\" class=\"full-width\">\n            <mat-label>{{phoneText}}</mat-label>\n            <input [formControl]=\"updatePhoneNumberFormControl\"\n                   matInput\n                   [placeholder]=\"phoneText\"\n                   type=\"tel\">\n            <mat-icon matSuffix>phone</mat-icon>\n            <mat-hint align=\"end\" aria-live=\"polite\">\n              {{phoneHintText}}\n            </mat-hint>\n            <mat-error *ngIf=\"updatePhoneNumberFormControl.hasError('pattern')\">\n              {{phoneErrorPatternText}}\n            </mat-error>\n          </mat-form-field>\n\n        </mat-card-content>\n\n        <mat-card-actions fxLayout=\"column\">\n          <button color=\"primary\"\n                  mat-button\n                  type=\"submit\">\n            {{saveChangesButtonText}}\n          </button>\n        </mat-card-actions>\n      </form>\n    </ng-template>\n\n    <ng-template #readonly>\n      <div fxLayoutAlign=\"center\">\n        <button *ngIf=\"canEditAccount\" (click)=\"changeEditMode()\" class=\"edit-button\" color=\"primary\"\n                mat-raised-button>\n          {{editButtonText}}\n        </button>\n      </div>\n\n      <!--name-->\n      <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n        <mat-label>{{nameText}}</mat-label>\n        <input [disabled]=\"!editMode\"\n               [value]=\"user.displayName\"\n               matInput\n               [placeholder]=\"nameText\">\n        <mat-icon color=\"primary\" matSuffix>person</mat-icon>\n      </mat-form-field>\n\n      <!--email-->\n      <mat-form-field [appearance]=\"appearance\" class=\"full-width\">\n        <mat-label>{{emailText}}</mat-label>\n        <input [disabled]=\"!editMode\"\n               [value]=\"user.email\" matInput\n               [placeholder]=\"emailText\">\n        <mat-icon color=\"primary\" matSuffix>email</mat-icon>\n      </mat-form-field>\n\n      <!--phone number-->\n      <mat-form-field *ngIf=\"false\" [appearance]=\"appearance\" class=\"full-width\">\n        <mat-label>{{phoneText}}</mat-label>\n        <input [disabled]=\"!editMode\"\n               [value]=\"user.phoneNumber\"\n               matInput\n               [placeholder]=\"phoneText\">\n        <mat-icon color=\"primary\" matSuffix>phone</mat-icon>\n      </mat-form-field>\n\n      <mat-card-actions fxLayout=\"column\">\n        <button (click)=\"signOut()\" *ngIf=\"canLogout\" color=\"primary\" mat-button>{{signoutButtonText}}</button>\n        <button (click)=\"deleteAccount()\" *ngIf=\"canDeleteAccount\" color=\"warn\" mat-button>{{deleteAccountButtonText}}</button>\n      </mat-card-actions>\n\n    </ng-template>\n\n  </mat-card>\n\n</ng-template>\n\n\n<ng-template #none>\n  <mat-card class=\"none-card\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-icon color=\"accent\">warning</mat-icon>\n      <span>{{notLoggedInText}}</span>\n    </mat-card-content>\n  </mat-card>\n</ng-template>\n", styles: [".edit-button{margin:1rem}.full-width{width:100%}.cut-text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.none-card{min-height:430px}.none-card span{font-size:24px;text-align:center;color:#0000008a}\n"] }]
    }], function () { return [{ type: i1.AngularFireAuth }, { type: i2.AuthProcessService }, { type: i3.FirestoreSyncService }, { type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => NgxAuthFirebaseUIConfigToken)]
            }] }]; }, { editMode: [{
            type: Input
        }], canLogout: [{
            type: Input
        }], canEditAccount: [{
            type: Input
        }], canDeleteAccount: [{
            type: Input
        }], appearance: [{
            type: Input
        }], notLoggedInText: [{
            type: Input
        }], emailVerifiedText: [{
            type: Input
        }], emailNotVerifiedText: [{
            type: Input
        }], cancelButtonText: [{
            type: Input
        }], saveChangesButtonText: [{
            type: Input
        }], editButtonText: [{
            type: Input
        }], signoutButtonText: [{
            type: Input
        }], deleteAccountButtonText: [{
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
        }], phoneText: [{
            type: Input
        }], phoneHintText: [{
            type: Input
        }], phoneErrorPatternText: [{
            type: Input
        }], onSignOut: [{
            type: Output
        }], onAccountEdited: [{
            type: Output
        }], onAccountDeleted: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXV0aC1maXJlYmFzZXVpL3NyYy9saWIvY29tcG9uZW50cy9uZ3gtYXV0aC1maXJlYmFzZXVpLXVzZXIvdXNlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXV0aC1maXJlYmFzZXVpL3NyYy9saWIvY29tcG9uZW50cy9uZ3gtYXV0aC1maXJlYmFzZXVpLXVzZXIvdXNlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLElBQUksQ0FBQztBQUVyRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFJNUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDakIzQyxzQkFFTTs7O0lBUUEsMEJBQWlHOzs7SUFBakMsb0RBQWdCOzs7SUFFaEYsc0JBQWdGOzs7SUFFOUUsb0NBRXFDO0lBQ25DLCtCQUNGO0lBQUEsaUJBQVc7OztJQUhELHNEQUFnQzs7O0lBTTFDLG9DQUVxQztJQUNuQyx5QkFDRjtJQUFBLGlCQUFXOzs7SUFIRCx5REFBbUM7OztJQVNqRCxtQ0FDbUI7OztJQXNCWCxpQ0FBOEQ7SUFDNUQsWUFDRjtJQUFBLGlCQUFZOzs7SUFEVixlQUNGO0lBREUsOERBQ0Y7OztJQVVBLGlDQUErRDtJQUM3RCxZQUNGO0lBQUEsaUJB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QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7MEVBak1VLGFBQWEsNkpBcURkLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnRUFyRDdDLGFBQWE7UUN6QjFCLDhEQUVNOztRQUVOLCtHQWdKYztRQUdkLCtHQU9jOzs7O1FBOUpSLCtEQUE2QixpQkFBQSxpQkFBQTs7dUZEeUJ0QixhQUFhO2NBTHpCLFNBQVM7MkJBQ0UsMEJBQTBCOztzQkF5RGpDLE1BQU07dUJBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDRCQUE0QixDQUFDO3dCQXBEL0MsUUFBUTtrQkFBaEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUdHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxvQkFBb0I7a0JBQTVCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxxQkFBcUI7a0JBQTdCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csdUJBQXVCO2tCQUEvQixLQUFLO1lBR0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLHFCQUFxQjtrQkFBN0IsS0FBSztZQUdHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxzQkFBc0I7a0JBQTlCLEtBQUs7WUFDRyxxQkFBcUI7a0JBQTdCLEtBQUs7WUFHRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUtHLHFCQUFxQjtrQkFBN0IsS0FBSztZQUdJLFNBQVM7a0JBQWxCLE1BQU07WUFHRyxlQUFlO2tCQUF4QixNQUFNO1lBR0csZ0JBQWdCO2tCQUF6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aCB9IGZyb20gXCJAYW5ndWxhci9maXJlL2NvbXBhdC9hdXRoXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2NvbXBhdC9hcHBcIjtcbmltcG9ydCB7IEVNQUlMX1JFR0VYLCBQSE9ORV9OVU1CRVJfUkVHRVggfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IE1hdEZvcm1GaWVsZEFwcGVhcmFuY2UgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZFwiO1xuaW1wb3J0IHsgTmd4QXV0aEZpcmViYXNlVUlDb25maWdUb2tlbiB9IGZyb20gXCIuLi8uLi90b2tlbnNcIjtcbmltcG9ydCB7IE5neEF1dGhGaXJlYmFzZVVJQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7IEF1dGhQcm9jZXNzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLXByb2Nlc3Muc2VydmljZVwiO1xuaW1wb3J0IHsgRmlyZXN0b3JlU3luY1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZmlyZXN0b3JlLXN5bmMuc2VydmljZVwiO1xuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5neC1hdXRoLWZpcmViYXNldWktdXNlclwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3VzZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3VzZXIuY29tcG9uZW50LnNjc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBlZGl0TW9kZTogYm9vbGVhbjtcbiAgQElucHV0KCkgY2FuTG9nb3V0ID0gdHJ1ZTtcbiAgQElucHV0KCkgY2FuRWRpdEFjY291bnQgPSB0cnVlO1xuICBASW5wdXQoKSBjYW5EZWxldGVBY2NvdW50ID0gdHJ1ZTtcbiAgQElucHV0KCkgYXBwZWFyYW5jZTogTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZTtcblxuICAvLyBpMThuIGNvbW1vbnNcbiAgQElucHV0KCkgbm90TG9nZ2VkSW5UZXh0ID0gXCJZb3UgYXJlIG5vdCBsb2dnZWQgaW4hXCI7XG4gIEBJbnB1dCgpIGVtYWlsVmVyaWZpZWRUZXh0ID0gXCJlbWFpbCBpcyB2ZXJpZmllZFwiO1xuICBASW5wdXQoKSBlbWFpbE5vdFZlcmlmaWVkVGV4dCA9IFwiZW1haWwgaXMgbm90IHZlcmlmaWVkXCI7XG4gIEBJbnB1dCgpIGNhbmNlbEJ1dHRvblRleHQgPSBcImNhbmNlbFwiO1xuICBASW5wdXQoKSBzYXZlQ2hhbmdlc0J1dHRvblRleHQgPSBcIlNhdmUgY2hhbmdlc1wiO1xuICBASW5wdXQoKSBlZGl0QnV0dG9uVGV4dCA9IFwiZWRpdFwiO1xuICBASW5wdXQoKSBzaWdub3V0QnV0dG9uVGV4dCA9IFwiU2lnbiBvdXRcIjtcbiAgQElucHV0KCkgZGVsZXRlQWNjb3VudEJ1dHRvblRleHQgPSBcIkRlbGV0ZSBhY2NvdW50XCI7XG5cbiAgLy9pMThuIG5hbWVcbiAgQElucHV0KCkgbmFtZVRleHQgPSBcIk5hbWVcIjtcbiAgQElucHV0KCkgbmFtZUVycm9yUmVxdWlyZWRUZXh0ID0gXCJOYW1lIGlzIHJlcXVpcmVkXCI7XG5cbiAgLy8gaTE4biBlbWFpbFxuICBASW5wdXQoKSBlbWFpbFRleHQgPSBcIkVtYWlsXCI7XG4gIEBJbnB1dCgpIGVtYWlsRXJyb3JSZXF1aXJlZFRleHQgPSBcIkVtYWlsIGlzIHJlcXVpcmVkXCI7XG4gIEBJbnB1dCgpIGVtYWlsRXJyb3JQYXR0ZXJuVGV4dCA9IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzc1wiO1xuXG4gIC8vIGkxOG4gcGhvbmVcbiAgQElucHV0KCkgcGhvbmVUZXh0ID0gXCJQaG9uZSBudW1iZXJcIjtcbiAgQElucHV0KCkgcGhvbmVIaW50VGV4dCA9IGBcbiAgICBUaGUgcGhvbmUgbnVtYmVyIGlzIGludGVybmF0aW9uYWwuIFRoZXJlZm9yZSwgaXQgc2hvdWxkIHN0YXJ0IHdpdGggYSArIHNpZ24gb3IgMDAsXG4gICAgZm9sbG93ZWQgYnkgdGhlIGNvdW50cnkgY29kZSwgLSBhbmQgbmF0aW9uYWwgbnVtYmVyIGUuZzogKzQ5LTEyMzQ1Njc4IG9yIDAwNDEtMTIzNDU2Nzg5MFxuXG4gICAgICBOT1RFIDogdGhlIHBob25lIG51bWJlciBtdXN0IGJlIGEgdmFsaWQgcGhvbmUgY3JlZGVudGlhbCAhIWA7XG4gIEBJbnB1dCgpIHBob25lRXJyb3JQYXR0ZXJuVGV4dCA9IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgcGhvbmUgbnVtYmVyXCI7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKSBvblNpZ25PdXQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uQWNjb3VudEVkaXRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgb25BY2NvdW50RGVsZXRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHVwZGF0ZUZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICB1cGRhdGVOYW1lRm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xuICB1cGRhdGVFbWFpbEZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcbiAgdXBkYXRlUGhvbmVOdW1iZXJGb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGF1dGg6IEFuZ3VsYXJGaXJlQXV0aCxcbiAgICBwdWJsaWMgYXV0aFByb2Nlc3M6IEF1dGhQcm9jZXNzU2VydmljZSxcbiAgICBwcml2YXRlIGZpcmVTdG9yZVNlcnZpY2U6IEZpcmVzdG9yZVN5bmNTZXJ2aWNlLFxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZ1Rva2VuKSlcbiAgICBwdWJsaWMgY29uZmlnOiBOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZ1xuICApIHt9XG5cbiAgY2hhbmdlRWRpdE1vZGUoKSB7XG4gICAgaWYgKHRoaXMuZWRpdE1vZGUpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuZWRpdE1vZGUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0VXBkYXRlRm9ybUdyb3VwKCkuc3Vic2NyaWJlKCh1cGRhdGVGb3JtR3JvdXA6IEZvcm1Hcm91cCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUZvcm1Hcm91cCA9IHVwZGF0ZUZvcm1Hcm91cDtcbiAgICAgICAgdGhpcy5lZGl0TW9kZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnVwZGF0ZUZvcm1Hcm91cC5yZXNldCgpO1xuICAgIHRoaXMudXBkYXRlRm9ybUdyb3VwLmRpc2FibGUoKTtcbiAgICB0aGlzLnVwZGF0ZUZvcm1Hcm91cCA9IG51bGw7XG4gIH1cblxuICBhc3luYyBzYXZlKCkge1xuICAgIGlmICh0aGlzLnVwZGF0ZUZvcm1Hcm91cC5kaXJ0eSkge1xuICAgICAgdGhpcy5lZGl0TW9kZSA9IGZhbHNlO1xuICAgICAgY29uc3QgdXNlciA9IHRoaXMuYXV0aFByb2Nlc3MudXNlcjtcbiAgICAgIC8vIG5neC1hdXRoLWZpcmViYXNldWktdXNlci51cGRhdGVQcm9maWxlKClcbiAgICAgIC8vIG5neC1hdXRoLWZpcmViYXNldWktdXNlci51cGRhdGVFbWFpbCgpXG4gICAgICAvLyBjb25zb2xlLmxvZygnZm9ybSA9ICcsIHRoaXMudXBkYXRlRm9ybUdyb3VwKTtcblxuICAgICAgY29uc3Qgc25hY2tCYXJNc2c6IHN0cmluZ1tdID0gW107XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZU5hbWVGb3JtQ29udHJvbC5kaXJ0eSkge1xuICAgICAgICAgIGF3YWl0IHVzZXIudXBkYXRlUHJvZmlsZSh7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogdGhpcy51cGRhdGVOYW1lRm9ybUNvbnRyb2wudmFsdWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc25hY2tCYXJNc2cucHVzaChgeW91ciBuYW1lIGhhcyBiZWVuIHVwZGF0ZWQgdG8gJHt1c2VyLmRpc3BsYXlOYW1lfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudXBkYXRlRW1haWxGb3JtQ29udHJvbC5kaXJ0eSkge1xuICAgICAgICAgIGF3YWl0IHVzZXIudXBkYXRlRW1haWwodGhpcy51cGRhdGVFbWFpbEZvcm1Db250cm9sLnZhbHVlKTtcbiAgICAgICAgICBzbmFja0Jhck1zZy5wdXNoKGB5b3VyIGVtYWlsIGhhcyBiZWVuIHVwZGF0ZWQgdG8gJHt1c2VyLmVtYWlsfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudXBkYXRlUGhvbmVOdW1iZXJGb3JtQ29udHJvbC5kaXJ0eSkge1xuICAgICAgICAgIGF3YWl0IHVzZXIudXBkYXRlUGhvbmVOdW1iZXIodGhpcy51cGRhdGVQaG9uZU51bWJlckZvcm1Db250cm9sLnZhbHVlKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIFwicGhvbmUgbnVtYmVyID0gXCIsXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBob25lTnVtYmVyRm9ybUNvbnRyb2wudmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICAgIHNuYWNrQmFyTXNnLnB1c2goXG4gICAgICAgICAgICBgeW91ciBwaG9uZSBudW1iZXIgaGFzIGJlZW4gdXBkYXRlZCB0byAke3VzZXIucGhvbmVOdW1iZXJ9YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb25maWcuZW5hYmxlRmlyZXN0b3JlU3luYykge1xuICAgICAgICAgIGF3YWl0IHRoaXMuZmlyZVN0b3JlU2VydmljZS51cGRhdGVVc2VyRGF0YShcbiAgICAgICAgICAgIHRoaXMuYXV0aFByb2Nlc3MucGFyc2VVc2VySW5mbyh1c2VyKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMuYXV0aFByb2Nlc3Muc2hvd1RvYXN0KFxuICAgICAgICAgIGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3JcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzbmFja0Jhck1zZy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuYXV0aFByb2Nlc3Muc2hvd1RvYXN0KHNuYWNrQmFyTXNnLmpvaW4oXCJcXFxcblwiKSk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uQWNjb3VudEVkaXRlZC5lbWl0KCk7IC8vIGVtaXQgZXZlbnQgaWYgdGhlIGZvcm0gd2FzIGRpcnR5XG4gICAgICB0aGlzLnVwZGF0ZUZvcm1Hcm91cC5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIHNpZ25PdXQoKSB7XG4gICAgdGhpcy5hdXRoXG4gICAgICAuc2lnbk91dCgpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLm9uU2lnbk91dC5lbWl0KCkpXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBoYXBwZW5lZCB3aGlsZSBzaWduaW5nIG91dCFcIiwgZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgYWNjb3VudCBvZiB0aGUgY3VycmVudCBmaXJlYmFzZSBuZ3gtYXV0aC1maXJlYmFzZXVpLXVzZXJcbiAgICpcbiAgICogT24gU3VjY2VzcywgZW1pdCB0aGUgPG9uQWNjb3VudERlbGV0ZWQ+IGV2ZW50IGFuZCB0b2FzdCBhIG1zZyEjXG4gICAqIE90aGVyd2lzZSwgbG9nIHRoZSBhbmQgdG9hc3QgYW5kIGVycm9yIG1zZyFcbiAgICpcbiAgICovXG4gIGFzeW5jIGRlbGV0ZUFjY291bnQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLmF1dGhQcm9jZXNzLnVzZXI7XG5cbiAgICAgIC8vIGF3YWl0IHRoaXMuYXV0aFByb2Nlc3MuZGVsZXRlQWNjb3VudCgpO1xuICAgICAgYXdhaXQgdGhpcy5hdXRoUHJvY2Vzcy51c2VyLmRlbGV0ZSgpO1xuICAgICAgLy8gaWYgKHRoaXMuY29uZmlnLmVuYWJsZUZpcmVzdG9yZVN5bmMpIHtcbiAgICAgIGF3YWl0IHRoaXMuZmlyZVN0b3JlU2VydmljZS5kZWxldGVVc2VyRGF0YSh1c2VyLnVpZCk7XG4gICAgICAvLyB9XG4gICAgICB0aGlzLm9uQWNjb3VudERlbGV0ZWQuZW1pdCgpO1xuICAgICAgdGhpcy5lZGl0TW9kZSA9IGZhbHNlO1xuICAgICAgY29uc29sZS5sb2coXCJZb3VyIGFjY291bnQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQhXCIpO1xuICAgICAgdGhpcy5hdXRoUHJvY2Vzcy5zaG93VG9hc3QoXCJZb3VyIGFjY291bnQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQhXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGRlbGV0ZSB1c2VyIGFjY291bnRcIiwgZXJyb3IpO1xuICAgICAgdGhpcy5hdXRoUHJvY2Vzcy5zaG93VG9hc3QoXG4gICAgICAgIGBFcnJvciBvY2N1cnJlZCB3aGlsZSBkZWxldGluZyB5b3VyIGFjY291bnQ6ICR7ZXJyb3IubWVzc2FnZX1gXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0VXBkYXRlRm9ybUdyb3VwKCk6IE9ic2VydmFibGU8Rm9ybUdyb3VwPiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFByb2Nlc3MudXNlciQucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBtYXAoKGN1cnJlbnRVc2VyOiBmaXJlYmFzZS5Vc2VyKSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZUZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgICAgIG5hbWU6IHRoaXMudXBkYXRlTmFtZUZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFxuICAgICAgICAgICAgeyB2YWx1ZTogY3VycmVudFVzZXIuZGlzcGxheU5hbWUsIGRpc2FibGVkOiB0aGlzLmVkaXRNb2RlIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKHRoaXMuY29uZmlnLm5hbWVNaW5MZW5ndGgpLFxuICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCh0aGlzLmNvbmZpZy5uYW1lTWF4TGVuZ3RoKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuXG4gICAgICAgICAgZW1haWw6IHRoaXMudXBkYXRlRW1haWxGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChcbiAgICAgICAgICAgIHsgdmFsdWU6IGN1cnJlbnRVc2VyLmVtYWlsLCBkaXNhYmxlZDogdGhpcy5lZGl0TW9kZSB9LFxuICAgICAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybihFTUFJTF9SRUdFWCldXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIHBob25lTnVtYmVyOiB0aGlzLnVwZGF0ZVBob25lTnVtYmVyRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woXG4gICAgICAgICAgICB7IHZhbHVlOiBjdXJyZW50VXNlci5waG9uZU51bWJlciwgZGlzYWJsZWQ6IHRoaXMuZWRpdE1vZGUgfSxcbiAgICAgICAgICAgIFtWYWxpZGF0b3JzLnBhdHRlcm4oUEhPTkVfTlVNQkVSX1JFR0VYKV1cbiAgICAgICAgICApLFxuICAgICAgICB9KTtcblxuICAgICAgICB1cGRhdGVGb3JtR3JvdXAuZW5hYmxlKCk7XG4gICAgICAgIHJldHVybiB1cGRhdGVGb3JtR3JvdXA7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJhdXRoLmF1dGhTdGF0ZXwgYXN5bmM7IHRoZW4gYXV0aGVudGljYXRlZCBlbHNlIG5vbmVcIj5cblxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjYXV0aGVudGljYXRlZD5cbiAgPG1hdC1jYXJkICpuZ0lmPVwiYXV0aC51c2VyIHwgYXN5bmMgYXMgdXNlclwiPlxuICAgIDwhLS08Zm9ybSBbZm9ybUdyb3VwXT1cInVwZGF0ZUZvcm1Hcm91cFwiID4tLT5cbiAgICA8IS0tY2FyZCBoZWFkZXItLT5cbiAgICA8bWF0LWNhcmQtaGVhZGVyIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cblxuICAgICAgPGltZyAqbmdJZj1cImF1dGhQcm9jZXNzPy5nZXRVc2VyUGhvdG9VcmwoKSB8IGFzeW5jIGFzIHBob3RvVXJsXCIgW3NyY109XCJwaG90b1VybFwiIG1hdC1jYXJkLWF2YXRhcj5cblxuICAgICAgPGRpdiAqbmdJZj1cInVzZXIuZW1haWxWZXJpZmllZDsgdGhlbiBlbWFpbFZlcmlmaWVkIGVsc2UgZW1haWxOb3RWZXJpZmllZFwiPjwvZGl2PlxuICAgICAgPG5nLXRlbXBsYXRlICNlbWFpbFZlcmlmaWVkPlxuICAgICAgICA8bWF0LWljb24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIFttYXRUb29sdGlwXT1cImVtYWlsVmVyaWZpZWRUZXh0XCJcbiAgICAgICAgICAgICAgICAgIG1hdFRvb2x0aXBQb3NpdGlvbj1cImFmdGVyXCI+XG4gICAgICAgICAgdmVyaWZpZWRfdXNlclxuICAgICAgICA8L21hdC1pY29uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjZW1haWxOb3RWZXJpZmllZD5cbiAgICAgICAgPG1hdC1pY29uIGNvbG9yPVwid2FyblwiXG4gICAgICAgICAgICAgICAgICBbbWF0VG9vbHRpcF09XCJlbWFpbE5vdFZlcmlmaWVkVGV4dFwiXG4gICAgICAgICAgICAgICAgICBtYXRUb29sdGlwUG9zaXRpb249XCJhZnRlclwiPlxuICAgICAgICAgIHdhcm5pbmdcbiAgICAgICAgPC9tYXQtaWNvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8L21hdC1jYXJkLWhlYWRlcj5cblxuICAgIDwhLS1jYXJkIGNvbnRlbnQtLT5cbiAgICA8bWF0LWNhcmQtY29udGVudCAqbmdJZj1cImVkaXRNb2RlOyB0aGVuIGVkaXQgZWxzZSByZWFkb25seVwiPlxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cblxuICAgIDxuZy10ZW1wbGF0ZSAjZWRpdD5cbiAgICAgIDxmb3JtIChzdWJtaXQpPVwic2F2ZSgpXCIgW2Zvcm1Hcm91cF09XCJ1cGRhdGVGb3JtR3JvdXBcIj5cblxuICAgICAgICA8bWF0LWNhcmQtY29udGVudCBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2VFZGl0TW9kZSgpXCIgY2xhc3M9XCJlZGl0LWJ1dHRvblwiIGNvbG9yPVwid2FyblwiXG4gICAgICAgICAgICAgICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uPlxuICAgICAgICAgICAgICB7e2NhbmNlbEJ1dHRvblRleHR9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8IS0tbmFtZS0tPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCIgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPnt7bmFtZVRleHR9fTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFtmb3JtQ29udHJvbF09XCJ1cGRhdGVOYW1lRm9ybUNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIm5hbWVUZXh0XCI+XG4gICAgICAgICAgICA8bWF0LWljb24gbWF0U3VmZml4PnBlcnNvbjwvbWF0LWljb24+XG4gICAgICAgICAgICA8bWF0LWhpbnQgYWxpZ249XCJlbmRcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIj4ge3sgdXBkYXRlTmFtZUZvcm1Db250cm9sLnZhbHVlPy5sZW5ndGggfX1cbiAgICAgICAgICAgICAgLyB7eyBjb25maWcubmFtZU1heExlbmd0aCB9fSA8L21hdC1oaW50PlxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInVwZGF0ZU5hbWVGb3JtQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICAgICAgICAgICAgICB7e25hbWVFcnJvclJlcXVpcmVkVGV4dH19XG4gICAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgICAgPCEtLWVtYWlsLS0+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tlbWFpbFRleHR9fTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFtmb3JtQ29udHJvbF09XCJ1cGRhdGVFbWFpbEZvcm1Db250cm9sXCJcbiAgICAgICAgICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJlbWFpbFRleHRcIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbiBtYXRTdWZmaXg+ZW1haWw8L21hdC1pY29uPlxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInVwZGF0ZUVtYWlsRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAgICAgICAgICAgICAge3tlbWFpbEVycm9yUmVxdWlyZWRUZXh0fX0ge3t1cGRhdGVFbWFpbEZvcm1Db250cm9sLnZhbHVlfX1cbiAgICAgICAgICAgIDwvbWF0LWVycm9yPlxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInVwZGF0ZUVtYWlsRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3BhdHRlcm4nKVwiPlxuICAgICAgICAgICAgICB7e2VtYWlsRXJyb3JQYXR0ZXJuVGV4dH19IHt7dXBkYXRlRW1haWxGb3JtQ29udHJvbC52YWx1ZX19XG4gICAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgICAgPCEtLXBob25lIG51bWJlci0tPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cImZhbHNlXCIgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD57e3Bob25lVGV4dH19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgW2Zvcm1Db250cm9sXT1cInVwZGF0ZVBob25lTnVtYmVyRm9ybUNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBob25lVGV4dFwiXG4gICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiPlxuICAgICAgICAgICAgPG1hdC1pY29uIG1hdFN1ZmZpeD5waG9uZTwvbWF0LWljb24+XG4gICAgICAgICAgICA8bWF0LWhpbnQgYWxpZ249XCJlbmRcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cbiAgICAgICAgICAgICAge3twaG9uZUhpbnRUZXh0fX1cbiAgICAgICAgICAgIDwvbWF0LWhpbnQ+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwidXBkYXRlUGhvbmVOdW1iZXJGb3JtQ29udHJvbC5oYXNFcnJvcigncGF0dGVybicpXCI+XG4gICAgICAgICAgICAgIHt7cGhvbmVFcnJvclBhdHRlcm5UZXh0fX1cbiAgICAgICAgICAgIDwvbWF0LWVycm9yPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxuXG4gICAgICAgIDxtYXQtY2FyZC1hY3Rpb25zIGZ4TGF5b3V0PVwiY29sdW1uXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgbWF0LWJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAge3tzYXZlQ2hhbmdlc0J1dHRvblRleHR9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxuZy10ZW1wbGF0ZSAjcmVhZG9ubHk+XG4gICAgICA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNhbkVkaXRBY2NvdW50XCIgKGNsaWNrKT1cImNoYW5nZUVkaXRNb2RlKClcIiBjbGFzcz1cImVkaXQtYnV0dG9uXCIgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBtYXQtcmFpc2VkLWJ1dHRvbj5cbiAgICAgICAgICB7e2VkaXRCdXR0b25UZXh0fX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLW5hbWUtLT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCIgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+e3tuYW1lVGV4dH19PC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBbZGlzYWJsZWRdPVwiIWVkaXRNb2RlXCJcbiAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ1c2VyLmRpc3BsYXlOYW1lXCJcbiAgICAgICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwibmFtZVRleHRcIj5cbiAgICAgICAgPG1hdC1pY29uIGNvbG9yPVwicHJpbWFyeVwiIG1hdFN1ZmZpeD5wZXJzb248L21hdC1pY29uPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgPCEtLWVtYWlsLS0+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxuICAgICAgICA8bWF0LWxhYmVsPnt7ZW1haWxUZXh0fX08L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IFtkaXNhYmxlZF09XCIhZWRpdE1vZGVcIlxuICAgICAgICAgICAgICAgW3ZhbHVlXT1cInVzZXIuZW1haWxcIiBtYXRJbnB1dFxuICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImVtYWlsVGV4dFwiPlxuICAgICAgICA8bWF0LWljb24gY29sb3I9XCJwcmltYXJ5XCIgbWF0U3VmZml4PmVtYWlsPC9tYXQtaWNvbj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgIDwhLS1waG9uZSBudW1iZXItLT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cImZhbHNlXCIgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxuICAgICAgICA8bWF0LWxhYmVsPnt7cGhvbmVUZXh0fX08L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IFtkaXNhYmxlZF09XCIhZWRpdE1vZGVcIlxuICAgICAgICAgICAgICAgW3ZhbHVlXT1cInVzZXIucGhvbmVOdW1iZXJcIlxuICAgICAgICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwaG9uZVRleHRcIj5cbiAgICAgICAgPG1hdC1pY29uIGNvbG9yPVwicHJpbWFyeVwiIG1hdFN1ZmZpeD5waG9uZTwvbWF0LWljb24+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICA8bWF0LWNhcmQtYWN0aW9ucyBmeExheW91dD1cImNvbHVtblwiPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJzaWduT3V0KClcIiAqbmdJZj1cImNhbkxvZ291dFwiIGNvbG9yPVwicHJpbWFyeVwiIG1hdC1idXR0b24+e3tzaWdub3V0QnV0dG9uVGV4dH19PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImRlbGV0ZUFjY291bnQoKVwiICpuZ0lmPVwiY2FuRGVsZXRlQWNjb3VudFwiIGNvbG9yPVwid2FyblwiIG1hdC1idXR0b24+e3tkZWxldGVBY2NvdW50QnV0dG9uVGV4dH19PC9idXR0b24+XG4gICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XG5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gIDwvbWF0LWNhcmQ+XG5cbjwvbmctdGVtcGxhdGU+XG5cblxuPG5nLXRlbXBsYXRlICNub25lPlxuICA8bWF0LWNhcmQgY2xhc3M9XCJub25lLWNhcmRcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XG4gICAgPG1hdC1jYXJkLWNvbnRlbnQgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxuICAgICAgPG1hdC1pY29uIGNvbG9yPVwiYWNjZW50XCI+d2FybmluZzwvbWF0LWljb24+XG4gICAgICA8c3Bhbj57e25vdExvZ2dlZEluVGV4dH19PC9zcGFuPlxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cbiAgPC9tYXQtY2FyZD5cbjwvbmctdGVtcGxhdGU+XG4iXX0=