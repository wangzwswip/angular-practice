import { Component, OnInit } from '@angular/core';
import { ColorService, TwoBar, target } from '@core';

import * as moment from 'moment';

@Component({
  selector: 'app-bar-two',
  templateUrl: './bar-two.component.html',
  styleUrls: ['./bar-two.component.scss']
})
export class BarTwoComponent implements OnInit {

  options: any
  colors: target = {}
  defaultColors
  data: Array<TwoBar> = []
  showLabel: boolean = false
  isStack: boolean = true
  timeAxis: boolean = true
  labelArr: Array<string> = []
  xLabelType: string = 'month'
  grid: Array<number> = [60, 100, 60, 90]
  axisLocation: string = '53%'
  xNamePadding: Array<number> = [0, 0, 0, 0]
  yAxisNameOne: string = '流入'
  yAxisNameTwo: string = '流出'
  constructor(private defaultColor:ColorService) {
    this.defaultColors = this.defaultColor.colors()
    this.data = [
      {
        name: 'A',
        axisIndex: 'top',
        data: [
          ['2021-01-01', 123],
          ['2021-02-01', 43],
          ['2021-03-01', 24],
          ['2021-04-01', 56],
          ['2021-05-01', 76],
          ['2021-06-01', 86],
          ['2021-07-01', 47],
          ['2021-08-01', 57],
          ['2021-09-01', 37],
          ['2021-10-01', 87],
          ['2021-11-01', 34],
          ['2021-12-01', 67],
        ]
      },
      {
        name: 'A',
        axisIndex: 'bottom',
        data: [
          ['2021-01-01', 123],
          ['2021-02-01', 43],
          ['2021-03-01', 24],
          ['2021-04-01', 56],
          ['2021-05-01', 76],
          ['2021-06-01', 86],
          ['2021-07-01', 47],
          ['2021-08-01', 57],
          ['2021-09-01', 37],
          ['2021-10-01', 87],
          ['2021-11-01', 34],
          ['2021-12-01', 67],
        ]
      },
      {
        name: 'B',
        axisIndex: 'top',
        data: [
          ['2021-01-01', 123],
          ['2021-02-01', 43],
          ['2021-03-01', 24],
          ['2021-04-01', 56],
          ['2021-05-01', 76],
          ['2021-06-01', 86],
          ['2021-07-01', 47],
          ['2021-08-01', 57],
          ['2021-09-01', 37],
          ['2021-10-01', 87],
          ['2021-11-01', 34],
          ['2021-12-01', 67],
        ]
      },
      {
        name: 'B',
        axisIndex: 'bottom',
        data: [
          ['2021-01-01', 123],
          ['2021-02-01', 43],
          ['2021-03-01', 24],
          ['2021-04-01', 56],
          ['2021-05-01', 76],
          ['2021-06-01', 86],
          ['2021-07-01', 47],
          ['2021-08-01', 57],
          ['2021-09-01', 37],
          ['2021-10-01', 87],
          ['2021-11-01', 34],
          ['2021-12-01', 67],
        ]
      },
      {
        name: 'C',
        axisIndex: 'top',
        data: [
          ['2021-01-01', 123],
          ['2021-02-01', 43],
          ['2021-03-01', 24],
          ['2021-04-01', 56],
          ['2021-05-01', 76],
          ['2021-06-01', 86],
          ['2021-07-01', 47],
          ['2021-08-01', 57],
          ['2021-09-01', 37],
          ['2021-10-01', 87],
          ['2021-11-01', 34],
          ['2021-12-01', 67],
        ]
      },
      {
        name: 'C',
        axisIndex: 'bottom',
        data: [
          ['2021-01-01', 123],
          ['2021-02-01', 43],
          ['2021-03-01', 24],
          ['2021-04-01', 56],
          ['2021-05-01', 76],
          ['2021-06-01', 86],
          ['2021-07-01', 47],
          ['2021-08-01', 57],
          ['2021-09-01', 37],
          ['2021-10-01', 87],
          ['2021-11-01', 34],
          ['2021-12-01', 67],
        ]
      },
      {
        name: 'D',
        axisIndex: 'top',
        data: [
          ['2021-01-01', 123],
          ['2021-02-01', 43],
          ['2021-03-01', 24],
          ['2021-04-01', 56],
          ['2021-05-01', 76],
          ['2021-06-01', 86],
          ['2021-07-01', 47],
          ['2021-08-01', 57],
          ['2021-09-01', 37],
          ['2021-10-01', 87],
          ['2021-11-01', 34],
          ['2021-12-01', 67],
        ]
      },
      {
        name: 'D',
        axisIndex: 'bottom',
        data: [
          ['2021-01-01', 123],
          ['2021-02-01', 43],
          ['2021-03-01', 24],
          ['2021-04-01', 56],
          ['2021-05-01', 76],
          ['2021-06-01', 86],
          ['2021-07-01', 47],
          ['2021-08-01', 57],
          ['2021-09-01', 37],
          ['2021-10-01', 87],
          ['2021-11-01', 34],
          ['2021-12-01', 67],
        ]
      }
      
    ]
  }

  ngOnInit(): void {
    
    this.options = this.setOptions()
  }

  processSeries(): Array<object> {
    let series: Array<object> = []
    let isCusColor = Object.keys(this.colors).length > 0
    this.data.forEach((item:TwoBar, index) => {
      let color = isCusColor ? this.colors[item.name] : this.defaultColors[index]
      let axisIndex = item.axisIndex === 'top' ? 0 : 2
      series.push(this.barSeries(item.name, color, item.data, axisIndex))
    })
    return series
  }

  barSeries (name: string, color: string, data: Array<Array<string | number>>, axisIndex: number): object {
    let barColor = color
    let labelShow = this.showLabel
    if (this.isStack) {
      labelShow = name === 'total'
      if (name === 'total') {
        barColor = 'transparent'
      }
    }
    let target = {
      name: name,
      type: "bar",
      barWidth: 20,
      xAxisIndex: axisIndex,
      yAxisIndex: axisIndex,
      barGap: this.isStack && name === 'total' ? '-100%' : '30%',
      itemStyle: {
        color: barColor,
      },
      label: {
        show: labelShow,
        fontSize: 12,
        color: '#000',
        position: 'top',
        formatter: (params: any) => {
          return this.labelArr[params.dataIndex]
        },
      },
      stack: '',
      tooltip: {show: true},
      data
    }
    if (this.isStack && name !== "total") {
      target.stack = "total" + axisIndex
    }
    if (this.isStack && name === "total") {
      target.tooltip.show = false
    }
    return target
  }

  setOptions () {
    let series = this.processSeries()
    let that = this
    let xFormatter = function(val: string) {
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
            timer = year + "年" + "1月"
          } else {
            timer = month + 1 + "月"
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

    return {
      tooltip: {
        trigger: "axis",
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        textStyle: {
          color: '#000'
        },
        axisPointer: {
          lineStyle: {
            color: "rgb(0, 0, 255)"
          }
        }
      },
      legend: {
        type: 'scroll',
        show: true,
        data: this.data.forEach(item => item.name),
        top: 5,
        right: 20,
        width: '80%',
        textStyle: {
          color: '#000'
        }
      },
      grid: [
        {
          show: false,
          top: this.grid[0],
          right: this.grid[1],
          left: this.grid[3],
          bottom: this.axisLocation,
          containLabel: false,
        },
        {
          show: false,
          top: '48%',
          bottom: '48%',
          right: this.grid[1],
          left: this.grid[3],
          width: '100%',
          containLabel: true,
        },
        {
          show: false,
          right: this.grid[1],
          bottom: this.grid[2],
          left: this.grid[3],
          top: this.axisLocation,
          containLabel: false,
        }
      ],
      xAxis: [
        {
          name: '时间',
          position: 'bottom',
          nameTextStyle: {
            color: '#000',
            fontSize: 14,
            padding: this.xNamePadding,
            verticalAlign: 'top',
          },
          nameGap: 10,
          type: this.timeAxis ? 'time' : 'category',
          gridIndex: 0,
          axisLabel: {
            show: true,
            color: '#000',
            margin: 15,
            formatter: xFormatter,
          },
          axisLine: {
            lineStyle: {
              // color: 'gray'
            }
          }
        },
        {
          name: '2',
          position: 'top',
          nameTextStyle: {
            color: '#000',
            fontSize: 14,
            padding: this.xNamePadding,
            verticalAlign: 'top',
          },
          nameGap: 10,
          type: this.timeAxis ? 'time' : 'category',
          gridIndex: 1,
          axisLabel: {
            show: true,
          },
          axisLine: {
            show:false,
            lineStyle: {
              // color: 'gray'
            }
          }
        },
        {
          name: '3',
          position: 'top',
          nameTextStyle: {
            color: '#000',
            fontSize: 14,
            padding: this.xNamePadding,
            verticalAlign: 'top',
          },
          nameGap: 10,
          type: this.timeAxis ? 'time' : 'category',
          gridIndex: 2,
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show:false,
            lineStyle: {
              // color: 'gray'
            }
          }
        }
      ],
      yAxis: [
        {
          girdIndex: 0,
          name: this.yAxisNameOne,
          max: (value: any) => {
            return Math.floor(value.max * 1.1 * 10) / 10
          },
          nameTextStyle: {
            color: '#000',
            align: 'left'
          },
          axisLabel: {
            margin: 20,
            align: 'center',
            color: '#000',
            formatter: (value: number) => {
              if (value === 0) {
                return value
              } else {
                let res = value.toString()
                let numN1 = 0; // 科学计数法E前面的数值
                let numN2 = 0 // 科学计数法E后面的数值，不包括符号位
                let num1 = 0 // 整数位数
                let num2 = 0 // 小数位数
                let t1 = 1
                for (let k = 0; k < res.length; k++) {
                  if (res[k] === '.') {
                    t1 = 0
                  }
                  if (t1) {
                    num1++
                  } else {
                    num2++
                  }
                }
                if (Math.abs(value) < 1) {
                  // 从小数点后一位开始计算
                  numN2++
                  for (let i = 2; i < res.length; i++) {
                    if (res[i] === '0') {
                      numN2++
                    } else {
                      break
                    }
                  }
                  let v = value
                  v = v * Math.pow(10, numN2)
                  let resv = v.toFixed(0)
                  return resv + 'E-' + numN2
                } else {
                  numN1 = num1 - 1
                  let v = value / Math.pow(10, numN1)
                  return v.toFixed(0) + 'E+' + numN1
                }

              }
            }
          },
          axisLine: {
            show: true,
          },
          axisTick: {
            show: true
          },
          splitLine: {
            show: true
          }
        },
        {
          gridIndex: 1,
          show: false
        },
        {
          name: this.yAxisNameTwo,
          gridIndex: 2,
          inverse: true,
          max: (value: any) => {
            return Math.floor(value.max * 1.1 * 10) / 10
          },
          nameTextStyle: {
            color: '#000',
            align: 'left'
          },
          axisLabel: {
            margin: 20,
            align: 'center',
            color: '#000',
            formatter: (value: number) => {
              if (value === 0) {
                return value
              } else {
                let res = value.toString()
                let numN1 = 0; // 科学计数法E前面的数值
                let numN2 = 0 // 科学计数法E后面的数值，不包括符号位
                let num1 = 0 // 整数位数
                let num2 = 0 // 小数位数
                let t1 = 1
                for (let k = 0; k < res.length; k++) {
                  if (res[k] === '.') {
                    t1 = 0
                  }
                  if (t1) {
                    num1++
                  } else {
                    num2++
                  }
                }
                if (Math.abs(value) < 1) {
                  // 从小数点后一位开始计算
                  numN2++
                  for (let i = 2; i < res.length; i++) {
                    if (res[i] === '0') {
                      numN2++
                    } else {
                      break
                    }
                  }
                  let v = value
                  v = v * Math.pow(10, numN2)
                  let resv = v.toFixed(0)
                  return resv + 'E-' + numN2
                } else {
                  numN1 = num1 - 1
                  let v = value / Math.pow(10, numN1)
                  return v.toFixed(0) + 'E+' + numN1
                }

              }
            }
          },
          axisLine: {
            show: true,
          },
          axisTick: {
            show: true
          },
          splitLine: {
            show: true
          }
        }
      ],
      series
    }
  }

}
