import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared';

import { FeatureRoutingModule } from './feature-routing.module';
import { SlideComponent } from './slide/slide.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { TestDragComponent } from './test-drag/test-drag.component';
import { TestResizeComponent } from './test-resize/test-resize.component';

@NgModule({
  declarations: [
    SlideComponent,
    ImageSliderComponent,
    TestDragComponent,
    TestResizeComponent

  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule
  ]
})
export class FeatureModule { }
