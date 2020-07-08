import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BaseTemplateComponent } from './base-template/base-template.component';
import { LandingTemplateComponent } from './landing-template/landing-template.component';



@NgModule({
  declarations: [BaseTemplateComponent, LandingTemplateComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule
  ],
  exports: [BaseTemplateComponent]
})
export class TemplatesModule { }
