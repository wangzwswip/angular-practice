import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineComponent } from './line/line.component';

const routes: Routes = [
  { path: '', redirectTo: 'line', pathMatch: 'full' },
  { path: 'line', component: LineComponent },
  {
    path: 'bar',
    loadChildren: () => import('./bar/bar.module').then(m => m.BarModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
