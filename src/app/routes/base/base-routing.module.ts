import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseOneComponent} from "./base-one/base-one.component";
import {DirectiveExampleComponent} from "./directive-example/directive-example.component";
import {BaseTwoComponent} from "./base-two/base-two.component";
import {BaseThreeComponent} from "./base-three/base-three.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'base-one', pathMatch: 'full'},
  {path: 'base-one', component: BaseOneComponent},
  {path: 'directive-example', component: DirectiveExampleComponent},
  { path: 'base-two', component: BaseTwoComponent},
  { path: 'base-three', component: BaseThreeComponent, data: { animation: 'heroes'}},
  { path: 'hero-detail/:id', component: HeroDetailComponent, data: { animation: 'hero'}},
  {
    path: 'crisis-center',
    loadChildren: ()=> import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
