import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './passport/login/login.component';
import { PassportComponent } from '../layout/passport/passport.component';

const routes: Routes = [
  { path: '', redirectTo: 'passport', pathMatch: 'full' },
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
