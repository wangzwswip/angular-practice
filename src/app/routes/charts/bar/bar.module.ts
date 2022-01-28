import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';

import { BarRoutingModule } from './bar-routing.module';
import { BarOneComponent } from './bar-one/bar-one.component';
import { BarTwoComponent } from './bar-two/bar-two.component';


@NgModule({
  declarations: [
    BarOneComponent,
    BarTwoComponent
  ],
  imports: [
    CommonModule,
    BarRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ]
})
export class BarModule { }