import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

import { BootingSpinnerService } from './core';
import {RouterOutlet} from "@angular/router";

type VerticalPosition = 'top' | 'bottom' | 'middle';
type HorizontalPosition = 'right' | 'left' | 'center';
interface Position extends Array<VerticalPosition | HorizontalPosition> {
    0: VerticalPosition;
    1: HorizontalPosition;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})


export class AppComponent implements AfterViewInit {
  title = 'angular-practice';
  pos: Position = ['top', 'right']
  // 通知配置
  public notificationsOptions = {
    position: this.pos,
    timeOut: 1500,
    lastOnBottom: true,
    clickToClose: true,
    maxLength: 0,
    maxStack: 5,
    showProgressBar: true,
    pauseOnHover: true,
    preventDuplicates: false,
    preventLastDuplicates: false
  };
  constructor(
    private notificationsService: NotificationsService,
    private spinnerService: BootingSpinnerService,
  ) {

  }

  // 程序初始化，关闭加载状态
  ngAfterViewInit() {
    this.spinnerService.hide();
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
