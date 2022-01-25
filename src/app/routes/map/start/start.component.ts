import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

declare var AMapUI: any;
declare var AMap: any;


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  map: any = null
  constructor(private message: NzMessageService) { }

  ngOnInit(): void {
    this.initMap()
  }
  ngOnDestroy() {
    // 销毁地图
    if (this.map) {
      this.map.destroy();
    }
  }

  initMap() :void{
    this.map = new AMap.Map('map-container', {
      resizeEnable: true,
      zooms: [4,18],//设置地图级别范围
      zoom: 11, // 级别
      viewMode:'3D', //使用3D视图
      center: [116.397428, 39.90923], // 中心点坐标
    });
    this.map.on('complete', () => {
      this.message.create('success', '高德地图初始化成功！');
    });
  }

  

}
