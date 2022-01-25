import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';

import { RoutesRoutingModule } from './routes-routing.module';
import { LoginComponent } from './passport/login/login.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

// RouterModule应该 导入 SharedModule、CoreModule、LayoutModule以及RouteRoutingModule；
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    RoutesRoutingModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzRadioModule,
    NzCheckboxModule,
  ]
})
export class RoutesModule { }
