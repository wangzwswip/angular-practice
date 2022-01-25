import { Component, OnInit } from '@angular/core';

declare var AMapUI: any;
declare var AMap: any;

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit {
  map: any = null
  pointMarker: any = null
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
    this.map = new AMap.Map('marker-container', {
      resizeEnable: true,
      zooms: [4,18],//设置地图级别范围
      zoom: 11, // 级别
      viewMode:'3D', //使用3D视图
      center: [116.397428, 39.90923], // 中心点坐标
    });
    
    // 添加标记
    this.pointMarker = new AMap.Marker({
      position:[116.39, 39.9]//位置
    })
    this.map.add(this.pointMarker);//添加到地图

    // 添加事件
    this.addPointerEvent()

    // 自定义标记
    this.addSelfMarker()

    // 添加矢量图形
    this.addVectorMarker()
  }

  addPointerEvent():void {
    const infoWindow = new AMap.InfoWindow({ //创建信息窗体
      isCustom: true,  //使用自定义窗体
      content:'<div class="point-marker">标记信息</div>', //信息窗体的内容可以是任意html片段
      offset: new AMap.Pixel(16, -45)
    });
    let that = this
    const onMarkerClick  =  function(e: any) {
        infoWindow.open(that.map, e.target.getPosition());//打开信息窗体
        //e.target就是被点击的Marker
    }
    this.pointMarker.on('click',onMarkerClick);//绑定click事件
  }

  removePointMarker() :void {
    if (this.pointMarker) {
      this.map.remove(this.pointMarker);
      this.pointMarker = null
    }
  }

  // 自定义标记
  addSelfMarker ():void{
    // 创建 AMap.Icon 实例：
    let icon = new AMap.Icon({
      size: new AMap.Size(40, 50),    // 图标尺寸
      image: '//vdata.amap.com/icons/b18/1/2.png',  // Icon的图像
      imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
      imageSize: new AMap.Size(40, 50)   // 根据所设置的大小拉伸或压缩图片
    });

    // 将 Icon 实例添加到 marker 上:
    let marker = new AMap.Marker({
      position: new AMap.LngLat(116.405467, 39.907761),
      offset: new AMap.Pixel(-10, -10),
      icon: icon, // 添加 Icon 实例
      title: '北京',
      content: '北京标注',
      zoom: 13
    });

    this.map.add(marker);
    console.log('标记执行完了吗');
    
  }

  addVectorMarker():void{
    // 折线的节点坐标数组，每个元素为 AMap.LngLat 对象
    let path = [
      new AMap.LngLat(116.368904,39.913423),
      new AMap.LngLat(116.382122,39.901176),
      new AMap.LngLat(116.387271,39.912501),
      new AMap.LngLat(116.398258,39.904600)
    ];

    // 创建折线实例
    let polyline = new AMap.Polyline({
      path: path,  
      borderWeight: 2, // 线条宽度，默认为 1
      strokeColor: 'red', // 线条颜色
      lineJoin: 'round' // 折线拐点连接处样式
    });

    // 将折线添加至地图实例
    this.map.add(polyline);
  }
}
