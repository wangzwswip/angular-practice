import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassportComponent } from './passport/passport.component';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderComponent } from './default/header/header.component';
import { SiderComponent } from './default/sider/sider.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';



@NgModule({
  declarations: [
    PassportComponent,
    DefaultComponent,
    HeaderComponent,
    SiderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzIconModule,
    NzInputModule,
    NzDropDownModule,
  ]
})
export class LayoutModule { }
