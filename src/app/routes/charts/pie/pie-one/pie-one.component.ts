import { Component, OnInit } from '@angular/core';
import 'echarts-gl';
import { ColorService, target, Pie3D} from '@core';

@Component({
  selector: 'app-pie-one',
  templateUrl: './pie-one.component.html',
  styleUrls: ['./pie-one.component.scss']
})
export class PieOneComponent implements OnInit {
  options: any
  colors: target = {}
  defaultColors
  data: Array<Pie3D> = []
  dirRate: number = 0.8
  boxHeight: number  = 30
  distance: number = 200
  echartsInstance: any
  hoveredIndex: string = ""
  constructor(private defaultColor:ColorService) {
    this.defaultColors = this.defaultColor.colors()
  }

  ngOnInit(): void {
    this.data = [
      { name: 'total', value: 100, startRatio: 0,
      endRatio: 0,},
      { name: 'a', value: 40, startRatio: 0,
      endRatio: 0,},
      { name: 'b', value: 30, startRatio: 0,
      endRatio: 0,},
      { name: 'c', value: 30, startRatio: 0,
      endRatio: 0,},
    ]
    this.options = this.setOptions(this.data)
  }

  setOptions (data: Array<Pie3D>) {
    let that = this
    let pieData = data.slice(0)
    let series: Array<any> = []
    let sumValue = 0
    let startValue = 0
    let endValue = 0
    let legendData = []
    let legendBfb: { name: any; value: number; }[] = []
    let k = 1 - this.dirRate
    pieData.sort((a, b) => {
      return b.value - a.value
    })
    // 为每个饼图数据生成seires-surface配置
    for(let i = 0; i < pieData.length; i++) {
      sumValue += pieData[i].value
      let seriesItem = {
        name: pieData[i].name,
        type: 'surface',
        parametric: true,
        wireframe: {
          show: false
        },
        pieData: pieData[i],
        pieStatus: {
          selected: false,
          hovered: false,
          k: k
        },
        center: ['10%', '50%'],
        itemStyle: {
          borderColor: '#000',
          borderWidth: 1,
          color: (params: any) => {
            let color
            // if (that.colors) {
            //   color = that.colors[params.seriesName]
            // } else {
            //   let index = pieData.findIndex(item => item.name === params.seriesName)
            //   console.log('找到位置了', index);
              
            //   color = that.defaultColors[0]
            // }
            let index = pieData.findIndex(item => item.name === params.seriesName)              
              color = that.defaultColors[index]            
            return color
          }
        },
        parametricEquation: {}
      }
      series.push(seriesItem)
    }
    // 使用上次遍历时，计算出的数据和sumValue,
    for (let i = 0; i < series.length; i++) {
      endValue = startValue + series[i].pieData.value
      series[i].pieData.startRatio = startValue/sumValue
      series[i].pieData.endRatio = endValue/sumValue
      series[i].parametricEquation = this.getEquation(
        series[i].pieData.startRatio,
        series[i].pieData.endRatio,
        false,
        false,
        k,
        series[i].pieData.value
      )
      
      startValue = endValue
      let bfb = pieData[i].value
      let color
      if (this.colors) {
        color = this.colors[series[i].name]
      } else {
        let index = pieData.findIndex(item => item.name === series[i].name)
        color = this.defaultColors[index]
      }
      legendData.push(
        {
          name: series[i].name,
          value: bfb,
          itemStyle: {
            color
          }
        }
      )
      legendBfb.push(
        {
          name: series[i].name,
          value: bfb
        }
      )
      
    }
    let boxHeight = this.getHeight(series, this.boxHeight)
    let option = {
        legend: {
          data: legendData,
          type: 'scroll',
          orient: 'horizontal',
          left: 'center',
          bottom: 20,
          itemGap: 20,
          format: ["{a|{name}}"].join("\n"),
          textStyle: {
            rich: {
              a: {verticalAlign: 'bottom'}
            }
          },
          show: true,
          formatter: (params: any) => {
            let item = legendBfb.filter(item => item.name === params)[0]
            let bfs = item.value
            return `${item.name}  ${bfs}`
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          borderColor: 'rgba(0, 0, 0, 0.5)',
          textStyle: {
            color: '#fff'
          },
          confine: true,
          formatter: (params: any) => {
            if (params.seriesName !== 'mouseoutSeries' && params.seriesName !== 'pie2d') {
              return (
                `${params.seriesName}<br/>` + 
                `<span style="display: inline-block;margin-right: 5px;border-radius: 10px; background-color:${params.color};"></span>` +
                `${option.series[params.seriesIndex].pieData.value}`
              )
            } else {
              return 'dd'
            }
          }
        },
        xAxis3D: {
          min: -1,
          max: 1
        },
        yAxis3D: {
          min: -1,
          max: 1
        },
        zAxis3D: {
          min: -1,
          max: 1
        },
        grid3D: {
          show:false,
          boxHeight,
          viewControl: {
            alpha: 30,
            distance: this.distance,
            rotateSensitivity: 0, // 设为0无法旋转
            zoomSensitivity: 0, // 设为0无法缩放
            panSensitivity: 0, // 设为0无法平移
            autoRotate:false, // 自动旋转
          }
        },
        series: series
    }
    return option
  }

  // 生成扇形曲面参数方程
  getEquation (startRatio: number, endRatio: number, isSelected: boolean, isHovered: boolean, k: number, h: number) {
    let midRaio = (startRatio + endRatio) / 2
    let startRadian = startRatio * Math.PI * 2
    let endRadian = endRatio * Math.PI * 2
    let midRadian = midRaio * Math.PI * 2
    // 只有一个扇形，不实现选中效果
    if (startRatio === 0 && endRatio === 1) {
      isSelected = false
    }
    k = typeof k !== 'undefined' ? k : 1/3
    let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0
    let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0
    let hoverRate = isHovered ? 1.05 : 1
    return {
      u: {
        min: -Math.PI,
        max: Math.PI * 3,
        step: Math.PI / 32
      },
      v: {
        min: 0,
        max: Math.PI * 2,
        step: Math.PI / 20
      },
      x: function(u: number, v: number) {
        if (u < startRadian) {
          return (offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate)
        }
        if (u > endRadian) {
          return (offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate)
        }
        return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate
      },
      y: function(u: number, v: number) {
        if (u < startRadian) {
          return (offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate)
        }
        if (u > endRadian) {
          return (offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate)
        }
        return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate
      },
      z: function(u: number, v: number) {
        if (u < -Math.PI * 0.5) {
          return Math.sin(u)
        }
        if (u > Math.PI * 2.5) {
          return Math.sin(u) * h * 0.1
        }
        return Math.sin(v) > 0 ? 1 * h * 0.1 : -1
      }
    }
  }

  getHeight (series: any, height: number) {
    series.sort((a: any, b: any) => {
      return b.pieData.value - a.pieData.value
    })
    return (height * 25) / series[0].pieData.value
  }

  onChartInit (ec: any) {
    this.echartsInstance = ec;
  }
  onOver(ec: any){
    if (this.echartsInstance) {
      let optionsCur = this.echartsInstance.getOption()
      
      let params = ec
      let isSelected
      let isHovered
      let startRatio
      let endRatio
      let k
      // 如果触发mouserOver的扇形当前已高亮，则不做操作
      if (this.hoveredIndex === params.seriesIndex) {
        return
      } else {
        // 如果当前有高亮的扇形，则取消高亮状态
        if (this.hoveredIndex !== "") {
          isSelected = optionsCur.series[this.hoveredIndex].pieStatus.selected
          isHovered = false
          startRatio = optionsCur.series[this.hoveredIndex].pieData.startRatio
          endRatio = optionsCur.series[this.hoveredIndex].pieData.endRatio
          k = optionsCur.series[this.hoveredIndex].pieStatus.k
          // 对当前点击的扇形取消高亮操作
          optionsCur.series[this.hoveredIndex].parametricEquation = this.getEquation(startRatio, endRatio,isSelected,isHovered,k,optionsCur.series[this.hoveredIndex].pieData.value)
          optionsCur.series[this.hoveredIndex].pieData.hovered = isHovered
          this.hoveredIndex = ""
        }
        if (
          params.seriesName !== "mouseoutSeries" &&
          params.seriesName !== "pie2d"
        ) {
          // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
          isSelected = optionsCur.series[params.seriesIndex].pieStatus.selected;
          isHovered = true;
          startRatio = optionsCur.series[params.seriesIndex].pieData.startRatio;
          endRatio = optionsCur.series[params.seriesIndex].pieData.endRatio;
          k = optionsCur.series[params.seriesIndex].pieStatus.k;
          // 对当前点击的扇形，执行高亮操作（对 option 更新）
          optionsCur.series[params.seriesIndex].parametricEquation = this.getEquation(
            startRatio,
            endRatio,
            isSelected,
            isHovered,
            k,
            optionsCur.series[params.seriesIndex].pieData.value + 5
          );
          optionsCur.series[params.seriesIndex].pieStatus.hovered = isHovered;
          // 记录上次高亮的扇形对应的系列号 seriesIndex
          this.hoveredIndex = params.seriesIndex;
        }
        // 使用更新后的 option，渲染图表
        // this.echartsInstance.setOption(optionsCur);
        this.options = optionsCur
        
      }
    }
  }

  onOut(ec: any) {
    if (this.echartsInstance) {
      let optionsCur = this.echartsInstance.getOption()
      let isSelected;
      let isHovered;
      let startRatio;
      let endRatio;
      let k;
      if (this.hoveredIndex !== "") {
          // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
          isSelected = optionsCur.series[this.hoveredIndex].pieStatus.selected;
          isHovered = false;
          k = optionsCur.series[this.hoveredIndex].pieStatus.k;
          startRatio = optionsCur.series[this.hoveredIndex].pieData.startRatio;
          endRatio = optionsCur.series[this.hoveredIndex].pieData.endRatio;
          // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
          optionsCur.series[this.hoveredIndex].parametricEquation = this.getEquation(
            startRatio,
            endRatio,
            isSelected,
            isHovered,
            k,
            optionsCur.series[this.hoveredIndex].pieData.value
          );
          optionsCur.series[this.hoveredIndex].pieStatus.hovered = isHovered;
          // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
          this.hoveredIndex = "";
      }
      // 使用更新后的 option，渲染图表
      this.options = optionsCur
    }
  }
}
