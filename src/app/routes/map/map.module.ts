import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { MapRoutingModule } from './map-routing.module';
import { StartComponent } from './start/start.component';
import { LayersComponent } from './layers/layers.component';
import { MarkerComponent } from './marker/marker.component';
import { ToolComponent } from './tool/tool.component';



@NgModule({
  declarations: [
    StartComponent,
    LayersComponent,
    MarkerComponent,
    ToolComponent,
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    SharedModule,
  ]
})
export class MapModule { }
