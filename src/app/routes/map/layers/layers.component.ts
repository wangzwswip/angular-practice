import { Component, OnInit } from '@angular/core';

declare var AMapUI: any;
declare var AMap: any;

@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.scss']
})
export class LayersComponent implements OnInit {
  map: any = null
  constructor() { }

  ngOnInit(): void {
    this.initMap()
  }

  ngOnDestroy() {
    // 销毁地图
    if (this.map) {
      this.map.destroy();
    }
  }

  initMap () :void {
    this.map = new AMap.Map('layer-container', {
      resizeEnable: true,
      zooms: [4,18],//设置地图级别范围
      zoom: 11, // 级别
      viewMode:'3D', //使用3D视图
      center: [116.397428, 39.90923], // 中心点坐标
      layers: [//使用多个图层
        new AMap.TileLayer.Satellite(),
        new AMap.TileLayer.RoadNet()
      ],
    });
    // this.map.addControl(new AMap.Scale());
    //实时路况图层
    const trafficLayer = new AMap.TileLayer.Traffic({
      zIndex: 10
    });
    this.map.add(trafficLayer);//添加图层到地图
  }

}
