import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieOneComponent } from './pie-one/pie-one.component';

const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  { path: 'one', component: PieOneComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PieRoutingModule { }
