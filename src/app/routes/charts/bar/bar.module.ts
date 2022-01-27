import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';

import { BarRoutingModule } from './bar-routing.module';
import { OneComponent } from './one/one.component';


@NgModule({
  declarations: [
    OneComponent
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
