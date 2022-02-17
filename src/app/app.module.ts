import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { SimpleNotificationsModule } from 'angular2-notifications';


import { RoutesModule } from './routes/routes.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

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
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutesModule,
    LayoutModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
