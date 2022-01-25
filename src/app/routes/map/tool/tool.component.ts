import { Component, OnInit } from '@angular/core';

declare var AMapUI: any;
declare var AMap: any;

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {
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

  initMap() :void{
    this.map = new AMap.Map('tool-container', {
      resizeEnable: true,
      zooms: [4,18],//设置地图级别范围
      zoom: 11, // 级别
      viewMode:'3D', //使用3D视图
      center: [116.397428, 39.90923], // 中心点坐标
    });
    this.addToolBarPlugin()
  }

  // 工具条，控制地图的缩放、平移等
  addToolBarPlugin ():void {
    let that = this
    AMap.plugin('AMap.ToolBar',function(){//异步加载插件
      let toolbar = new AMap.ToolBar();
      that.map.addControl(toolbar);
      // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
      that.map.addControl(new AMap.Scale());
      // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
      that.map.addControl(new AMap.HawkEye({isOpen:true}));
    
      // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
      that.map.addControl(new AMap.MapType());
    
      // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
      that.map.addControl(new AMap.Geolocation());
  });
  }
}
