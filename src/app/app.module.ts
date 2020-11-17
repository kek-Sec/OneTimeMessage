import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { CreateComponent } from './create/create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Toast } from './toast';
import { ToastsContainer } from './toast-container.component';
import { FormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ReactiveFormsModule } from '@angular/forms';
import { DoneComponent } from './done/done.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import {getMessage} from '../../src/app/scripts/getMessage';
import {postMessage} from '../../src/app/scripts/postMessage';
import { test } from './scripts/test';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from 'ngx-clipboard';
 

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FooterComponent,
    NavComponent,
    CreateComponent,
    ToastsContainer,
    DoneComponent,
    ViewComponent
  ],
  imports: [
    ClipboardModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserModule,
    NgbModule, AppRoutingModule,
    FormsModule, NgxCaptchaModule, ReactiveFormsModule],
  providers: [Toast,getMessage,postMessage,test],
  bootstrap: [AppComponent]
})
export class AppModule { }
