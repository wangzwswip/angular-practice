import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PassportComponent } from './passport/passport.component';
import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from './default/header/header.component';
import { SiderComponent } from './default/sider/sider.component';


// LayoutModule应该 导入 SharedModule；
// LayoutModule应该 导出所有 layout component；
// LayoutModule不应该 导入和声明任何路由；

const COMPONENTS = [
  PassportComponent,
  DefaultComponent,
  HeaderComponent,
  SiderComponent
]
@NgModule({
  declarations: [...COMPONENTS],
  exports: [
    ...COMPONENTS
  ],
  imports: [
    SharedModule,
  ]
})
export class LayoutModule { }
