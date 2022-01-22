import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-table', pathMatch: 'full' },
  { path: 'list-table', component: TableListComponent },
  { path: 'tree', component: TreeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
