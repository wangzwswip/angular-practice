import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LayersComponent } from './layers/layers.component';
import { MarkerComponent } from './marker/marker.component';
import { ToolComponent } from './tool/tool.component';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  {
    path: 'start', component: StartComponent
  },
  {
    path: 'layers', component: LayersComponent
  },
  {
    path: 'marker', component: MarkerComponent
  },
  {
    path: 'tool', component: ToolComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
