import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';

import { GantterRoutingModule } from './gantter-routing.module';
import { GantterOneComponent } from './gantter-one/gantter-one.component';
import { GantterTwoComponent } from './gantter-two/gantter-two.component';


@NgModule({
  declarations: [
    GantterOneComponent,
    GantterTwoComponent
  ],
  imports: [
    CommonModule,
    GantterRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ]
})
export class GantterModule { }
