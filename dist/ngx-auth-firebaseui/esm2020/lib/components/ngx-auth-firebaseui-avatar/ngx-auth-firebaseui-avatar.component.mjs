import { Component, EventEmitter, Input, Output } from "@angular/core";
import { take } from 'rxjs/operators';
import { UserComponent } from "..";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/compat/auth";
import * as i2 from "@angular/material/dialog";
import * as i3 from "../../services/auth-process.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/menu";
import * as i6 from "@angular/flex-layout/flex";
import * as i7 from "@angular/flex-layout/extended";
import * as i8 from "@angular/material/card";
import * as i9 from "@angular/material/button";
import * as i10 from "@angular/material/tooltip";
import * as i11 from "@angular/material/icon";
function NgxAuthFirebaseuiAvatarComponent_button_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r6.displayNameInitials || "");
} }
function NgxAuthFirebaseuiAvatarComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵtemplate(1, NgxAuthFirebaseuiAvatarComponent_button_0_span_1_Template, 2, 1, "span", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(2);
    i0.ɵɵstyleProp("background-image", "url(" + (ctx_r0.user == null ? null : ctx_r0.user.photoURL) + ")");
    i0.ɵɵproperty("matMenuTriggerFor", _r1)("matTooltip", ctx_r0.user == null ? null : ctx_r0.user.displayName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(ctx_r0.user == null ? null : ctx_r0.user.photoURL));
} }
function NgxAuthFirebaseuiAvatarComponent_button_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r7.displayNameInitials || "");
} }
function NgxAuthFirebaseuiAvatarComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵtemplate(1, NgxAuthFirebaseuiAvatarComponent_button_4_span_1_Template, 2, 1, "span", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-image", (ctx_r2.user == null ? null : ctx_r2.user.photoURL) ? "url(" + (ctx_r2.user == null ? null : ctx_r2.user.photoURL) + ")" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(ctx_r2.user == null ? null : ctx_r2.user.photoURL));
} }
function NgxAuthFirebaseuiAvatarComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "button", 16);
    i0.ɵɵlistener("click", function NgxAuthFirebaseuiAvatarComponent_div_11_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const menuItem_r8 = restoredCtx.$implicit; return menuItem_r8 == null ? null : menuItem_r8.callback(); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r8 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(menuItem_r8 == null ? null : menuItem_r8.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", menuItem_r8 == null ? null : menuItem_r8.text, "");
} }
function NgxAuthFirebaseuiAvatarComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function NgxAuthFirebaseuiAvatarComponent_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.openProfile(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r4.textProfile, " ");
} }
function NgxAuthFirebaseuiAvatarComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function NgxAuthFirebaseuiAvatarComponent_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.signOut(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r5.textSignOut, " ");
} }
const _c0 = function (a0) { return { "padding-top.px": a0 }; };
const _c1 = function (a0) { return { "padding-bottom.px": a0 }; };
export class NgxAuthFirebaseuiAvatarComponent {
    constructor(afa, dialog, authProcess) {
        this.afa = afa;
        this.dialog = dialog;
        this.authProcess = authProcess;
        this.layout = "default";
        this.canLogout = true;
        this.canViewAccount = true;
        this.canDeleteAccount = true;
        this.canEditAccount = true;
        this.textProfile = "Profile";
        this.textSignOut = "Sign Out";
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onSignOut = new EventEmitter();
    }
    ngOnInit() {
        this.user$ = this.afa.user;
        this.user$.subscribe((user) => {
            this.user = user;
            this.displayNameInitials = user
                ? this.getDisplayNameInitials(user.displayName)
                : null;
        });
    }
    getDisplayNameInitials(displayName) {
        if (!displayName) {
            return null;
        }
        const initialsRegExp = displayName.match(/\b\w/g) || [];
        const initials = ((initialsRegExp.shift() || "") + (initialsRegExp.pop() || "")).toUpperCase();
        return initials;
    }
    openProfile() {
        const dialogRef = this.dialog.open(UserComponent);
        const instance = dialogRef.componentInstance;
        instance.canDeleteAccount = this.canDeleteAccount;
        instance.canEditAccount = this.canEditAccount;
        instance
            .onSignOut
            .pipe(take(1)).subscribe(_ => this.onSignOut.emit()); // propagate the onSignout event
        instance
            .onAccountEdited
            .pipe(take(1)).subscribe(_ => this.displayNameInitials = this.getDisplayNameInitials(this.authProcess.user.displayName)); // update display name initials?
    }
    async signOut() {
        try {
            await this.afa.signOut();
            // Sign-out successful.
            this.onSignOut.emit();
        }
        catch (e) {
            // An error happened.
            console.error("An error happened while signing out!", e);
        }
    }
}
NgxAuthFirebaseuiAvatarComponent.ɵfac = function NgxAuthFirebaseuiAvatarComponent_Factory(t) { return new (t || NgxAuthFirebaseuiAvatarComponent)(i0.ɵɵdirectiveInject(i1.AngularFireAuth), i0.ɵɵdirectiveInject(i2.MatDialog), i0.ɵɵdirectiveInject(i3.AuthProcessService)); };
NgxAuthFirebaseuiAvatarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxAuthFirebaseuiAvatarComponent, selectors: [["ngx-auth-firebaseui-avatar"]], inputs: { layout: "layout", canLogout: "canLogout", links: "links", canViewAccount: "canViewAccount", canDeleteAccount: "canDeleteAccount", canEditAccount: "canEditAccount", textProfile: "textProfile", textSignOut: "textSignOut" }, outputs: { onSignOut: "onSignOut" }, decls: 14, vars: 13, consts: [["class", "ngx-auth-firebaseui-avatar-button", "aria-label", "Open x-positioned menu", "mat-mini-fab", "", "style", "background-size: cover", 3, "matMenuTriggerFor", "matTooltip", "background-image", 4, "ngIf"], ["xPosition", "before", 1, "before", "ngx-auth-firebaseui-avatar-menu"], ["posXMenu", "matMenu"], ["fxLayout", "row", "fxLayout.xs", "column", 2, "padding-left", "10px", "padding-right", "10px", 3, "ngStyle"], ["mat-fab", "", "style", "background-size: cover", 3, "background-image", 4, "ngIf"], ["fxLayout", "column", 2, "padding-left", "10px", "padding-right", "10px"], ["mat-card-title", ""], ["mat-card-subtitle", "", 2, "font-style", "italic"], ["fxFlex", "100", "fxLayout", "column", 3, "ngStyle"], ["class", "links-menu", 4, "ngFor", "ngForOf"], ["color", "primary", "fxLayoutAlign", "center", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["color", "warn", "fxLayoutAlign", "center", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["aria-label", "Open x-positioned menu", "mat-mini-fab", "", 1, "ngx-auth-firebaseui-avatar-button", 2, "background-size", "cover", 3, "matMenuTriggerFor", "matTooltip"], [4, "ngIf"], ["mat-fab", "", 2, "background-size", "cover"], [1, "links-menu"], ["mat-menu-item", "", 3, "click"], ["color", "primary", "fxLayoutAlign", "center", "mat-raised-button", "", 3, "click"], ["color", "warn", "fxLayoutAlign", "center", "mat-raised-button", "", 3, "click"]], template: function NgxAuthFirebaseuiAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxAuthFirebaseuiAvatarComponent_button_0_Template, 2, 5, "button", 0);
        i0.ɵɵelementStart(1, "mat-menu", 1, 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, NgxAuthFirebaseuiAvatarComponent_button_4_Template, 2, 3, "button", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "strong", 6);
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "em", 7);
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 8);
        i0.ɵɵtemplate(11, NgxAuthFirebaseuiAvatarComponent_div_11_Template, 5, 2, "div", 9);
        i0.ɵɵtemplate(12, NgxAuthFirebaseuiAvatarComponent_button_12_Template, 2, 1, "button", 10);
        i0.ɵɵtemplate(13, NgxAuthFirebaseuiAvatarComponent_button_13_Template, 2, 1, "button", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.user);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(9, _c0, ctx.layout === "default" ? 0 : 10));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.layout === "default");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.user == null ? null : ctx.user.displayName);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.user == null ? null : ctx.user.email);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(11, _c1, ctx.layout === "default" ? 0 : 10));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.links);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.canViewAccount);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.canLogout);
    } }, directives: [i4.NgIf, i5.MatMenu, i6.DefaultLayoutDirective, i4.NgStyle, i7.DefaultStyleDirective, i8.MatCardTitle, i8.MatCardSubtitle, i6.DefaultFlexDirective, i4.NgForOf, i9.MatButton, i5.MatMenuTrigger, i10.MatTooltip, i5.MatMenuItem, i11.MatIcon, i6.DefaultLayoutAlignDirective], styles: [".mat-raised-button[_ngcontent-%COMP%]{margin:.2rem 1rem}.links-menu[_ngcontent-%COMP%]{text-align:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxAuthFirebaseuiAvatarComponent, [{
        type: Component,
        args: [{ selector: "ngx-auth-firebaseui-avatar", template: "<button *ngIf=\"user\"\n        class=\"ngx-auth-firebaseui-avatar-button\"\n        [matMenuTriggerFor]=\"posXMenu\"\n        [matTooltip]=\"user?.displayName\"\n        [style.background-image]=\"'url(' + user?.photoURL + ')'\"\n        aria-label=\"Open x-positioned menu\"\n        mat-mini-fab\n        style=\"background-size: cover\">\n  <span *ngIf=\"!user?.photoURL\">{{displayNameInitials || ''}}</span>\n</button>\n\n<mat-menu #posXMenu=\"matMenu\" class=\"before ngx-auth-firebaseui-avatar-menu\" xPosition=\"before\" >\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" style=\"padding-left: 10px; padding-right: 10px\" [ngStyle]=\"{ 'padding-top.px': layout === 'default' ? 0 : 10 }\">\n    <button [style.background-image]=\"user?.photoURL ? 'url(' + user?.photoURL + ')' : ''\"\n            mat-fab\n            style=\"background-size: cover\"\n            *ngIf=\"layout === 'default'\">\n      <span *ngIf=\"!user?.photoURL\">{{displayNameInitials || ''}}</span>\n    </button>\n    <div fxLayout=\"column\" style=\"padding-left: 10px; padding-right: 10px\">\n      <strong mat-card-title>{{user?.displayName}}</strong>\n      <em mat-card-subtitle style=\"font-style: italic\">{{user?.email}}</em>\n    </div>\n  </div>\n\n  <div fxFlex=\"100\" fxLayout=\"column\" [ngStyle]=\"{ 'padding-bottom.px': layout === 'default' ? 0 : 10 } \">\n    <div *ngFor=\"let menuItem of links\" class=\"links-menu\">\n      <button (click)=\"menuItem?.callback()\" mat-menu-item>\n        <mat-icon>{{menuItem?.icon}}</mat-icon>\n        {{menuItem?.text}}</button>\n    </div>\n    <button *ngIf=\"canViewAccount\" (click)=\"openProfile()\" color=\"primary\" fxLayoutAlign=\"center\" mat-raised-button>{{ textProfile }}\n    </button>\n    <button (click)=\"signOut()\" *ngIf=\"canLogout\" color=\"warn\" fxLayoutAlign=\"center\" mat-raised-button>{{ textSignOut }}\n    </button>\n  </div>\n</mat-menu>\n", styles: [".mat-raised-button{margin:.2rem 1rem}.links-menu{text-align:center}\n"] }]
    }], function () { return [{ type: i1.AngularFireAuth }, { type: i2.MatDialog }, { type: i3.AuthProcessService }]; }, { layout: [{
            type: Input
        }], canLogout: [{
            type: Input
        }], links: [{
            type: Input
        }], canViewAccount: [{
            type: Input
        }], canDeleteAccount: [{
            type: Input
        }], canEditAccount: [{
            type: Input
        }], textProfile: [{
            type: Input
        }], textSignOut: [{
            type: Input
        }], onSignOut: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1dGgtZmlyZWJhc2V1aS1hdmF0YXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1dGgtZmlyZWJhc2V1aS9zcmMvbGliL2NvbXBvbmVudHMvbmd4LWF1dGgtZmlyZWJhc2V1aS1hdmF0YXIvbmd4LWF1dGgtZmlyZWJhc2V1aS1hdmF0YXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1dGgtZmlyZWJhc2V1aS9zcmMvbGliL2NvbXBvbmVudHMvbmd4LWF1dGgtZmlyZWJhc2V1aS1hdmF0YXIvbmd4LWF1dGgtZmlyZWJhc2V1aS1hdmF0YXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkvRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUNFakMsNEJBQThCO0lBQUEsWUFBNkI7SUFBQSxpQkFBTzs7O0lBQXBDLGVBQTZCO0lBQTdCLHNEQUE2Qjs7O0lBUjdELGtDQU91QztJQUNyQyw2RkFBa0U7SUFDcEUsaUJBQVM7Ozs7SUFMRCxzR0FBd0Q7SUFGeEQsdUNBQThCLG9FQUFBO0lBTTdCLGVBQXFCO0lBQXJCLDJFQUFxQjs7O0lBU3hCLDRCQUE4QjtJQUFBLFlBQTZCO0lBQUEsaUJBQU87OztJQUFwQyxlQUE2QjtJQUE3QixzREFBNkI7OztJQUo3RCxrQ0FHcUM7SUFDbkMsNkZBQWtFO0lBQ3BFLGlCQUFTOzs7SUFMRCxpS0FBOEU7SUFJN0UsZUFBcUI7SUFBckIsMkVBQXFCOzs7O0lBUzlCLCtCQUF1RDtJQUNyRCxrQ0FBcUQ7SUFBN0Msd09BQVMsc0JB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RGIsS0FBSztZQUlOLGdCQUFnQjtrQkFEZixLQUFLO1lBSU4sY0FBYztrQkFEYixLQUFLO1lBSU4sV0FBVztrQkFEVixLQUFLO1lBSU4sV0FBVztrQkFEVixLQUFLO1lBS04sU0FBUztrQkFEUixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZUF1dGggfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9jb21wYXQvYXV0aFwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9jb21wYXQvYXBwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5pbXBvcnQgeyBVc2VyQ29tcG9uZW50IH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBBdXRoUHJvY2Vzc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aC1wcm9jZXNzLnNlcnZpY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBMaW5rTWVudUl0ZW0ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gIGNhbGxiYWNrPzogRnVuY3Rpb247XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJuZ3gtYXV0aC1maXJlYmFzZXVpLWF2YXRhclwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL25neC1hdXRoLWZpcmViYXNldWktYXZhdGFyLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9uZ3gtYXV0aC1maXJlYmFzZXVpLWF2YXRhci5jb21wb25lbnQuc2Nzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4QXV0aEZpcmViYXNldWlBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBsYXlvdXQ6IFwiZGVmYXVsdFwiIHwgXCJzaW1wbGVcIiA9IFwiZGVmYXVsdFwiO1xuXG4gIEBJbnB1dCgpXG4gIGNhbkxvZ291dCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgbGlua3M6IExpbmtNZW51SXRlbVtdO1xuXG4gIEBJbnB1dCgpXG4gIGNhblZpZXdBY2NvdW50ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBjYW5EZWxldGVBY2NvdW50ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBjYW5FZGl0QWNjb3VudCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgdGV4dFByb2ZpbGUgPSBcIlByb2ZpbGVcIjtcblxuICBASW5wdXQoKVxuICB0ZXh0U2lnbk91dCA9IFwiU2lnbiBPdXRcIjtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpXG4gIG9uU2lnbk91dDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHVzZXI6IGZpcmViYXNlLlVzZXI7XG4gIHVzZXIkOiBPYnNlcnZhYmxlPGZpcmViYXNlLlVzZXIgfCBudWxsPjtcbiAgZGlzcGxheU5hbWVJbml0aWFsczogc3RyaW5nIHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWZhOiBBbmd1bGFyRmlyZUF1dGgsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZywgcHJpdmF0ZSBhdXRoUHJvY2VzczogQXV0aFByb2Nlc3NTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlciQgPSB0aGlzLmFmYS51c2VyO1xuICAgIHRoaXMudXNlciQuc3Vic2NyaWJlKCh1c2VyOiBmaXJlYmFzZS5Vc2VyKSA9PiB7XG4gICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgdGhpcy5kaXNwbGF5TmFtZUluaXRpYWxzID0gdXNlclxuICAgICAgICA/IHRoaXMuZ2V0RGlzcGxheU5hbWVJbml0aWFscyh1c2VyLmRpc3BsYXlOYW1lKVxuICAgICAgICA6IG51bGw7XG4gICAgfSk7XG4gIH1cblxuICBnZXREaXNwbGF5TmFtZUluaXRpYWxzKGRpc3BsYXlOYW1lOiBzdHJpbmcgfCBudWxsKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgaWYgKCFkaXNwbGF5TmFtZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxzUmVnRXhwOiBSZWdFeHBNYXRjaEFycmF5ID0gZGlzcGxheU5hbWUubWF0Y2goL1xcYlxcdy9nKSB8fCBbXTtcbiAgICBjb25zdCBpbml0aWFscyA9IChcbiAgICAgIChpbml0aWFsc1JlZ0V4cC5zaGlmdCgpIHx8IFwiXCIpICsgKGluaXRpYWxzUmVnRXhwLnBvcCgpIHx8IFwiXCIpXG4gICAgKS50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiBpbml0aWFscztcbiAgfVxuXG4gIG9wZW5Qcm9maWxlKCkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oVXNlckNvbXBvbmVudCk7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgaW5zdGFuY2UuY2FuRGVsZXRlQWNjb3VudCA9IHRoaXMuY2FuRGVsZXRlQWNjb3VudDtcbiAgICBpbnN0YW5jZS5jYW5FZGl0QWNjb3VudCA9IHRoaXMuY2FuRWRpdEFjY291bnQ7XG4gICAgaW5zdGFuY2VcbiAgICAub25TaWduT3V0XG4gICAgLnBpcGUoXG4gICAgICB0YWtlKDEpXG4gICAgICApLnN1YnNjcmliZShfID0+IHRoaXMub25TaWduT3V0LmVtaXQoKSk7IC8vIHByb3BhZ2F0ZSB0aGUgb25TaWdub3V0IGV2ZW50XG4gICAgaW5zdGFuY2VcbiAgICAub25BY2NvdW50RWRpdGVkXG4gICAgLnBpcGUoXG4gICAgICB0YWtlKDEpXG4gICAgKS5zdWJzY3JpYmUoXyA9PiB0aGlzLmRpc3BsYXlOYW1lSW5pdGlhbHMgPSB0aGlzLmdldERpc3BsYXlOYW1lSW5pdGlhbHModGhpcy5hdXRoUHJvY2Vzcy51c2VyLmRpc3BsYXlOYW1lKSkgLy8gdXBkYXRlIGRpc3BsYXkgbmFtZSBpbml0aWFscz9cbiAgfVxuXG4gIGFzeW5jIHNpZ25PdXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuYWZhLnNpZ25PdXQoKTtcbiAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXG4gICAgICB0aGlzLm9uU2lnbk91dC5lbWl0KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXG4gICAgICBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3IgaGFwcGVuZWQgd2hpbGUgc2lnbmluZyBvdXQhXCIsIGUpO1xuICAgIH1cbiAgfVxufVxuIiwiPGJ1dHRvbiAqbmdJZj1cInVzZXJcIlxuICAgICAgICBjbGFzcz1cIm5neC1hdXRoLWZpcmViYXNldWktYXZhdGFyLWJ1dHRvblwiXG4gICAgICAgIFttYXRNZW51VHJpZ2dlckZvcl09XCJwb3NYTWVudVwiXG4gICAgICAgIFttYXRUb29sdGlwXT1cInVzZXI/LmRpc3BsYXlOYW1lXCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtaW1hZ2VdPVwiJ3VybCgnICsgdXNlcj8ucGhvdG9VUkwgKyAnKSdcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiT3BlbiB4LXBvc2l0aW9uZWQgbWVudVwiXG4gICAgICAgIG1hdC1taW5pLWZhYlxuICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtc2l6ZTogY292ZXJcIj5cbiAgPHNwYW4gKm5nSWY9XCIhdXNlcj8ucGhvdG9VUkxcIj57e2Rpc3BsYXlOYW1lSW5pdGlhbHMgfHwgJyd9fTwvc3Bhbj5cbjwvYnV0dG9uPlxuXG48bWF0LW1lbnUgI3Bvc1hNZW51PVwibWF0TWVudVwiIGNsYXNzPVwiYmVmb3JlIG5neC1hdXRoLWZpcmViYXNldWktYXZhdGFyLW1lbnVcIiB4UG9zaXRpb249XCJiZWZvcmVcIiA+XG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dC54cz1cImNvbHVtblwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiAxMHB4OyBwYWRkaW5nLXJpZ2h0OiAxMHB4XCIgW25nU3R5bGVdPVwieyAncGFkZGluZy10b3AucHgnOiBsYXlvdXQgPT09ICdkZWZhdWx0JyA/IDAgOiAxMCB9XCI+XG4gICAgPGJ1dHRvbiBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCJ1c2VyPy5waG90b1VSTCA/ICd1cmwoJyArIHVzZXI/LnBob3RvVVJMICsgJyknIDogJydcIlxuICAgICAgICAgICAgbWF0LWZhYlxuICAgICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXCJcbiAgICAgICAgICAgICpuZ0lmPVwibGF5b3V0ID09PSAnZGVmYXVsdCdcIj5cbiAgICAgIDxzcGFuICpuZ0lmPVwiIXVzZXI/LnBob3RvVVJMXCI+e3tkaXNwbGF5TmFtZUluaXRpYWxzIHx8ICcnfX08L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiAxMHB4OyBwYWRkaW5nLXJpZ2h0OiAxMHB4XCI+XG4gICAgICA8c3Ryb25nIG1hdC1jYXJkLXRpdGxlPnt7dXNlcj8uZGlzcGxheU5hbWV9fTwvc3Ryb25nPlxuICAgICAgPGVtIG1hdC1jYXJkLXN1YnRpdGxlIHN0eWxlPVwiZm9udC1zdHlsZTogaXRhbGljXCI+e3t1c2VyPy5lbWFpbH19PC9lbT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtblwiIFtuZ1N0eWxlXT1cInsgJ3BhZGRpbmctYm90dG9tLnB4JzogbGF5b3V0ID09PSAnZGVmYXVsdCcgPyAwIDogMTAgfSBcIj5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBtZW51SXRlbSBvZiBsaW5rc1wiIGNsYXNzPVwibGlua3MtbWVudVwiPlxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwibWVudUl0ZW0/LmNhbGxiYWNrKClcIiBtYXQtbWVudS1pdGVtPlxuICAgICAgICA8bWF0LWljb24+e3ttZW51SXRlbT8uaWNvbn19PC9tYXQtaWNvbj5cbiAgICAgICAge3ttZW51SXRlbT8udGV4dH19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImNhblZpZXdBY2NvdW50XCIgKGNsaWNrKT1cIm9wZW5Qcm9maWxlKClcIiBjb2xvcj1cInByaW1hcnlcIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgbWF0LXJhaXNlZC1idXR0b24+e3sgdGV4dFByb2ZpbGUgfX1cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJzaWduT3V0KClcIiAqbmdJZj1cImNhbkxvZ291dFwiIGNvbG9yPVwid2FyblwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBtYXQtcmFpc2VkLWJ1dHRvbj57eyB0ZXh0U2lnbk91dCB9fVxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvbWF0LW1lbnU+XG4iXX0=