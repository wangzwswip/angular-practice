import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassportComponent } from './passport/passport.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PassportComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
