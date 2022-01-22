import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListRoutingModule } from './list-routing.module';
import { TableListComponent } from './table-list/table-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TreeComponent } from './tree/tree.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [
    TableListComponent,
    TreeComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzInputModule,
    NzTreeModule,
    FormsModule,
    NzIconModule,
  ]
})
export class ListModule { }
