import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared';
import { CoreModule } from '@core';

import { BaseRoutingModule } from './base-routing.module';
import { BaseOneComponent } from './base-one/base-one.component';
import { ChildRefDirective } from './child-ref.directive';
import { PersonsComponent } from './persons/persons.component';
import { PersonsSuperComponent } from './persons-super/persons-super.component';
import { ChildRefSuperDirective } from './child-ref-super.directive';
import { AdHostDirective } from './ad-host.directive';
import {UnlessDirective} from "./unless.directive";
import {HighlightDirective} from "./highlight.directive";
import { HeroJobComponent } from './hero-job/hero-job.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import {AdBannerComponent} from "./ad-banner.component";

import {AdService} from "./ad.service";
import { DirectiveExampleComponent } from './directive-example/directive-example.component';


@NgModule({
  declarations: [
    BaseOneComponent,
    ChildRefDirective,
    PersonsComponent,
    PersonsSuperComponent,
    ChildRefSuperDirective,
    AdHostDirective,
    HeroJobComponent,
    HeroProfileComponent,
    AdBannerComponent,
    DirectiveExampleComponent,
    HighlightDirective,
    UnlessDirective,
  ],
  providers: [ AdService ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    SharedModule,
    CoreModule,
  ]
})
export class BaseModule { }
