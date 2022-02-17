import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './passport/login/login.component';
import { PassportComponent } from '../layout/passport/passport.component';
import { DefaultComponent } from '../layout/default/default.component';

const routes: Routes = [
  { path: '', redirectTo: 'passport', pathMatch: 'full' },
  /**默认布局 */
  {
    path: 'default',
    component: DefaultComponent,
    // canActivate: [ACLGuard],
    children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        {
          path: 'index',
          loadChildren: () => import('./list/index/index.module').then(m => m.IndexModule)
        },
        {
          path: 'list',
          loadChildren: () => import('./list/list.module').then(m => m.ListModule)
        },
        {
          path: 'map',
          loadChildren: () => import('./map/map.module').then(m => m.MapModule)
        },
        {
          path: 'charts',
          loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)
        },
        {
          path: 'other',
          loadChildren: () => import('./other/other.module').then(m => m.OtherModule)
        }
        

    ]
},
  /** 登陆布局 */
  {
    path: 'passport',
    component: PassportComponent,
    children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent }
    ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
