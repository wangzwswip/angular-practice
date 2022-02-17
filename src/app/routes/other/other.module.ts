import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared';
import { CoreModule } from '@core';

import { OtherRoutingModule } from './other-routing.module';
import { ConnectionComponent } from './connection/connection.component';
import { AstronautComponent } from './connection/astronaut.component';


@NgModule({
  declarations: [
    ConnectionComponent, AstronautComponent
  ],
  imports: [
    CommonModule,
    OtherRoutingModule,
    SharedModule,
    CoreModule,
  ]
})
export class OtherModule { }
