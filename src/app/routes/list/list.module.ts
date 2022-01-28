import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ListRoutingModule } from './list-routing.module';
import { TableListComponent } from './table-list/table-list.component';
import { TreeComponent } from './tree/tree.component';



@NgModule({
  declarations: [
    TableListComponent,
    TreeComponent
  ],
  imports: [
    SharedModule,
    ListRoutingModule,
  ]
})
export class ListModule { }
