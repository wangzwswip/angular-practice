import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RoutesModule } from './routes/routes.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared';
import { AppComponent } from './app.component';

registerLocaleData(zh);

// AppModule应该 导入 SharedModule、CoreModule、LayoutModule、RouterModule、Angular 模块(例如：BrowserModule、BrowserAnimationsModule、HttpClientModule)；
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutesModule,
    LayoutModule,
    
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
