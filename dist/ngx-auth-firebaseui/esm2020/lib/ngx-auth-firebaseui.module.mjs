// @angular/*
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
// @angular/fire
import { FIREBASE_APP_NAME, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// @angular/material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { NgxAuthFirebaseuiLoginComponent } from './components/ngx-auth-firebaseui-login/ngx-auth-firebaseui-login.component';
import { NgxAuthFirebaseuiRegisterComponent } from './components/ngx-auth-firebaseui-register/ngx-auth-firebaseui-register.component';
// ngx-auth-firebaseui
// components
import { AuthComponent } from './components/ngx-auth-firebaseui/auth.component';
import { UserComponent } from './components/ngx-auth-firebaseui-user/user.component';
import { AuthProvidersComponent } from './components/providers/auth.providers.component';
import { EmailConfirmationComponent } from './components/email-confirmation/email-confirmation.component';
import { ngxAuthFirebaseUIConfigFactory } from './interfaces/config.interface';
import { NgxAuthFirebaseuiAvatarComponent } from './components/ngx-auth-firebaseui-avatar/ngx-auth-firebaseui-avatar.component';
import { LegalityDialogComponent } from './components/legality-dialog/legality-dialog.component';
// guards
import { LoggedInGuard } from './guards/logged-in.guard';
// services
import { FirestoreSyncService } from './services/firestore-sync.service';
import { AuthProcessService } from './services/auth-process.service';
import { NgxAuthFirebaseUIConfigToken, UserProvidedConfigToken } from './tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/platform-browser";
import * as i3 from "./services/auth-process.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/flex-layout/flex";
import * as i6 from "@angular/material/progress-bar";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/router";
import * as i9 from "@angular/material/tabs";
import * as i10 from "@angular/material/card";
import * as i11 from "@angular/forms";
import * as i12 from "@angular/material/form-field";
import * as i13 from "@angular/material/input";
import * as i14 from "@angular-material-extensions/password-strength";
import * as i15 from "@angular/material/divider";
// interfaces
// ###################################################################################################
// Export module's public API
// components
export { LegalityDialogComponent } from './components/legality-dialog/legality-dialog.component';
export { NgxAuthFirebaseuiAvatarComponent } from './components/ngx-auth-firebaseui-avatar/ngx-auth-firebaseui-avatar.component';
export { UserComponent } from './components/ngx-auth-firebaseui-user/user.component';
export { AuthComponent } from './components/ngx-auth-firebaseui/auth.component';
export { AuthProvidersComponent, Layout, Theme } from './components/providers/auth.providers.component';
export { NgxAuthFirebaseuiLoginComponent } from './components/ngx-auth-firebaseui-login/ngx-auth-firebaseui-login.component';
export { NgxAuthFirebaseuiRegisterComponent } from './components/ngx-auth-firebaseui-register/ngx-auth-firebaseui-register.component';
// guards
export { LoggedInGuard } from './guards/logged-in.guard';
// services
export { AuthProcessService, AuthProvider } from './services/auth-process.service';
export { FirestoreSyncService } from './services/firestore-sync.service';
export class NgxAuthFirebaseUIModule {
    constructor(iconRegistry, sanitizer, auth) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        auth.listenToUserEvents();
        this.registerProviderIcons();
    }
    static forRoot(configFactory, appNameFactory = () => undefined, config = {}) {
        return {
            ngModule: NgxAuthFirebaseUIModule,
            providers: [
                {
                    provide: FIREBASE_OPTIONS,
                    useValue: configFactory
                },
                {
                    provide: FIREBASE_APP_NAME,
                    useFactory: appNameFactory
                },
                { provide: UserProvidedConfigToken, useValue: config },
                {
                    provide: NgxAuthFirebaseUIConfigToken,
                    useFactory: ngxAuthFirebaseUIConfigFactory,
                    deps: [UserProvidedConfigToken]
                },
                AuthProcessService,
                FirestoreSyncService,
                LoggedInGuard
            ]
        };
    }
    registerProviderIcons() {
        this.iconRegistry
            .addSvgIcon('google', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/google.svg'))
            .addSvgIcon('apple', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/apple.svg'))
            .addSvgIcon('google-colored', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/google.svg'))
            .addSvgIcon('facebook', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/facebook.svg'))
            .addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/twitter.svg'))
            .addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/github-circle.svg'))
            .addSvgIcon('microsoft', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/microsoft.svg'))
            .addSvgIcon('yahoo', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/yahoo.svg'))
            .addSvgIcon('phone', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/phone.svg'));
    }
}
NgxAuthFirebaseUIModule.ɵfac = function NgxAuthFirebaseUIModule_Factory(t) { return new (t || NgxAuthFirebaseUIModule)(i0.ɵɵinject(i1.MatIconRegistry), i0.ɵɵinject(i2.DomSanitizer), i0.ɵɵinject(i3.AuthProcessService)); };
NgxAuthFirebaseUIModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxAuthFirebaseUIModule });
NgxAuthFirebaseUIModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            // HTTP
            RouterModule,
            HttpClientModule,
            // FLEX_LAYOUT
            FlexLayoutModule,
            // FORMS
            FormsModule,
            ReactiveFormsModule,
            // MATERIAL2
            MatTabsModule,
            MatCardModule,
            MatInputModule,
            MatButtonModule,
            MatIconModule,
            MatSnackBarModule,
            MatDividerModule,
            MatChipsModule,
            MatTooltipModule,
            MatDialogModule,
            MatCheckboxModule,
            MatProgressSpinnerModule,
            MatProgressBarModule,
            MatDialogModule,
            MatMenuModule,
            // ANGULAR MATERIAL EXTENSIONS
            MatPasswordStrengthModule,
            // ANGULARFIRE2
            AngularFireAuthModule,
            AngularFirestoreModule,
        ], 
        // LoggedInGuard,
        AngularFireAuthModule,
        AngularFirestoreModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxAuthFirebaseUIModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    // HTTP
                    RouterModule,
                    HttpClientModule,
                    // FLEX_LAYOUT
                    FlexLayoutModule,
                    // FORMS
                    FormsModule,
                    ReactiveFormsModule,
                    // MATERIAL2
                    MatTabsModule,
                    MatCardModule,
                    MatInputModule,
                    MatButtonModule,
                    MatIconModule,
                    MatSnackBarModule,
                    MatDividerModule,
                    MatChipsModule,
                    MatTooltipModule,
                    MatDialogModule,
                    MatCheckboxModule,
                    MatProgressSpinnerModule,
                    MatProgressBarModule,
                    MatDialogModule,
                    MatMenuModule,
                    // ANGULAR MATERIAL EXTENSIONS
                    MatPasswordStrengthModule,
                    // ANGULARFIRE2
                    AngularFireAuthModule,
                    AngularFirestoreModule,
                ],
                exports: [
                    AuthComponent,
                    UserComponent,
                    NgxAuthFirebaseuiAvatarComponent,
                    AuthProvidersComponent,
                    EmailConfirmationComponent,
                    // LoggedInGuard,
                    AngularFireAuthModule,
                    AngularFirestoreModule,
                    NgxAuthFirebaseuiLoginComponent,
                    NgxAuthFirebaseuiRegisterComponent
                ],
                declarations: [
                    AuthComponent,
                    UserComponent,
                    NgxAuthFirebaseuiAvatarComponent,
                    AuthProvidersComponent,
                    EmailConfirmationComponent,
                    LegalityDialogComponent,
                    NgxAuthFirebaseuiLoginComponent,
                    NgxAuthFirebaseuiRegisterComponent
                ],
                entryComponents: [
                    UserComponent,
                    LegalityDialogComponent
                ]
            }]
    }], function () { return [{ type: i1.MatIconRegistry }, { type: i2.DomSanitizer }, { type: i3.AuthProcessService }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxAuthFirebaseUIModule, { declarations: [AuthComponent,
        UserComponent,
        NgxAuthFirebaseuiAvatarComponent,
        AuthProvidersComponent,
        EmailConfirmationComponent,
        LegalityDialogComponent,
        NgxAuthFirebaseuiLoginComponent,
        NgxAuthFirebaseuiRegisterComponent], imports: [CommonModule,
        // HTTP
        RouterModule,
        HttpClientModule,
        // FLEX_LAYOUT
        FlexLayoutModule,
        // FORMS
        FormsModule,
        ReactiveFormsModule,
        // MATERIAL2
        MatTabsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatDividerModule,
        MatChipsModule,
        MatTooltipModule,
        MatDialogModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatMenuModule,
        // ANGULAR MATERIAL EXTENSIONS
        MatPasswordStrengthModule,
        // ANGULARFIRE2
        AngularFireAuthModule,
        AngularFirestoreModule], exports: [AuthComponent,
        UserComponent,
        NgxAuthFirebaseuiAvatarComponent,
        AuthProvidersComponent,
        EmailConfirmationComponent,
        // LoggedInGuard,
        AngularFireAuthModule,
        AngularFirestoreModule,
        NgxAuthFirebaseuiLoginComponent,
        NgxAuthFirebaseuiRegisterComponent] }); })();
i0.ɵɵsetComponentScope(AuthComponent, [i4.NgIf, i5.DefaultLayoutDirective, i5.DefaultLayoutAlignDirective, EmailConfirmationComponent, i1.MatIcon, i6.MatProgressBar, i7.MatAnchor, i8.RouterLinkWithHref, i7.MatButton, i9.MatTabGroup, i9.MatTab, i10.MatCard, i10.MatCardTitle, i10.MatCardContent, i11.ɵNgNoValidate, i11.NgControlStatusGroup, i11.FormGroupDirective, i12.MatFormField, i12.MatLabel, i11.DefaultValueAccessor, i13.MatInput, i11.NgControlStatus, i11.FormControlName, i11.RequiredValidator, i12.MatSuffix, i12.MatError, i11.MaxLengthValidator, i11.MinLengthValidator, i14.MatPassToggleVisibilityComponent, i12.MatHint, i10.MatCardFooter, i11.FormControlDirective, i14.MatPasswordStrengthComponent, i9.MatTabLabel, i10.MatCardActions, i15.MatDivider, AuthProvidersComponent], [i4.AsyncPipe]);
i0.ɵɵsetComponentScope(NgxAuthFirebaseuiLoginComponent, [i5.DefaultLayoutDirective, i5.DefaultLayoutAlignDirective, i4.NgIf, i11.ɵNgNoValidate, i11.NgControlStatusGroup, i11.FormGroupDirective, i12.MatFormField, i11.DefaultValueAccessor, i13.MatInput, i11.NgControlStatus, i11.FormControlName, i1.MatIcon, i12.MatSuffix, i12.MatError, i7.MatButton, AuthProvidersComponent], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1dGgtZmlyZWJhc2V1aS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXV0aC1maXJlYmFzZXVpL3NyYy9saWIvbmd4LWF1dGgtZmlyZWJhc2V1aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYTtBQUNiLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELGdCQUFnQjtBQUNoQixPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxvQkFBb0I7QUFDcEIsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFD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UUFDeEIsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLHNCQUFzQixhQUd0QixhQUFhO1FBQ2IsYUFBYTtRQUNiLGdDQUFnQztRQUNoQyxzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLCtCQUErQjtRQUMvQixrQ0FBa0M7dUJBR2xDLGFBQWEsdUVBSWIsMEJBQTBCLG1uQkFEMUIsc0JBQXNCO3VCQUd0QiwrQkFBK0IsdVNBSC9CLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBhbmd1bGFyLypcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtGbGV4TGF5b3V0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG4vLyBAYW5ndWxhci9maXJlXG5pbXBvcnQge0ZJUkVCQVNFX0FQUF9OQU1FLCBGSVJFQkFTRV9PUFRJT05TIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9jb21wYXQnO1xuaW1wb3J0IHsgRmlyZWJhc2VPcHRpb25zIH0gZnJvbSAnQGZpcmViYXNlL2FwcC10eXBlcyc7XG5pbXBvcnQge0FuZ3VsYXJGaXJlQXV0aE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9jb21wYXQvYXV0aCc7XG5pbXBvcnQge0FuZ3VsYXJGaXJlc3RvcmVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvY29tcGF0L2ZpcmVzdG9yZSc7XG4vLyBAYW5ndWxhci9tYXRlcmlhbFxuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRDaGlwc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHtNYXREaWFsb2dNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQge01hdERpdmlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlLCBNYXRJY29uUmVnaXN0cnl9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRNZW51TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7TWF0UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQge01hdFByb2dyZXNzU3Bpbm5lck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5pbXBvcnQge01hdFNuYWNrQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHtNYXRUYWJzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcbmltcG9ydCB7TWF0VG9vbHRpcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbmltcG9ydCB7TWF0UGFzc3dvcmRTdHJlbmd0aE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aCc7XG5cblxuaW1wb3J0IHtOZ3hBdXRoRmlyZWJhc2V1aUxvZ2luQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbmd4LWF1dGgtZmlyZWJhc2V1aS1sb2dpbi9uZ3gtYXV0aC1maXJlYmFzZXVpLWxvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQge05neEF1dGhGaXJlYmFzZXVpUmVnaXN0ZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9uZ3gtYXV0aC1maXJlYmFzZXVpLXJlZ2lzdGVyL25neC1hdXRoLWZpcmViYXNldWktcmVnaXN0ZXIuY29tcG9uZW50JztcblxuXG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG4vLyBuZ3gtYXV0aC1maXJlYmFzZXVpXG4vLyBjb21wb25lbnRzXG5pbXBvcnQge0F1dGhDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9uZ3gtYXV0aC1maXJlYmFzZXVpL2F1dGguY29tcG9uZW50JztcbmltcG9ydCB7VXNlckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25neC1hdXRoLWZpcmViYXNldWktdXNlci91c2VyLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhQcm92aWRlcnNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9wcm92aWRlcnMvYXV0aC5wcm92aWRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7RW1haWxDb25maXJtYXRpb25Db21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9lbWFpbC1jb25maXJtYXRpb24vZW1haWwtY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge05neEF1dGhGaXJlYmFzZVVJQ29uZmlnLCBuZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZ0ZhY3Rvcnl9IGZyb20gJy4vaW50ZXJmYWNlcy9jb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7Tmd4QXV0aEZpcmViYXNldWlBdmF0YXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9uZ3gtYXV0aC1maXJlYmFzZXVpLWF2YXRhci9uZ3gtYXV0aC1maXJlYmFzZXVpLWF2YXRhci5jb21wb25lbnQnO1xuaW1wb3J0IHtMZWdhbGl0eURpYWxvZ0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2xlZ2FsaXR5LWRpYWxvZy9sZWdhbGl0eS1kaWFsb2cuY29tcG9uZW50Jztcbi8vIGd1YXJkc1xuaW1wb3J0IHtMb2dnZWRJbkd1YXJkfSBmcm9tICcuL2d1YXJkcy9sb2dnZWQtaW4uZ3VhcmQnO1xuLy8gc2VydmljZXNcbmltcG9ydCB7RmlyZXN0b3JlU3luY1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZmlyZXN0b3JlLXN5bmMuc2VydmljZSc7XG5pbXBvcnQge0F1dGhQcm9jZXNzU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLXByb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge05neEF1dGhGaXJlYmFzZVVJQ29uZmlnVG9rZW4sIFVzZXJQcm92aWRlZENvbmZpZ1Rva2VufSBmcm9tICcuL3Rva2Vucyc7XG4vLyBpbnRlcmZhY2VzXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vIEV4cG9ydCBtb2R1bGUncyBwdWJsaWMgQVBJXG4vLyBjb21wb25lbnRzXG5leHBvcnQge0xlZ2FsaXR5RGlhbG9nQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbGVnYWxpdHktZGlhbG9nL2xlZ2FsaXR5LWRpYWxvZy5jb21wb25lbnQnO1xuZXhwb3J0IHtMaW5rTWVudUl0ZW0sIE5neEF1dGhGaXJlYmFzZXVpQXZhdGFyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbmd4LWF1dGgtZmlyZWJhc2V1aS1hdmF0YXIvbmd4LWF1dGgtZmlyZWJhc2V1aS1hdmF0YXIuY29tcG9uZW50JztcbmV4cG9ydCB7VXNlckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25neC1hdXRoLWZpcmViYXNldWktdXNlci91c2VyLmNvbXBvbmVudCc7XG5leHBvcnQge0F1dGhDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9uZ3gtYXV0aC1maXJlYmFzZXVpL2F1dGguY29tcG9uZW50JztcbmV4cG9ydCB7QXV0aFByb3ZpZGVyc0NvbXBvbmVudCwgTGF5b3V0LCBUaGVtZX0gZnJvbSAnLi9jb21wb25lbnRzL3Byb3ZpZGVycy9hdXRoLnByb3ZpZGVycy5jb21wb25lbnQnO1xuZXhwb3J0IHtOZ3hBdXRoRmlyZWJhc2V1aUxvZ2luQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbmd4LWF1dGgtZmlyZWJhc2V1aS1sb2dpbi9uZ3gtYXV0aC1maXJlYmFzZXVpLWxvZ2luLmNvbXBvbmVudCc7XG5leHBvcnQge05neEF1dGhGaXJlYmFzZXVpUmVnaXN0ZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9uZ3gtYXV0aC1maXJlYmFzZXVpLXJlZ2lzdGVyL25neC1hdXRoLWZpcmViYXNldWktcmVnaXN0ZXIuY29tcG9uZW50JztcblxuXG4vLyBndWFyZHNcbmV4cG9ydCB7TG9nZ2VkSW5HdWFyZH0gZnJvbSAnLi9ndWFyZHMvbG9nZ2VkLWluLmd1YXJkJztcbi8vIGludGVyZmFjZXNcbmV4cG9ydCB7Tmd4QXV0aEZpcmViYXNlVUlDb25maWd9IGZyb20gJy4vaW50ZXJmYWNlcy9jb25maWcuaW50ZXJmYWNlJztcbi8vIHNlcnZpY2VzXG5leHBvcnQge0F1dGhQcm9jZXNzU2VydmljZSwgQXV0aFByb3ZpZGVyfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtcHJvY2Vzcy5zZXJ2aWNlJztcbmV4cG9ydCB7RmlyZXN0b3JlU3luY1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZmlyZXN0b3JlLXN5bmMuc2VydmljZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICAvLyBIVFRQXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgLy8gRkxFWF9MQVlPVVRcbiAgICBGbGV4TGF5b3V0TW9kdWxlLFxuICAgIC8vIEZPUk1TXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAvLyBNQVRFUklBTDJcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgLy8gQU5HVUxBUiBNQVRFUklBTCBFWFRFTlNJT05TXG4gICAgTWF0UGFzc3dvcmRTdHJlbmd0aE1vZHVsZSxcbiAgICAvLyBBTkdVTEFSRklSRTJcbiAgICBBbmd1bGFyRmlyZUF1dGhNb2R1bGUsXG4gICAgQW5ndWxhckZpcmVzdG9yZU1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEF1dGhDb21wb25lbnQsXG4gICAgVXNlckNvbXBvbmVudCxcbiAgICBOZ3hBdXRoRmlyZWJhc2V1aUF2YXRhckNvbXBvbmVudCxcbiAgICBBdXRoUHJvdmlkZXJzQ29tcG9uZW50LFxuICAgIEVtYWlsQ29uZmlybWF0aW9uQ29tcG9uZW50LFxuICAgIC8vIExvZ2dlZEluR3VhcmQsXG4gICAgQW5ndWxhckZpcmVBdXRoTW9kdWxlLFxuICAgIEFuZ3VsYXJGaXJlc3RvcmVNb2R1bGUsXG4gICAgTmd4QXV0aEZpcmViYXNldWlMb2dpbkNvbXBvbmVudCxcbiAgICBOZ3hBdXRoRmlyZWJhc2V1aVJlZ2lzdGVyQ29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEF1dGhDb21wb25lbnQsXG4gICAgVXNlckNvbXBvbmVudCxcbiAgICBOZ3hBdXRoRmlyZWJhc2V1aUF2YXRhckNvbXBvbmVudCxcbiAgICBBdXRoUHJvdmlkZXJzQ29tcG9uZW50LFxuICAgIEVtYWlsQ29uZmlybWF0aW9uQ29tcG9uZW50LFxuICAgIExlZ2FsaXR5RGlhbG9nQ29tcG9uZW50LFxuICAgIE5neEF1dGhGaXJlYmFzZXVpTG9naW5Db21wb25lbnQsXG4gICAgTmd4QXV0aEZpcmViYXNldWlSZWdpc3RlckNvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBVc2VyQ29tcG9uZW50LFxuICAgIExlZ2FsaXR5RGlhbG9nQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4QXV0aEZpcmViYXNlVUlNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGljb25SZWdpc3RyeTogTWF0SWNvblJlZ2lzdHJ5LCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBhdXRoOiBBdXRoUHJvY2Vzc1NlcnZpY2UpIHtcbiAgICBhdXRoLmxpc3RlblRvVXNlckV2ZW50cygpO1xuICAgIHRoaXMucmVnaXN0ZXJQcm92aWRlckljb25zKCk7XG4gIH1cblxuXG4gIHN0YXRpYyBmb3JSb290KFxuICAgIGNvbmZpZ0ZhY3Rvcnk6IEZpcmViYXNlT3B0aW9ucyxcbiAgICBhcHBOYW1lRmFjdG9yeTogKCkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkID0gKCkgPT4gdW5kZWZpbmVkLFxuICAgIGNvbmZpZzogTmd4QXV0aEZpcmViYXNlVUlDb25maWcgPSB7fVxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5neEF1dGhGaXJlYmFzZVVJTW9kdWxlPiB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neEF1dGhGaXJlYmFzZVVJTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOlxuICAgICAgICBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogRklSRUJBU0VfT1BUSU9OUyxcbiAgICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdGYWN0b3J5XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBGSVJFQkFTRV9BUFBfTkFNRSxcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGFwcE5hbWVGYWN0b3J5XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7cHJvdmlkZTogVXNlclByb3ZpZGVkQ29uZmlnVG9rZW4sIHVzZVZhbHVlOiBjb25maWd9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5neEF1dGhGaXJlYmFzZVVJQ29uZmlnVG9rZW4sXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiBuZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZ0ZhY3RvcnksXG4gICAgICAgICAgICBkZXBzOiBbVXNlclByb3ZpZGVkQ29uZmlnVG9rZW5dXG4gICAgICAgICAgfSxcbiAgICAgICAgICBBdXRoUHJvY2Vzc1NlcnZpY2UsXG4gICAgICAgICAgRmlyZXN0b3JlU3luY1NlcnZpY2UsXG4gICAgICAgICAgTG9nZ2VkSW5HdWFyZFxuICAgICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIHJlZ2lzdGVyUHJvdmlkZXJJY29ucygpIHtcbiAgICB0aGlzLmljb25SZWdpc3RyeVxuICAgICAgLmFkZFN2Z0ljb24oJ2dvb2dsZScsIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCgnL2Fzc2V0cy9tZGkvZ29vZ2xlLnN2ZycpKVxuICAgICAgLmFkZFN2Z0ljb24oJ2FwcGxlJywgdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCcvYXNzZXRzL21kaS9hcHBsZS5zdmcnKSlcbiAgICAgIC5hZGRTdmdJY29uKCdnb29nbGUtY29sb3JlZCcsIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCgnL2Fzc2V0cy9nb29nbGUuc3ZnJykpXG4gICAgICAuYWRkU3ZnSWNvbignZmFjZWJvb2snLCB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJy9hc3NldHMvbWRpL2ZhY2Vib29rLnN2ZycpKVxuICAgICAgLmFkZFN2Z0ljb24oJ3R3aXR0ZXInLCB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJy9hc3NldHMvbWRpL3R3aXR0ZXIuc3ZnJykpXG4gICAgICAuYWRkU3ZnSWNvbignZ2l0aHViJywgdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCcvYXNzZXRzL21kaS9naXRodWItY2lyY2xlLnN2ZycpKVxuICAgICAgLmFkZFN2Z0ljb24oJ21pY3Jvc29mdCcsIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCgnL2Fzc2V0cy9tZGkvbWljcm9zb2Z0LnN2ZycpKVxuICAgICAgLmFkZFN2Z0ljb24oJ3lhaG9vJywgdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCcvYXNzZXRzL21kaS95YWhvby5zdmcnKSlcbiAgICAgIC5hZGRTdmdJY29uKCdwaG9uZScsIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCgnL2Fzc2V0cy9waG9uZS5zdmcnKSk7XG4gIH1cbn1cbiJdfQ==