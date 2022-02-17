/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import 'echarts-gl';
import { ColorService, target, mapData} from '@core';
import { HttpClient } from '@angular/common/http';
import { registerMap } from 'echarts';


@Component({
  selector: 'app-other-one',
  templateUrl: './other-one.component.html',
  styleUrls: ['./other-one.component.scss']
})
export class OtherOneComponent implements OnInit {
  options: any
  colors: target = {}
  defaultColors
  boundingCoords = [[73, 3], [135, 65]] // 左上角经纬度和右下角经纬度
  data: Array<mapData> = []
  constructor(private defaultColor:ColorService, private http: HttpClient) {
    this.defaultColors = this.defaultColor.colors()
    this.data = [
      { name: '海门', value: [121.15, 31.89, 9]},
      { name: '舟山', value: [122.20, 29.98, 12]},
      { name: '青岛', value: [120.23, 30.07, 18]},
      { name: '拉萨', value: [91.11, 29.97, 24]},
    ]
    this.http.get('assets/data/china.json').subscribe((res) => {
      let result = res
      // registerMap('china', {geoJSON: result})
      this.setOption()
    });
  }

  ngOnInit(): void {
    
    
  }

  setOption() {
    // eslint-disable-next-line
    
    this.options = {
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        textStyle: {
          color: '#fff'
        },
        confine: true,
      },
      geo: {
        map: "china",
        mapType: 'china',
        show: true,
        roam: true,
        zoom: 2,
        boundingCoords: this.boundingCoords,
        emphasis: {
            label: {
              show: false,
            },
            itemStyle: {
              color: 'yellow',
            },
        },
        itemStyle: {
            areaColor: 'blue',
            borderColor: 'black',
            shadowColor: "rgba(0, 0, 0, .5)",
            shadowBlur: 15,
        },
      },
      series: [
        {
          type: "effectScatter",
          coordinateSystem: "geo",
          data: this.data,
          symbolSize: (val: any) => {
            return val[2] / 2;
          },
          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke",
          },
          emphasis: {
            scale: true,
          },
          label: {
            formatter: "{b}",
            position: "right",
            show: true,
          },
          itemStyle: {
            color: 'yellow',
            shadowBlur: 10,
          },
          zlevel: 1,
        },
      ],
    }
  }

}
