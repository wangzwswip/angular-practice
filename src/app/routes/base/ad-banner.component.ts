import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import {AdHostDirective} from "./ad-host.directive";
import {AdItem} from "./ad-item";
import {AdComponent} from "./ad.component";

@Component({
  selector: 'app-ad-banner',
  template: `
    <div class="ad-banner-example">
      <h3>标题</h3>
      <ng-template appAdHost></ng-template>
    </div>
  `
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[] = [];
  currentAdIndex = -1;
  @ViewChild(AdHostDirective, {static: true}) appAdHost!: AdHostDirective;
  interval: number|undefined;

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);

  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.appAdHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    // @ts-ignore
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
