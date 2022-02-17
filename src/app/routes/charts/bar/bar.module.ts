import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';

import { BarRoutingModule } from './bar-routing.module';
import { BarOneComponent } from './bar-one/bar-one.component';
import { BarTwoComponent } from './bar-two/bar-two.component';
import { BarThreeComponent } from './bar-three/bar-three.component';


@NgModule({
  declarations: [
    BarOneComponent,
    BarTwoComponent,
    BarThreeComponent
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
