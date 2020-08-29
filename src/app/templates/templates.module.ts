import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BaseTemplateComponent } from './base-template/base-template.component';
import { LandingTemplateComponent } from './landing-template/landing-template.component';
import { LoginComponent } from './landing-template/login/login.component';
import { RegisterComponent } from './landing-template/register/register.component';
import { ForgotPasswordComponent } from './landing-template/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    BaseTemplateComponent,
    LandingTemplateComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [BaseTemplateComponent, LoginComponent, RegisterComponent],
})
export class TemplatesModule { }
