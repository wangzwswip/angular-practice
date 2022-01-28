import { SharedModule } from '@shared';
import { NgModule } from '@angular/core';


import { RoutesRoutingModule } from './routes-routing.module';
import { LoginComponent } from './passport/login/login.component';





// RouterModule应该 导入 SharedModule、CoreModule、LayoutModule以及RouteRoutingModule；
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    RoutesRoutingModule,
    
  ]
})
export class RoutesModule { }
