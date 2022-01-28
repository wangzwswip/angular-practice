import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'line', pathMatch: 'full' },
  {
    path: 'line',
    loadChildren: () => import('./line/line.module').then(m => m.LineModule)
  },
  {
    path: 'bar',
    loadChildren: () => import('./bar/bar.module').then(m => m.BarModule)
  },
  {
    path: 'gantter',
    loadChildren: () => import('./gantter/gantter.module').then(m => m.GantterModule)
  },
  {
    path: 'pie',
    loadChildren: () => import('./pie/pie.module').then(m => m.PieModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
