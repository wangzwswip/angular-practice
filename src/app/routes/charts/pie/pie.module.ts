import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';

import { PieRoutingModule } from './pie-routing.module';
import { PieOneComponent } from './pie-one/pie-one.component';


@NgModule({
  declarations: [
    PieOneComponent
  ],
  imports: [
    CommonModule,
    PieRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ]
})
export class PieModule { }
