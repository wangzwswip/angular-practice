import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { ScreenComponent } from './screen/screen.component';

const routes: Routes = [
  { path: '', redirectTo: 'connection', pathMatch: 'full' },
  { path: 'connection', component: ConnectionComponent},
  { path: 'screen', component: ScreenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
