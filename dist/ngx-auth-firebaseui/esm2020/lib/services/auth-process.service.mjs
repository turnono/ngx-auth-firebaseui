import '@firebase/auth';
import { EventEmitter, forwardRef, Inject, Injectable } from '@angular/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import firebase from 'firebase/compat/app';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Accounts } from '../enums';
import { NgxAuthFirebaseUIConfigToken } from '../tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/compat/auth";
import * as i2 from "@angular/material/snack-bar";
import * as i3 from "./firestore-sync.service";
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const appleAuthProvider = new firebase.auth.OAuthProvider("apple.com");
export const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();
export const microsoftAuthProvider = new firebase.auth.OAuthProvider("microsoft.com");
export const yahooAuthProvider = new firebase.auth.OAuthProvider("yahoo.com");
export var AuthProvider;
(function (AuthProvider) {
    AuthProvider["ALL"] = "all";
    AuthProvider["ANONYMOUS"] = "anonymous";
    AuthProvider["EmailAndPassword"] = "firebase";
    AuthProvider["Google"] = "google";
    AuthProvider["Apple"] = "apple";
    AuthProvider["Facebook"] = "facebook";
    AuthProvider["Twitter"] = "twitter";
    AuthProvider["Github"] = "github";
    AuthProvider["Microsoft"] = "microsoft";
    AuthProvider["Yahoo"] = "yahoo";
    AuthProvider["PhoneNumber"] = "phoneNumber";
})(AuthProvider || (AuthProvider = {}));
export class AuthProcessService {
    constructor(afa, config, snackBar, fireStoreService, matSnackBarConfig) {
        this.afa = afa;
        this.config = config;
        this.snackBar = snackBar;
        this.fireStoreService = fireStoreService;
        this.matSnackBarConfig = matSnackBarConfig;
        this.onSuccessEmitter = new EventEmitter();
        this.onErrorEmitter = new EventEmitter();
        // Useful to know about auth state even between reloads.
        // Replace emailConfirmationSent and emailToConfirm.
        this._user$ = new BehaviorSubject(null);
    }
    get user$() {
        return this._user$.asObservable();
    }
    listenToUserEvents() {
        this.afa.user.subscribe((user) => {
            this._user$.next(user);
            this.user = user;
        });
    }
    /**
     * Reset the password of the ngx-auth-firebaseui-user via email
     *
     * @param email - the email to reset
     */
    async resetPassword(email) {
        try {
            console.log("Password reset email sent");
            return await this.afa.sendPasswordResetEmail(email);
        }
        catch (error) {
            return this.notifyError(error);
        }
    }
    /**
     * General sign in mechanism to authenticate the users with a firebase project
     * using a traditional way, via username and password or by using an authentication provider
     * like google, facebook, twitter and github
     *
     * @param provider - the provider to authenticate with (google, facebook, twitter, github)
     * @param credentials optional email and password
     */
    async signInWith(provider, credentials) {
        try {
            let signInResult;
            switch (provider) {
                case AuthProvider.ANONYMOUS:
                    signInResult = (await this.afa.signInAnonymously());
                    break;
                case AuthProvider.EmailAndPassword:
                    signInResult = (await this.afa.signInWithEmailAndPassword(credentials.email, credentials.password));
                    break;
                case AuthProvider.Google:
                    signInResult = (await this.afa.signInWithPopup(googleAuthProvider));
                    break;
                case AuthProvider.Apple:
                    signInResult = (await this.afa.signInWithPopup(appleAuthProvider));
                    break;
                case AuthProvider.Facebook:
                    signInResult = (await this.afa.signInWithPopup(facebookAuthProvider));
                    break;
                case AuthProvider.Twitter:
                    signInResult = (await this.afa.signInWithPopup(twitterAuthProvider));
                    break;
                case AuthProvider.Github:
                    signInResult = (await this.afa.signInWithPopup(githubAuthProvider));
                    break;
                case AuthProvider.Microsoft:
                    signInResult = (await this.afa.signInWithPopup(microsoftAuthProvider));
                    break;
                case AuthProvider.Yahoo:
                    signInResult = (await this.afa.signInWithPopup(yahooAuthProvider));
                    break;
                case AuthProvider.PhoneNumber:
                    // coming soon - see feature/sms branch
                    break;
                default:
                    throw new Error(`${AuthProvider[provider]} is not available as auth provider`);
            }
            await this.handleSuccess(signInResult);
        }
        catch (err) {
            this.handleError(err);
        }
    }
    /**
     * Sign up new users via email and password.
     * After that the ngx-auth-firebaseui-user should verify and confirm an email sent via the firebase
     *
     * @param displayName - the displayName if the new ngx-auth-firebaseui-user
     * @param credentials email and password
     * @returns -
     */
    async signUp(displayName, credentials) {
        try {
            const userCredential = await this.afa.createUserWithEmailAndPassword(credentials.email, credentials.password);
            const user = userCredential.user;
            await this.updateProfile(displayName, user.photoURL);
            if (this.config.enableFirestoreSync) {
                await this.fireStoreService.getUserDocRefByUID(user.uid).set({
                    uid: user.uid,
                    displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                });
            }
            if (this.config.enableEmailVerification) {
                await user.sendEmailVerification();
            }
            // Legacy fields
            this.emailConfirmationSent = true;
            this.emailToConfirm = credentials.email;
            await this.handleSuccess(userCredential);
        }
        catch (err) {
            this.handleError(err);
        }
    }
    async sendNewVerificationEmail() {
        if (!this.user) {
            return Promise.reject(new Error("No signed in user"));
        }
        return this.user.sendEmailVerification();
    }
    async signOut() {
        try {
            await this.afa.signOut();
        }
        catch (error) {
            this.notifyError(error);
        }
    }
    /**
     * Update the profile (name + photo url) of the authenticated ngx-auth-firebaseui-user in the
     * firebase authentication feature (not in firestore)
     *
     * @param name - the new name of the authenticated ngx-auth-firebaseui-user
     * @param photoURL - the new photo url of the authenticated ngx-auth-firebaseui-user
     * @returns -
     */
    updateProfile(name, photoURL) {
        return this.afa.currentUser.then((user) => {
            if (!photoURL) {
                return user.updateProfile({ displayName: name });
            }
            else {
                return user.updateProfile({ displayName: name, photoURL });
            }
        });
    }
    parseUserInfo(user) {
        return {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            providerId: user.providerData.length > 0 ? user.providerData[0].providerId : null,
        };
    }
    getUserPhotoUrl() {
        return this._user$.pipe(map((user) => {
            if (!user) {
                return null;
            }
            else if (user.photoURL) {
                return user.photoURL;
            }
            else if (user.emailVerified) {
                return this.getPhotoPath(Accounts.CHECK);
            }
            else if (user.isAnonymous) {
                return this.getPhotoPath(Accounts.OFF);
            }
            else {
                return this.getPhotoPath(Accounts.NONE);
            }
        }));
    }
    getPhotoPath(image) {
        return `assets/user/${image}.svg`;
    }
    signInWithPhoneNumber() {
        // todo: 3.1.18
    }
    async handleSuccess(userCredential) {
        if (this.config.useRawUserCredential) {
            this.onSuccessEmitter.next(userCredential);
        }
        else {
            this.onSuccessEmitter.next(userCredential.user);
        }
        if (this.config.enableFirestoreSync) {
            try {
                await this.fireStoreService.updateUserData(this.parseUserInfo(userCredential.user));
            }
            catch (e) {
                console.error(`Error occurred while updating user data with firestore: ${e}`);
            }
        }
        if (this.config.toastMessageOnAuthSuccess) {
            const fallbackMessage = `Hello ${userCredential.user.displayName ? userCredential.user.displayName : ""}!`;
            this.showToast(this.messageOnAuthSuccess || fallbackMessage);
        }
    }
    handleError(error) {
        this.notifyError(error);
        console.error(error);
    }
    // Refresh user info. Can be useful for instance to get latest status regarding email verification.
    reloadUserInfo() {
        return this._user$
            .pipe(take(1))
            .subscribe((user) => user && user.reload());
    }
    // Search for an error message.
    // Consumers of this library are given the possibility to provide a
    // function in case they want to instrument message based on error properties.
    getMessageOnAuthError(error) {
        // eslint-disable-next-line no-bitwise
        return (error.toString() || "Sorry, something went wrong. Please retry later.");
    }
    // Show a toast using current snackbar config. If message is empty, no toast is displayed allowing to opt-out when needed.
    // Default MatSnackBarConfig has no duration, meaning it stays visible forever.
    // If that's the case, an action button is added to allow the end-user to dismiss the toast.
    showToast(message) {
        if (message) {
            this.snackBar.open(message, this.matSnackBarConfig.duration ? null : "OK");
        }
    }
    showErrorToast(error) {
        if (this.config.toastMessageOnAuthError) {
            this.showToast(this.getMessageOnAuthError(error));
        }
    }
    notifyError(error) {
        this.onErrorEmitter.emit(error);
        this.showErrorToast(error);
    }
}
AuthProcessService.ɵfac = function AuthProcessService_Factory(t) { return new (t || AuthProcessService)(i0.ɵɵinject(i1.AngularFireAuth), i0.ɵɵinject(forwardRef(() => NgxAuthFirebaseUIConfigToken)), i0.ɵɵinject(i2.MatSnackBar), i0.ɵɵinject(i3.FirestoreSyncService), i0.ɵɵinject(MAT_SNACK_BAR_DEFAULT_OPTIONS)); };
AuthProcessService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthProcessService, factory: AuthProcessService.ɵfac, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthProcessService, [{
        type: Injectable,
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: i1.AngularFireAuth }, { type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => NgxAuthFirebaseUIConfigToken)]
            }] }, { type: i2.MatSnackBar }, { type: i3.FirestoreSyncService }, { type: i2.MatSnackBarConfig, decorators: [{
                type: Inject,
                args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1wcm9jZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXV0aC1maXJlYmFzZXVpL3NyYy9saWIvc2VydmljZXMvYXV0aC1wcm9jZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdFLE9BQU8sRUFBRSw2QkFBNkIsRUFBa0MsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RyxPQUFPLFFBQVEsTUFBTSxxQkFBcUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVwQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7O0FBS3pELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0FBQzdFLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQ3pFLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDOUUsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDM0UsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxD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XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRoIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9jb21wYXQvYXV0aCc7XG5pbXBvcnQgeyBNQVRfU05BQ0tfQkFSX0RFRkFVTFRfT1BUSU9OUywgTWF0U25hY2tCYXIsIE1hdFNuYWNrQmFyQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBY2NvdW50cyB9IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCB7IElDcmVkZW50aWFscywgSVNpZ25JblByb2Nlc3MsIElTaWduVXBQcm9jZXNzLCBOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTmd4QXV0aEZpcmViYXNlVUlDb25maWdUb2tlbiB9IGZyb20gJy4uL3Rva2Vucyc7XG5pbXBvcnQgeyBGaXJlc3RvcmVTeW5jU2VydmljZSB9IGZyb20gJy4vZmlyZXN0b3JlLXN5bmMuc2VydmljZSc7XG5cbmltcG9ydCBVc2VyQ3JlZGVudGlhbCA9IGZpcmViYXNlLmF1dGguVXNlckNyZWRlbnRpYWw7XG5cbmV4cG9ydCBjb25zdCBmYWNlYm9va0F1dGhQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyKCk7XG5leHBvcnQgY29uc3QgZ29vZ2xlQXV0aFByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG5leHBvcnQgY29uc3QgYXBwbGVBdXRoUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5PQXV0aFByb3ZpZGVyKFwiYXBwbGUuY29tXCIpO1xuZXhwb3J0IGNvbnN0IHR3aXR0ZXJBdXRoUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyKCk7XG5leHBvcnQgY29uc3QgZ2l0aHViQXV0aFByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyKCk7XG5leHBvcnQgY29uc3QgbWljcm9zb2Z0QXV0aFByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguT0F1dGhQcm92aWRlcihcbiAgXCJtaWNyb3NvZnQuY29tXCJcbik7XG5leHBvcnQgY29uc3QgeWFob29BdXRoUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5PQXV0aFByb3ZpZGVyKFwieWFob28uY29tXCIpO1xuXG5leHBvcnQgZW51bSBBdXRoUHJvdmlkZXIge1xuICBBTEwgPSBcImFsbFwiLFxuICBBTk9OWU1PVVMgPSBcImFub255bW91c1wiLFxuICBFbWFpbEFuZFBhc3N3b3JkID0gXCJmaXJlYmFzZVwiLFxuICBHb29nbGUgPSBcImdvb2dsZVwiLFxuICBBcHBsZSA9IFwiYXBwbGVcIixcbiAgRmFjZWJvb2sgPSBcImZhY2Vib29rXCIsXG4gIFR3aXR0ZXIgPSBcInR3aXR0ZXJcIixcbiAgR2l0aHViID0gXCJnaXRodWJcIixcbiAgTWljcm9zb2Z0ID0gXCJtaWNyb3NvZnRcIixcbiAgWWFob28gPSBcInlhaG9vXCIsXG4gIFBob25lTnVtYmVyID0gXCJwaG9uZU51bWJlclwiLFxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoUHJvY2Vzc1NlcnZpY2UgaW1wbGVtZW50cyBJU2lnbkluUHJvY2VzcywgSVNpZ25VcFByb2Nlc3Mge1xuICBvblN1Y2Nlc3NFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBvbkVycm9yRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvLyBVc2VmdWwgdG8ga25vdyBhYm91dCBhdXRoIHN0YXRlIGV2ZW4gYmV0d2VlbiByZWxvYWRzLlxuICAvLyBSZXBsYWNlIGVtYWlsQ29uZmlybWF0aW9uU2VudCBhbmQgZW1haWxUb0NvbmZpcm0uXG4gIHByaXZhdGUgX3VzZXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxmaXJlYmFzZS5Vc2VyIHwgbnVsbD4obnVsbCk7XG4gIGdldCB1c2VyJCgpOiBPYnNlcnZhYmxlPGZpcmViYXNlLlVzZXIgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXIkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIGFjY2VzcyB2aWEgdXNlciQgYXN5bmNocm9ub3VzbHkgaW5zdGVhZFxuICAgKi9cbiAgdXNlcjogZmlyZWJhc2UuVXNlcjtcblxuICBtZXNzYWdlT25BdXRoU3VjY2Vzczogc3RyaW5nO1xuICBtZXNzYWdlT25BdXRoRXJyb3I6IHN0cmluZztcblxuICAvLyBMZWdhY3kgZmllbGQgdGhhdCBpcyBzZXQgdG8gdHJ1ZSBhZnRlciBzaWduIHVwLlxuICAvLyBWYWx1ZSBpcyBsb3N0IGluIGNhc2Ugb2YgcmVsb2FkLiBUaGUgaWRlYSBoZXJlIGlzIHRvIGtub3cgaWYgd2UganVzdCBzZW50IGEgdmVyaWZpY2F0aW9uIGVtYWlsLlxuICBlbWFpbENvbmZpcm1hdGlvblNlbnQ6IGJvb2xlYW47XG4gIC8vIExlZ2FjeSBmaWxlZCB0aGF0IGNvbnRhaW4gdGhlIG1haWwgdG8gY29uZmlybS4gU2FtZSBsaWZlY3ljbGUgdGhhbiBlbWFpbENvbmZpcm1hdGlvblNlbnQuXG4gIGVtYWlsVG9Db25maXJtOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFmYTogQW5ndWxhckZpcmVBdXRoLFxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZ1Rva2VuKSlcbiAgICBwdWJsaWMgY29uZmlnOiBOZ3hBdXRoRmlyZWJhc2VVSUNvbmZpZyxcbiAgICBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcbiAgICBwcml2YXRlIGZpcmVTdG9yZVNlcnZpY2U6IEZpcmVzdG9yZVN5bmNTZXJ2aWNlLFxuICAgIEBJbmplY3QoTUFUX1NOQUNLX0JBUl9ERUZBVUxUX09QVElPTlMpXG4gICAgcHJpdmF0ZSBtYXRTbmFja0JhckNvbmZpZzogTWF0U25hY2tCYXJDb25maWdcbiAgKSB7fVxuXG4gIGxpc3RlblRvVXNlckV2ZW50cygpIHtcbiAgICB0aGlzLmFmYS51c2VyLnN1YnNjcmliZSgodXNlcjogZmlyZWJhc2UuVXNlciB8IG51bGwpID0+IHtcbiAgICAgIHRoaXMuX3VzZXIkLm5leHQodXNlcik7XG4gICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBwYXNzd29yZCBvZiB0aGUgbmd4LWF1dGgtZmlyZWJhc2V1aS11c2VyIHZpYSBlbWFpbFxuICAgKlxuICAgKiBAcGFyYW0gZW1haWwgLSB0aGUgZW1haWwgdG8gcmVzZXRcbiAgICovXG4gIHB1YmxpYyBhc3luYyByZXNldFBhc3N3b3JkKGVtYWlsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coXCJQYXNzd29yZCByZXNldCBlbWFpbCBzZW50XCIpO1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYWZhLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub3RpZnlFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYWwgc2lnbiBpbiBtZWNoYW5pc20gdG8gYXV0aGVudGljYXRlIHRoZSB1c2VycyB3aXRoIGEgZmlyZWJhc2UgcHJvamVjdFxuICAgKiB1c2luZyBhIHRyYWRpdGlvbmFsIHdheSwgdmlhIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBvciBieSB1c2luZyBhbiBhdXRoZW50aWNhdGlvbiBwcm92aWRlclxuICAgKiBsaWtlIGdvb2dsZSwgZmFjZWJvb2ssIHR3aXR0ZXIgYW5kIGdpdGh1YlxuICAgKlxuICAgKiBAcGFyYW0gcHJvdmlkZXIgLSB0aGUgcHJvdmlkZXIgdG8gYXV0aGVudGljYXRlIHdpdGggKGdvb2dsZSwgZmFjZWJvb2ssIHR3aXR0ZXIsIGdpdGh1YilcbiAgICogQHBhcmFtIGNyZWRlbnRpYWxzIG9wdGlvbmFsIGVtYWlsIGFuZCBwYXNzd29yZFxuICAgKi9cbiAgcHVibGljIGFzeW5jIHNpZ25JbldpdGgocHJvdmlkZXI6IEF1dGhQcm92aWRlciwgY3JlZGVudGlhbHM/OiBJQ3JlZGVudGlhbHMpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHNpZ25JblJlc3VsdDogVXNlckNyZWRlbnRpYWwgfCBhbnk7XG5cbiAgICAgIHN3aXRjaCAocHJvdmlkZXIpIHtcbiAgICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuQU5PTllNT1VTOlxuICAgICAgICAgIHNpZ25JblJlc3VsdCA9IChhd2FpdCB0aGlzLmFmYS5zaWduSW5Bbm9ueW1vdXNseSgpKSBhcyBVc2VyQ3JlZGVudGlhbDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEF1dGhQcm92aWRlci5FbWFpbEFuZFBhc3N3b3JkOlxuICAgICAgICAgIHNpZ25JblJlc3VsdCA9IChhd2FpdCB0aGlzLmFmYS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmRcbiAgICAgICAgICApKSBhcyBVc2VyQ3JlZGVudGlhbDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEF1dGhQcm92aWRlci5Hb29nbGU6XG4gICAgICAgICAgc2lnbkluUmVzdWx0ID0gKGF3YWl0IHRoaXMuYWZhLnNpZ25JbldpdGhQb3B1cChcbiAgICAgICAgICAgIGdvb2dsZUF1dGhQcm92aWRlclxuICAgICAgICAgICkpIGFzIFVzZXJDcmVkZW50aWFsO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLkFwcGxlOlxuICAgICAgICAgIHNpZ25JblJlc3VsdCA9IChhd2FpdCB0aGlzLmFmYS5zaWduSW5XaXRoUG9wdXAoXG4gICAgICAgICAgICBhcHBsZUF1dGhQcm92aWRlclxuICAgICAgICAgICkpIGFzIFVzZXJDcmVkZW50aWFsO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLkZhY2Vib29rOlxuICAgICAgICAgIHNpZ25JblJlc3VsdCA9IChhd2FpdCB0aGlzLmFmYS5zaWduSW5XaXRoUG9wdXAoXG4gICAgICAgICAgICBmYWNlYm9va0F1dGhQcm92aWRlclxuICAgICAgICAgICkpIGFzIFVzZXJDcmVkZW50aWFsO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLlR3aXR0ZXI6XG4gICAgICAgICAgc2lnbkluUmVzdWx0ID0gKGF3YWl0IHRoaXMuYWZhLnNpZ25JbldpdGhQb3B1cChcbiAgICAgICAgICAgIHR3aXR0ZXJBdXRoUHJvdmlkZXJcbiAgICAgICAgICApKSBhcyBVc2VyQ3JlZGVudGlhbDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEF1dGhQcm92aWRlci5HaXRodWI6XG4gICAgICAgICAgc2lnbkluUmVzdWx0ID0gKGF3YWl0IHRoaXMuYWZhLnNpZ25JbldpdGhQb3B1cChcbiAgICAgICAgICAgIGdpdGh1YkF1dGhQcm92aWRlclxuICAgICAgICAgICkpIGFzIFVzZXJDcmVkZW50aWFsO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLk1pY3Jvc29mdDpcbiAgICAgICAgICBzaWduSW5SZXN1bHQgPSAoYXdhaXQgdGhpcy5hZmEuc2lnbkluV2l0aFBvcHVwKFxuICAgICAgICAgICAgbWljcm9zb2Z0QXV0aFByb3ZpZGVyXG4gICAgICAgICAgKSkgYXMgVXNlckNyZWRlbnRpYWw7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuWWFob286XG4gICAgICAgICAgc2lnbkluUmVzdWx0ID0gKGF3YWl0IHRoaXMuYWZhLnNpZ25JbldpdGhQb3B1cChcbiAgICAgICAgICAgIHlhaG9vQXV0aFByb3ZpZGVyXG4gICAgICAgICAgKSkgYXMgVXNlckNyZWRlbnRpYWw7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuUGhvbmVOdW1iZXI6XG4gICAgICAgICAgLy8gY29taW5nIHNvb24gLSBzZWUgZmVhdHVyZS9zbXMgYnJhbmNoXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgJHtBdXRoUHJvdmlkZXJbcHJvdmlkZXJdfSBpcyBub3QgYXZhaWxhYmxlIGFzIGF1dGggcHJvdmlkZXJgXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHRoaXMuaGFuZGxlU3VjY2VzcyhzaWduSW5SZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTaWduIHVwIG5ldyB1c2VycyB2aWEgZW1haWwgYW5kIHBhc3N3b3JkLlxuICAgKiBBZnRlciB0aGF0IHRoZSBuZ3gtYXV0aC1maXJlYmFzZXVpLXVzZXIgc2hvdWxkIHZlcmlmeSBhbmQgY29uZmlybSBhbiBlbWFpbCBzZW50IHZpYSB0aGUgZmlyZWJhc2VcbiAgICpcbiAgICogQHBhcmFtIGRpc3BsYXlOYW1lIC0gdGhlIGRpc3BsYXlOYW1lIGlmIHRoZSBuZXcgbmd4LWF1dGgtZmlyZWJhc2V1aS11c2VyXG4gICAqIEBwYXJhbSBjcmVkZW50aWFscyBlbWFpbCBhbmQgcGFzc3dvcmRcbiAgICogQHJldHVybnMgLVxuICAgKi9cbiAgcHVibGljIGFzeW5jIHNpZ25VcChkaXNwbGF5TmFtZTogc3RyaW5nLCBjcmVkZW50aWFsczogSUNyZWRlbnRpYWxzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJDcmVkZW50aWFsOiBVc2VyQ3JlZGVudGlhbCA9IGF3YWl0IHRoaXMuYWZhLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChcbiAgICAgICAgY3JlZGVudGlhbHMuZW1haWwsXG4gICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkXG4gICAgICApO1xuICAgICAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZVByb2ZpbGUoZGlzcGxheU5hbWUsIHVzZXIucGhvdG9VUkwpO1xuXG4gICAgICBpZiAodGhpcy5jb25maWcuZW5hYmxlRmlyZXN0b3JlU3luYykge1xuICAgICAgICBhd2FpdCB0aGlzLmZpcmVTdG9yZVNlcnZpY2UuZ2V0VXNlckRvY1JlZkJ5VUlEKHVzZXIudWlkKS5zZXQoe1xuICAgICAgICAgIHVpZDogdXNlci51aWQsXG4gICAgICAgICAgZGlzcGxheU5hbWUsXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgcGhvdG9VUkw6IHVzZXIucGhvdG9VUkwsXG4gICAgICAgIH0gYXMgZmlyZWJhc2UuVXNlcik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5lbmFibGVFbWFpbFZlcmlmaWNhdGlvbikge1xuICAgICAgICBhd2FpdCB1c2VyLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICAvLyBMZWdhY3kgZmllbGRzXG4gICAgICB0aGlzLmVtYWlsQ29uZmlybWF0aW9uU2VudCA9IHRydWU7XG4gICAgICB0aGlzLmVtYWlsVG9Db25maXJtID0gY3JlZGVudGlhbHMuZW1haWw7XG5cbiAgICAgIGF3YWl0IHRoaXMuaGFuZGxlU3VjY2Vzcyh1c2VyQ3JlZGVudGlhbCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmhhbmRsZUVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2VuZE5ld1ZlcmlmaWNhdGlvbkVtYWlsKCk6IFByb21pc2U8dm9pZCB8IG5ldmVyPiB7XG4gICAgaWYgKCF0aGlzLnVzZXIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzaWduZWQgaW4gdXNlclwiKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVzZXIuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKCk7XG4gIH1cblxuICBhc3luYyBzaWduT3V0KCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmFmYS5zaWduT3V0KCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubm90aWZ5RXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHByb2ZpbGUgKG5hbWUgKyBwaG90byB1cmwpIG9mIHRoZSBhdXRoZW50aWNhdGVkIG5neC1hdXRoLWZpcmViYXNldWktdXNlciBpbiB0aGVcbiAgICogZmlyZWJhc2UgYXV0aGVudGljYXRpb24gZmVhdHVyZSAobm90IGluIGZpcmVzdG9yZSlcbiAgICpcbiAgICogQHBhcmFtIG5hbWUgLSB0aGUgbmV3IG5hbWUgb2YgdGhlIGF1dGhlbnRpY2F0ZWQgbmd4LWF1dGgtZmlyZWJhc2V1aS11c2VyXG4gICAqIEBwYXJhbSBwaG90b1VSTCAtIHRoZSBuZXcgcGhvdG8gdXJsIG9mIHRoZSBhdXRoZW50aWNhdGVkIG5neC1hdXRoLWZpcmViYXNldWktdXNlclxuICAgKiBAcmV0dXJucyAtXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlUHJvZmlsZShuYW1lOiBzdHJpbmcsIHBob3RvVVJMOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5hZmEuY3VycmVudFVzZXIudGhlbigodXNlcjogZmlyZWJhc2UuVXNlcikgPT4ge1xuICAgICAgaWYgKCFwaG90b1VSTCkge1xuICAgICAgICByZXR1cm4gdXNlci51cGRhdGVQcm9maWxlKHsgZGlzcGxheU5hbWU6IG5hbWUgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdXNlci51cGRhdGVQcm9maWxlKHsgZGlzcGxheU5hbWU6IG5hbWUsIHBob3RvVVJMIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHBhcnNlVXNlckluZm8odXNlcjogZmlyZWJhc2UuVXNlcik6IGZpcmViYXNlLlVzZXJJbmZvIHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB1c2VyLnVpZCxcbiAgICAgIGRpc3BsYXlOYW1lOiB1c2VyLmRpc3BsYXlOYW1lLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBwaG9uZU51bWJlcjogdXNlci5waG9uZU51bWJlcixcbiAgICAgIHBob3RvVVJMOiB1c2VyLnBob3RvVVJMLFxuICAgICAgcHJvdmlkZXJJZDpcbiAgICAgICAgdXNlci5wcm92aWRlckRhdGEubGVuZ3RoID4gMCA/IHVzZXIucHJvdmlkZXJEYXRhWzBdLnByb3ZpZGVySWQgOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0VXNlclBob3RvVXJsKCk6IE9ic2VydmFibGU8c3RyaW5nIHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLl91c2VyJC5waXBlKFxuICAgICAgbWFwKCh1c2VyOiBmaXJlYmFzZS5Vc2VyIHwgbnVsbCkgPT4ge1xuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyLnBob3RvVVJMKSB7XG4gICAgICAgICAgcmV0dXJuIHVzZXIucGhvdG9VUkw7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlci5lbWFpbFZlcmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGhvdG9QYXRoKEFjY291bnRzLkNIRUNLKTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyLmlzQW5vbnltb3VzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGhvdG9QYXRoKEFjY291bnRzLk9GRik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGhvdG9QYXRoKEFjY291bnRzLk5PTkUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGhvdG9QYXRoKGltYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgYXNzZXRzL3VzZXIvJHtpbWFnZX0uc3ZnYDtcbiAgfVxuXG4gIHB1YmxpYyBzaWduSW5XaXRoUGhvbmVOdW1iZXIoKSB7XG4gICAgLy8gdG9kbzogMy4xLjE4XG4gIH1cblxuICBhc3luYyBoYW5kbGVTdWNjZXNzKHVzZXJDcmVkZW50aWFsOiBVc2VyQ3JlZGVudGlhbCkge1xuXG4gICAgaWYodGhpcy5jb25maWcudXNlUmF3VXNlckNyZWRlbnRpYWwpIHtcbiAgICAgIHRoaXMub25TdWNjZXNzRW1pdHRlci5uZXh0KHVzZXJDcmVkZW50aWFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vblN1Y2Nlc3NFbWl0dGVyLm5leHQodXNlckNyZWRlbnRpYWwudXNlcik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmVuYWJsZUZpcmVzdG9yZVN5bmMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZmlyZVN0b3JlU2VydmljZS51cGRhdGVVc2VyRGF0YShcbiAgICAgICAgICB0aGlzLnBhcnNlVXNlckluZm8odXNlckNyZWRlbnRpYWwudXNlcilcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgRXJyb3Igb2NjdXJyZWQgd2hpbGUgdXBkYXRpbmcgdXNlciBkYXRhIHdpdGggZmlyZXN0b3JlOiAke2V9YFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5jb25maWcudG9hc3RNZXNzYWdlT25BdXRoU3VjY2Vzcykge1xuICAgICAgY29uc3QgZmFsbGJhY2tNZXNzYWdlID0gYEhlbGxvICR7XG4gICAgICAgIHVzZXJDcmVkZW50aWFsLnVzZXIuZGlzcGxheU5hbWUgPyB1c2VyQ3JlZGVudGlhbC51c2VyLmRpc3BsYXlOYW1lIDogXCJcIlxuICAgICAgfSFgO1xuICAgICAgdGhpcy5zaG93VG9hc3QodGhpcy5tZXNzYWdlT25BdXRoU3VjY2VzcyB8fCBmYWxsYmFja01lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICB0aGlzLm5vdGlmeUVycm9yKGVycm9yKTtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxuXG4gIC8vIFJlZnJlc2ggdXNlciBpbmZvLiBDYW4gYmUgdXNlZnVsIGZvciBpbnN0YW5jZSB0byBnZXQgbGF0ZXN0IHN0YXR1cyByZWdhcmRpbmcgZW1haWwgdmVyaWZpY2F0aW9uLlxuICByZWxvYWRVc2VySW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlciRcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKCh1c2VyOiBmaXJlYmFzZS5Vc2VyIHwgbnVsbCkgPT4gdXNlciAmJiB1c2VyLnJlbG9hZCgpKTtcbiAgfVxuXG4gIC8vIFNlYXJjaCBmb3IgYW4gZXJyb3IgbWVzc2FnZS5cbiAgLy8gQ29uc3VtZXJzIG9mIHRoaXMgbGlicmFyeSBhcmUgZ2l2ZW4gdGhlIHBvc3NpYmlsaXR5IHRvIHByb3ZpZGUgYVxuICAvLyBmdW5jdGlvbiBpbiBjYXNlIHRoZXkgd2FudCB0byBpbnN0cnVtZW50IG1lc3NhZ2UgYmFzZWQgb24gZXJyb3IgcHJvcGVydGllcy5cbiAgZ2V0TWVzc2FnZU9uQXV0aEVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgIHJldHVybiAoXG4gICAgICBlcnJvci50b1N0cmluZygpIHx8IFwiU29ycnksIHNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgcmV0cnkgbGF0ZXIuXCJcbiAgICApO1xuICB9XG5cbiAgLy8gU2hvdyBhIHRvYXN0IHVzaW5nIGN1cnJlbnQgc25hY2tiYXIgY29uZmlnLiBJZiBtZXNzYWdlIGlzIGVtcHR5LCBubyB0b2FzdCBpcyBkaXNwbGF5ZWQgYWxsb3dpbmcgdG8gb3B0LW91dCB3aGVuIG5lZWRlZC5cbiAgLy8gRGVmYXVsdCBNYXRTbmFja0JhckNvbmZpZyBoYXMgbm8gZHVyYXRpb24sIG1lYW5pbmcgaXQgc3RheXMgdmlzaWJsZSBmb3JldmVyLlxuICAvLyBJZiB0aGF0J3MgdGhlIGNhc2UsIGFuIGFjdGlvbiBidXR0b24gaXMgYWRkZWQgdG8gYWxsb3cgdGhlIGVuZC11c2VyIHRvIGRpc21pc3MgdGhlIHRvYXN0LlxuICBzaG93VG9hc3QobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc25hY2tCYXIub3BlbihcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgdGhpcy5tYXRTbmFja0JhckNvbmZpZy5kdXJhdGlvbiA/IG51bGwgOiBcIk9LXCJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0Vycm9yVG9hc3QoZXJyb3I6IGFueSkge1xuICAgIGlmICh0aGlzLmNvbmZpZy50b2FzdE1lc3NhZ2VPbkF1dGhFcnJvcikge1xuICAgICAgdGhpcy5zaG93VG9hc3QodGhpcy5nZXRNZXNzYWdlT25BdXRoRXJyb3IoZXJyb3IpKTtcbiAgICB9XG4gIH1cblxuICBub3RpZnlFcnJvcihlcnJvcjogYW55KSB7XG4gICAgdGhpcy5vbkVycm9yRW1pdHRlci5lbWl0KGVycm9yKTtcbiAgICB0aGlzLnNob3dFcnJvclRvYXN0KGVycm9yKTtcbiAgfVxufVxuIl19