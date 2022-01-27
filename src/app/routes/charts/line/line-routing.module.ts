import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineOneComponent } from './line-one/line-one.component';

const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  {path: 'one', component: LineOneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineRoutingModule { }
