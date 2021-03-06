import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';

import { ChartsRoutingModule } from './charts-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ]
})
export class ChartsModule { }
