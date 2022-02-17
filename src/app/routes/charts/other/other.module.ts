import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule } from '@angular/common/http';

import { OtherRoutingModule } from './other-routing.module';
import { OtherOneComponent } from './other-one/other-one.component';


@NgModule({
  declarations: [
    OtherOneComponent
  ],
  imports: [
    CommonModule,
    OtherRoutingModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ]
})
export class OtherModule { }
