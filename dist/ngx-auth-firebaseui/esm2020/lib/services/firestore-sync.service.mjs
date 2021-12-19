import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/compat/firestore";
export const collections = {
    users: "users",
};
export class FirestoreSyncService {
    constructor(afs) {
        this.afs = afs;
        // this.afs.firestore.settings({timestampsInSnapshots: true});
    }
    // get timestamp() {
    //     return firebase.firestore.FieldValue.serverTimestamp();
    // }
    getUserDocRefByUID(uid) {
        return this.afs.doc(`${collections.users}/${uid}`);
    }
    deleteUserData(uid) {
        const userRef = this.getUserDocRefByUID(uid);
        return userRef.delete();
    }
    updateUserData(user) {
        // Sets user$ data to firestore on login
        const userRef = this.getUserDocRefByUID(user.uid);
        const data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
            providerId: user.providerId,
        };
        return userRef.set(data, { merge: true });
    }
}
FirestoreSyncService.ɵfac = function FirestoreSyncService_Factory(t) { return new (t || FirestoreSyncService)(i0.ɵɵinject(i1.AngularFirestore)); };
FirestoreSyncService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FirestoreSyncService, factory: FirestoreSyncService.ɵfac, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FirestoreSyncService, [{
        type: Injectable,
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: i1.AngularFirestore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZXN0b3JlLXN5bmMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXRoLWZpcmViYXNldWkvc3JjL2xpYi9zZXJ2aWNlcy9maXJlc3RvcmUtc3luYy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU8zQyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUc7SUFDekIsS0FBSyxFQUFFLE9BQU87Q0FDZixDQUFDO0FBS0YsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFtQixHQUFxQjtRQUFyQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUN0Qyw4REFBOEQ7SUFDaEUsQ0FBQztJQUVELG9CQUFvQjtJQUNwQiw4REFBOEQ7SUFDOUQsSUFBSTtJQUVHLGtCQUFrQixDQUN2QixHQUFXO1FBRVgsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sY0FBYyxDQUFDLEdBQVc7UUFDL0IsTUFBTSxPQUFPLEdBQWdELElBQUksQ0FBQyxrQkFBa0IsQ0FDbEYsR0FBRyxDQUNKLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sY0FBYyxDQUFDLElBQXVCO1FBQzNDLHdDQUF3QztRQUN4QyxNQUFNLE9BQU8sR0FBZ0QsSUFBSSxDQUFDLGtCQUFrQixDQUNsRixJQUFJLENBQUMsR0FBRyxDQUNULENBQUM7UUFDRixNQUFNLElBQUksR0FBc0I7WUFDOUIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUM1QixDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O3dGQXBDVSxvQkFBb0I7MEVBQXBCLG9CQUFvQixXQUFwQixvQkFBb0IsbUJBRm5CLE1BQU07dUZBRVAsb0JBQW9CO2NBSGhDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgQW5ndWxhckZpcmVzdG9yZSxcbiAgQW5ndWxhckZpcmVzdG9yZURvY3VtZW50LFxufSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9jb21wYXQvZmlyZXN0b3JlXCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2NvbXBhdC9hcHBcIjtcblxuZXhwb3J0IGNvbnN0IGNvbGxlY3Rpb25zID0ge1xuICB1c2VyczogXCJ1c2Vyc1wiLFxufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgRmlyZXN0b3JlU3luY1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWZzOiBBbmd1bGFyRmlyZXN0b3JlKSB7XG4gICAgLy8gdGhpcy5hZnMuZmlyZXN0b3JlLnNldHRpbmdzKHt0aW1lc3RhbXBzSW5TbmFwc2hvdHM6IHRydWV9KTtcbiAgfVxuXG4gIC8vIGdldCB0aW1lc3RhbXAoKSB7XG4gIC8vICAgICByZXR1cm4gZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCk7XG4gIC8vIH1cblxuICBwdWJsaWMgZ2V0VXNlckRvY1JlZkJ5VUlEKFxuICAgIHVpZDogc3RyaW5nXG4gICk6IEFuZ3VsYXJGaXJlc3RvcmVEb2N1bWVudDxmaXJlYmFzZS5Vc2VySW5mbz4ge1xuICAgIHJldHVybiB0aGlzLmFmcy5kb2MoYCR7Y29sbGVjdGlvbnMudXNlcnN9LyR7dWlkfWApO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZVVzZXJEYXRhKHVpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB1c2VyUmVmOiBBbmd1bGFyRmlyZXN0b3JlRG9jdW1lbnQ8ZmlyZWJhc2UuVXNlckluZm8+ID0gdGhpcy5nZXRVc2VyRG9jUmVmQnlVSUQoXG4gICAgICB1aWRcbiAgICApO1xuICAgIHJldHVybiB1c2VyUmVmLmRlbGV0ZSgpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVVzZXJEYXRhKHVzZXI6IGZpcmViYXNlLlVzZXJJbmZvKTogUHJvbWlzZTxhbnk+IHtcbiAgICAvLyBTZXRzIHVzZXIkIGRhdGEgdG8gZmlyZXN0b3JlIG9uIGxvZ2luXG4gICAgY29uc3QgdXNlclJlZjogQW5ndWxhckZpcmVzdG9yZURvY3VtZW50PGZpcmViYXNlLlVzZXJJbmZvPiA9IHRoaXMuZ2V0VXNlckRvY1JlZkJ5VUlEKFxuICAgICAgdXNlci51aWRcbiAgICApO1xuICAgIGNvbnN0IGRhdGE6IGZpcmViYXNlLlVzZXJJbmZvID0ge1xuICAgICAgdWlkOiB1c2VyLnVpZCxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgZGlzcGxheU5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXG4gICAgICBwaG90b1VSTDogdXNlci5waG90b1VSTCxcbiAgICAgIHBob25lTnVtYmVyOiB1c2VyLnBob25lTnVtYmVyLFxuICAgICAgcHJvdmlkZXJJZDogdXNlci5wcm92aWRlcklkLFxuICAgIH07XG4gICAgcmV0dXJuIHVzZXJSZWYuc2V0KGRhdGEsIHsgbWVyZ2U6IHRydWUgfSk7XG4gIH1cbn1cbiJdfQ==