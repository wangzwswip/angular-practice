import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherOneComponent } from './other-one/other-one.component';

const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  { path: 'one', component: OtherOneComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
