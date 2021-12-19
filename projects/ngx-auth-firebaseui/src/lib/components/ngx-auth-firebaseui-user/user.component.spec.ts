import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireAuthStub, FirestoreStub} from '../../tests/helper';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {UserComponent} from './user.component';
import {ngxAuthFirebaseUIConfigFactory} from '../../interfaces/config.interface';
import {AuthProcessService} from '../../services/auth-process.service';
import {FirestoreSyncService} from '../../services/firestore-sync.service';
import {NgxAuthFirebaseUIConfigToken, UserProvidedConfigToken} from "../../tokens";
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button/button-module';
import {MatTooltipModule} from "@angular/material/tooltip";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatSnackBarModule,
      ],
      providers: [
        HttpClientTestingModule,
        FirestoreSyncService,
        AngularFireModule,
        {provide: AngularFirestore, useValue: FirestoreStub},
        {provide: AngularFireAuth, useValue: AngularFireAuthStub},
        {provide: UserProvidedConfigToken, useValue: {}},
        {provide: NgxAuthFirebaseUIConfigToken, useFactory: ngxAuthFirebaseUIConfigFactory, deps: [UserProvidedConfigToken]},
        AuthProcessService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
