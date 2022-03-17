import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { SlideComponent } from './slide/slide.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';


@NgModule({
  declarations: [
    SlideComponent,
    ImageSliderComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
