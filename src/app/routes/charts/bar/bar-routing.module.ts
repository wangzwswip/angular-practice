import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarOneComponent } from './bar-one/bar-one.component';

const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  {path: 'one', component: BarOneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarRoutingModule { }
