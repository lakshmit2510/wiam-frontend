import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BaseTemplateComponent } from './base-template/base-template.component';



@NgModule({
  declarations: [BaseTemplateComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule
  ],
  exports: [BaseTemplateComponent]
})
export class TemplatesModule { }
