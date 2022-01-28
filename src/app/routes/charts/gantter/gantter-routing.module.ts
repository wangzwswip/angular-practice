import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GantterOneComponent } from './gantter-one/gantter-one.component';
import { GantterTwoComponent } from './gantter-two/gantter-two.component';

const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  { path: 'one', component: GantterOneComponent },
  { path: 'two', component: GantterTwoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GantterRoutingModule { }
