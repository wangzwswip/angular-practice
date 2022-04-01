import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {slideInAnimation} from "../../animations";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  animations: [slideInAnimation]
})
export class DefaultComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  date: number = (new Date()).getFullYear();
  constructor() {
  }

  launchSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
  }

  getAnimationData(outlet: RouterOutlet) {
    console.log('有吗', outlet?.activatedRouteData?.['animation'])
    return outlet?.activatedRouteData?.['animation'];
  }

}
