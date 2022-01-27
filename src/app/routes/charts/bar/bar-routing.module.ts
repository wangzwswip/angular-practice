import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';

const routes: Routes = [
  { path: '', redirectTo: 'line', pathMatch: 'full' },
  {path: 'one', component: OneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarRoutingModule { }
