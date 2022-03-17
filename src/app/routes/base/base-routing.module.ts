import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseOneComponent} from "./base-one/base-one.component";
import {DirectiveExampleComponent} from "./directive-example/directive-example.component";

const routes: Routes = [
  {path: '', redirectTo: 'base-one', pathMatch: 'full'},
  {path: 'base-one', component: BaseOneComponent},
  {path: 'directive-example', component: DirectiveExampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
