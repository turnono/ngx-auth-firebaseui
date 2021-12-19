import { Component, Input, Output } from '@angular/core';
import { AuthProvider } from '../../services/auth-process.service';
import { NgxAuthFirebaseuiAnimations } from '../../animations';
import { LegalityDialogComponent } from '..';
import * as i0 from "@angular/core";
import * as i1 from "../../services/auth-process.service";
import * as i2 from "@angular/material/dialog";
import * as i3 from "@angular/common";
import * as i4 from "@angular/flex-layout/flex";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/flex-layout/extended";
import * as i7 from "@angular/material/icon";
const _c0 = function () { return { duration: "300ms", y: "100px" }; };
const _c1 = function (a1) { return { value: "*", params: a1 }; };
const _c2 = function () { return { "space-full-xs": true }; };
function AuthProvidersComponent_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.processLegalSignUP(ctx_r13.authProvider.Google); });
    i0.ɵɵelement(1, "mat-icon", 12);
    i0.ɵɵtext(2, " Google ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_1_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.processLegalSignUP(ctx_r15.authProvider.Apple); });
    i0.ɵɵelement(1, "mat-icon", 14);
    i0.ɵɵtext(2, " Apple ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.processLegalSignUP(ctx_r17.authProvider.Facebook); });
    i0.ɵɵelement(1, "mat-icon", 16);
    i0.ɵɵtext(2, " Facebook ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_1_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.processLegalSignUP(ctx_r19.authProvider.Twitter); });
    i0.ɵɵelement(1, "mat-icon", 18);
    i0.ɵɵtext(2, " Twitter ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_1_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.processLegalSignUP(ctx_r21.authProvider.Github); });
    i0.ɵɵelement(1, "mat-icon", 19);
    i0.ɵɵtext(2, " GitHub ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_1_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.processLegalSignUP(ctx_r23.authProvider.Microsoft); });
    i0.ɵɵelement(1, "mat-icon", 20);
    i0.ɵɵtext(2, " Microsoft ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_1_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.processLegalSignUP(ctx_r25.authProvider.Yahoo); });
    i0.ɵɵelement(1, "mat-icon", 21);
    i0.ɵɵtext(2, " Yahoo ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, AuthProvidersComponent_div_1_button_1_Template, 3, 6, "button", 7);
    i0.ɵɵtemplate(2, AuthProvidersComponent_div_1_button_2_Template, 3, 6, "button", 8);
    i0.ɵɵtemplate(3, AuthProvidersComponent_div_1_button_3_Template, 3, 6, "button", 9);
    i0.ɵɵtemplate(4, AuthProvidersComponent_div_1_button_4_Template, 3, 6, "button", 10);
    i0.ɵɵtemplate(5, AuthProvidersComponent_div_1_button_5_Template, 3, 6, "button", 7);
    i0.ɵɵtemplate(6, AuthProvidersComponent_div_1_button_6_Template, 3, 6, "button", 7);
    i0.ɵɵtemplate(7, AuthProvidersComponent_div_1_button_7_Template, 3, 6, "button", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("fxLayoutAlign", ctx_r0.layout == "row" ? "space-around center" : "stretch")("fxLayout", ctx_r0.layout);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.providers === ctx_r0.authProvider.ALL || ctx_r0.providers.includes(ctx_r0.authProvider.Google));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.providers === ctx_r0.authProvider.ALL || ctx_r0.providers.includes(ctx_r0.authProvider.Apple));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.providers === ctx_r0.authProvider.ALL || ctx_r0.providers.includes(ctx_r0.authProvider.Facebook));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.providers === ctx_r0.authProvider.ALL || ctx_r0.providers.includes(ctx_r0.authProvider.Twitter));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.providers === ctx_r0.authProvider.ALL || ctx_r0.providers.includes(ctx_r0.authProvider.Github));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.providers === ctx_r0.authProvider.ALL || ctx_r0.providers.includes(ctx_r0.authProvider.Microsoft));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.providers === ctx_r0.authProvider.ALL || ctx_r0.providers.includes(ctx_r0.authProvider.Yahoo));
} }
function AuthProvidersComponent_div_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.processLegalSignUP(ctx_r34.authProvider.Google); });
    i0.ɵɵtext(1, " Google ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_2_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.processLegalSignUP(ctx_r36.authProvider.Apple); });
    i0.ɵɵtext(1, " Apple ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 32);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_2_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.processLegalSignUP(ctx_r38.authProvider.Facebook); });
    i0.ɵɵtext(1, " Facebook ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 33);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_2_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.processLegalSignUP(ctx_r40.authProvider.Twitter); });
    i0.ɵɵtext(1, " Twitter ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_2_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 34);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_2_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r43); const ctx_r42 = i0.ɵɵnextContext(2); return ctx_r42.processLegalSignUP(ctx_r42.authProvider.Github); });
    i0.ɵɵtext(1, " GitHub ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_2_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_2_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(2); return ctx_r44.processLegalSignUP(ctx_r44.authProvider.Microsoft); });
    i0.ɵɵtext(1, " Microsoft ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_2_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 36);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_2_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r47); const ctx_r46 = i0.ɵɵnextContext(2); return ctx_r46.processLegalSignUP(ctx_r46.authProvider.Yahoo); });
    i0.ɵɵtext(1, " Yahoo ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtemplate(1, AuthProvidersComponent_div_2_button_1_Template, 2, 6, "button", 23);
    i0.ɵɵtemplate(2, AuthProvidersComponent_div_2_button_2_Template, 2, 6, "button", 24);
    i0.ɵɵtemplate(3, AuthProvidersComponent_div_2_button_3_Template, 2, 6, "button", 25);
    i0.ɵɵtemplate(4, AuthProvidersComponent_div_2_button_4_Template, 2, 6, "button", 26);
    i0.ɵɵtemplate(5, AuthProvidersComponent_div_2_button_5_Template, 2, 6, "button", 27);
    i0.ɵɵtemplate(6, AuthProvidersComponent_div_2_button_6_Template, 2, 6, "button", 28);
    i0.ɵɵtemplate(7, AuthProvidersComponent_div_2_button_7_Template, 2, 6, "button", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("fxLayoutAlign", ctx_r1.layout == "row" ? "space-around center" : "stretch")("fxLayout", ctx_r1.layout);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.providers === ctx_r1.authProvider.ALL || ctx_r1.providers.includes(ctx_r1.authProvider.Google));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.providers === ctx_r1.authProvider.ALL || ctx_r1.providers.includes(ctx_r1.authProvider.Apple));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.providers === ctx_r1.authProvider.ALL || ctx_r1.providers.includes(ctx_r1.authProvider.Facebook));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.providers === ctx_r1.authProvider.ALL || ctx_r1.providers.includes(ctx_r1.authProvider.Twitter));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.providers === ctx_r1.authProvider.ALL || ctx_r1.providers.includes(ctx_r1.authProvider.Github));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.providers === ctx_r1.authProvider.ALL || ctx_r1.providers.includes(ctx_r1.authProvider.Microsoft));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.providers === ctx_r1.authProvider.ALL || ctx_r1.providers.includes(ctx_r1.authProvider.Yahoo));
} }
function AuthProvidersComponent_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_3_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r56); const ctx_r55 = i0.ɵɵnextContext(2); return ctx_r55.processLegalSignUP(ctx_r55.authProvider.Google); });
    i0.ɵɵtext(1, " Google ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_3_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 45);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_3_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r58); const ctx_r57 = i0.ɵɵnextContext(2); return ctx_r57.processLegalSignUP(ctx_r57.authProvider.Apple); });
    i0.ɵɵtext(1, " Apple ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 46);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_3_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r60); const ctx_r59 = i0.ɵɵnextContext(2); return ctx_r59.processLegalSignUP(ctx_r59.authProvider.Facebook); });
    i0.ɵɵtext(1, " Facebook ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_3_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 47);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_3_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r62); const ctx_r61 = i0.ɵɵnextContext(2); return ctx_r61.processLegalSignUP(ctx_r61.authProvider.Twitter); });
    i0.ɵɵtext(1, " Twitter ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_3_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r64); const ctx_r63 = i0.ɵɵnextContext(2); return ctx_r63.processLegalSignUP(ctx_r63.authProvider.Github); });
    i0.ɵɵtext(1, " GitHub ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_3_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_3_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r66); const ctx_r65 = i0.ɵɵnextContext(2); return ctx_r65.processLegalSignUP(ctx_r65.authProvider.Microsoft); });
    i0.ɵɵtext(1, " Microsoft ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_3_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r68 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_3_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r68); const ctx_r67 = i0.ɵɵnextContext(2); return ctx_r67.processLegalSignUP(ctx_r67.authProvider.Yahoo); });
    i0.ɵɵtext(1, " Yahoo ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtemplate(1, AuthProvidersComponent_div_3_button_1_Template, 2, 6, "button", 37);
    i0.ɵɵtemplate(2, AuthProvidersComponent_div_3_button_2_Template, 2, 6, "button", 38);
    i0.ɵɵtemplate(3, AuthProvidersComponent_div_3_button_3_Template, 2, 6, "button", 39);
    i0.ɵɵtemplate(4, AuthProvidersComponent_div_3_button_4_Template, 2, 6, "button", 40);
    i0.ɵɵtemplate(5, AuthProvidersComponent_div_3_button_5_Template, 2, 6, "button", 41);
    i0.ɵɵtemplate(6, AuthProvidersComponent_div_3_button_6_Template, 2, 6, "button", 42);
    i0.ɵɵtemplate(7, AuthProvidersComponent_div_3_button_7_Template, 2, 6, "button", 43);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("fxLayoutAlign", ctx_r2.layout == "row" ? "space-around center" : "stretch")("fxLayout", ctx_r2.layout);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.providers === ctx_r2.authProvider.ALL || ctx_r2.providers.includes(ctx_r2.authProvider.Google));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.providers === ctx_r2.authProvider.ALL || ctx_r2.providers.includes(ctx_r2.authProvider.Apple));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.providers === ctx_r2.authProvider.ALL || ctx_r2.providers.includes(ctx_r2.authProvider.Facebook));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.providers === ctx_r2.authProvider.ALL || ctx_r2.providers.includes(ctx_r2.authProvider.Twitter));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.providers === ctx_r2.authProvider.ALL || ctx_r2.providers.includes(ctx_r2.authProvider.Github));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.providers === ctx_r2.authProvider.ALL || ctx_r2.providers.includes(ctx_r2.authProvider.Microsoft));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.providers === ctx_r2.authProvider.ALL || ctx_r2.providers.includes(ctx_r2.authProvider.Yahoo));
} }
function AuthProvidersComponent_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 59);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_4_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r77); const ctx_r76 = i0.ɵɵnextContext(2); return ctx_r76.processLegalSignUP(ctx_r76.authProvider.Google); });
    i0.ɵɵtext(1, " Google ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_4_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 60);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_4_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r79); const ctx_r78 = i0.ɵɵnextContext(2); return ctx_r78.processLegalSignUP(ctx_r78.authProvider.Apple); });
    i0.ɵɵtext(1, " Apple ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 61);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_4_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r81); const ctx_r80 = i0.ɵɵnextContext(2); return ctx_r80.processLegalSignUP(ctx_r80.authProvider.Facebook); });
    i0.ɵɵtext(1, " Facebook ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_4_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 62);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_4_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r83); const ctx_r82 = i0.ɵɵnextContext(2); return ctx_r82.processLegalSignUP(ctx_r82.authProvider.Twitter); });
    i0.ɵɵtext(1, " Twitter ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_4_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 63);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_4_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r85); const ctx_r84 = i0.ɵɵnextContext(2); return ctx_r84.processLegalSignUP(ctx_r84.authProvider.Github); });
    i0.ɵɵtext(1, " GitHub ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_4_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 64);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_4_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r87); const ctx_r86 = i0.ɵɵnextContext(2); return ctx_r86.processLegalSignUP(ctx_r86.authProvider.Microsoft); });
    i0.ɵɵtext(1, " Microsoft ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_4_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 65);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_4_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r89); const ctx_r88 = i0.ɵɵnextContext(2); return ctx_r88.processLegalSignUP(ctx_r88.authProvider.Yahoo); });
    i0.ɵɵtext(1, " Yahoo ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction0(2, _c0)))("ngClass.xs", i0.ɵɵpureFunction0(5, _c2));
} }
function AuthProvidersComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵtemplate(1, AuthProvidersComponent_div_4_button_1_Template, 2, 6, "button", 52);
    i0.ɵɵtemplate(2, AuthProvidersComponent_div_4_button_2_Template, 2, 6, "button", 53);
    i0.ɵɵtemplate(3, AuthProvidersComponent_div_4_button_3_Template, 2, 6, "button", 54);
    i0.ɵɵtemplate(4, AuthProvidersComponent_div_4_button_4_Template, 2, 6, "button", 55);
    i0.ɵɵtemplate(5, AuthProvidersComponent_div_4_button_5_Template, 2, 6, "button", 56);
    i0.ɵɵtemplate(6, AuthProvidersComponent_div_4_button_6_Template, 2, 6, "button", 57);
    i0.ɵɵtemplate(7, AuthProvidersComponent_div_4_button_7_Template, 2, 6, "button", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("fxLayoutAlign", ctx_r3.layout == "row" ? "space-around center" : "stretch")("fxLayout", ctx_r3.layout);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.providers === ctx_r3.authProvider.ALL || ctx_r3.providers.includes(ctx_r3.authProvider.Google));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.providers === ctx_r3.authProvider.ALL || ctx_r3.providers.includes(ctx_r3.authProvider.Apple));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.providers === ctx_r3.authProvider.ALL || ctx_r3.providers.includes(ctx_r3.authProvider.Facebook));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.providers === ctx_r3.authProvider.ALL || ctx_r3.providers.includes(ctx_r3.authProvider.Twitter));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.providers === ctx_r3.authProvider.ALL || ctx_r3.providers.includes(ctx_r3.authProvider.Github));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.providers === ctx_r3.authProvider.ALL || ctx_r3.providers.includes(ctx_r3.authProvider.Microsoft));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.providers === ctx_r3.authProvider.ALL || ctx_r3.providers.includes(ctx_r3.authProvider.Yahoo));
} }
function AuthProvidersComponent_div_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r98 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 74);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_5_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r98); const ctx_r97 = i0.ɵɵnextContext(2); return ctx_r97.processLegalSignUP(ctx_r97.authProvider.Google); });
    i0.ɵɵelement(1, "mat-icon", 75);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(2, _c1, i0.ɵɵpureFunction0(1, _c0)));
} }
function AuthProvidersComponent_div_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r100 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 76);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r100); const ctx_r99 = i0.ɵɵnextContext(2); return ctx_r99.processLegalSignUP(ctx_r99.authProvider.Apple); });
    i0.ɵɵelement(1, "mat-icon", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(2, _c1, i0.ɵɵpureFunction0(1, _c0)));
} }
function AuthProvidersComponent_div_5_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r102 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 77);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_5_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r102); const ctx_r101 = i0.ɵɵnextContext(2); return ctx_r101.processLegalSignUP(ctx_r101.authProvider.Facebook); });
    i0.ɵɵelement(1, "mat-icon", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(2, _c1, i0.ɵɵpureFunction0(1, _c0)));
} }
function AuthProvidersComponent_div_5_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r104 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 78);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_5_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r104); const ctx_r103 = i0.ɵɵnextContext(2); return ctx_r103.processLegalSignUP(ctx_r103.authProvider.Twitter); });
    i0.ɵɵelement(1, "mat-icon", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(2, _c1, i0.ɵɵpureFunction0(1, _c0)));
} }
function AuthProvidersComponent_div_5_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r106 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 79);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_5_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r106); const ctx_r105 = i0.ɵɵnextContext(2); return ctx_r105.processLegalSignUP(ctx_r105.authProvider.Github); });
    i0.ɵɵelement(1, "mat-icon", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(2, _c1, i0.ɵɵpureFunction0(1, _c0)));
} }
function AuthProvidersComponent_div_5_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r108 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 80);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_5_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r108); const ctx_r107 = i0.ɵɵnextContext(2); return ctx_r107.processLegalSignUP(ctx_r107.authProvider.Microsoft); });
    i0.ɵɵelement(1, "mat-icon", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(2, _c1, i0.ɵɵpureFunction0(1, _c0)));
} }
function AuthProvidersComponent_div_5_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r110 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 81);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_5_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r110); const ctx_r109 = i0.ɵɵnextContext(2); return ctx_r109.processLegalSignUP(ctx_r109.authProvider.Yahoo); });
    i0.ɵɵelement(1, "mat-icon", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(2, _c1, i0.ɵɵpureFunction0(1, _c0)));
} }
function AuthProvidersComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵtemplate(1, AuthProvidersComponent_div_5_button_1_Template, 2, 4, "button", 67);
    i0.ɵɵtemplate(2, AuthProvidersComponent_div_5_button_2_Template, 2, 4, "button", 68);
    i0.ɵɵtemplate(3, AuthProvidersComponent_div_5_button_3_Template, 2, 4, "button", 69);
    i0.ɵɵtemplate(4, AuthProvidersComponent_div_5_button_4_Template, 2, 4, "button", 70);
    i0.ɵɵtemplate(5, AuthProvidersComponent_div_5_button_5_Template, 2, 4, "button", 71);
    i0.ɵɵtemplate(6, AuthProvidersComponent_div_5_button_6_Template, 2, 4, "button", 72);
    i0.ɵɵtemplate(7, AuthProvidersComponent_div_5_button_7_Template, 2, 4, "button", 73);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("fxLayoutAlign", ctx_r4.layout == "row" ? "space-around center" : "stretch")("fxLayout", ctx_r4.layout);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.providers === ctx_r4.authProvider.ALL || ctx_r4.providers.includes(ctx_r4.authProvider.Google));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.providers === ctx_r4.authProvider.ALL || ctx_r4.providers.includes(ctx_r4.authProvider.Apple));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.providers === ctx_r4.authProvider.ALL || ctx_r4.providers.includes(ctx_r4.authProvider.Facebook));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.providers === ctx_r4.authProvider.ALL || ctx_r4.providers.includes(ctx_r4.authProvider.Twitter));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.providers === ctx_r4.authProvider.ALL || ctx_r4.providers.includes(ctx_r4.authProvider.Github));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.providers === ctx_r4.authProvider.ALL || ctx_r4.providers.includes(ctx_r4.authProvider.Microsoft));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.providers === ctx_r4.authProvider.ALL || ctx_r4.providers.includes(ctx_r4.authProvider.Yahoo));
} }
function AuthProvidersComponent_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r119 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 90);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_6_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r119); const ctx_r118 = i0.ɵɵnextContext(2); return ctx_r118.processLegalSignUP(ctx_r118.authProvider.Google); });
    i0.ɵɵelement(1, "mat-icon", 75);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(2, _c1, i0.ɵɵpureFunction0(1, _c0)));
} }
function AuthProvidersComponent_div_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r121 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 91);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_6_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r121); const ctx_r120 = i0.ɵɵnextContext(2); return ctx_r120.processLegalSignUP(ctx_r120.authProvider.Apple); });
    i0.ɵɵelement(1, "mat-icon", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(2, _c1, i0.ɵɵpureFunction0(1, _c0)));
} }
function AuthProvidersComponent_div_6_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r123 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 92);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_6_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r123); const ctx_r122 = i0.ɵɵnextContext(2); return ctx_r122.processLegalSignUP(ctx_r122.authProvider.Facebook); });
    i0.ɵɵelement(1, "mat-icon", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(2, _c1, i0.ɵɵpureFunction0(1, _c0)));
} }
function AuthProvidersComponent_div_6_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r125 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 93);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_6_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r125); const ctx_r124 = i0.ɵɵnextContext(2); return ctx_r124.processLegalSignUP(ctx_r124.authProvider.Twitter); });
    i0.ɵɵelement(1, "mat-icon", 94);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(2, _c1, i0.ɵɵpureFunction0(1, _c0)));
} }
function AuthProvidersComponent_div_6_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r127 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 95);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_6_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r127); const ctx_r126 = i0.ɵɵnextContext(2); return ctx_r126.processLegalSignUP(ctx_r126.authProvider.Github); });
    i0.ɵɵelement(1, "mat-icon", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(2, _c1, i0.ɵɵpureFunction0(1, _c0)));
} }
function AuthProvidersComponent_div_6_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r129 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 96);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_6_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r129); const ctx_r128 = i0.ɵɵnextContext(2); return ctx_r128.processLegalSignUP(ctx_r128.authProvider.Microsoft); });
    i0.ɵɵelement(1, "mat-icon", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(2, _c1, i0.ɵɵpureFunction0(1, _c0)));
} }
function AuthProvidersComponent_div_6_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r131 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 97);
    i0.ɵɵlistener("click", function AuthProvidersComponent_div_6_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r131); const ctx_r130 = i0.ɵɵnextContext(2); return ctx_r130.processLegalSignUP(ctx_r130.authProvider.Yahoo); });
    i0.ɵɵelement(1, "mat-icon", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@animate", i0.ɵɵpureFunction1(2, _c1, i0.ɵɵpureFunction0(1, _c0)));
} }
function AuthProvidersComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82);
    i0.ɵɵtemplate(1, AuthProvidersComponent_div_6_button_1_Template, 2, 4, "button", 83);
    i0.ɵɵtemplate(2, AuthProvidersComponent_div_6_button_2_Template, 2, 4, "button", 84);
    i0.ɵɵtemplate(3, AuthProvidersComponent_div_6_button_3_Template, 2, 4, "button", 85);
    i0.ɵɵtemplate(4, AuthProvidersComponent_div_6_button_4_Template, 2, 4, "button", 86);
    i0.ɵɵtemplate(5, AuthProvidersComponent_div_6_button_5_Template, 2, 4, "button", 87);
    i0.ɵɵtemplate(6, AuthProvidersComponent_div_6_button_6_Template, 2, 4, "button", 88);
    i0.ɵɵtemplate(7, AuthProvidersComponent_div_6_button_7_Template, 2, 4, "button", 89);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("fxLayoutAlign", ctx_r5.layout == "row" ? "space-around center" : "stretch")("fxLayout", ctx_r5.layout);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.providers === ctx_r5.authProvider.ALL || ctx_r5.providers.includes(ctx_r5.authProvider.Google));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.providers === ctx_r5.authProvider.ALL || ctx_r5.providers.includes(ctx_r5.authProvider.Apple));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.providers === ctx_r5.authProvider.ALL || ctx_r5.providers.includes(ctx_r5.authProvider.Facebook));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.providers === ctx_r5.authProvider.ALL || ctx_r5.providers.includes(ctx_r5.authProvider.Twitter));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.providers === ctx_r5.authProvider.ALL || ctx_r5.providers.includes(ctx_r5.authProvider.Github));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.providers === ctx_r5.authProvider.ALL || ctx_r5.providers.includes(ctx_r5.authProvider.Microsoft));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.providers === ctx_r5.authProvider.ALL || ctx_r5.providers.includes(ctx_r5.authProvider.Yahoo));
} }
const _c3 = function () { return { value: "50" }; };
export var Theme;
(function (Theme) {
    Theme["DEFAULT"] = "default";
    Theme["CLASSIC"] = "classic";
    Theme["STROKED"] = "stroked";
    Theme["FAB"] = "fab";
    Theme["MINI_FAB"] = "mini-fab";
    Theme["RAISED"] = "raised";
})(Theme || (Theme = {}));
export var Layout;
(function (Layout) {
    Layout["ROW"] = "row";
    Layout["COLUMN"] = "column";
})(Layout || (Layout = {}));
export class AuthProvidersComponent {
    constructor(authProcess, dialog) {
        this.authProcess = authProcess;
        this.dialog = dialog;
        this.layout = Layout.ROW;
        this.providers = AuthProvider.ALL; //  google, facebook, twitter, github, microsoft, yahoo
        this.themes = Theme;
        this.authProvider = AuthProvider;
        this.onSuccess = authProcess.onSuccessEmitter;
        this.onError = authProcess.onErrorEmitter;
    }
    processLegalSignUP(authProvider) {
        if (this.tosUrl || this.privacyPolicyUrl) {
            const params = {
                tosUrl: this.tosUrl,
                privacyPolicyUrl: this.privacyPolicyUrl,
                authProvider
            };
            this.dialogRef = this.dialog.open(LegalityDialogComponent, { data: params });
            this.dialogRef.afterClosed().subscribe((result) => {
                if (result && result.checked) {
                    // this._afterSignUpMiddleware(result.authProvider).then(() => this.signUpFormGroup.reset());
                    this.authProcess.signInWith(authProvider);
                }
                this.dialogRef = null;
            });
        }
        else {
            // this._afterSignUpMiddleware(authProvider).then(() => this.signUpFormGroup.reset());
            this.authProcess.signInWith(authProvider);
        }
    }
}
AuthProvidersComponent.ɵfac = function AuthProvidersComponent_Factory(t) { return new (t || AuthProvidersComponent)(i0.ɵɵdirectiveInject(i1.AuthProcessService), i0.ɵɵdirectiveInject(i2.MatDialog)); };
AuthProvidersComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthProvidersComponent, selectors: [["ngx-auth-firebaseui-providers"]], inputs: { theme: "theme", layout: "layout", providers: "providers", tosUrl: "tosUrl", privacyPolicyUrl: "privacyPolicyUrl" }, outputs: { onSuccess: "onSuccess", onError: "onError" }, decls: 7, vars: 8, consts: [[3, "ngSwitch"], ["fxLayout.xs", "column", 3, "fxLayoutAlign", "fxLayout", 4, "ngSwitchDefault"], ["class", "buttons-classic", "fxLayout.xs", "column", 3, "fxLayoutAlign", "fxLayout", 4, "ngSwitchCase"], ["class", "buttons-raised", "fxLayout.xs", "column", 3, "fxLayoutAlign", "fxLayout", 4, "ngSwitchCase"], ["class", "buttons-raised", 3, "fxLayoutAlign", "fxLayout", 4, "ngSwitchCase"], ["class", "buttons-raised", "fxLayoutAlign.xs", "center center", 3, "fxLayoutAlign", "fxLayout", 4, "ngSwitchCase"], ["fxLayout.xs", "column", 3, "fxLayoutAlign", "fxLayout"], ["mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "apple-filled", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "facebook-filled", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "twitter-filled", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["mat-button", "", 3, "ngClass.xs", "click"], ["svgIcon", "google-colored"], ["mat-button", "", 1, "apple-filled", 3, "ngClass.xs", "click"], ["svgIcon", "apple"], ["mat-button", "", 1, "facebook-filled", 3, "ngClass.xs", "click"], ["svgIcon", "facebook"], ["mat-button", "", 1, "twitter-filled", 3, "ngClass.xs", "click"], ["svgIcon", "twitter"], ["svgIcon", "github"], ["svgIcon", "microsoft"], ["svgIcon", "yahoo"], ["fxLayout.xs", "column", 1, "buttons-classic", 3, "fxLayoutAlign", "fxLayout"], ["class", "google-classic", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "apple-classic", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "facebook-classic", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "twitter-classic", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "github-classic", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "microsoft-classic", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "yahoo-classic", "mat-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["mat-button", "", 1, "google-classic", 3, "ngClass.xs", "click"], ["mat-button", "", 1, "apple-classic", 3, "ngClass.xs", "click"], ["mat-button", "", 1, "facebook-classic", 3, "ngClass.xs", "click"], ["mat-button", "", 1, "twitter-classic", 3, "ngClass.xs", "click"], ["mat-button", "", 1, "github-classic", 3, "ngClass.xs", "click"], ["mat-button", "", 1, "microsoft-classic", 3, "ngClass.xs", "click"], ["mat-button", "", 1, "yahoo-classic", 3, "ngClass.xs", "click"], ["class", "google-classic", "mat-stroked-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "apple-classic", "mat-stroked-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "facebook-classic", "mat-stroked-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "twitter-classic", "mat-stroked-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "github-classic", "mat-stroked-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "microsoft-classic", "mat-stroked-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "yahoo-classic", "mat-stroked-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["mat-stroked-button", "", 1, "google-classic", 3, "ngClass.xs", "click"], ["mat-stroked-button", "", 1, "apple-classic", 3, "ngClass.xs", "click"], ["mat-stroked-button", "", 1, "facebook-classic", 3, "ngClass.xs", "click"], ["mat-stroked-button", "", 1, "twitter-classic", 3, "ngClass.xs", "click"], ["mat-stroked-button", "", 1, "github-classic", 3, "ngClass.xs", "click"], ["mat-stroked-button", "", 1, "microsoft-classic", 3, "ngClass.xs", "click"], ["mat-stroked-button", "", 1, "yahoo-classic", 3, "ngClass.xs", "click"], ["fxLayout.xs", "column", 1, "buttons-raised", 3, "fxLayoutAlign", "fxLayout"], ["class", "google-raised", "mat-raised-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "apple-raised", "mat-raised-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "facebook-raised", "mat-raised-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "twitter-raised", "mat-raised-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "github-raised", "mat-raised-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "microsoft-raised", "mat-raised-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["class", "yahoo-raised", "mat-raised-button", "", 3, "ngClass.xs", "click", 4, "ngIf"], ["mat-raised-button", "", 1, "google-raised", 3, "ngClass.xs", "click"], ["mat-raised-button", "", 1, "apple-raised", 3, "ngClass.xs", "click"], ["mat-raised-button", "", 1, "facebook-raised", 3, "ngClass.xs", "click"], ["mat-raised-button", "", 1, "twitter-raised", 3, "ngClass.xs", "click"], ["mat-raised-button", "", 1, "github-raised", 3, "ngClass.xs", "click"], ["mat-raised-button", "", 1, "microsoft-raised", 3, "ngClass.xs", "click"], ["mat-raised-button", "", 1, "yahoo-raised", 3, "ngClass.xs", "click"], [1, "buttons-raised", 3, "fxLayoutAlign", "fxLayout"], ["class", "google-raised", "mat-fab", "", 3, "click", 4, "ngIf"], ["class", "apple-raised", "mat-fab", "", 3, "click", 4, "ngIf"], ["class", "facebook-raised", "mat-fab", "", 3, "click", 4, "ngIf"], ["class", "twitter-raised", "mat-fab", "", 3, "click", 4, "ngIf"], ["class", "github-raised", "mat-fab", "", 3, "click", 4, "ngIf"], ["class", "microsoft", "mat-fab", "", 3, "click", 4, "ngIf"], ["class", "yahoo-raised", "mat-fab", "", 3, "click", 4, "ngIf"], ["mat-fab", "", 1, "google-raised", 3, "click"], ["svgIcon", "google"], ["mat-fab", "", 1, "apple-raised", 3, "click"], ["mat-fab", "", 1, "facebook-raised", 3, "click"], ["mat-fab", "", 1, "twitter-raised", 3, "click"], ["mat-fab", "", 1, "github-raised", 3, "click"], ["mat-fab", "", 1, "microsoft", 3, "click"], ["mat-fab", "", 1, "yahoo-raised", 3, "click"], ["fxLayoutAlign.xs", "center center", 1, "buttons-raised", 3, "fxLayoutAlign", "fxLayout"], ["class", "google-raised", "fxFlexAlign", "center", "mat-mini-fab", "", 3, "click", 4, "ngIf"], ["class", "apple-raised", "mat-mini-fab", "", 3, "click", 4, "ngIf"], ["class", "facebook-raised", "mat-mini-fab", "", 3, "click", 4, "ngIf"], ["class", "twitter-raised", "mat-mini-fab", "", 3, "click", 4, "ngIf"], ["class", "github-raised", "mat-mini-fab", "", 3, "click", 4, "ngIf"], ["class", "microsoft", "mat-mini-fab", "", 3, "click", 4, "ngIf"], ["class", "yahoo-raised", "mat-mini-fab", "", 3, "click", 4, "ngIf"], ["fxFlexAlign", "center", "mat-mini-fab", "", 1, "google-raised", 3, "click"], ["mat-mini-fab", "", 1, "apple-raised", 3, "click"], ["mat-mini-fab", "", 1, "facebook-raised", 3, "click"], ["mat-mini-fab", "", 1, "twitter-raised", 3, "click"], ["svgIcon", "twitter", 1, "icon-white"], ["mat-mini-fab", "", 1, "github-raised", 3, "click"], ["mat-mini-fab", "", 1, "microsoft", 3, "click"], ["mat-mini-fab", "", 1, "yahoo-raised", 3, "click"]], template: function AuthProvidersComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, AuthProvidersComponent_div_1_Template, 8, 9, "div", 1);
        i0.ɵɵtemplate(2, AuthProvidersComponent_div_2_Template, 8, 9, "div", 2);
        i0.ɵɵtemplate(3, AuthProvidersComponent_div_3_Template, 8, 9, "div", 2);
        i0.ɵɵtemplate(4, AuthProvidersComponent_div_4_Template, 8, 9, "div", 3);
        i0.ɵɵtemplate(5, AuthProvidersComponent_div_5_Template, 8, 9, "div", 4);
        i0.ɵɵtemplate(6, AuthProvidersComponent_div_6_Template, 8, 9, "div", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("@animateStagger", i0.ɵɵpureFunction0(7, _c3))("ngSwitch", ctx.theme);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngSwitchCase", ctx.themes.CLASSIC);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.themes.STROKED);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.themes.RAISED);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.themes.FAB);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.themes.MINI_FAB);
    } }, directives: [i3.NgSwitch, i3.NgSwitchDefault, i3.NgSwitchCase, i4.DefaultLayoutDirective, i4.DefaultLayoutAlignDirective, i3.NgIf, i5.MatButton, i6.DefaultClassDirective, i7.MatIcon, i4.DefaultFlexAlignDirective], styles: ["[_nghost-%COMP%]{display:block}.space-full-xs[_ngcontent-%COMP%]{width:100%;margin:.4rem}.apple-filled[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#000}.facebook-filled[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{fill:#385899}.twitter-filled[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{fill:#1da1f2}.buttons-raised[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff!important}.buttons-raised[_ngcontent-%COMP%]   .google-raised[_ngcontent-%COMP%]{background-color:#db4437}.buttons-raised[_ngcontent-%COMP%]   .apple-raised[_ngcontent-%COMP%]{background-color:#000}.buttons-raised[_ngcontent-%COMP%]   .facebook-raised[_ngcontent-%COMP%]{background-color:#385899}.buttons-raised[_ngcontent-%COMP%]   .twitter-raised[_ngcontent-%COMP%]{background-color:#1da1f2}.buttons-raised[_ngcontent-%COMP%]   .github-raised[_ngcontent-%COMP%]{background-color:#000}.buttons-raised[_ngcontent-%COMP%]   .microsoft-raised[_ngcontent-%COMP%]{background-color:#0078d4}.buttons-raised[_ngcontent-%COMP%]   .yahoo-raised[_ngcontent-%COMP%]{background-color:#720e9e}.buttons-raised[_ngcontent-%COMP%]   .phone-raised[_ngcontent-%COMP%]{background-color:#02bd7e}.buttons-classic[_ngcontent-%COMP%]   button.google-classic[_ngcontent-%COMP%]{color:#db4437!important}.buttons-classic[_ngcontent-%COMP%]   button.apple-classic[_ngcontent-%COMP%]{color:#000!important}.buttons-classic[_ngcontent-%COMP%]   .facebook-classic[_ngcontent-%COMP%]{color:#385899!important}.buttons-classic[_ngcontent-%COMP%]   .twitter-classic[_ngcontent-%COMP%]{color:#1da1f2!important}.buttons-classic[_ngcontent-%COMP%]   .github-classic[_ngcontent-%COMP%]{color:#000!important}.buttons-classic[_ngcontent-%COMP%]   .microsoft-classic[_ngcontent-%COMP%]{color:#0078d4!important}.buttons-classic[_ngcontent-%COMP%]   .yahoo-classic[_ngcontent-%COMP%]{color:#720e9e!important}.buttons-classic[_ngcontent-%COMP%]   .phone-classic[_ngcontent-%COMP%]{color:#02bd7e}.icon-white[_ngcontent-%COMP%]{color:#fff}.icon-white[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{fill:#fff}button.microsoft[_ngcontent-%COMP%]{background:#f8f9fa}"], data: { animation: NgxAuthFirebaseuiAnimations } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthProvidersComponent, [{
        type: Component,
        args: [{ selector: 'ngx-auth-firebaseui-providers', animations: NgxAuthFirebaseuiAnimations, template: "<div [@animateStagger]=\"{ value: '50' }\" [ngSwitch]=\"theme\">\n\n  <!--default icon buttons-->\n  <div *ngSwitchDefault\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       fxLayout.xs=\"column\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            mat-button>\n      <mat-icon svgIcon=\"google-colored\"></mat-icon>\n      Google\n    </button>\n\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"apple-filled\"\n            mat-button>\n      <mat-icon svgIcon=\"apple\"></mat-icon>\n      Apple\n    </button>\n\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"facebook-filled\"\n            mat-button>\n      <mat-icon svgIcon=\"facebook\"></mat-icon>\n      Facebook\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"twitter-filled\"\n            mat-button>\n      <mat-icon svgIcon=\"twitter\"></mat-icon>\n      Twitter\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            mat-button>\n      <mat-icon svgIcon=\"github\"></mat-icon>\n      GitHub\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            mat-button>\n      <mat-icon svgIcon=\"microsoft\"></mat-icon>\n      Microsoft\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            mat-button>\n      <mat-icon svgIcon=\"yahoo\"></mat-icon>\n      Yahoo\n    </button>\n  </div>\n\n  <!--classic-->\n  <div *ngSwitchCase=\"themes.CLASSIC\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-classic\"\n       fxLayout.xs=\"column\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"google-classic\"\n            mat-button>\n      Google\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"apple-classic\"\n            mat-button>\n      Apple\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"facebook-classic\"\n            mat-button>\n      Facebook\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"twitter-classic\"\n            mat-button>\n      Twitter\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"github-classic\"\n            mat-button>\n      GitHub\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"microsoft-classic\"\n            mat-button>\n      Microsoft\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"yahoo-classic\"\n            mat-button>\n      Yahoo\n    </button>\n  </div>\n\n  <!--stroked-->\n  <div *ngSwitchCase=\"themes.STROKED\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-classic\"\n       fxLayout.xs=\"column\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"google-classic\"\n            mat-stroked-button>\n      Google\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"apple-classic\"\n            mat-stroked-button>\n      Apple\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"facebook-classic\"\n            mat-stroked-button>\n      Facebook\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"twitter-classic\"\n            mat-stroked-button>\n      Twitter\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"github-classic\"\n            mat-stroked-button>\n      GitHub\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"microsoft-classic\"\n            mat-stroked-button>\n      Microsoft\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"yahoo-classic\"\n            mat-stroked-button>\n      Yahoo\n    </button>\n  </div>\n\n  <!--raised-->\n  <div *ngSwitchCase=\"themes.RAISED\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-raised\"\n       fxLayout.xs=\"column\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"google-raised\"\n            mat-raised-button>\n      Google\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"apple-raised\"\n            mat-raised-button>\n      Apple\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"facebook-raised\"\n            mat-raised-button>\n      Facebook\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"twitter-raised\"\n            mat-raised-button>\n      Twitter\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"github-raised\"\n            mat-raised-button>\n      GitHub\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"microsoft-raised\"\n            mat-raised-button>\n      Microsoft\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            [ngClass.xs]=\"{'space-full-xs':true}\"\n            class=\"yahoo-raised\"\n            mat-raised-button>\n      Yahoo\n    </button>\n  </div>\n\n  <!--fab-->\n  <div *ngSwitchCase=\"themes.FAB\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-raised\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"google-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"google\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"apple-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"apple\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"facebook-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"facebook\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"twitter-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"twitter\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"github-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"github\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"microsoft\"\n            mat-fab>\n      <mat-icon svgIcon=\"microsoft\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"yahoo-raised\"\n            mat-fab>\n      <mat-icon svgIcon=\"yahoo\"></mat-icon>\n    </button>\n  </div>\n\n  <!--mini-fab-->\n  <div *ngSwitchCase=\"themes.MINI_FAB\"\n       [fxLayoutAlign]=\"layout == 'row' ? 'space-around center' : 'stretch'\"\n       [fxLayout]=\"layout\"\n       class=\"buttons-raised\"\n       fxLayoutAlign.xs=\"center center\">\n    <button (click)=\"processLegalSignUP(authProvider.Google)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Google)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"google-raised\"\n            fxFlexAlign=\"center\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"google\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Apple)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Apple)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"apple-raised\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"apple\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Facebook)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Facebook)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"facebook-raised\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"facebook\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Twitter)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Twitter)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"twitter-raised\"\n            mat-mini-fab>\n      <mat-icon class=\"icon-white\" svgIcon=\"twitter\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Github)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Github)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"github-raised\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"github\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Microsoft)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Microsoft)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"microsoft\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"microsoft\"></mat-icon>\n    </button>\n    <button (click)=\"processLegalSignUP(authProvider.Yahoo)\"\n            *ngIf=\"providers === authProvider.ALL || providers.includes(authProvider.Yahoo)\"\n            [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\"\n            class=\"yahoo-raised\"\n            mat-mini-fab>\n      <mat-icon svgIcon=\"yahoo\"></mat-icon>\n    </button>\n  </div>\n</div>\n", styles: [":host{display:block}.space-full-xs{width:100%;margin:.4rem}.apple-filled mat-icon svg path{fill:#000}.facebook-filled mat-icon{fill:#385899}.twitter-filled mat-icon{fill:#1da1f2}.buttons-raised button{color:#fff!important}.buttons-raised .google-raised{background-color:#db4437}.buttons-raised .apple-raised{background-color:#000}.buttons-raised .facebook-raised{background-color:#385899}.buttons-raised .twitter-raised{background-color:#1da1f2}.buttons-raised .github-raised{background-color:#000}.buttons-raised .microsoft-raised{background-color:#0078d4}.buttons-raised .yahoo-raised{background-color:#720e9e}.buttons-raised .phone-raised{background-color:#02bd7e}.buttons-classic button.google-classic{color:#db4437!important}.buttons-classic button.apple-classic{color:#000!important}.buttons-classic .facebook-classic{color:#385899!important}.buttons-classic .twitter-classic{color:#1da1f2!important}.buttons-classic .github-classic{color:#000!important}.buttons-classic .microsoft-classic{color:#0078d4!important}.buttons-classic .yahoo-classic{color:#720e9e!important}.buttons-classic .phone-classic{color:#02bd7e}.icon-white{color:#fff}.icon-white mat-icon{fill:#fff}button.microsoft{background:#f8f9fa}\n"] }]
    }], function () { return [{ type: i1.AuthProcessService }, { type: i2.MatDialog }]; }, { theme: [{
            type: Input
        }], layout: [{
            type: Input
        }], providers: [{
            type: Input
        }], onSuccess: [{
            type: Output
        }], onError: [{
            type: Output
        }], tosUrl: [{
            type: Input
        }], privacyPolicyUrl: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5wcm92aWRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1dGgtZmlyZWJhc2V1aS9zcmMvbGliL2NvbXBvbmVudHMvcHJvdmlkZXJzL2F1dGgucHJvdmlkZXJzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXRoLWZpcmViYXNldWkvc3JjL2xpYi9jb21wb25lbnRzL3Byb3ZpZGVycy9hdXRoLnByb3ZpZGVycy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFxQixZQUFZLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lDSXZDLGtDQUltQjtJQUpYLCtLQUFTLHVEQUF1QyxJQUFDO0lBS3ZELCtCQUE4QztJQUM5Qyx3QkFDRjtJQUFBLGlCQUFTOztJQUxELGlGQUE0RCwwQ0FBQTs7OztJQU9wRSxrQ0FLbUI7SUFMWCwrS0FBUyxzREFBc0MsSUFBQztJQU10RCwrQkFBcUM7SUFDckMsdUJBQ0Y7SUFBQSxpQkFBUzs7SUFORCxpRkFBNEQsMENBQUE7Ozs7SUFRcEUsa0NBS21CO0lBTFgsK0tBQVMseURBQXlDLElBQUM7SUFNekQsK0JBQXdDO0lBQ3hDLDBCQUNGO0lBQUEsaUJBQVM7O0lBTkQsaUZBQTRELDBDQUFBOzs7O0lBT3BFLGtDQUttQjtJQUxYLCtLQUFTLHdEQUF3QyxJQUFDO0lBTXhELCtCQUF1QztJQUN2Qyx5QkFDRjtJQUFBLGlCQUFTOztJQU5ELGlGQUE0RCwwQ0FBQTs7OztJQU9wRSxrQ0FJbUI7SUFKWCwrS0FBUyx1REFBdUMsSUFBQztJQUt2RCwrQkFBc0M7SUFDdEMsd0JBQ0Y7SUFBQSxpQkFBUzs7SUFMRCxpRkFBNEQsMENBQUE7Ozs7SUFNcEUsa0NBSW1CO0lBSlgsK0tBQVMsMERBQTBDLElBQUM7SUFLMUQsK0JBQXlDO0lBQ3pDLDJCQUNGO0lBQUEsaUJBQVM7O0lBTEQsaUZBQTRELDBDQUFBOzs7O0lBTXBFLGtDQUltQjtJQUpYLCtLQUFTLHNEQUFzQyxJQUFDO0lBS3RELCtCQUFxQztJQUNyQyx1QkFDRjtJQUFBLGlCQUFTOztJQUxELGlGQUE0RCwwQ0FBQTs7O0lBM0R0RSw4QkFHMEI7SUFDeEIsbUZBT1M7SUFFVCxtRkFRUztJQUVULG1GQVFTO0lBQ1Qsb0ZBUVM7SUFDVCxtRkFPUztJQUNULG1GQU9TO0lBQ1QsbUZBT1M7SUFDWCxpQkFBTTs7O0lBaEVELDBGQUFxRSwyQkFBQTtJQUkvRCxlQUErRTtJQUEvRSw0SEFBK0U7SUFTL0UsZUFBOEU7SUFBOUUsMkhBQThFO0lBVTlFLGVBQWlGO0lBQWpGLDhIQUFpRjtJQVNqRixlQUFnRjtJQUFoRiw2SEFBZ0Y7SUFTaEYsZUFBK0U7SUFBL0UsNEhBQStFO0lBUS9FLGVBQWtGO0lBQWxGLCtIQUFrRjtJQVFsRixlQUE4RTtJQUE5RSwySEFBOEU7Ozs7SUFldkYsa0NBS21CO0lBTFgsK0tBQVMsdURBQXVDLElBQUM7SUFNdkQsd0JBQ0Y7SUFBQSxpQkFBUzs7SUFMRCxpRkFBNEQsMENBQUE7Ozs7SUFNcEUsa0NBS21CO0lBTFgsK0tBQVMsc0RBQXNDLElBQUM7SUFNdEQsdUJBQ0Y7SUFBQSxpQkFBUzs7SUFMRCxpRkFBNEQsMENBQUE7Ozs7SUFNcEUsa0NBS21CO0lBTFgsK0tBQVMseURBQXlDLElBQUM7SUFNekQsMEJBQ0Y7SUFBQSxpQkFBUzs7SUFMRCxpRkFBNEQsMENBQUE7Ozs7SUFNcEUsa0NBS21CO0lBTFgsK0tBQVMsd0RBQXdDLElBQUM7SUFNeEQseUJBQ0Y7SUFBQSxpQkFBUzs7SUFMRCxpRkFBNEQsMENBQUE7Ozs7SUFNcEUsa0NBS21CO0lBTFgsK0tBQVMsdURBQXVDLElBQUM7SUFNdkQsd0JBQ0Y7SUFBQSxpQkFBUzs7SUFMRCxpRkFBNEQsMENBQUE7Ozs7SUFNcEUsa0NBS21CO0lBTFgsK0tBQVMsMERBQTBDLElBQUM7SUFNMUQsMkJBQ0Y7SUFBQSxpQkFBUzs7SUFMRCxpRkFBNEQsMENBQUE7Ozs7SUFNcEUsa0NBS21CO0lBTFgsK0tBQVMsc0RBQXNDLElBQUM7SUFNdEQsdUJBQ0Y7SUFBQSxpQkFBUzs7SUFMRCxpRkFBNEQsMENBQUE7OztJQXZEdEUsK0JBSTBCO0lBQ3hCLG9GQU9TO0lBQ1Qsb0ZBT1M7SUFDVCxvRkFPUztJQUNULG9GQU9TO0lBQ1Qsb0ZBT1M7SUFDVCxvRkFPUztJQUNULG9GQU9TO0lBQ1gsaUJBQU07OztJQTVERCwwRkFBcUUsMkJBQUE7SUFLL0QsZUFBK0U7SUFBL0UsNEhBQStFO0lBUS9FLGVBQThFO0lBQTlFLDJIQUE4RTtJQVE5RSxlQUFpRjtJQUFqRiw4SEFBaUY7SUFRakYsZUFBZ0Y7SUFBaEYsNkhBQWdGO0lBUWhGLGVBQStFO0lBQS9FLDRIQUErRTtJQVEvRSxlQUFrRjtJQUFsRiwrSEFBa0Y7SUFRbEYsZUFBOEU7SUFBOUUsMkhBQThFOzs7O0lBZXZGLGtDQUsyQjtJQUxuQiwrS0FBUyx1REFBdUMsSUFBQztJQU12RCx3QkFDRjtJQUFBLGlCQUFTOztJQUxELGlGQUE0RCwwQ0FBQTs7OztJQU1wRSxrQ0FLMkI7SUFMbkIsK0tBQVMsc0RBQXNDLElBQUM7SUFNdEQsdUJBQ0Y7SUFBQSxpQkFBUzs7SUFMRCxpRkFBNEQsMENBQUE7Ozs7SUFNcEUsa0NBSzJCO0lBTG5CLCtLQUFTLHlEQUF5QyxJQUFDO0lBTXpELDBCQUNGO0lBQUEsaUJBQVM7O0lBTEQsaUZBQTRELDBDQUFBOzs7O0lBTXBFLGtDQUsyQjtJQUxuQiwrS0FBUyx3REFBd0MsSUFBQztJQU14RCx5QkFDRjtJQUFBLGlCQUFTOztJQUxELGlGQUE0RCwwQ0FBQTs7OztJQU1wRSxrQ0FLMkI7SUFMbkIsK0tBQVMsdURBQXVDLElBQUM7SUFNdkQsd0JBQ0Y7SUFBQSxpQkFBUzs7SUFMRCxpRkFBNEQsMENBQUE7Ozs7SUFNcEUsa0NBSzJCO0lBTG5CLCtLQUFTLDBEQUEwQyxJQUFDO0lBTTFELDJCQUNGO0lBQUEsaUJBQVM7O0lBTEQsaUZBQTRELDBDQUFBOzs7O0lBTXBFLGtDQUsyQjtJQUxuQiwrS0FBUyxzREFBc0MsSUFBQztJQU10RCx1QkFDRjtJQUFBLGlCQUFTOztJQUxELGlGQUE0RCwwQ0FBQTs7O0lBdkR0RSwrQkFJMEI7SUFDeEIsb0ZBT1M7SUFDVCxvRkFPUztJQUNULG9GQU9TO0lBQ1Qsb0ZBT1M7SUFDVCxvRkFPUztJQUNULG9GQU9TO0lBQ1Qsb0ZBT1M7SUFDWCxpQkFBTTs7O0lBNURELDBGQUFxRSwyQkFBQTtJQUsvRCxlQUErRTtJQUEvRSw0SEFBK0U7SUFRL0UsZUFBOEU7SUFBOUUsMkhBQThFO0lBUTlFLGVBQWlGO0lBQWpGLDhIQUFpRjtJQVFqRixlQUFnRjtJQUFoRiw2SEFBZ0Y7SUFRaEYsZUFBK0U7SUFBL0UsNEhBQStFO0lBUS9FLGVBQWtGO0lBQWxGLCtIQUFrRjtJQVFsRixlQUE4RTtJQUE5RSwySEFBOEU7Ozs7SUFldkYsa0NBSzBCO0lBTGxCLCtLQUFTLHVEQUF1QyxJQUFDO0lBTXZELHdCQUNGO0lBQUEsaUJBQVM7O0lBTEQsaUZBQTRELDBDQUFBOzs7O0lBTXBFLGtDQUswQjtJQUxsQiwrS0FBUyxzREFBc0MsSUFBQztJQU10RCx1QkFDRjtJQUFBLGlCQUFTOztJQUxELGlGQUE0RCwwQ0FBQTs7OztJQU1wRSxrQ0FLMEI7SUFMbEIsK0tBQVMseURBQXlDLElBQUM7SUFNekQsMEJBQ0Y7SUFBQSxpQkFBUzs7SUFMRCxpRkFBNEQsMENBQUE7Ozs7SUFNcEUsa0NBSzBCO0lBTGxCLCtLQUFTLHdEQUF3QyxJQUFDO0lBTXhELHlCQUNGO0lBQUEsaUJBQVM7O0lBTEQsaUZBQTRELDBDQUFBOzs7O0lBTXBFLGtDQUswQjtJQUxsQiwrS0FBUyx1REFBdUMsSUFBQztJQU12RCx3QkFDRjtJQUFBLGlCQUFTOztJQUxELGlGQUE0RCwwQ0FBQTs7OztJQU1wRSxrQ0FLMEI7SUFMbEIsK0tBQVMsMERBQTBDLElBQUM7SUFNMUQsMkJBQ0Y7SUFBQSxpQkFBUzs7SUFMRCxpRkFBNEQsMENBQUE7Ozs7SUFNcEUsa0NBSzBCO0lBTGxCLCtLQUFTLHNEQUFzQyxJQUFDO0lBTXRELHVCQUNGO0lBQUEsaUJBQVM7O0lBTEQsaUZBQTRELDBDQUFBOzs7SUF2RHRFLCtCQUkwQjtJQUN4QixvRkFPUztJQUNULG9GQU9TO0lBQ1Qsb0ZBT1M7SUFDVCxvRkFPUztJQUNULG9GQU9TO0lBQ1Qsb0ZBT1M7SUFDVCxvRkFPUztJQUNYLGlCQUFNOzs7SUE1REQsMEZBQXFFLDJCQUFBO0lBSy9ELGVBQStFO0lBQS9FLDRIQUErRTtJQVEvRSxlQUE4RTtJQUE5RSwySEFBOEU7SUFROUUsZUFBaUY7SUFBakYsOEhBQWlGO0lBUWpGLGVBQWdGO0lBQWhGLDZIQUFnRjtJQVFoRixlQUErRTtJQUEvRSw0SEFBK0U7SUFRL0UsZUFBa0Y7SUFBbEYsK0hBQWtGO0lBUWxGLGVBQThFO0lBQTlFLDJIQUE4RTs7OztJQWN2RixrQ0FJZ0I7SUFKUiwrS0FBUyx1REFBdUMsSUFBQztJQUt2RCwrQkFBc0M7SUFDeEMsaUJBQVM7O0lBSkQsaUZBQTREOzs7O0lBS3BFLGtDQUlnQjtJQUpSLGdMQUFTLHNEQUFzQyxJQUFDO0lBS3RELCtCQUFxQztJQUN2QyxpQkFBUzs7SUFKRCxpRkFBNEQ7Ozs7SUFLcEUsa0NBSWdCO0lBSlIsaUxBQVMsMkRBQXlDLElBQUM7SUFLekQsK0JBQXdDO0lBQzFDLGlCQUFTOztJQUpELGlGQUE0RDs7OztJQUtwRSxrQ0FJZ0I7SUFKUixpTEFBUywwREFBd0MsSUFBQztJQUt4RCwrQkFBdUM7SUFDekMsaUJBQVM7O0lBSkQsaUZBQTREOzs7O0lBS3BFLGtDQUlnQjtJQUpSLGlMQUFTLHlEQUF1QyxJQUFDO0lBS3ZELCtCQUFzQztJQUN4QyxpQkFBUzs7SUFKRCxpRkFBNEQ7Ozs7SUFLcEUsa0NBSWdCO0lBSlIsaUxBQVMsNERBQTBDLElBQUM7SUFLMUQsK0JBQXlDO0lBQzNDLGlCQUFTOztJQUpELGlGQUE0RDs7OztJQUtwRSxrQ0FJZ0I7SUFKUixpTEFBUyx3REFBc0MsSUFBQztJQUt0RCwrQkFBcUM7SUFDdkMsaUJBQVM7O0lBSkQsaUZBQTREOzs7SUFoRHRFLCtCQUc0QjtJQUMxQixvRkFNUztJQUNULG9GQU1TO0lBQ1Qsb0ZBTVM7SUFDVCxvRkFNUztJQUNULG9GQU1TO0lBQ1Qsb0ZBTVM7SUFDVCxvRkFNUztJQUNYLGlCQUFNOzs7SUFwREQsMEZBQXFFLDJCQUFBO0lBSS9ELGVBQStFO0lBQS9FLDRIQUErRTtJQU8vRSxlQUE4RTtJQUE5RSwySEFBOEU7SUFPOUUsZUFBaUY7SUFBakYsOEhBQWlGO0lBT2pGLGVBQWdGO0lBQWhGLDZIQUFnRjtJQU9oRixlQUErRTtJQUEvRSw0SEFBK0U7SUFPL0UsZUFBa0Y7SUFBbEYsK0hBQWtGO0lBT2xGLGVBQThFO0lBQTlFLDJIQUE4RTs7OztJQWN2RixrQ0FLcUI7SUFMYixpTEFBUyx5REFBdUMsSUFBQztJQU12RCwrQkFBc0M7SUFDeEMsaUJBQVM7O0lBTEQsaUZBQTREOzs7O0lBTXBFLGtDQUlxQjtJQUpiLGlMQUFTLHdEQUFzQyxJQUFDO0lBS3RELCtCQUFxQztJQUN2QyxpQkFBUzs7SUFKRCxpRkFBNEQ7Ozs7SUFLcEUsa0NBSXFCO0lBSmIsaUxBQVMsMkRBQXlDLElBQUM7SUFLekQsK0JBQXdDO0lBQzFDLGlCQUFTOztJQUpELGlGQUE0RDs7OztJQUtwRSxrQ0FJcUI7SUFKYixpTEFBUywwREFBd0MsSUFBQztJQUt4RCwrQkFBMEQ7SUFDNUQsaUJBQVM7O0lBSkQsaUZBQTREOzs7O0lBS3BFLGtDQUlxQjtJQUpiLGlMQUFTLHlEQUF1QyxJQUFDO0lBS3ZELCtCQUFzQztJQUN4QyxpQkFBUzs7SUFKRCxpRkFBNEQ7Ozs7SUFLcEUsa0NBSXFCO0lBSmIsaUxBQVMsNERBQTBDLElBQUM7SUFLMUQsK0JBQXlDO0lBQzNDLGlCQUFTOztJQUpELGlGQUE0RDs7OztJQUtwRSxrQ0FJcUI7SUFKYixpTEFBUyx3REFBc0MsSUFBQztJQUt0RCwrQkFBcUM7SUFDdkMsaUJBQVM7O0lBSkQsaUZBQTREOzs7SUFsRHRFLCtCQUlzQztJQUNwQyxvRkFPUztJQUNULG9GQU1TO0lBQ1Qsb0ZBTVM7SUFDVCxvRkFNUztJQUNULG9GQU1TO0lBQ1Qsb0ZBTVM7SUFDVCxvRkFNUztJQUNYLGlCQUFNOzs7SUF0REQsMEZBQXFFLDJCQUFBO0lBSy9ELGVBQStFO0lBQS9FLDRIQUErRTtJQVEvRSxlQUE4RTtJQUE5RSwySEFBOEU7SUFPOUUsZUFBaUY7SUFBakYsOEhBQWlGO0lBT2pGLGVBQWdGO0lBQWhGLDZIQUFnRjtJQU9oRixlQUErRTtJQUEvRSw0SEFBK0U7SUFPL0UsZUFBa0Y7SUFBbEYsK0hBQWtGO0lBT2xGLGVBQThFO0lBQTlFLDJIQUE4RTs7O0FEelczRixNQUFNLENBQU4sSUFBWSxLQU9YO0FBUEQsV0FBWSxLQUFLO0lBQ2YsNEJBQW1CLENBQUE7SUFDbkIsNEJBQW1CLENBQUE7SUFDbkIsNEJBQW1CLENBQUE7SUFDbkIsb0JBQVcsQ0FBQTtJQUNYLDhCQUFxQixDQUFBO0lBQ3JCLDBCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFQVyxLQUFLLEtBQUwsS0FBSyxRQU9oQjtBQUVELE1BQU0sQ0FBTixJQUFZLE1BR1g7QUFIRCxXQUFZLE1BQU07SUFDaEIscUJBQVcsQ0FBQTtJQUNYLDJCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyxNQUFNLEtBQU4sTUFBTSxRQUdqQjtBQVFELE1BQU0sT0FBTyxzQkFBc0I7SUFnQmpDLFlBQW1CLFdBQStCLEVBQVMsTUFBaUI7UUFBekQsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQWJuRSxXQUFNLEdBQVcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUM1QixjQUFTLEdBQWtDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyx1REFBdUQ7UUFTN0gsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBRzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsWUFBMkI7UUFDNUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN4QyxNQUFNLE1BQU0sR0FBeUI7Z0JBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtnQkFDdkMsWUFBWTthQUNiLENBQUM7WUFFRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUE0QixFQUFFLEVBQUU7Z0JBQ3RFLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQzVCLDZGQUE2RjtvQkFDN0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzNDO2dCQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLHNGQUFzRjtZQUN0RixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7OzRGQXpDVSxzQkFBc0I7eUVBQXRCLHNCQUFzQjtRQzNCbkMsOEJBQTREO1FBRzFELHVFQWlFTTtRQUdOLHVFQTZETTtRQUdOLHVFQTZETTtRQUdOLHVFQTZETTtRQUdOLHVFQXFETTtRQUdOLHVFQXVETTtRQUNSLGlCQUFNOztRQXZYRCw0REFBbUMsdUJBQUE7UUF1RWhDLGVBQTRCO1FBQTVCLGlEQUE0QjtRQWdFNUIsZUFBNEI7UUFBNUIsaURBQTRCO1FBZ0U1QixlQUEyQjtRQUEzQixnREFBMkI7UUFnRTNCLGVBQXdCO1FBQXhCLDZDQUF3QjtRQXdEeEIsZUFBNkI7UUFBN0Isa0RBQTZCO2szRUR0U3ZCLDJCQUEyQjt1RkFFNUIsc0JBQXNCO2NBTmxDLFNBQVM7MkJBQ0UsK0JBQStCLGNBRzdCLDJCQUEyQjs2RkFJOUIsS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUVJLFNBQVM7a0JBQWxCLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNO1lBRUUsTUFBTTtrQkFBZCxLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBdXRoUHJvY2Vzc1NlcnZpY2UsIEF1dGhQcm92aWRlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC1wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtOZ3hBdXRoRmlyZWJhc2V1aUFuaW1hdGlvbnN9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtMZWdhbGl0eURpYWxvZ0NvbXBvbmVudH0gZnJvbSAnLi4nO1xuaW1wb3J0IHtMZWdhbGl0eURpYWxvZ1BhcmFtcywgTGVnYWxpdHlEaWFsb2dSZXN1bHR9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtNYXREaWFsb2csIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuZXhwb3J0IGVudW0gVGhlbWUge1xuICBERUZBVUxUID0gJ2RlZmF1bHQnLFxuICBDTEFTU0lDID0gJ2NsYXNzaWMnLFxuICBTVFJPS0VEID0gJ3N0cm9rZWQnLFxuICBGQUIgPSAnZmFiJyxcbiAgTUlOSV9GQUIgPSAnbWluaS1mYWInLFxuICBSQUlTRUQgPSAncmFpc2VkJyxcbn1cblxuZXhwb3J0IGVudW0gTGF5b3V0IHtcbiAgUk9XID0gJ3JvdycsXG4gIENPTFVNTiA9ICdjb2x1bW4nXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1hdXRoLWZpcmViYXNldWktcHJvdmlkZXJzJyxcbiAgdGVtcGxhdGVVcmw6ICdhdXRoLnByb3ZpZGVycy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhdXRoLnByb3ZpZGVycy5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBOZ3hBdXRoRmlyZWJhc2V1aUFuaW1hdGlvbnNcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFByb3ZpZGVyc0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgdGhlbWU6IFRoZW1lOyAvLyB0aGVtZTogc3RyaW5nID0gVGhlbWUuREVGQVVMVDtcbiAgQElucHV0KCkgbGF5b3V0OiBzdHJpbmcgPSBMYXlvdXQuUk9XO1xuICBASW5wdXQoKSBwcm92aWRlcnM6IEF1dGhQcm92aWRlcltdIHwgQXV0aFByb3ZpZGVyID0gQXV0aFByb3ZpZGVyLkFMTDsgLy8gIGdvb2dsZSwgZmFjZWJvb2ssIHR3aXR0ZXIsIGdpdGh1YiwgbWljcm9zb2Z0LCB5YWhvb1xuXG4gIEBPdXRwdXQoKSBvblN1Y2Nlc3M6IGFueTtcbiAgQE91dHB1dCgpIG9uRXJyb3I6IGFueTtcblxuICBASW5wdXQoKSB0b3NVcmw6IHN0cmluZztcbiAgQElucHV0KCkgcHJpdmFjeVBvbGljeVVybDogc3RyaW5nO1xuICBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxMZWdhbGl0eURpYWxvZ0NvbXBvbmVudD47XG5cbiAgdGhlbWVzID0gVGhlbWU7XG4gIGF1dGhQcm92aWRlciA9IEF1dGhQcm92aWRlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aFByb2Nlc3M6IEF1dGhQcm9jZXNzU2VydmljZSwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7XG4gICAgdGhpcy5vblN1Y2Nlc3MgPSBhdXRoUHJvY2Vzcy5vblN1Y2Nlc3NFbWl0dGVyO1xuICAgIHRoaXMub25FcnJvciA9IGF1dGhQcm9jZXNzLm9uRXJyb3JFbWl0dGVyO1xuICB9XG5cbiAgcHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlcj86IEF1dGhQcm92aWRlcikge1xuICAgIGlmICh0aGlzLnRvc1VybCB8fCB0aGlzLnByaXZhY3lQb2xpY3lVcmwpIHtcbiAgICAgIGNvbnN0IHBhcmFtczogTGVnYWxpdHlEaWFsb2dQYXJhbXMgPSB7XG4gICAgICAgIHRvc1VybDogdGhpcy50b3NVcmwsXG4gICAgICAgIHByaXZhY3lQb2xpY3lVcmw6IHRoaXMucHJpdmFjeVBvbGljeVVybCxcbiAgICAgICAgYXV0aFByb3ZpZGVyXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTGVnYWxpdHlEaWFsb2dDb21wb25lbnQsIHtkYXRhOiBwYXJhbXN9KTtcbiAgICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQ6IExlZ2FsaXR5RGlhbG9nUmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmNoZWNrZWQpIHtcbiAgICAgICAgICAvLyB0aGlzLl9hZnRlclNpZ25VcE1pZGRsZXdhcmUocmVzdWx0LmF1dGhQcm92aWRlcikudGhlbigoKSA9PiB0aGlzLnNpZ25VcEZvcm1Hcm91cC5yZXNldCgpKTtcbiAgICAgICAgICB0aGlzLmF1dGhQcm9jZXNzLnNpZ25JbldpdGgoYXV0aFByb3ZpZGVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpYWxvZ1JlZiA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5fYWZ0ZXJTaWduVXBNaWRkbGV3YXJlKGF1dGhQcm92aWRlcikudGhlbigoKSA9PiB0aGlzLnNpZ25VcEZvcm1Hcm91cC5yZXNldCgpKTtcbiAgICAgIHRoaXMuYXV0aFByb2Nlc3Muc2lnbkluV2l0aChhdXRoUHJvdmlkZXIpO1xuICAgIH1cbiAgfVxuXG59XG4iLCI8ZGl2IFtAYW5pbWF0ZVN0YWdnZXJdPVwieyB2YWx1ZTogJzUwJyB9XCIgW25nU3dpdGNoXT1cInRoZW1lXCI+XG5cbiAgPCEtLWRlZmF1bHQgaWNvbiBidXR0b25zLS0+XG4gIDxkaXYgKm5nU3dpdGNoRGVmYXVsdFxuICAgICAgIFtmeExheW91dEFsaWduXT1cImxheW91dCA9PSAncm93JyA/ICdzcGFjZS1hcm91bmQgY2VudGVyJyA6ICdzdHJldGNoJ1wiXG4gICAgICAgW2Z4TGF5b3V0XT1cImxheW91dFwiXG4gICAgICAgZnhMYXlvdXQueHM9XCJjb2x1bW5cIj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJwcm9jZXNzTGVnYWxTaWduVVAoYXV0aFByb3ZpZGVyLkdvb2dsZSlcIlxuICAgICAgICAgICAgKm5nSWY9XCJwcm92aWRlcnMgPT09IGF1dGhQcm92aWRlci5BTEwgfHwgcHJvdmlkZXJzLmluY2x1ZGVzKGF1dGhQcm92aWRlci5Hb29nbGUpXCJcbiAgICAgICAgICAgIFtAYW5pbWF0ZV09XCJ7dmFsdWU6JyonLHBhcmFtczp7ZHVyYXRpb246JzMwMG1zJyx5OicxMDBweCd9fVwiXG4gICAgICAgICAgICBbbmdDbGFzcy54c109XCJ7J3NwYWNlLWZ1bGwteHMnOnRydWV9XCJcbiAgICAgICAgICAgIG1hdC1idXR0b24+XG4gICAgICA8bWF0LWljb24gc3ZnSWNvbj1cImdvb2dsZS1jb2xvcmVkXCI+PC9tYXQtaWNvbj5cbiAgICAgIEdvb2dsZVxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5BcHBsZSlcIlxuICAgICAgICAgICAgKm5nSWY9XCJwcm92aWRlcnMgPT09IGF1dGhQcm92aWRlci5BTEwgfHwgcHJvdmlkZXJzLmluY2x1ZGVzKGF1dGhQcm92aWRlci5BcHBsZSlcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzLnhzXT1cInsnc3BhY2UtZnVsbC14cyc6dHJ1ZX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJhcHBsZS1maWxsZWRcIlxuICAgICAgICAgICAgbWF0LWJ1dHRvbj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiYXBwbGVcIj48L21hdC1pY29uPlxuICAgICAgQXBwbGVcbiAgICA8L2J1dHRvbj5cblxuICAgIDxidXR0b24gKGNsaWNrKT1cInByb2Nlc3NMZWdhbFNpZ25VUChhdXRoUHJvdmlkZXIuRmFjZWJvb2spXCJcbiAgICAgICAgICAgICpuZ0lmPVwicHJvdmlkZXJzID09PSBhdXRoUHJvdmlkZXIuQUxMIHx8IHByb3ZpZGVycy5pbmNsdWRlcyhhdXRoUHJvdmlkZXIuRmFjZWJvb2spXCJcbiAgICAgICAgICAgIFtAYW5pbWF0ZV09XCJ7dmFsdWU6JyonLHBhcmFtczp7ZHVyYXRpb246JzMwMG1zJyx5OicxMDBweCd9fVwiXG4gICAgICAgICAgICBbbmdDbGFzcy54c109XCJ7J3NwYWNlLWZ1bGwteHMnOnRydWV9XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZmFjZWJvb2stZmlsbGVkXCJcbiAgICAgICAgICAgIG1hdC1idXR0b24+XG4gICAgICA8bWF0LWljb24gc3ZnSWNvbj1cImZhY2Vib29rXCI+PC9tYXQtaWNvbj5cbiAgICAgIEZhY2Vib29rXG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5Ud2l0dGVyKVwiXG4gICAgICAgICAgICAqbmdJZj1cInByb3ZpZGVycyA9PT0gYXV0aFByb3ZpZGVyLkFMTCB8fCBwcm92aWRlcnMuaW5jbHVkZXMoYXV0aFByb3ZpZGVyLlR3aXR0ZXIpXCJcbiAgICAgICAgICAgIFtAYW5pbWF0ZV09XCJ7dmFsdWU6JyonLHBhcmFtczp7ZHVyYXRpb246JzMwMG1zJyx5OicxMDBweCd9fVwiXG4gICAgICAgICAgICBbbmdDbGFzcy54c109XCJ7J3NwYWNlLWZ1bGwteHMnOnRydWV9XCJcbiAgICAgICAgICAgIGNsYXNzPVwidHdpdHRlci1maWxsZWRcIlxuICAgICAgICAgICAgbWF0LWJ1dHRvbj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwidHdpdHRlclwiPjwvbWF0LWljb24+XG4gICAgICBUd2l0dGVyXG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5HaXRodWIpXCJcbiAgICAgICAgICAgICpuZ0lmPVwicHJvdmlkZXJzID09PSBhdXRoUHJvdmlkZXIuQUxMIHx8IHByb3ZpZGVycy5pbmNsdWRlcyhhdXRoUHJvdmlkZXIuR2l0aHViKVwiXG4gICAgICAgICAgICBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIlxuICAgICAgICAgICAgW25nQ2xhc3MueHNdPVwieydzcGFjZS1mdWxsLXhzJzp0cnVlfVwiXG4gICAgICAgICAgICBtYXQtYnV0dG9uPlxuICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJnaXRodWJcIj48L21hdC1pY29uPlxuICAgICAgR2l0SHViXG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5NaWNyb3NvZnQpXCJcbiAgICAgICAgICAgICpuZ0lmPVwicHJvdmlkZXJzID09PSBhdXRoUHJvdmlkZXIuQUxMIHx8IHByb3ZpZGVycy5pbmNsdWRlcyhhdXRoUHJvdmlkZXIuTWljcm9zb2Z0KVwiXG4gICAgICAgICAgICBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIlxuICAgICAgICAgICAgW25nQ2xhc3MueHNdPVwieydzcGFjZS1mdWxsLXhzJzp0cnVlfVwiXG4gICAgICAgICAgICBtYXQtYnV0dG9uPlxuICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJtaWNyb3NvZnRcIj48L21hdC1pY29uPlxuICAgICAgTWljcm9zb2Z0XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5ZYWhvbylcIlxuICAgICAgICAgICAgKm5nSWY9XCJwcm92aWRlcnMgPT09IGF1dGhQcm92aWRlci5BTEwgfHwgcHJvdmlkZXJzLmluY2x1ZGVzKGF1dGhQcm92aWRlci5ZYWhvbylcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzLnhzXT1cInsnc3BhY2UtZnVsbC14cyc6dHJ1ZX1cIlxuICAgICAgICAgICAgbWF0LWJ1dHRvbj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwieWFob29cIj48L21hdC1pY29uPlxuICAgICAgWWFob29cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG5cbiAgPCEtLWNsYXNzaWMtLT5cbiAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwidGhlbWVzLkNMQVNTSUNcIlxuICAgICAgIFtmeExheW91dEFsaWduXT1cImxheW91dCA9PSAncm93JyA/ICdzcGFjZS1hcm91bmQgY2VudGVyJyA6ICdzdHJldGNoJ1wiXG4gICAgICAgW2Z4TGF5b3V0XT1cImxheW91dFwiXG4gICAgICAgY2xhc3M9XCJidXR0b25zLWNsYXNzaWNcIlxuICAgICAgIGZ4TGF5b3V0LnhzPVwiY29sdW1uXCI+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5Hb29nbGUpXCJcbiAgICAgICAgICAgICpuZ0lmPVwicHJvdmlkZXJzID09PSBhdXRoUHJvdmlkZXIuQUxMIHx8IHByb3ZpZGVycy5pbmNsdWRlcyhhdXRoUHJvdmlkZXIuR29vZ2xlKVwiXG4gICAgICAgICAgICBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIlxuICAgICAgICAgICAgW25nQ2xhc3MueHNdPVwieydzcGFjZS1mdWxsLXhzJzp0cnVlfVwiXG4gICAgICAgICAgICBjbGFzcz1cImdvb2dsZS1jbGFzc2ljXCJcbiAgICAgICAgICAgIG1hdC1idXR0b24+XG4gICAgICBHb29nbGVcbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJwcm9jZXNzTGVnYWxTaWduVVAoYXV0aFByb3ZpZGVyLkFwcGxlKVwiXG4gICAgICAgICAgICAqbmdJZj1cInByb3ZpZGVycyA9PT0gYXV0aFByb3ZpZGVyLkFMTCB8fCBwcm92aWRlcnMuaW5jbHVkZXMoYXV0aFByb3ZpZGVyLkFwcGxlKVwiXG4gICAgICAgICAgICBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIlxuICAgICAgICAgICAgW25nQ2xhc3MueHNdPVwieydzcGFjZS1mdWxsLXhzJzp0cnVlfVwiXG4gICAgICAgICAgICBjbGFzcz1cImFwcGxlLWNsYXNzaWNcIlxuICAgICAgICAgICAgbWF0LWJ1dHRvbj5cbiAgICAgIEFwcGxlXG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5GYWNlYm9vaylcIlxuICAgICAgICAgICAgKm5nSWY9XCJwcm92aWRlcnMgPT09IGF1dGhQcm92aWRlci5BTEwgfHwgcHJvdmlkZXJzLmluY2x1ZGVzKGF1dGhQcm92aWRlci5GYWNlYm9vaylcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzLnhzXT1cInsnc3BhY2UtZnVsbC14cyc6dHJ1ZX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJmYWNlYm9vay1jbGFzc2ljXCJcbiAgICAgICAgICAgIG1hdC1idXR0b24+XG4gICAgICBGYWNlYm9va1xuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gKGNsaWNrKT1cInByb2Nlc3NMZWdhbFNpZ25VUChhdXRoUHJvdmlkZXIuVHdpdHRlcilcIlxuICAgICAgICAgICAgKm5nSWY9XCJwcm92aWRlcnMgPT09IGF1dGhQcm92aWRlci5BTEwgfHwgcHJvdmlkZXJzLmluY2x1ZGVzKGF1dGhQcm92aWRlci5Ud2l0dGVyKVwiXG4gICAgICAgICAgICBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIlxuICAgICAgICAgICAgW25nQ2xhc3MueHNdPVwieydzcGFjZS1mdWxsLXhzJzp0cnVlfVwiXG4gICAgICAgICAgICBjbGFzcz1cInR3aXR0ZXItY2xhc3NpY1wiXG4gICAgICAgICAgICBtYXQtYnV0dG9uPlxuICAgICAgVHdpdHRlclxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gKGNsaWNrKT1cInByb2Nlc3NMZWdhbFNpZ25VUChhdXRoUHJvdmlkZXIuR2l0aHViKVwiXG4gICAgICAgICAgICAqbmdJZj1cInByb3ZpZGVycyA9PT0gYXV0aFByb3ZpZGVyLkFMTCB8fCBwcm92aWRlcnMuaW5jbHVkZXMoYXV0aFByb3ZpZGVyLkdpdGh1YilcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzLnhzXT1cInsnc3BhY2UtZnVsbC14cyc6dHJ1ZX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJnaXRodWItY2xhc3NpY1wiXG4gICAgICAgICAgICBtYXQtYnV0dG9uPlxuICAgICAgR2l0SHViXG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5NaWNyb3NvZnQpXCJcbiAgICAgICAgICAgICpuZ0lmPVwicHJvdmlkZXJzID09PSBhdXRoUHJvdmlkZXIuQUxMIHx8IHByb3ZpZGVycy5pbmNsdWRlcyhhdXRoUHJvdmlkZXIuTWljcm9zb2Z0KVwiXG4gICAgICAgICAgICBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIlxuICAgICAgICAgICAgW25nQ2xhc3MueHNdPVwieydzcGFjZS1mdWxsLXhzJzp0cnVlfVwiXG4gICAgICAgICAgICBjbGFzcz1cIm1pY3Jvc29mdC1jbGFzc2ljXCJcbiAgICAgICAgICAgIG1hdC1idXR0b24+XG4gICAgICBNaWNyb3NvZnRcbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJwcm9jZXNzTGVnYWxTaWduVVAoYXV0aFByb3ZpZGVyLllhaG9vKVwiXG4gICAgICAgICAgICAqbmdJZj1cInByb3ZpZGVycyA9PT0gYXV0aFByb3ZpZGVyLkFMTCB8fCBwcm92aWRlcnMuaW5jbHVkZXMoYXV0aFByb3ZpZGVyLllhaG9vKVwiXG4gICAgICAgICAgICBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIlxuICAgICAgICAgICAgW25nQ2xhc3MueHNdPVwieydzcGFjZS1mdWxsLXhzJzp0cnVlfVwiXG4gICAgICAgICAgICBjbGFzcz1cInlhaG9vLWNsYXNzaWNcIlxuICAgICAgICAgICAgbWF0LWJ1dHRvbj5cbiAgICAgIFlhaG9vXG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuXG4gIDwhLS1zdHJva2VkLS0+XG4gIDxkaXYgKm5nU3dpdGNoQ2FzZT1cInRoZW1lcy5TVFJPS0VEXCJcbiAgICAgICBbZnhMYXlvdXRBbGlnbl09XCJsYXlvdXQgPT0gJ3JvdycgPyAnc3BhY2UtYXJvdW5kIGNlbnRlcicgOiAnc3RyZXRjaCdcIlxuICAgICAgIFtmeExheW91dF09XCJsYXlvdXRcIlxuICAgICAgIGNsYXNzPVwiYnV0dG9ucy1jbGFzc2ljXCJcbiAgICAgICBmeExheW91dC54cz1cImNvbHVtblwiPlxuICAgIDxidXR0b24gKGNsaWNrKT1cInByb2Nlc3NMZWdhbFNpZ25VUChhdXRoUHJvdmlkZXIuR29vZ2xlKVwiXG4gICAgICAgICAgICAqbmdJZj1cInByb3ZpZGVycyA9PT0gYXV0aFByb3ZpZGVyLkFMTCB8fCBwcm92aWRlcnMuaW5jbHVkZXMoYXV0aFByb3ZpZGVyLkdvb2dsZSlcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzLnhzXT1cInsnc3BhY2UtZnVsbC14cyc6dHJ1ZX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJnb29nbGUtY2xhc3NpY1wiXG4gICAgICAgICAgICBtYXQtc3Ryb2tlZC1idXR0b24+XG4gICAgICBHb29nbGVcbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJwcm9jZXNzTGVnYWxTaWduVVAoYXV0aFByb3ZpZGVyLkFwcGxlKVwiXG4gICAgICAgICAgICAqbmdJZj1cInByb3ZpZGVycyA9PT0gYXV0aFByb3ZpZGVyLkFMTCB8fCBwcm92aWRlcnMuaW5jbHVkZXMoYXV0aFByb3ZpZGVyLkFwcGxlKVwiXG4gICAgICAgICAgICBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIlxuICAgICAgICAgICAgW25nQ2xhc3MueHNdPVwieydzcGFjZS1mdWxsLXhzJzp0cnVlfVwiXG4gICAgICAgICAgICBjbGFzcz1cImFwcGxlLWNsYXNzaWNcIlxuICAgICAgICAgICAgbWF0LXN0cm9rZWQtYnV0dG9uPlxuICAgICAgQXBwbGVcbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJwcm9jZXNzTGVnYWxTaWduVVAoYXV0aFByb3ZpZGVyLkZhY2Vib29rKVwiXG4gICAgICAgICAgICAqbmdJZj1cInByb3ZpZGVycyA9PT0gYXV0aFByb3ZpZGVyLkFMTCB8fCBwcm92aWRlcnMuaW5jbHVkZXMoYXV0aFByb3ZpZGVyLkZhY2Vib29rKVwiXG4gICAgICAgICAgICBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIlxuICAgICAgICAgICAgW25nQ2xhc3MueHNdPVwieydzcGFjZS1mdWxsLXhzJzp0cnVlfVwiXG4gICAgICAgICAgICBjbGFzcz1cImZhY2Vib29rLWNsYXNzaWNcIlxuICAgICAgICAgICAgbWF0LXN0cm9rZWQtYnV0dG9uPlxuICAgICAgRmFjZWJvb2tcbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJwcm9jZXNzTGVnYWxTaWduVVAoYXV0aFByb3ZpZGVyLlR3aXR0ZXIpXCJcbiAgICAgICAgICAgICpuZ0lmPVwicHJvdmlkZXJzID09PSBhdXRoUHJvdmlkZXIuQUxMIHx8IHByb3ZpZGVycy5pbmNsdWRlcyhhdXRoUHJvdmlkZXIuVHdpdHRlcilcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzLnhzXT1cInsnc3BhY2UtZnVsbC14cyc6dHJ1ZX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJ0d2l0dGVyLWNsYXNzaWNcIlxuICAgICAgICAgICAgbWF0LXN0cm9rZWQtYnV0dG9uPlxuICAgICAgVHdpdHRlclxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gKGNsaWNrKT1cInByb2Nlc3NMZWdhbFNpZ25VUChhdXRoUHJvdmlkZXIuR2l0aHViKVwiXG4gICAgICAgICAgICAqbmdJZj1cInByb3ZpZGVycyA9PT0gYXV0aFByb3ZpZGVyLkFMTCB8fCBwcm92aWRlcnMuaW5jbHVkZXMoYXV0aFByb3ZpZGVyLkdpdGh1YilcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzLnhzXT1cInsnc3BhY2UtZnVsbC14cyc6dHJ1ZX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJnaXRodWItY2xhc3NpY1wiXG4gICAgICAgICAgICBtYXQtc3Ryb2tlZC1idXR0b24+XG4gICAgICBHaXRIdWJcbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJwcm9jZXNzTGVnYWxTaWduVVAoYXV0aFByb3ZpZGVyLk1pY3Jvc29mdClcIlxuICAgICAgICAgICAgKm5nSWY9XCJwcm92aWRlcnMgPT09IGF1dGhQcm92aWRlci5BTEwgfHwgcHJvdmlkZXJzLmluY2x1ZGVzKGF1dGhQcm92aWRlci5NaWNyb3NvZnQpXCJcbiAgICAgICAgICAgIFtAYW5pbWF0ZV09XCJ7dmFsdWU6JyonLHBhcmFtczp7ZHVyYXRpb246JzMwMG1zJyx5OicxMDBweCd9fVwiXG4gICAgICAgICAgICBbbmdDbGFzcy54c109XCJ7J3NwYWNlLWZ1bGwteHMnOnRydWV9XCJcbiAgICAgICAgICAgIGNsYXNzPVwibWljcm9zb2Z0LWNsYXNzaWNcIlxuICAgICAgICAgICAgbWF0LXN0cm9rZWQtYnV0dG9uPlxuICAgICAgTWljcm9zb2Z0XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5ZYWhvbylcIlxuICAgICAgICAgICAgKm5nSWY9XCJwcm92aWRlcnMgPT09IGF1dGhQcm92aWRlci5BTEwgfHwgcHJvdmlkZXJzLmluY2x1ZGVzKGF1dGhQcm92aWRlci5ZYWhvbylcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzLnhzXT1cInsnc3BhY2UtZnVsbC14cyc6dHJ1ZX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJ5YWhvby1jbGFzc2ljXCJcbiAgICAgICAgICAgIG1hdC1zdHJva2VkLWJ1dHRvbj5cbiAgICAgIFlhaG9vXG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuXG4gIDwhLS1yYWlzZWQtLT5cbiAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwidGhlbWVzLlJBSVNFRFwiXG4gICAgICAgW2Z4TGF5b3V0QWxpZ25dPVwibGF5b3V0ID09ICdyb3cnID8gJ3NwYWNlLWFyb3VuZCBjZW50ZXInIDogJ3N0cmV0Y2gnXCJcbiAgICAgICBbZnhMYXlvdXRdPVwibGF5b3V0XCJcbiAgICAgICBjbGFzcz1cImJ1dHRvbnMtcmFpc2VkXCJcbiAgICAgICBmeExheW91dC54cz1cImNvbHVtblwiPlxuICAgIDxidXR0b24gKGNsaWNrKT1cInByb2Nlc3NMZWdhbFNpZ25VUChhdXRoUHJvdmlkZXIuR29vZ2xlKVwiXG4gICAgICAgICAgICAqbmdJZj1cInByb3ZpZGVycyA9PT0gYXV0aFByb3ZpZGVyLkFMTCB8fCBwcm92aWRlcnMuaW5jbHVkZXMoYXV0aFByb3ZpZGVyLkdvb2dsZSlcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzLnhzXT1cInsnc3BhY2UtZnVsbC14cyc6dHJ1ZX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJnb29nbGUtcmFpc2VkXCJcbiAgICAgICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uPlxuICAgICAgR29vZ2xlXG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5BcHBsZSlcIlxuICAgICAgICAgICAgKm5nSWY9XCJwcm92aWRlcnMgPT09IGF1dGhQcm92aWRlci5BTEwgfHwgcHJvdmlkZXJzLmluY2x1ZGVzKGF1dGhQcm92aWRlci5BcHBsZSlcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzLnhzXT1cInsnc3BhY2UtZnVsbC14cyc6dHJ1ZX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJhcHBsZS1yYWlzZWRcIlxuICAgICAgICAgICAgbWF0LXJhaXNlZC1idXR0b24+XG4gICAgICBBcHBsZVxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gKGNsaWNrKT1cInByb2Nlc3NMZWdhbFNpZ25VUChhdXRoUHJvdmlkZXIuRmFjZWJvb2spXCJcbiAgICAgICAgICAgICpuZ0lmPVwicHJvdmlkZXJzID09PSBhdXRoUHJvdmlkZXIuQUxMIHx8IHByb3ZpZGVycy5pbmNsdWRlcyhhdXRoUHJvdmlkZXIuRmFjZWJvb2spXCJcbiAgICAgICAgICAgIFtAYW5pbWF0ZV09XCJ7dmFsdWU6JyonLHBhcmFtczp7ZHVyYXRpb246JzMwMG1zJyx5OicxMDBweCd9fVwiXG4gICAgICAgICAgICBbbmdDbGFzcy54c109XCJ7J3NwYWNlLWZ1bGwteHMnOnRydWV9XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZmFjZWJvb2stcmFpc2VkXCJcbiAgICAgICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uPlxuICAgICAgRmFjZWJvb2tcbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJwcm9jZXNzTGVnYWxTaWduVVAoYXV0aFByb3ZpZGVyLlR3aXR0ZXIpXCJcbiAgICAgICAgICAgICpuZ0lmPVwicHJvdmlkZXJzID09PSBhdXRoUHJvdmlkZXIuQUxMIHx8IHByb3ZpZGVycy5pbmNsdWRlcyhhdXRoUHJvdmlkZXIuVHdpdHRlcilcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzLnhzXT1cInsnc3BhY2UtZnVsbC14cyc6dHJ1ZX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJ0d2l0dGVyLXJhaXNlZFwiXG4gICAgICAgICAgICBtYXQtcmFpc2VkLWJ1dHRvbj5cbiAgICAgIFR3aXR0ZXJcbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJwcm9jZXNzTGVnYWxTaWduVVAoYXV0aFByb3ZpZGVyLkdpdGh1YilcIlxuICAgICAgICAgICAgKm5nSWY9XCJwcm92aWRlcnMgPT09IGF1dGhQcm92aWRlci5BTEwgfHwgcHJvdmlkZXJzLmluY2x1ZGVzKGF1dGhQcm92aWRlci5HaXRodWIpXCJcbiAgICAgICAgICAgIFtAYW5pbWF0ZV09XCJ7dmFsdWU6JyonLHBhcmFtczp7ZHVyYXRpb246JzMwMG1zJyx5OicxMDBweCd9fVwiXG4gICAgICAgICAgICBbbmdDbGFzcy54c109XCJ7J3NwYWNlLWZ1bGwteHMnOnRydWV9XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZ2l0aHViLXJhaXNlZFwiXG4gICAgICAgICAgICBtYXQtcmFpc2VkLWJ1dHRvbj5cbiAgICAgIEdpdEh1YlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gKGNsaWNrKT1cInByb2Nlc3NMZWdhbFNpZ25VUChhdXRoUHJvdmlkZXIuTWljcm9zb2Z0KVwiXG4gICAgICAgICAgICAqbmdJZj1cInByb3ZpZGVycyA9PT0gYXV0aFByb3ZpZGVyLkFMTCB8fCBwcm92aWRlcnMuaW5jbHVkZXMoYXV0aFByb3ZpZGVyLk1pY3Jvc29mdClcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzLnhzXT1cInsnc3BhY2UtZnVsbC14cyc6dHJ1ZX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJtaWNyb3NvZnQtcmFpc2VkXCJcbiAgICAgICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uPlxuICAgICAgTWljcm9zb2Z0XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5ZYWhvbylcIlxuICAgICAgICAgICAgKm5nSWY9XCJwcm92aWRlcnMgPT09IGF1dGhQcm92aWRlci5BTEwgfHwgcHJvdmlkZXJzLmluY2x1ZGVzKGF1dGhQcm92aWRlci5ZYWhvbylcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzLnhzXT1cInsnc3BhY2UtZnVsbC14cyc6dHJ1ZX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJ5YWhvby1yYWlzZWRcIlxuICAgICAgICAgICAgbWF0LXJhaXNlZC1idXR0b24+XG4gICAgICBZYWhvb1xuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cblxuICA8IS0tZmFiLS0+XG4gIDxkaXYgKm5nU3dpdGNoQ2FzZT1cInRoZW1lcy5GQUJcIlxuICAgICAgIFtmeExheW91dEFsaWduXT1cImxheW91dCA9PSAncm93JyA/ICdzcGFjZS1hcm91bmQgY2VudGVyJyA6ICdzdHJldGNoJ1wiXG4gICAgICAgW2Z4TGF5b3V0XT1cImxheW91dFwiXG4gICAgICAgY2xhc3M9XCJidXR0b25zLXJhaXNlZFwiPlxuICAgIDxidXR0b24gKGNsaWNrKT1cInByb2Nlc3NMZWdhbFNpZ25VUChhdXRoUHJvdmlkZXIuR29vZ2xlKVwiXG4gICAgICAgICAgICAqbmdJZj1cInByb3ZpZGVycyA9PT0gYXV0aFByb3ZpZGVyLkFMTCB8fCBwcm92aWRlcnMuaW5jbHVkZXMoYXV0aFByb3ZpZGVyLkdvb2dsZSlcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZ29vZ2xlLXJhaXNlZFwiXG4gICAgICAgICAgICBtYXQtZmFiPlxuICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJnb29nbGVcIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gKGNsaWNrKT1cInByb2Nlc3NMZWdhbFNpZ25VUChhdXRoUHJvdmlkZXIuQXBwbGUpXCJcbiAgICAgICAgICAgICpuZ0lmPVwicHJvdmlkZXJzID09PSBhdXRoUHJvdmlkZXIuQUxMIHx8IHByb3ZpZGVycy5pbmNsdWRlcyhhdXRoUHJvdmlkZXIuQXBwbGUpXCJcbiAgICAgICAgICAgIFtAYW5pbWF0ZV09XCJ7dmFsdWU6JyonLHBhcmFtczp7ZHVyYXRpb246JzMwMG1zJyx5OicxMDBweCd9fVwiXG4gICAgICAgICAgICBjbGFzcz1cImFwcGxlLXJhaXNlZFwiXG4gICAgICAgICAgICBtYXQtZmFiPlxuICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJhcHBsZVwiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5GYWNlYm9vaylcIlxuICAgICAgICAgICAgKm5nSWY9XCJwcm92aWRlcnMgPT09IGF1dGhQcm92aWRlci5BTEwgfHwgcHJvdmlkZXJzLmluY2x1ZGVzKGF1dGhQcm92aWRlci5GYWNlYm9vaylcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZmFjZWJvb2stcmFpc2VkXCJcbiAgICAgICAgICAgIG1hdC1mYWI+XG4gICAgICA8bWF0LWljb24gc3ZnSWNvbj1cImZhY2Vib29rXCI+PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJwcm9jZXNzTGVnYWxTaWduVVAoYXV0aFByb3ZpZGVyLlR3aXR0ZXIpXCJcbiAgICAgICAgICAgICpuZ0lmPVwicHJvdmlkZXJzID09PSBhdXRoUHJvdmlkZXIuQUxMIHx8IHByb3ZpZGVycy5pbmNsdWRlcyhhdXRoUHJvdmlkZXIuVHdpdHRlcilcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIGNsYXNzPVwidHdpdHRlci1yYWlzZWRcIlxuICAgICAgICAgICAgbWF0LWZhYj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwidHdpdHRlclwiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5HaXRodWIpXCJcbiAgICAgICAgICAgICpuZ0lmPVwicHJvdmlkZXJzID09PSBhdXRoUHJvdmlkZXIuQUxMIHx8IHByb3ZpZGVycy5pbmNsdWRlcyhhdXRoUHJvdmlkZXIuR2l0aHViKVwiXG4gICAgICAgICAgICBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJnaXRodWItcmFpc2VkXCJcbiAgICAgICAgICAgIG1hdC1mYWI+XG4gICAgICA8bWF0LWljb24gc3ZnSWNvbj1cImdpdGh1YlwiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5NaWNyb3NvZnQpXCJcbiAgICAgICAgICAgICpuZ0lmPVwicHJvdmlkZXJzID09PSBhdXRoUHJvdmlkZXIuQUxMIHx8IHByb3ZpZGVycy5pbmNsdWRlcyhhdXRoUHJvdmlkZXIuTWljcm9zb2Z0KVwiXG4gICAgICAgICAgICBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJtaWNyb3NvZnRcIlxuICAgICAgICAgICAgbWF0LWZhYj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwibWljcm9zb2Z0XCI+PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJwcm9jZXNzTGVnYWxTaWduVVAoYXV0aFByb3ZpZGVyLllhaG9vKVwiXG4gICAgICAgICAgICAqbmdJZj1cInByb3ZpZGVycyA9PT0gYXV0aFByb3ZpZGVyLkFMTCB8fCBwcm92aWRlcnMuaW5jbHVkZXMoYXV0aFByb3ZpZGVyLllhaG9vKVwiXG4gICAgICAgICAgICBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJ5YWhvby1yYWlzZWRcIlxuICAgICAgICAgICAgbWF0LWZhYj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwieWFob29cIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cblxuICA8IS0tbWluaS1mYWItLT5cbiAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwidGhlbWVzLk1JTklfRkFCXCJcbiAgICAgICBbZnhMYXlvdXRBbGlnbl09XCJsYXlvdXQgPT0gJ3JvdycgPyAnc3BhY2UtYXJvdW5kIGNlbnRlcicgOiAnc3RyZXRjaCdcIlxuICAgICAgIFtmeExheW91dF09XCJsYXlvdXRcIlxuICAgICAgIGNsYXNzPVwiYnV0dG9ucy1yYWlzZWRcIlxuICAgICAgIGZ4TGF5b3V0QWxpZ24ueHM9XCJjZW50ZXIgY2VudGVyXCI+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5Hb29nbGUpXCJcbiAgICAgICAgICAgICpuZ0lmPVwicHJvdmlkZXJzID09PSBhdXRoUHJvdmlkZXIuQUxMIHx8IHByb3ZpZGVycy5pbmNsdWRlcyhhdXRoUHJvdmlkZXIuR29vZ2xlKVwiXG4gICAgICAgICAgICBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJnb29nbGUtcmFpc2VkXCJcbiAgICAgICAgICAgIGZ4RmxleEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgIG1hdC1taW5pLWZhYj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiZ29vZ2xlXCI+PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJwcm9jZXNzTGVnYWxTaWduVVAoYXV0aFByb3ZpZGVyLkFwcGxlKVwiXG4gICAgICAgICAgICAqbmdJZj1cInByb3ZpZGVycyA9PT0gYXV0aFByb3ZpZGVyLkFMTCB8fCBwcm92aWRlcnMuaW5jbHVkZXMoYXV0aFByb3ZpZGVyLkFwcGxlKVwiXG4gICAgICAgICAgICBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJhcHBsZS1yYWlzZWRcIlxuICAgICAgICAgICAgbWF0LW1pbmktZmFiPlxuICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJhcHBsZVwiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5GYWNlYm9vaylcIlxuICAgICAgICAgICAgKm5nSWY9XCJwcm92aWRlcnMgPT09IGF1dGhQcm92aWRlci5BTEwgfHwgcHJvdmlkZXJzLmluY2x1ZGVzKGF1dGhQcm92aWRlci5GYWNlYm9vaylcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZmFjZWJvb2stcmFpc2VkXCJcbiAgICAgICAgICAgIG1hdC1taW5pLWZhYj5cbiAgICAgIDxtYXQtaWNvbiBzdmdJY29uPVwiZmFjZWJvb2tcIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gKGNsaWNrKT1cInByb2Nlc3NMZWdhbFNpZ25VUChhdXRoUHJvdmlkZXIuVHdpdHRlcilcIlxuICAgICAgICAgICAgKm5nSWY9XCJwcm92aWRlcnMgPT09IGF1dGhQcm92aWRlci5BTEwgfHwgcHJvdmlkZXJzLmluY2x1ZGVzKGF1dGhQcm92aWRlci5Ud2l0dGVyKVwiXG4gICAgICAgICAgICBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJ0d2l0dGVyLXJhaXNlZFwiXG4gICAgICAgICAgICBtYXQtbWluaS1mYWI+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJpY29uLXdoaXRlXCIgc3ZnSWNvbj1cInR3aXR0ZXJcIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gKGNsaWNrKT1cInByb2Nlc3NMZWdhbFNpZ25VUChhdXRoUHJvdmlkZXIuR2l0aHViKVwiXG4gICAgICAgICAgICAqbmdJZj1cInByb3ZpZGVycyA9PT0gYXV0aFByb3ZpZGVyLkFMTCB8fCBwcm92aWRlcnMuaW5jbHVkZXMoYXV0aFByb3ZpZGVyLkdpdGh1YilcIlxuICAgICAgICAgICAgW0BhbmltYXRlXT1cInt2YWx1ZTonKicscGFyYW1zOntkdXJhdGlvbjonMzAwbXMnLHk6JzEwMHB4J319XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZ2l0aHViLXJhaXNlZFwiXG4gICAgICAgICAgICBtYXQtbWluaS1mYWI+XG4gICAgICA8bWF0LWljb24gc3ZnSWNvbj1cImdpdGh1YlwiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc0xlZ2FsU2lnblVQKGF1dGhQcm92aWRlci5NaWNyb3NvZnQpXCJcbiAgICAgICAgICAgICpuZ0lmPVwicHJvdmlkZXJzID09PSBhdXRoUHJvdmlkZXIuQUxMIHx8IHByb3ZpZGVycy5pbmNsdWRlcyhhdXRoUHJvdmlkZXIuTWljcm9zb2Z0KVwiXG4gICAgICAgICAgICBbQGFuaW1hdGVdPVwie3ZhbHVlOicqJyxwYXJhbXM6e2R1cmF0aW9uOiczMDBtcycseTonMTAwcHgnfX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJtaWNyb3NvZnRcIlxuICAgICAgICAgICAgbWF0LW1pbmktZmFiPlxuICAgICAgPG1hdC1pY29uIHN2Z0ljb249XCJtaWNyb3NvZnRcIj48L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gKGNsaWNrKT1cInByb2Nlc3NMZWdhbFNpZ25VUChhdXRoUHJvdmlkZXIuWWFob28pXCJcbiAgICAgICAgICAgICpuZ0lmPVwicHJvdmlkZXJzID09PSBhdXRoUHJvdmlkZXIuQUxMIHx8IHByb3ZpZGVycy5pbmNsdWRlcyhhdXRoUHJvdmlkZXIuWWFob28pXCJcbiAgICAgICAgICAgIFtAYW5pbWF0ZV09XCJ7dmFsdWU6JyonLHBhcmFtczp7ZHVyYXRpb246JzMwMG1zJyx5OicxMDBweCd9fVwiXG4gICAgICAgICAgICBjbGFzcz1cInlhaG9vLXJhaXNlZFwiXG4gICAgICAgICAgICBtYXQtbWluaS1mYWI+XG4gICAgICA8bWF0LWljb24gc3ZnSWNvbj1cInlhaG9vXCI+PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==