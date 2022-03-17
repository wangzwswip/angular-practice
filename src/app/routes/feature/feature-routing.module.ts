import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SlideComponent} from "./slide/slide.component";

const routes: Routes = [
  { path: '', redirectTo: 'slide', pathMatch: 'full' },
  {path: 'slide', component: SlideComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
