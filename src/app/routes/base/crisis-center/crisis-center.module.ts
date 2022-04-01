import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CenterComponent } from './center/center.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    CenterComponent,
    HomeComponent,
    ListComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    CrisisCenterRoutingModule,
    SharedModule
  ]
})
export class CrisisCenterModule { }
