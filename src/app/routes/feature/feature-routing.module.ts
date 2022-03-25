import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SlideComponent} from "./slide/slide.component";
import {TestDragComponent} from "./test-drag/test-drag.component";
import {TestResizeComponent} from "./test-resize/test-resize.component";

const routes: Routes = [
  { path: '', redirectTo: 'slide', pathMatch: 'full' },
  {path: 'slide', component: SlideComponent},
  { path: 'test-drag', component: TestDragComponent},
  { path: 'test-resize', component: TestResizeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
