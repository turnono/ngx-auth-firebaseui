import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/flex-layout/flex";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/checkbox";
import * as i6 from "@angular/forms";
function LegalityDialogComponent_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 5);
    i0.ɵɵlistener("ngModelChange", function LegalityDialogComponent_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.checkTOS = $event; });
    i0.ɵɵtext(1, " I agree to the ");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "\u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "a", 6);
    i0.ɵɵtext(5, " Terms of Service and Conditions ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r0.checkTOS);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("href", ctx_r0.data.tosUrl, i0.ɵɵsanitizeUrl);
} }
function LegalityDialogComponent_mat_checkbox_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 5);
    i0.ɵɵlistener("ngModelChange", function LegalityDialogComponent_mat_checkbox_5_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.checkPrivacyPolicy = $event; });
    i0.ɵɵtext(1, " I have read and agree to the ");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "\u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "a", 6);
    i0.ɵɵtext(5, " Privacy ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r1.checkPrivacyPolicy);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("href", ctx_r1.data.privacyPolicyUrl, i0.ɵɵsanitizeUrl);
} }
export class LegalityDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle, id-blacklist, id-match
        this._disableConfirmActionButton = false;
    }
    get disableConfirmActionButton() {
        if (this.data.tosUrl && this.data.privacyPolicyUrl) {
            this._disableConfirmActionButton = !(this.checkTOS && this.checkPrivacyPolicy);
        }
        else if (this.data.tosUrl && !this.data.privacyPolicyUrl) {
            this._disableConfirmActionButton = !this.checkTOS;
        }
        else if (!this.data.tosUrl && this.data.privacyPolicyUrl) {
            this._disableConfirmActionButton = !this.checkPrivacyPolicy;
        }
        return this._disableConfirmActionButton;
    }
    closeDialog() {
        const result = {
            checked: !this.disableConfirmActionButton,
            authProvider: this.data.authProvider
        };
        this.dialogRef.close(result);
    }
}
LegalityDialogComponent.ɵfac = function LegalityDialogComponent_Factory(t) { return new (t || LegalityDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
LegalityDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LegalityDialogComponent, selectors: [["ngx-auth-firebaseui-legality-dialog"]], decls: 11, vars: 3, consts: [["matDialogTitle", ""], ["fxLayout", "column", "fxLayoutAlign", "start"], [3, "ngModel", "ngModelChange", 4, "ngIf"], ["color", "warn", "id", "decline-action", "mat-raised-button", "", "matDialogClose", ""], ["color", "primary", "id", "confirm-action", "mat-raised-button", "", 3, "disabled", "click"], [3, "ngModel", "ngModelChange"], ["target", "_blank", 3, "href"]], template: function LegalityDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1, "Legal requirements");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-dialog-content");
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵtemplate(4, LegalityDialogComponent_mat_checkbox_4_Template, 6, 2, "mat-checkbox", 2);
        i0.ɵɵtemplate(5, LegalityDialogComponent_mat_checkbox_5_Template, 6, 2, "mat-checkbox", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-dialog-actions");
        i0.ɵɵelementStart(7, "button", 3);
        i0.ɵɵtext(8, "Decline ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 4);
        i0.ɵɵlistener("click", function LegalityDialogComponent_Template_button_click_9_listener() { return ctx.closeDialog(); });
        i0.ɵɵtext(10, "Confirm ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.data.tosUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data.privacyPolicyUrl);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", ctx.disableConfirmActionButton);
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i2.DefaultLayoutDirective, i2.DefaultLayoutAlignDirective, i3.NgIf, i1.MatDialogActions, i4.MatButton, i1.MatDialogClose, i5.MatCheckbox, i6.NgControlStatus, i6.NgModel], styles: [".mat-checkbox-label{display:flex;flex-wrap:wrap}mat-dialog-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-top:1.5rem}mat-dialog-actions[_ngcontent-%COMP%]{margin-top:1rem}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LegalityDialogComponent, [{
        type: Component,
        args: [{ selector: 'ngx-auth-firebaseui-legality-dialog', template: "<h1 matDialogTitle>Legal requirements</h1>\n\n<mat-dialog-content>\n  <div fxLayout=\"column\" fxLayoutAlign=\"start\">\n    <mat-checkbox *ngIf=\"this.data.tosUrl\" [(ngModel)]=\"checkTOS\">\n      I agree to the\n      <span>&nbsp;</span>\n      <a [href]=\"this.data.tosUrl\"\n         target=\"_blank\">\n        Terms of Service and Conditions\n      </a>\n    </mat-checkbox>\n\n    <mat-checkbox *ngIf=\"this.data.privacyPolicyUrl\"\n                  [(ngModel)]=\"checkPrivacyPolicy\">\n      I have read and agree to the\n      <span>&nbsp;</span>\n      <a [href]=\"this.data.privacyPolicyUrl\"\n         target=\"_blank\">\n        Privacy\n      </a>\n    </mat-checkbox>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button color=\"warn\"\n          id=\"decline-action\"\n          mat-raised-button\n          matDialogClose>Decline\n  </button>\n  <button (click)=\"closeDialog()\"\n          [disabled]=\"disableConfirmActionButton\"\n          color=\"primary\"\n          id=\"confirm-action\"\n          mat-raised-button>Confirm\n  </button>\n</mat-dialog-actions>\n\n", styles: ["::ng-deep .mat-checkbox-label{display:flex;flex-wrap:wrap}mat-dialog-content div{margin-top:1.5rem}mat-dialog-actions{margin-top:1rem}\n"] }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnYWxpdHktZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXRoLWZpcmViYXNldWkvc3JjL2xpYi9jb21wb25lbnRzL2xlZ2FsaXR5LWRpYWxvZy9sZWdhbGl0eS1kaWFsb2cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1dGgtZmlyZWJhc2V1aS9zcmMvbGliL2NvbXBvbmVudHMvbGVnYWxpdHktZGlhbG9nL2xlZ2FsaXR5LWRpYWxvZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsZUFBZSxFQUFlLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7SUNHbkUsdUNBQThEO0lBQXZCLHFPQUFzQjtJQUMzRCxnQ0FDQTtJQUFBLDRCQUFNO0lBQUEsc0JBQU07SUFBQSxpQkFBTztJQUNuQiw0QkFDbUI7SUFDakIsaURBQ0Y7SUFBQSxpQkFBSTtJQUNOLGlCQUFlOzs7SUFQd0IseUNBQXNCO0lBR3hELGVBQXlCO0lBQXpCLDJEQUF5Qjs7OztJQU05Qix1Q0FDK0M7SUFBakMsK09BQWdDO0lBQzVDLDhDQUNBO0lBQUEsNEJBQU07SUFBQSxzQkFBTTtJQUFBLGlCQUFPO0lBQ25CLDRCQUNtQjtJQUNqQix5QkFDRjtJQUFBLGlCQUFJO0lBQ04saUJBQWU7OztJQVBELG1EQUFnQztJQUd6QyxlQUFtQztJQUFuQyxxRUFBbUM7O0FEUjVDLE1BQU0sT0FBTyx1QkFBdUI7SUFLbEMsWUFBbUIsU0FBZ0QsRUFDdkIsSUFBMEI7UUFEbkQsY0FBUyxHQUFULFNBQVMsQ0FBdUM7UUFDdkIsU0FBSSxHQUFKLElBQUksQ0FBc0I7UUFHdEUsOEdBQThHO1FBQ3RHLGdDQUEyQixHQUFHLEtBQUssQ0FBQztJQUg1QyxDQUFDO0lBS0QsSUFBSSwwQkFBMEI7UUFDNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ2xELElBQUksQ0FBQywyQkFBMkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUNoRjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFELElBQUksQ0FBQywyQkFBMkIsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDbkQ7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxRCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDN0Q7UUFDRCxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUMxQyxDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sTUFBTSxHQUF5QjtZQUNuQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsMEJBQTBCO1lBQ3pDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7U0FDckMsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7OzhGQTdCVSx1QkFBdUIsOERBTWQsZUFBZTswRUFOeEIsdUJBQXVCO1FDVHBDLDZCQUFtQjtRQUFBLGtDQUFrQjtRQUFBLGlCQUFLO1FBRTFDLDBDQUFvQjtRQUNsQiw4QkFBNkM7UUFDM0MsMEZBT2U7UUFFZiwwRkFRZTtRQUNqQixpQkFBTTtRQUNSLGlCQUFxQjtRQUVyQiwwQ0FBb0I7UUFDbEIsaUNBR3VCO1FBQUEsd0JBQ3ZCO1FBQUEsaUJBQVM7UUFDVCxpQ0FJMEI7UUFKbEIsb0dBQVMsaUJBQWEsSUFBQztRQUlMLHlCQUMxQjtRQUFBLGlCQUFTO1FBQ1gsaUJBQXFCOztRQWpDRixlQUFzQjtRQUF0QixzQ0FBc0I7UUFTdEIsZUFBZ0M7UUFBaEMsZ0RBQWdDO1FBbUJ6QyxlQUF1QztRQUF2Qyx5REFBdUM7O3VGRHZCcEMsdUJBQXVCO2NBTG5DLFNBQVM7MkJBQ0UscUNBQXFDOztzQkFVbEMsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtMZWdhbGl0eURpYWxvZ1BhcmFtcywgTGVnYWxpdHlEaWFsb2dSZXN1bHR9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtYXV0aC1maXJlYmFzZXVpLWxlZ2FsaXR5LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9sZWdhbGl0eS1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sZWdhbGl0eS1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMZWdhbGl0eURpYWxvZ0NvbXBvbmVudCB7XG5cbiAgY2hlY2tUT1M6IGJvb2xlYW47XG4gIGNoZWNrUHJpdmFjeVBvbGljeTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TGVnYWxpdHlEaWFsb2dDb21wb25lbnQ+LFxuICAgICAgICAgICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IExlZ2FsaXR5RGlhbG9nUGFyYW1zKSB7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uLCBuby11bmRlcnNjb3JlLWRhbmdsZSwgaWQtYmxhY2tsaXN0LCBpZC1tYXRjaFxuICBwcml2YXRlIF9kaXNhYmxlQ29uZmlybUFjdGlvbkJ1dHRvbiA9IGZhbHNlO1xuXG4gIGdldCBkaXNhYmxlQ29uZmlybUFjdGlvbkJ1dHRvbigpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5kYXRhLnRvc1VybCAmJiB0aGlzLmRhdGEucHJpdmFjeVBvbGljeVVybCkge1xuICAgICAgdGhpcy5fZGlzYWJsZUNvbmZpcm1BY3Rpb25CdXR0b24gPSAhKHRoaXMuY2hlY2tUT1MgJiYgdGhpcy5jaGVja1ByaXZhY3lQb2xpY3kpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLnRvc1VybCAmJiAhdGhpcy5kYXRhLnByaXZhY3lQb2xpY3lVcmwpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVDb25maXJtQWN0aW9uQnV0dG9uID0gIXRoaXMuY2hlY2tUT1M7XG4gICAgfSBlbHNlIGlmICghdGhpcy5kYXRhLnRvc1VybCAmJiB0aGlzLmRhdGEucHJpdmFjeVBvbGljeVVybCkge1xuICAgICAgdGhpcy5fZGlzYWJsZUNvbmZpcm1BY3Rpb25CdXR0b24gPSAhdGhpcy5jaGVja1ByaXZhY3lQb2xpY3k7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlQ29uZmlybUFjdGlvbkJ1dHRvbjtcbiAgfVxuXG4gIGNsb3NlRGlhbG9nKCkge1xuICAgIGNvbnN0IHJlc3VsdDogTGVnYWxpdHlEaWFsb2dSZXN1bHQgPSB7XG4gICAgICBjaGVja2VkOiAhdGhpcy5kaXNhYmxlQ29uZmlybUFjdGlvbkJ1dHRvbixcbiAgICAgIGF1dGhQcm92aWRlcjogdGhpcy5kYXRhLmF1dGhQcm92aWRlclxuICAgIH07XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UocmVzdWx0KTtcbiAgfVxuXG59XG4iLCI8aDEgbWF0RGlhbG9nVGl0bGU+TGVnYWwgcmVxdWlyZW1lbnRzPC9oMT5cblxuPG1hdC1kaWFsb2ctY29udGVudD5cbiAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0QWxpZ249XCJzdGFydFwiPlxuICAgIDxtYXQtY2hlY2tib3ggKm5nSWY9XCJ0aGlzLmRhdGEudG9zVXJsXCIgWyhuZ01vZGVsKV09XCJjaGVja1RPU1wiPlxuICAgICAgSSBhZ3JlZSB0byB0aGVcbiAgICAgIDxzcGFuPiZuYnNwOzwvc3Bhbj5cbiAgICAgIDxhIFtocmVmXT1cInRoaXMuZGF0YS50b3NVcmxcIlxuICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIFRlcm1zIG9mIFNlcnZpY2UgYW5kIENvbmRpdGlvbnNcbiAgICAgIDwvYT5cbiAgICA8L21hdC1jaGVja2JveD5cblxuICAgIDxtYXQtY2hlY2tib3ggKm5nSWY9XCJ0aGlzLmRhdGEucHJpdmFjeVBvbGljeVVybFwiXG4gICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImNoZWNrUHJpdmFjeVBvbGljeVwiPlxuICAgICAgSSBoYXZlIHJlYWQgYW5kIGFncmVlIHRvIHRoZVxuICAgICAgPHNwYW4+Jm5ic3A7PC9zcGFuPlxuICAgICAgPGEgW2hyZWZdPVwidGhpcy5kYXRhLnByaXZhY3lQb2xpY3lVcmxcIlxuICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIFByaXZhY3lcbiAgICAgIDwvYT5cbiAgICA8L21hdC1jaGVja2JveD5cbiAgPC9kaXY+XG48L21hdC1kaWFsb2ctY29udGVudD5cblxuPG1hdC1kaWFsb2ctYWN0aW9ucz5cbiAgPGJ1dHRvbiBjb2xvcj1cIndhcm5cIlxuICAgICAgICAgIGlkPVwiZGVjbGluZS1hY3Rpb25cIlxuICAgICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgbWF0RGlhbG9nQ2xvc2U+RGVjbGluZVxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiAoY2xpY2spPVwiY2xvc2VEaWFsb2coKVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVDb25maXJtQWN0aW9uQnV0dG9uXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGlkPVwiY29uZmlybS1hY3Rpb25cIlxuICAgICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uPkNvbmZpcm1cbiAgPC9idXR0b24+XG48L21hdC1kaWFsb2ctYWN0aW9ucz5cblxuIl19