import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';

import { LineRoutingModule } from './line-routing.module';
import { LineOneComponent } from './line-one/line-one.component';


@NgModule({
  declarations: [
    LineOneComponent
  ],
  imports: [
    CommonModule,
    LineRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ]
})
export class LineModule { }
