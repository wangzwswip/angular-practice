import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CenterComponent} from "./center/center.component";
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: CenterComponent,
    children: [
      {
        path: '',
        component: ListComponent,
        children: [
          {
            path: ':id',
            component: DetailComponent,

          },
          {
            path: '',
            component: HomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
