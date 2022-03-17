import {Component, ContentChild, OnInit} from '@angular/core';

import {AdItem} from "../ad-item";
import {AdService} from "../ad.service";

@Component({
  selector: 'app-base-one',
  templateUrl: './base-one.component.html',
  styleUrls: ['./base-one.component.scss']
})
export class BaseOneComponent implements OnInit {
  ads: AdItem[] = [];
  constructor(private adService: AdService) { }

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }

}
