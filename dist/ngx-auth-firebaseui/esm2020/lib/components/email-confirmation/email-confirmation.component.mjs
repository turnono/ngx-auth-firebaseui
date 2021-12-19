import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/auth-process.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/card";
import * as i5 from "@angular/flex-layout/flex";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/progress-bar";
const _c0 = ["defaultVerifyEmail"];
function EmailConfirmationComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function EmailConfirmationComponent_ng_template_1_mat_progress_bar_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-progress-bar", 12);
} }
function EmailConfirmationComponent_ng_template_1_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function EmailConfirmationComponent_ng_template_1_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.continue(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const verifyEmailGoBackText_r8 = i0.ɵɵnextContext().verifyEmailGoBackText;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", verifyEmailGoBackText_r8, " ");
} }
function EmailConfirmationComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-card", 2);
    i0.ɵɵelementStart(1, "mat-card-content", 3);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 4);
    i0.ɵɵelementStart(5, "span", 5);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 6);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 7);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, EmailConfirmationComponent_ng_template_1_mat_progress_bar_11_Template, 1, 0, "mat-progress-bar", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-card-actions", 3);
    i0.ɵɵtemplate(13, EmailConfirmationComponent_ng_template_1_button_13_Template, 2, 1, "button", 9);
    i0.ɵɵelementStart(14, "button", 10);
    i0.ɵɵlistener("click", function EmailConfirmationComponent_ng_template_1_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.sendNewVerificationEmail(); });
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 11);
    i0.ɵɵlistener("click", function EmailConfirmationComponent_ng_template_1_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.signOut.emit(); });
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const email_r3 = ctx.email;
    const goBackURL_r4 = ctx.goBackURL;
    const sendNewVerificationEmailText_r5 = ctx.sendNewVerificationEmailText;
    const signOutText_r6 = ctx.signOutText;
    const verifyEmailConfirmationText_r7 = ctx.verifyEmailConfirmationText;
    const verifyEmailTitleText_r9 = ctx.verifyEmailTitleText;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(verifyEmailTitleText_r9);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(email_r3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(verifyEmailConfirmationText_r7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.isLoading);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", goBackURL_r4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sendNewVerificationEmailText_r5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(signOutText_r6);
} }
const defaultTranslations = {
    verifyEmailTitleText: 'Confirm your e-mail address!',
    verifyEmailConfirmationText: 'A confirmation e-mail has been sent.' +
        ' Check your inbox and click on the link "Confirm my e-mail" to confirm your e-mail address.',
    verifyEmailGoBackText: 'Go back',
    sendNewVerificationEmailText: 'Send new confirmation e-mail',
    signOutText: 'Sign out',
    messageOnEmailConfirmationSuccess: 'A new confirmation e-mail has been sent. Please check your inbox.',
};
export class EmailConfirmationComponent {
    constructor(authProcess, router, changeDetectorRef) {
        this.authProcess = authProcess;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.signOut = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.verifyEmailTemplate && changes.verifyEmailTemplate.currentValue == null) {
            this.verifyEmailTemplate = this.defaultTemplate;
            console.log('ngOnChanges - defaultTemplate:', this.verifyEmailTemplate);
        }
        this.verifyEmailContext = this.createTemplateContext();
    }
    ngOnInit() {
        if (!this.verifyEmailTemplate) {
            console.log('ngOnInit - defaultTemplate');
            this.verifyEmailTemplate = this.defaultTemplate;
        }
        this.verifyEmailContext = this.createTemplateContext();
        console.log('verifyEmailTemplate:', this.verifyEmailTemplate);
        console.log('verifyEmailContext:', this.verifyEmailContext);
    }
    async continue() {
        try {
            await this.authProcess.reloadUserInfo();
            await this.router.navigate([this.goBackURL]);
        }
        catch (error) {
            this.authProcess.notifyError(error);
        }
    }
    async sendNewVerificationEmail() {
        try {
            this.isLoading = true;
            this.changeDetectorRef.markForCheck();
            await this.authProcess.sendNewVerificationEmail();
            this.authProcess.showToast(this.verifyEmailContext.messageOnEmailConfirmationSuccess);
        }
        catch (error) {
            this.authProcess.notifyError(error);
        }
        finally {
            this.isLoading = false;
            this.changeDetectorRef.markForCheck();
        }
    }
    createTemplateContext() {
        return {
            email: this.email,
            goBackURL: this.goBackURL,
            verifyEmailTitleText: this.verifyEmailTitleText || defaultTranslations.verifyEmailTitleText,
            verifyEmailConfirmationText: this.verifyEmailConfirmationText || defaultTranslations.verifyEmailConfirmationText,
            verifyEmailGoBackText: this.verifyEmailGoBackText || defaultTranslations.verifyEmailGoBackText,
            sendNewVerificationEmailText: this.sendNewVerificationEmailText || defaultTranslations.sendNewVerificationEmailText,
            signOutText: this.signOutText || defaultTranslations.signOutText,
            messageOnEmailConfirmationSuccess: this.messageOnEmailConfirmationSuccess || defaultTranslations.messageOnEmailConfirmationSuccess
        };
    }
}
EmailConfirmationComponent.ɵfac = function EmailConfirmationComponent_Factory(t) { return new (t || EmailConfirmationComponent)(i0.ɵɵdirectiveInject(i1.AuthProcessService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
EmailConfirmationComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EmailConfirmationComponent, selectors: [["ngx-auth-firebaseui-email-confirmation"]], viewQuery: function EmailConfirmationComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultTemplate = _t.first);
    } }, inputs: { email: "email", goBackURL: "goBackURL", verifyEmailTitleText: "verifyEmailTitleText", verifyEmailConfirmationText: "verifyEmailConfirmationText", verifyEmailGoBackText: "verifyEmailGoBackText", sendNewVerificationEmailText: "sendNewVerificationEmailText", signOutText: "signOutText", messageOnEmailConfirmationSuccess: "messageOnEmailConfirmationSuccess", template: "template" }, outputs: { signOut: "signOut" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultVerifyEmail", ""], [1, "verify-email"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "title"], [1, "mat-subheading-2"], [1, "mat-body-2"], [1, "subtitle"], ["mode", "indeterminate", 4, "ngIf"], ["class", "go-back-button action-button", "mat-stroked-button", "", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", 1, "send-new-mail-button", "action-button", 3, "click"], ["color", "warn", "mat-stroked-button", "", 1, "sign-out-button", "action-button", 3, "click"], ["mode", "indeterminate"], ["mat-stroked-button", "", 1, "go-back-button", "action-button", 3, "click"]], template: function EmailConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EmailConfirmationComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, EmailConfirmationComponent_ng_template_1_Template, 18, 7, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngTemplateOutlet", ctx.verifyEmailTemplate)("ngTemplateOutletContext", ctx.verifyEmailContext);
    } }, directives: [i3.NgTemplateOutlet, i4.MatCard, i4.MatCardContent, i5.DefaultLayoutDirective, i5.DefaultLayoutAlignDirective, i6.MatIcon, i3.NgIf, i4.MatCardActions, i7.MatButton, i8.MatProgressBar], styles: [".material-icons[_ngcontent-%COMP%]{font-size:4rem}.verify-email[_ngcontent-%COMP%]{width:360px}.verify-email[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:4rem;width:4rem;color:#444}.verify-email[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-top:16px}.verify-email[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .mat-subheading-2[_ngcontent-%COMP%]{margin-bottom:0}.verify-email[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin:16px auto;text-align:justify}.verify-email[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0px;-webkit-margin-end:0px}.verify-email[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{text-align:center;margin-top:1rem}.verify-email[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]{width:100%}.verify-email[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] + .action-button[_ngcontent-%COMP%]{margin-top:1rem}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmailConfirmationComponent, [{
        type: Component,
        args: [{ selector: 'ngx-auth-firebaseui-email-confirmation', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngTemplateOutlet=\"verifyEmailTemplate; context: verifyEmailContext\"></ng-container>\n<ng-template #defaultVerifyEmail let-email=\"email\" let-goBackURL=\"goBackURL\"\n             let-sendNewVerificationEmailText=\"sendNewVerificationEmailText\"\n             let-signOutText=\"signOutText\"\n             let-verifyEmailConfirmationText=\"verifyEmailConfirmationText\" let-verifyEmailGoBackText=\"verifyEmailGoBackText\"\n             let-verifyEmailTitleText=\"verifyEmailTitleText\">\n  <mat-card class=\"verify-email\">\n    <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <mat-icon>email</mat-icon>\n      <p class=\"title\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <span class=\"mat-subheading-2\">{{ verifyEmailTitleText }}</span>\n        <span class=\"mat-body-2\">{{ email }}</span>\n      </p>\n      <p class=\"subtitle\">{{ verifyEmailConfirmationText }}</p>\n      <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n    </mat-card-content>\n    <mat-card-actions fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <button (click)=\"continue()\" *ngIf=\"goBackURL\" class=\"go-back-button action-button\" mat-stroked-button>\n        {{ verifyEmailGoBackText }}\n      </button>\n      <button (click)=\"sendNewVerificationEmail()\" class=\"send-new-mail-button action-button\"\n              mat-stroked-button>{{ sendNewVerificationEmailText }}</button>\n      <button (click)=\"this.signOut.emit()\" class=\"sign-out-button action-button\" color=\"warn\"\n              mat-stroked-button>{{ signOutText }}</button>\n    </mat-card-actions>\n  </mat-card>\n</ng-template>\n", styles: [".material-icons{font-size:4rem}.verify-email{width:360px}.verify-email .mat-icon{height:4rem;width:4rem;color:#444}.verify-email .title{margin-top:16px}.verify-email .title .mat-subheading-2{margin-bottom:0}.verify-email .subtitle{margin:16px auto;text-align:justify}.verify-email p{display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0px;-webkit-margin-end:0px}.verify-email mat-card-actions{text-align:center;margin-top:1rem}.verify-email mat-card-actions .action-button{width:100%}.verify-email mat-card-actions .action-button+.action-button{margin-top:1rem}\n"] }]
    }], function () { return [{ type: i1.AuthProcessService }, { type: i2.Router }, { type: i0.ChangeDetectorRef }]; }, { email: [{
            type: Input
        }], goBackURL: [{
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
        }], messageOnEmailConfirmationSuccess: [{
            type: Input
        }], template: [{
            type: Input
        }], signOut: [{
            type: Output
        }], defaultTemplate: [{
            type: ViewChild,
            args: ['defaultVerifyEmail', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXRoLWZpcmViYXNldWkvc3JjL2xpYi9jb21wb25lbnRzL2VtYWlsLWNvbmZpcm1hdGlvbi9lbWFpbC1jb25maXJtYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1dGgtZmlyZWJhc2V1aS9zcmMvbGliL2NvbXBvbmVudHMvZW1haWwtY29uZmlybWF0aW9uL2VtYWlsLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFHTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztJQ1p2Qix3QkFBa0c7OztJQWM1Rix1Q0FBNEU7Ozs7SUFHNUUsa0NBQXVHO0lBQS9GLDRMQUFTLGtCQUFVLElBQUM7SUFDMUIsWUFDRjtJQUFBLGlCQUFTOzs7SUFEUCxlQUNGO0lBREUseURBQ0Y7Ozs7SUFiSixtQ0FBK0I7SUFDN0IsMkNBQWtFO0lBQ2hFLGdDQUFVO0lBQUEscUJBQUs7SUFBQSxpQkFBVztJQUMxQiw0QkFBaUU7SUFDL0QsK0JBQStCO0lBQUEsWUFBMEI7SUFBQSxpQkFBTztJQUNoRSwrQkFBeUI7SUFBQSxZQUFXO0lBQUEsaUJBQU87SUFDN0MsaUJBQUk7SUFDSiw0QkFBb0I7SUFBQSxhQUFpQztJQUFBLGlCQUFJO0lBQ3pELHFIQUE0RTtJQUM5RSxpQkFBbUI7SUFDbkIsNENBQWtFO0lBQ2hFLGlHQUVTO0lBQ1QsbUNBQzJCO0lBRG5CLGtMQUFTLGtDQUEwQixJQUFDO0lBQ2pCLGFBQWtDO0lBQUEsaUJBQVM7SUFDdEUsbUNBQzJCO0lBRG5CLGtMQUFTLHNCQUFtQixJQUFDO0lB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QkFBaEIsTUFBTTtZQVMwQyxlQUFlO2tCQUEvRCxTQUFTO21CQUFDLG9CQUFvQixFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0F1dGhQcm9jZXNzU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC1wcm9jZXNzLnNlcnZpY2UnO1xuXG5pbnRlcmZhY2UgVmVyaWZ5RW1haWxDb250ZXh0IHtcbiAgZW1haWw6IHN0cmluZztcbiAgZ29CYWNrVVJMOiBzdHJpbmc7XG4gIHZlcmlmeUVtYWlsVGl0bGVUZXh0OiBzdHJpbmc7XG4gIHZlcmlmeUVtYWlsQ29uZmlybWF0aW9uVGV4dDogc3RyaW5nO1xuICB2ZXJpZnlFbWFpbEdvQmFja1RleHQ6IHN0cmluZztcbiAgbWVzc2FnZU9uRW1haWxDb25maXJtYXRpb25TdWNjZXNzOiBzdHJpbmc7XG4gIG1lc3NhZ2VPbkVycm9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IGRlZmF1bHRUcmFuc2xhdGlvbnMgPSB7XG4gIHZlcmlmeUVtYWlsVGl0bGVUZXh0OiAnQ29uZmlybSB5b3VyIGUtbWFpbCBhZGRyZXNzIScsXG4gIHZlcmlmeUVtYWlsQ29uZmlybWF0aW9uVGV4dDogJ0EgY29uZmlybWF0aW9uIGUtbWFpbCBoYXMgYmVlbiBzZW50LicgK1xuICAgICcgQ2hlY2sgeW91ciBpbmJveCBhbmQgY2xpY2sgb24gdGhlIGxpbmsgXCJDb25maXJtIG15IGUtbWFpbFwiIHRvIGNvbmZpcm0geW91ciBlLW1haWwgYWRkcmVzcy4nLFxuICB2ZXJpZnlFbWFpbEdvQmFja1RleHQ6ICdHbyBiYWNrJyxcbiAgc2VuZE5ld1ZlcmlmaWNhdGlvbkVtYWlsVGV4dDogJ1NlbmQgbmV3IGNvbmZpcm1hdGlvbiBlLW1haWwnLFxuICBzaWduT3V0VGV4dDogJ1NpZ24gb3V0JyxcbiAgbWVzc2FnZU9uRW1haWxDb25maXJtYXRpb25TdWNjZXNzOiAnQSBuZXcgY29uZmlybWF0aW9uIGUtbWFpbCBoYXMgYmVlbiBzZW50LiBQbGVhc2UgY2hlY2sgeW91ciBpbmJveC4nLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWF1dGgtZmlyZWJhc2V1aS1lbWFpbC1jb25maXJtYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZW1haWwtY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZW1haWwtY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEVtYWlsQ29uZmlybWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGVtYWlsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGdvQmFja1VSTDogc3RyaW5nO1xuICAvLyBpMThuIHRyYW5zbGF0aW9ucyB0byB1c2UgaW4gZGVmYXVsdCB0ZW1wbGF0ZVxuICBASW5wdXQoKSB2ZXJpZnlFbWFpbFRpdGxlVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSB2ZXJpZnlFbWFpbENvbmZpcm1hdGlvblRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgdmVyaWZ5RW1haWxHb0JhY2tUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlbmROZXdWZXJpZmljYXRpb25FbWFpbFRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgc2lnbk91dFRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgbWVzc2FnZU9uRW1haWxDb25maXJtYXRpb25TdWNjZXNzOiBzdHJpbmc7XG5cbiAgLy8gVGVtcGxhdGUgdG8gdXNlIGluIHBsYWNlIG9mIGRlZmF1bHQgdGVtcGxhdGVcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpIHNpZ25PdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gRmluYWwgdGVtcGxhdGVcbiAgdmVyaWZ5RW1haWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLy8gQ29udGV4dCBoYXNoIHRvIHVzZSBmb3IgdmVyaWZ5RW1haWxUZW1wbGF0ZS5cbiAgdmVyaWZ5RW1haWxDb250ZXh0OiBWZXJpZnlFbWFpbENvbnRleHQ7XG5cbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ2RlZmF1bHRWZXJpZnlFbWFpbCcsIHtzdGF0aWM6IHRydWV9KSBkZWZhdWx0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIGF1dGhQcm9jZXNzOiBBdXRoUHJvY2Vzc1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudmVyaWZ5RW1haWxUZW1wbGF0ZSAmJiBjaGFuZ2VzLnZlcmlmeUVtYWlsVGVtcGxhdGUuY3VycmVudFZhbHVlID09IG51bGwpIHtcbiAgICAgIHRoaXMudmVyaWZ5RW1haWxUZW1wbGF0ZSA9IHRoaXMuZGVmYXVsdFRlbXBsYXRlO1xuICAgICAgY29uc29sZS5sb2coJ25nT25DaGFuZ2VzIC0gZGVmYXVsdFRlbXBsYXRlOicsIHRoaXMudmVyaWZ5RW1haWxUZW1wbGF0ZSk7XG4gICAgfVxuICAgIHRoaXMudmVyaWZ5RW1haWxDb250ZXh0ID0gdGhpcy5jcmVhdGVUZW1wbGF0ZUNvbnRleHQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy52ZXJpZnlFbWFpbFRlbXBsYXRlKSB7XG4gICAgICBjb25zb2xlLmxvZygnbmdPbkluaXQgLSBkZWZhdWx0VGVtcGxhdGUnKTtcbiAgICAgIHRoaXMudmVyaWZ5RW1haWxUZW1wbGF0ZSA9IHRoaXMuZGVmYXVsdFRlbXBsYXRlO1xuICAgIH1cbiAgICB0aGlzLnZlcmlmeUVtYWlsQ29udGV4dCA9IHRoaXMuY3JlYXRlVGVtcGxhdGVDb250ZXh0KCk7XG4gICAgY29uc29sZS5sb2coJ3ZlcmlmeUVtYWlsVGVtcGxhdGU6JywgdGhpcy52ZXJpZnlFbWFpbFRlbXBsYXRlKTtcbiAgICBjb25zb2xlLmxvZygndmVyaWZ5RW1haWxDb250ZXh0OicsIHRoaXMudmVyaWZ5RW1haWxDb250ZXh0KTtcbiAgfVxuXG4gIGFzeW5jIGNvbnRpbnVlKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmF1dGhQcm9jZXNzLnJlbG9hZFVzZXJJbmZvKCk7XG4gICAgICBhd2FpdCB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5nb0JhY2tVUkxdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5hdXRoUHJvY2Vzcy5ub3RpZnlFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2VuZE5ld1ZlcmlmaWNhdGlvbkVtYWlsKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgYXdhaXQgdGhpcy5hdXRoUHJvY2Vzcy5zZW5kTmV3VmVyaWZpY2F0aW9uRW1haWwoKTtcbiAgICAgIHRoaXMuYXV0aFByb2Nlc3Muc2hvd1RvYXN0KHRoaXMudmVyaWZ5RW1haWxDb250ZXh0Lm1lc3NhZ2VPbkVtYWlsQ29uZmlybWF0aW9uU3VjY2Vzcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuYXV0aFByb2Nlc3Mubm90aWZ5RXJyb3IoZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVRlbXBsYXRlQ29udGV4dCgpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgIGdvQmFja1VSTDogdGhpcy5nb0JhY2tVUkwsXG4gICAgICB2ZXJpZnlFbWFpbFRpdGxlVGV4dDogdGhpcy52ZXJpZnlFbWFpbFRpdGxlVGV4dCB8fCBkZWZhdWx0VHJhbnNsYXRpb25zLnZlcmlmeUVtYWlsVGl0bGVUZXh0LFxuICAgICAgdmVyaWZ5RW1haWxDb25maXJtYXRpb25UZXh0OiB0aGlzLnZlcmlmeUVtYWlsQ29uZmlybWF0aW9uVGV4dCB8fCBkZWZhdWx0VHJhbnNsYXRpb25zLnZlcmlmeUVtYWlsQ29uZmlybWF0aW9uVGV4dCxcbiAgICAgIHZlcmlmeUVtYWlsR29CYWNrVGV4dDogdGhpcy52ZXJpZnlFbWFpbEdvQmFja1RleHQgfHwgZGVmYXVsdFRyYW5zbGF0aW9ucy52ZXJpZnlFbWFpbEdvQmFja1RleHQsXG4gICAgICBzZW5kTmV3VmVyaWZpY2F0aW9uRW1haWxUZXh0OiB0aGlzLnNlbmROZXdWZXJpZmljYXRpb25FbWFpbFRleHQgfHwgZGVmYXVsdFRyYW5zbGF0aW9ucy5zZW5kTmV3VmVyaWZpY2F0aW9uRW1haWxUZXh0LFxuICAgICAgc2lnbk91dFRleHQ6IHRoaXMuc2lnbk91dFRleHQgfHwgZGVmYXVsdFRyYW5zbGF0aW9ucy5zaWduT3V0VGV4dCxcbiAgICAgIG1lc3NhZ2VPbkVtYWlsQ29uZmlybWF0aW9uU3VjY2VzczogdGhpcy5tZXNzYWdlT25FbWFpbENvbmZpcm1hdGlvblN1Y2Nlc3MgfHwgZGVmYXVsdFRyYW5zbGF0aW9ucy5tZXNzYWdlT25FbWFpbENvbmZpcm1hdGlvblN1Y2Nlc3NcbiAgICB9O1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidmVyaWZ5RW1haWxUZW1wbGF0ZTsgY29udGV4dDogdmVyaWZ5RW1haWxDb250ZXh0XCI+PC9uZy1jb250YWluZXI+XG48bmctdGVtcGxhdGUgI2RlZmF1bHRWZXJpZnlFbWFpbCBsZXQtZW1haWw9XCJlbWFpbFwiIGxldC1nb0JhY2tVUkw9XCJnb0JhY2tVUkxcIlxuICAgICAgICAgICAgIGxldC1zZW5kTmV3VmVyaWZpY2F0aW9uRW1haWxUZXh0PVwic2VuZE5ld1ZlcmlmaWNhdGlvbkVtYWlsVGV4dFwiXG4gICAgICAgICAgICAgbGV0LXNpZ25PdXRUZXh0PVwic2lnbk91dFRleHRcIlxuICAgICAgICAgICAgIGxldC12ZXJpZnlFbWFpbENvbmZpcm1hdGlvblRleHQ9XCJ2ZXJpZnlFbWFpbENvbmZpcm1hdGlvblRleHRcIiBsZXQtdmVyaWZ5RW1haWxHb0JhY2tUZXh0PVwidmVyaWZ5RW1haWxHb0JhY2tUZXh0XCJcbiAgICAgICAgICAgICBsZXQtdmVyaWZ5RW1haWxUaXRsZVRleHQ9XCJ2ZXJpZnlFbWFpbFRpdGxlVGV4dFwiPlxuICA8bWF0LWNhcmQgY2xhc3M9XCJ2ZXJpZnktZW1haWxcIj5cbiAgICA8bWF0LWNhcmQtY29udGVudCBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XG4gICAgICA8bWF0LWljb24+ZW1haWw8L21hdC1pY29uPlxuICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXQtc3ViaGVhZGluZy0yXCI+e3sgdmVyaWZ5RW1haWxUaXRsZVRleHQgfX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0LWJvZHktMlwiPnt7IGVtYWlsIH19PC9zcGFuPlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3M9XCJzdWJ0aXRsZVwiPnt7IHZlcmlmeUVtYWlsQ29uZmlybWF0aW9uVGV4dCB9fTwvcD5cbiAgICAgIDxtYXQtcHJvZ3Jlc3MtYmFyICpuZ0lmPVwiaXNMb2FkaW5nXCIgbW9kZT1cImluZGV0ZXJtaW5hdGVcIj48L21hdC1wcm9ncmVzcy1iYXI+XG4gICAgPC9tYXQtY2FyZC1jb250ZW50PlxuICAgIDxtYXQtY2FyZC1hY3Rpb25zIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cbiAgICAgIDxidXR0b24gKGNsaWNrKT1cImNvbnRpbnVlKClcIiAqbmdJZj1cImdvQmFja1VSTFwiIGNsYXNzPVwiZ28tYmFjay1idXR0b24gYWN0aW9uLWJ1dHRvblwiIG1hdC1zdHJva2VkLWJ1dHRvbj5cbiAgICAgICAge3sgdmVyaWZ5RW1haWxHb0JhY2tUZXh0IH19XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gKGNsaWNrKT1cInNlbmROZXdWZXJpZmljYXRpb25FbWFpbCgpXCIgY2xhc3M9XCJzZW5kLW5ldy1tYWlsLWJ1dHRvbiBhY3Rpb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgbWF0LXN0cm9rZWQtYnV0dG9uPnt7IHNlbmROZXdWZXJpZmljYXRpb25FbWFpbFRleHQgfX08L2J1dHRvbj5cbiAgICAgIDxidXR0b24gKGNsaWNrKT1cInRoaXMuc2lnbk91dC5lbWl0KClcIiBjbGFzcz1cInNpZ24tb3V0LWJ1dHRvbiBhY3Rpb24tYnV0dG9uXCIgY29sb3I9XCJ3YXJuXCJcbiAgICAgICAgICAgICAgbWF0LXN0cm9rZWQtYnV0dG9uPnt7IHNpZ25PdXRUZXh0IH19PC9idXR0b24+XG4gICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxuICA8L21hdC1jYXJkPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==