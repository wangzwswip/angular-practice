import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { graphic } from 'echarts';

import { ColorService, GantterData, target, GantterItem } from '@core';

@Component({
  selector: 'app-gantter-one',
  templateUrl: './gantter-one.component.html',
  styleUrls: ['./gantter-one.component.scss']
})
export class GantterOneComponent implements OnInit {

  options: any
  data: Array<GantterData> = []
  colors: target = {}
  defaultColors
  singleTypeColor: boolean = false
  yAxisMaxMultiple: number = 5
  xLabelType: string = 'month'
  constructor(private defaultColor:ColorService) {
    this.defaultColors = this.defaultColor.colors()
  }

  ngOnInit(): void {
    const sourceData = [
      {
        name: 'A',
        data: [
          {
            name: 'c',
            value: ['2021-05-10 00:00:00', '2021-05-10 03:20:00']
          },
          {
            name: 'a',
            value: ['2021-05-10 02:00:00', '2021-05-10 12:20:00']
          },
          {
            name: 'a',
            value: ['2021-05-10 13:00:00', '2021-05-10 14:20:00']
          },
          {
            name: 'b',
            value: ['2021-05-10 11:00:00', '2021-05-10 13:20:00']
          }
        ]
      },
      {
        name: 'B',
        data: [
          {
            name: 'c',
            value: ['2021-05-10 00:00:00', '2021-05-10 03:20:00']
          },
          {
            name: 'a',
            value: ['2021-05-10 02:00:00', '2021-05-10 12:20:00']
          },
          {
            name: 'a',
            value: ['2021-05-10 13:00:00', '2021-05-10 14:20:00']
          },
          {
            name: 'b',
            value: ['2021-05-10 11:00:00', '2021-05-10 13:20:00']
          }
        ]
      },
      {
        name: 'C',
        data: [
          {
            name: 'c',
            value: ['2021-05-10 00:00:00', '2021-05-10 03:20:00']
          },
          {
            name: 'a',
            value: ['2021-05-10 02:00:00', '2021-05-10 12:20:00']
          },
          {
            name: 'a',
            value: ['2021-05-10 13:00:00', '2021-05-10 14:20:00']
          },
          {
            name: 'b',
            value: ['2021-05-10 11:00:00', '2021-05-10 13:20:00']
          }
        ]
      },
      {
        name: 'D',
        data: [
          {
            name: 'c',
            value: ['2021-05-10 00:00:00', '2021-05-10 03:20:00']
          },
          {
            name: 'a',
            value: ['2021-05-10 02:00:00', '2021-05-10 12:20:00']
          },
          {
            name: 'a',
            value: ['2021-05-10 13:00:00', '2021-05-10 14:20:00']
          },
          {
            name: 'b',
            value: ['2021-05-10 11:00:00', '2021-05-10 13:20:00']
          }
        ]
      }
    ]
    this.data = this.calculateLevelByType(sourceData)
    this.options = this.setOptions()

  }

  processData(data: Array<GantterData>) {
    let categories: Array<string> = []
    let result: Array<any> = []
    let isCusColor = Object.keys(this.colors).length > 0
    let names:Array<string> = []
    data.forEach((target, i) => {
      categories.push(target.name)
      if (!target.data) return
      let newArr = target.data.map((item, x) => {
        let color
        if (isCusColor) {
          color = this.singleTypeColor ? this.colors[item.name] : this.colors[target.name]
        } else {
          if (!names.includes(item.name)) names.push(item.name)
          let colorIndex = names.findIndex(name => item.name === name) % 7
          color = this.defaultColors[colorIndex]
        }
        return {
          name: item.name,
          value: [
            i, // ????????????????????????
            new Date(item.value[0]).getTime(),
            new Date(item.value[1]).getTime(),
            `${item.value[0]} ~ ${item.value[1]}`,
            target.total,
            item.level
          ],
          itemStyle: {
            color: color
          }
        }
        
      })
      result = result.concat(newArr)
    })
    let diffLength = this.yAxisMaxMultiple - data.length
    if (diffLength > 0) {
      for (let i = 0; i < diffLength; i++) {
        categories.push("")
      }
    }
    return {categories, data: result}
  }

  setOptions() {
    let that = this
    let data, categories
    let result = this.processData(this.data)
    data = result.data
    categories = result.categories
    let series = [
      {
        type: 'custom',
        renderItem: (params:any, api:any) => {
          let categoryIndex = api.value(0)
          let start = api.coord([api.value(1), categoryIndex])
          let end = api.coord([api.value(2), categoryIndex])
          let eachHeight = api.size([0, 1])[1] * 0.2
          if (api.value(4) && api.value(4) > 4) {
            // ?????????????????????
            eachHeight = api.size([0, 1])[1] / api.value(4)
          }
          let height = eachHeight
          let renderHeight = eachHeight * 0.9
          let startCal = start[1] - height / 2
          if (api.value(4) && api.value(5)) {
            // ???????????????????????????
            startCal = start[1] - api.value(4) * height * 0.5 - height + api.value(5) * height
          }
          let rectShape = graphic.clipRectByRect(
            {
              x: start[0],
              y: startCal,
              width: end[0] - start[0],
              height: renderHeight
            },
            {
              x: params.coordSys.x,
              y: params.coordSys.y,
              width: params.coordSys.width,
              height: params.coordSys.height
            }
          )
          const result = rectShape && {type: 'rect', shape: rectShape, style: {fill: api.visual('color')}, textContent: {}, styleEmphasis: {}}
          return result
        },
        encode: {
          x: [1, 2], // data?????????1?????????2?????????x???
          y: 0, // data?????????0?????????Y???
        },
        data: data
      }
    ]
    return {
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        textStyle: {
          color: '#fff'
        },
        confine: true,
        formatter: (params: any) => {
          return `<div style="display: flex;">
          <span><span style="background-color: ${params.color}; width: 10px; border-radius: 5px;
          display: inline-block;margin: 0 5px;"></span>
          <span>${params.name}<i style="width: 10px; display: inline-block;"></i>
          ${moment(params.value[1]).format("YYYY-MM-DD HH:mm:ss")} ~ ${moment(params.value[2]).format("YYYY-MM-DD HH:mm:ss")}
          </span></span></div>`
        }
      },
      legend: {
        show: false
      },
      grid: {
        top: 60,
        right: 100,
        bottom: 60,
        left: 90
      },
      xAxis: {
        type: 'time',
        name: '??????',
        nameTextStyle: {
          color: '#000',
          fontSize: 14
        },
        axisLabel: {
          color: '#000',
          margin: 15,
          formatter: (val: string) => {
            let time = moment(val)
            let year = time.year()
            let month = time.month()
            let h = time.hour()
            let m = time.minute()
            let s = time.seconds()
            let timer = ""
            switch (that.xLabelType) {
              case 'ymd':
                timer = time.format("YYYY-MM-DD")
                break
              case 'month':
                if (month === 0) {
                  timer = year + "???" + "1???"
                } else {
                  timer = month + 1 + "???"
                }
                break
              case 'full':
                if (h === 0 && m === 0 && s === 0) {
                  timer = `${time.format("YYYY-MM-DD")}\n${time.format("HH:mm:ss")}`
                } else {
                  timer = time.format("HH:mm:ss")
                }
                break
              default:
                break
            }
            return timer
          }
        },
        axisLine: {
          lineStyle: {
            color: '#000'
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: true
        }
      },
      yAxis: {
        name: '??????',
        nameTextStyle: {
          color: '#000',
          fontSize: 18
        },
        nameLocation: 'start',
        inverse: true,
        data: categories,
        axisLabel: {
          interval: 0,
          margin: 15,
          color: '#000'
        },
        axisLine: {
          lineStyle: {
            width: 1,
            color: '#000'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: '#000'
          }
        }
      },
      dataZoom: [
        {
          type: 'inside',
          show: true,
          xAxisIndex: [0],
          start: 0,
          end: 100,
          filterMode: 'none'
        },
        {
          type: 'slider',
          show: true,
          yAxisIndex: [0],
          startValue: 0,
          endValue: 5,
          width: 10,
          backgroundColor: 'rgba(0,0,0,0.4)',
          borderColor: 'transparent',
          fillerColor: '#000',
          handleSize: 0,
          moveHandleSize: 0,
          textStyle: {
            color: 'transparent'
          },
          zoomLock: true,
          filterMode: 'none',
          rangeMode: ['value', 'value'],
          brushSelect: false
        }
      ],
      series: series
    }
  }

  // ????????????????????????level
  calculateLevelByType(data: Array<GantterData>) {
    for (let i = 0; i < data.length; i++) {
      let total = 1
      data[i].data[0].level = 1
      let existRange = [data[i].data[0].name]
      for (let j = 1; j < data[i].data.length; j++) {
        let isExist = existRange.indexOf(data[i].data[j].name)
        if (isExist !== -1) {
          data[i].data[j].level = isExist + 1
        } else {
          total += 1
          data[i].data[j].level = total
          existRange.push(data[i].data[j].name)
        }
      }
      data[i].total = total
    }
    return data
  }

}
